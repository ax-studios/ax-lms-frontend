import { NextPage } from 'next';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { Link } from '../../../components/core';
import AttendeceTableHeading from '../../../components/pages/dashboard/Attendance/AttendanceTableHeading';
import Heading from '../../../components/pages/dashboard/Wrappers/Heading';
import students from '../../../data/students';
import FemaleAvatar from '../../../icons/illustrations/FemaleAvatar';
import MaleAvatar from '../../../icons/illustrations/MaleAvatar';

const ChangeAttendece: NextPage = () => {
  const [attendance, setAttendance] = useState(students);

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
    <div className="h-[calc(100vh-80px)] overflow-hidden lg:h-screen">
      <Heading title="Update Attendece" />

      <div className=" mb-2 flex h-[calc(100vh-88px-90px)] overflow-y-auto px-3 md:px-5  lg:h-[calc(100vh-88px)]">
        <table className="relative table w-full max-w-7xl border-l-2 border-r-2 border-base-300 ">
          <thead className="sticky top-0 z-50">
            <AttendeceTableHeading
              selectedRadio={
                attendance.every(
                  (attend) => attend.attendance === attendance[0].attendance
                )
                  ? attendance[0].attendance
                  : null
              }
              location="head"
              onChange={handleChangeGlobalAttendance}
            />
          </thead>
          <tbody className="">
            {attendance.map((student, i) => (
              <tr key={student.enrollNo}>
                <td className="font-black">{i + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-circle h-12 w-12 bg-base-content/30">
                        {student.profileURL !== '' ? (
                          <Image
                            src={student.profileURL}
                            layout="fill"
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
                </td>
                <td>
                  87.5 %
                  <br />
                  <span className="badge badge-ghost badge-sm">35 / 40</span>
                </td>
                <td>{new Date('10/10/2022').toISOString().substring(0, 10)}</td>
                <th>
                  <label
                    className={`btn btn-circle btn-xl ${
                      student.attendance === 'p'
                        ? 'outline outline-primary'
                        : ''
                    }`}
                    htmlFor={`student-${student.enrollNo}-P`}
                  >
                    P
                  </label>
                  <input
                    type="radio"
                    name={`student-${student.enrollNo}`}
                    id={`student-${student.enrollNo}-P`}
                    className="radio radio-secondary radio-mark"
                    onChange={() =>
                      handleChangeAttendance(student.enrollNo, 'p')
                    }
                  />
                </th>
                <th>
                  <label
                    className={`btn btn-circle btn-xl ${
                      student.attendance === 'a'
                        ? 'outline outline-secondary'
                        : ''
                    }`}
                    htmlFor={`student-${student.enrollNo}-A`}
                  >
                    A
                  </label>
                  <input
                    type="radio"
                    name={`student-${student.enrollNo}`}
                    id={`student-${student.enrollNo}-A`}
                    className="radio radio-secondary radio-mark"
                    onChange={() =>
                      handleChangeAttendance(student.enrollNo, 'a')
                    }
                  />
                </th>
                <th>
                  <label
                    className={`btn btn-circle btn-xl ${
                      student.attendance === 'e' ? 'outline outline-accent' : ''
                    }`}
                    htmlFor={`student-${student.enrollNo}-E`}
                  >
                    E
                  </label>
                  <input
                    type="radio"
                    name={`student-${student.enrollNo}`}
                    id={`student-${student.enrollNo}-E`}
                    className="radio radio-accent radio-mark "
                    onChange={() =>
                      handleChangeAttendance(student.enrollNo, 'e')
                    }
                  />
                </th>
                <th>
                  <label
                    className={`btn btn-circle btn-xl ${
                      student.attendance === 'x' ? 'outline' : ''
                    }`}
                    htmlFor={`student-${student.enrollNo}-X`}
                  >
                    X
                  </label>
                  <input
                    type="radio"
                    name={`student-${student.enrollNo}`}
                    id={`student-${student.enrollNo}-X`}
                    className="radio radio-mark "
                    onChange={() =>
                      handleChangeAttendance(student.enrollNo, 'x')
                    }
                  />
                </th>
              </tr>
            ))}
          </tbody>
          <tfoot className="sticky bottom-0">
            <AttendeceTableHeading
              selectedRadio={
                attendance.every(
                  (attend) => attend.attendance === attendance[0].attendance
                )
                  ? attendance[0].attendance
                  : null
              }
              location="foot"
              onChange={handleChangeGlobalAttendance}
            />
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ChangeAttendece;
