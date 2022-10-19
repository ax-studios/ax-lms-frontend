import { NextPage } from 'next';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { IconWrapper, Tabs } from '../../../components/core';
import {
  AboutSection,
  Records,
} from '../../../components/pages/dashboard/Profile';
import { UserContext } from '../../../data/userData';
import EditIcon from '../../../icons/EditIcon';

const tabs = [
  {
    name: 'About',
    value: 'about',
  },
  {
    name: 'Records',
    value: 'records',
  },
];

const User: NextPage = () => {
  const userData = useContext(UserContext);
  const [selectedTab, setSelectedTab] = useState<'about' | 'records'>('about');
  return (
    <div className="container mx-auto overflow-hidden rounded-xl border-2 border-primary/40 pb-2 md:pb-10">
      <div className="relative h-32 w-full md:h-80">
        <Image
          src={userData.banner}
          alt="Banner"
          layout="fill"
          className="object-cover"
        />
        <button className="btn btn-primary btn-circle absolute top-2 right-2 aspect-square p-2">
          <EditIcon />
        </button>
      </div>
      <div className="relative px-2 md:px-10">
        <div className="-mt-10 flex flex-col items-center gap-2 md:-mt-16 md:flex-row md:gap-5">
          <div className="relative aspect-square h-20 md:h-56">
            <Image
              src={userData.profileURL}
              alt="profile"
              layout="fill"
              className="overflow-hidden rounded-full"
            />
          </div>
          <div className="flex w-full flex-col flex-wrap gap-2 md:flex-row md:gap-5 md:pt-16">
            <div className="mx-auto text-center md:mx-0 md:mr-auto md:text-left">
              <h1 className="text-3xl font-bold">{userData.name}</h1>
              <p className="text-lg font-semibold">{userData.tagline}</p>
            </div>
            <a
              href={userData.profileSpecialLink.url}
              className="btn btn-primary mx-auto max-w-max space-x-2 font-bold md:mx-0"
              target="_blank"
              rel="noreferrer"
            >
              <IconWrapper>
                <EditIcon />
              </IconWrapper>
              <span>{userData.profileSpecialLink.name}</span>
            </a>
          </div>
        </div>
        <div className="my-7">
          <Tabs tabs={tabs} value={selectedTab} setValue={setSelectedTab} />
        </div>
        {selectedTab === 'about' ? <AboutSection /> : <Records />}
      </div>
    </div>
  );
};

export default User;
