import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { blueGrey, deepPurple, pink } from '@mui/material/colors';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import AttendanceTableHeading from '../../../components/pages/dashboard/Attendance/AttendanceTableHeading';
import Heading from '../../../components/pages/dashboard/Wrappers/Heading';
import students from '../../../data/students';
import FemaleAvatar from '../../../icons/illustrations/FemaleAvatar';
import MaleAvatar from '../../../icons/illustrations/MaleAvatar';

const ChangeAttendece: NextPage = () => {
  const [attendance, setAttendance] = useState(students);
  const theme = useTheme();
  const handleChangeGlobalAttendance = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setAttendance((prev) =>
      prev.map((attend) => ({ ...attend, attendance: e.target.value as 'a' }))
    );
  };

  const handleChangeAttendance = (
    studentId: string,
    setTo: 'p' | 'a' | 'x' | 'e'
  ): void => {
    setAttendance((prev) =>
      prev.map((attend) => {
        if (attend.enrollNo === studentId) {
          return { ...attend, attendance: setTo };
        }
        return attend;
      })
    );
  };

  return (
    <div className="min-h-screen">
      <Heading title="Update Attendece" />
      <div className="overflow-y-auto px-3 md:px-5">
        <TableContainer
          sx={{
            maxWidth: '80rem',
            maxHeight: 'calc(100vh - 88px)',
          }}
        >
          <Table stickyHeader aria-label="sticky table" size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={4}>
                  Details
                </TableCell>
                <TableCell align="center" colSpan={4}>
                  Fill Attendance
                </TableCell>
              </TableRow>
              <AttendanceTableHeading
                selectedRadio={
                  attendance.every(
                    (attend) => attend.attendance === attendance[0].attendance
                  )
                    ? attendance[0].attendance
                    : null
                }
                onChange={handleChangeGlobalAttendance}
              />
            </TableHead>
            <TableBody>
              {attendance.map((student, i) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={student.enrollNo}
                >
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-circle relative h-12 w-12 bg-base-content/30">
                          {student.profileURL !== '' ? (
                            <Image
                              src={student.profileURL}
                              fill
                              alt={student.name}
                            />
                          ) : student.gender === 'female' ? (
                            <FemaleAvatar />
                          ) : (
                            <MaleAvatar />
                          )}
                        </div>
                      </div>
                      <div>
                        <Link
                          href={`/dashboard/user/${student.enrollNo}`}
                          className="font-bold hover:text-primary"
                        >
                          {student.name}
                        </Link>
                        <div className="text-sm opacity-50">
                          {student.enrollNo.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    87.5 %
                    <br />
                    <span className="badge badge-ghost badge-sm">35 / 40</span>
                  </TableCell>
                  <TableCell>
                    {new Date('10/10/2022').toISOString().substring(0, 10)}
                  </TableCell>
                  <TableCell>
                    <Avatar
                      sx={{
                        bgcolor: blueGrey[900],
                        outline:
                          student.attendance === 'p'
                            ? `2px solid ${theme.palette.primary.main}`
                            : '',
                      }}
                      onClick={() =>
                        handleChangeAttendance(student.enrollNo, 'p')
                      }
                    >
                      P
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Avatar
                      sx={{
                        bgcolor: blueGrey[900],
                        outline:
                          student.attendance === 'a'
                            ? `2px solid ${deepPurple[200]}`
                            : '',
                      }}
                      onClick={() =>
                        handleChangeAttendance(student.enrollNo, 'a')
                      }
                    >
                      A
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Avatar
                      sx={{
                        bgcolor: blueGrey[900],
                        outline:
                          student.attendance === 'e'
                            ? `2px solid ${pink[200]}`
                            : '',
                      }}
                      onClick={() =>
                        handleChangeAttendance(student.enrollNo, 'e')
                      }
                    >
                      E
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Avatar
                      sx={{
                        bgcolor: blueGrey[900],
                        outline:
                          student.attendance === 'x'
                            ? `2px solid ${pink[200]}`
                            : '',
                      }}
                      onClick={() =>
                        handleChangeAttendance(student.enrollNo, 'x')
                      }
                    >
                      X
                    </Avatar>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ChangeAttendece;
