import Image from 'next/image';
import { FC, useContext } from 'react';
import { UserContext } from '../../../../../data/userData';
import FemaleAvatar from '../../../../../icons/illustrations/FemaleAvatar';
import MaleAvatar from '../../../../../icons/illustrations/MaleAvatar';

const Records: FC = () => {
  const userData = useContext(UserContext);

  const records = [
    {
      data: 'Registration ID',
      value: userData.enrollmentID,
    },
    {
      data: 'Application number',
      value: userData.applicationNo,
    },
    {
      data: 'Email',
      value: userData.email,
    },
    {
      data: 'Phone number',
      value: userData.phoneNo.country + userData.phoneNo.number,
    },
    {
      data: 'Programme',
      value: userData.branch,
    },
    {
      data: 'Department',
      value: userData.department,
    },
    {
      data: 'Batch Year',
      value: userData.batchYear,
    },
    {
      data: 'Current Year',
      value: Math.ceil(userData.currentSemister / 2),
    },
    {
      data: 'Current Term',
      value: userData.currentSemister,
    },
  ];

  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold">Official Records</h2>
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:gap-5 xl:gap-16 ">
        <div className="relative mt-8 aspect-square h-44 w-44 overflow-hidden rounded-full bg-base-content/10 lg:mt-16 lg:h-52 lg:w-52">
          {userData.officalPhotoURL === '' ? (
            userData.gender === 'female' ? (
              <FemaleAvatar />
            ) : (
              <MaleAvatar />
            )
          ) : (
            <Image src={userData.officalPhotoURL} alt="Banner" fill />
          )}
        </div>
        <div className="flex-1 rounded-lg border-2 border-base-300">
          {records.map((record) => (
            <div
              key={record.data}
              className="flex flex-col flex-wrap first:rounded-t-lg last:rounded-b-lg odd:bg-base-300 xl:flex-row"
            >
              <div className="w-full max-w-[14rem] p-2 text-lg font-bold">
                {record.data}
              </div>
              <div className="p-2 ">{record.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Records;
