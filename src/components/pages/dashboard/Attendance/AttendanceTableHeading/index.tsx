import { ChangeEvent, FC } from 'react';

interface Props {
  selectedRadio: 'p' | 'a' | 'e' | 'x' | null;
  location: 'head' | 'foot';
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AttendanceTableHeading: FC<Props> = ({
  selectedRadio,
  location,
  onChange,
}) => {
  return (
    <tr>
      <th className="!static">Sr.</th>
      <th>Name</th>
      <th>Attendance</th>
      <th>Last lecture attended</th>

      <th>
        <div className="flex items-center gap-2">
          Present
          <input
            type="radio"
            value="p"
            name={`radio-${location}`}
            className="radio radio-primary"
            checked={selectedRadio === 'p'}
            onChange={(e) => onChange(e)}
          />{' '}
        </div>
      </th>
      <th>
        <div className="flex items-center gap-2">
          Absent{' '}
          <input
            type="radio"
            value="a"
            name={`radio-${location}`}
            className="radio radio-secondary"
            checked={selectedRadio === 'a'}
            onChange={(e) => onChange(e)}
          />{' '}
        </div>
      </th>
      <th>
        <div className="flex items-center gap-2">
          Exam{' '}
          <input
            type="radio"
            value="e"
            name={`radio-${location}`}
            className="radio radio-accent"
            checked={selectedRadio === 'e'}
            onChange={(e) => onChange(e)}
          />{' '}
        </div>
      </th>
      <th>
        <div className="flex items-center gap-2">
          Activity
          <input
            type="radio"
            value="x"
            name={`radio-${location}`}
            className="radio"
            checked={selectedRadio === 'x'}
            onChange={(e) => onChange(e)}
          />{' '}
        </div>
      </th>
    </tr>
  );
};

export default AttendanceTableHeading;
