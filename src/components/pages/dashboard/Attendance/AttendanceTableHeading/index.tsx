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
          <label
            className="cursor-pointer select-none"
            htmlFor={`radio-${location}-p`}
          >
            Present
          </label>
          <input
            type="radio"
            value="p"
            name={`radio-${location}`}
            id={`radio-${location}-p`}
            className="radio radio-primary"
            checked={selectedRadio === 'p'}
            onChange={(e) => onChange(e)}
          />{' '}
        </div>
      </th>
      <th>
        <div className="flex items-center gap-2">
          <label
            className="cursor-pointer select-none"
            htmlFor={`radio-${location}-a`}
          >
            Absent{' '}
          </label>
          <input
            type="radio"
            value="a"
            id={`radio-${location}-a`}
            name={`radio-${location}`}
            className="radio radio-secondary"
            checked={selectedRadio === 'a'}
            onChange={(e) => onChange(e)}
          />{' '}
        </div>
      </th>
      <th>
        <div className="flex items-center gap-2">
          <label
            className="cursor-pointer select-none"
            htmlFor={`radio-${location}-e`}
          >
            Exam{' '}
          </label>
          <input
            type="radio"
            value="e"
            id={`radio-${location}-e`}
            name={`radio-${location}`}
            className="radio radio-accent"
            checked={selectedRadio === 'e'}
            onChange={(e) => onChange(e)}
          />{' '}
        </div>
      </th>
      <th>
        <div className="flex items-center gap-2">
          <label
            className="cursor-pointer select-none"
            htmlFor={`radio-${location}-x`}
          >
            Activity
          </label>
          <input
            type="radio"
            value="x"
            id={`radio-${location}-x`}
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
