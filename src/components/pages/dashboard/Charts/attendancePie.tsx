import { FC, useState, useEffect } from 'react';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { Text } from '@visx/text';
import attendance from '../../../../data/attendance';

interface itemsInterface {
  label: string;
  porcentage: number;
  color: string;
  font_color: string;
}

const AttendancePie: FC = () => {
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
  const [items, setItems] = useState<itemsInterface[]>([]);

  useEffect(() => {
    const pieItems: itemsInterface[] = [
      {
        label: 'Absent',
        porcentage: (100 * (totalDays - totalDaysAttended)) / totalDays,
        color: '#FFF',
        font_color: '#EC485B',
      },
    ];

    attendance.map((item) => {
      pieItems.push({
        label: item.course,
        porcentage: 100 * (item.days_attended / totalDays),
        color: item.color,
        font_color: '#fff',
      });
      return <></>;
    });

    setItems(pieItems);
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
          {(pie) => {
            return pie.arcs.map((arc, index) => {
              const [centroidX, centroidY] = pie.path.centroid(arc);
              return (
                <g key={index}>
                  <path
                    d={pie.path(arc) as string}
                    fill={arc.data.color}
                  ></path>
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
        <Text textAnchor="middle" fill="#fff" fontSize={30}>
          {`${100 * (totalDaysAttended / totalDays)}%`}
        </Text>
      </Group>
    </svg>
  );
};

export default AttendancePie;
