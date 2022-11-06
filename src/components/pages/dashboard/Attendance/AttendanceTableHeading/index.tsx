import { Radio, TableCell, TableRow } from '@mui/material';
import { blueGrey, deepPurple, pink } from '@mui/material/colors';
import { ChangeEvent, FC } from 'react';

interface Props {
  selectedRadio: 'p' | 'a' | 'e' | 'x' | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AttendanceTableHeading: FC<Props> = ({ selectedRadio, onChange }) => {
  return (
    <TableRow>
      <TableCell>Sr.</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Attendance</TableCell>
      <TableCell>Last lecture attended</TableCell>

      <TableCell>
        <div className="flex items-center">
          <Radio
            value="p"
            checked={selectedRadio === 'p'}
            onChange={(e) => onChange(e)}
            name="radio-attendance"
            inputProps={{ 'aria-label': 'P' }}
            id="radio-p"
          />
          <label className="cursor-pointer select-none" htmlFor="radio-p">
            Present
          </label>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center">
          <Radio
            value="a"
            checked={selectedRadio === 'a'}
            onChange={(e) => onChange(e)}
            name="radio-attendance"
            inputProps={{ 'aria-label': 'A' }}
            id="radio-a"
            sx={{
              color: deepPurple[300],
              '&.Mui-checked': {
                color: deepPurple[200],
              },
            }}
          />
          <label className="cursor-pointer select-none" htmlFor="radio-a">
            Absent
          </label>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center">
          <Radio
            value="e"
            checked={selectedRadio === 'e'}
            onChange={(e) => onChange(e)}
            name="radio-attendance"
            inputProps={{ 'aria-label': 'E' }}
            id="radio-e"
            sx={{
              color: pink[400],
              '&.Mui-checked': {
                color: pink[300],
              },
            }}
          />
          <label className="cursor-pointer select-none" htmlFor="radio-e">
            Exam
          </label>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center">
          <Radio
            value="x"
            checked={selectedRadio === 'x'}
            onChange={(e) => onChange(e)}
            name="radio-attendance"
            inputProps={{ 'aria-label': 'X' }}
            id="radio-x"
            sx={{
              color: blueGrey[50],
              '&.Mui-checked': {
                color: blueGrey[50],
              },
            }}
          />
          <label className="cursor-pointer select-none" htmlFor="radio-x">
            Activity
          </label>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default AttendanceTableHeading;
