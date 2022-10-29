import { Group } from '@visx/group';
import { Pie } from '@visx/shape';
import { Text } from '@visx/text';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import attendance from '../../../../data/attendance';

// types
interface itemsInterface {
  label: string;
  porcentage: number;
  color: string;
  font_color: string;
}

// Initial data
const width = 260;
const half = width / 2;
// Total days attended
const totalDaysAttended = attendance.reduce(
  (acc, course) => acc + course.days_attended,
  0
);
// Total days class was there
const totalDays = attendance.reduce(
  (acc, course) => acc + course.days_total,
  0
);

const AttendancePie: FC = () => {
  // Initial data
  const [items, setItems] = useState<itemsInterface[]>([
    {
      label: 'Absent',
      porcentage: (100 * (totalDays - totalDaysAttended)) / totalDays,
      color: '#FFF',
      font_color: '#EC485B',
    },
  ]);
  const mount = useRef(true);

  const fetchData = (): itemsInterface[] => {
    const newPieValue: itemsInterface[] = items;
    attendance.forEach((item) => {
      newPieValue.push({
        label: item.course,
        porcentage: 100 * (item.days_attended / totalDays),
        color: item.color,
        font_color: '#fff',
      });
    });
    return newPieValue;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => fetchData(), []);

  useEffect(() => {
    if (mount.current) {
      setItems(data);
      mount.current = false;
    }
  }, [data]);

  return (
    <>
      <svg width={width} height={width} className="relative">
        <Group top={half} left={half}>
          <Pie
            data={items}
            pieValue={(data) => data.porcentage}
            outerRadius={half}
            innerRadius={half - 50}
            padAngle={0.01}
          >
            {/* Generate Pie segment/arc */}
            {(pie) => {
              return pie.arcs.map((arc, index) => {
                const [centroidX, centroidY] = pie.path.centroid(arc);
                return (
                  <g key={index}>
                    <path
                      d={pie.path(arc) as string}
                      fill={arc.data.color}
                    ></path>
                    {/* Pie segment/arc center text */}
                    <g>
                      <Text
                        textAnchor="middle"
                        x={centroidX}
                        y={centroidY}
                        fill={arc.data.font_color}
                        fontSize="16"
                      >
                        {`${arc.data.porcentage}%`}
                      </Text>
                    </g>
                  </g>
                );
              });
            }}
          </Pie>
        </Group>
      </svg>
      {/* Pie center text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
        {`${100 * (totalDaysAttended / totalDays)}%`}
      </div>
    </>
  );
};

export default AttendancePie;
