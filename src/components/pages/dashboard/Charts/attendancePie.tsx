import { FC } from 'react';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { Text } from '@visx/text';
import attendance from '../../../../data/attendance';

interface itemsInterface {
  id: number;
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

  const pieItems: itemsInterface[] = [
    {
      id: 99,
      label: 'Absent',
      porcentage: (100 * (totalDays - totalDaysAttended)) / totalDays,
      color: '#FFF',
      font_color: '#EC485B',
    },
  ];

  attendance.map((item) => {
    console.log(item);
    pieItems.push({
      id: item.id,
      label: item.course,
      porcentage: 100 * (item.days_attended / totalDays),
      color: item.color,
      font_color: '#fff',
    });
    return <></>;
  });

  return (
    <svg width={width} height={width}>
      <Group top={half} left={half}>
        <Pie
          data={pieItems}
          pieValue={(data) => data.porcentage}
          outerRadius={half}
          innerRadius={half - 50}
          padAngle={0.01}
        >
          {(pie) => {
            return pie.arcs.map((arc) => {
              const [centroidX, centroidY] = pie.path.centroid(arc);
              return (
                <g key={arc.data.label}>
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
