import { Group } from '@visx/group';
import { Pie } from '@visx/shape';
import { Text } from '@visx/text';
import { FC, useEffect, useState, useRef } from 'react';
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
const totalDaysAttended = attendance.reduce(
  (acc, course) => acc + course.days_attended,
  0
);
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

  const fectchData = (): itemsInterface[] => {
    const newPieValue: itemsInterface[] = [];
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

  useEffect(() => {
    if (mount.current) {
      const response = fectchData();
      setItems(response);
      mount.current = false;
    }
  }, []);

  return (
    <svg width={width} height={width}>
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
                      {`${String(arc.data.porcentage)}%`}
                    </Text>
                  </g>
                </g>
              );
            });
          }}
        </Pie>
        {/* Pie center text */}
        <Text textAnchor="middle" fill="#fff" fontSize={30}>
          {`${100 * (totalDaysAttended / totalDays)}%`}
        </Text>
      </Group>
    </svg>
  );
};

export default AttendancePie;
