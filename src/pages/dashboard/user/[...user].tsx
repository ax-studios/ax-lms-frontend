import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { Button, IconButton } from '@mui/material';
import { NextPage } from 'next';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { Tabs } from '../../../components/core';
import {
  AboutSection,
  Records,
} from '../../../components/pages/dashboard/Profile';
import { UserContext } from '../../../data/userData';
const tabs = [
  {
    name: 'About',
    value: 'about',
  },
  {
    name: 'Records',
    value: 'records',
  },
] as const;

type tabsValue = typeof tabs[number]['value'];

const User: NextPage = () => {
  const userData = useContext(UserContext);
  const [selectedTab, setSelectedTab] = useState<tabsValue>('about');
  return (
    <div className="container mx-auto mt-7 overflow-hidden rounded-xl border-2  border-primary/40 pb-2 md:pb-10">
      <div className="relative h-32 w-full md:h-80">
        <Image
          src={userData.banner}
          alt="Banner"
          fill
          className="object-cover"
        />
        <IconButton color="primary" className="!absolute top-5 right-5">
          <EditOutlinedIcon />
        </IconButton>
      </div>
      <div className="relative px-2 md:px-10">
        <div className="-mt-10 flex flex-col items-center gap-2 md:-mt-16 md:flex-row md:gap-5">
          <div className="relative aspect-square h-20 md:h-56">
            <Image
              src={userData.profileURL}
              alt="profile"
              fill
              className="overflow-hidden rounded-full"
            />
          </div>
          <div className="flex w-full flex-col flex-wrap items-start gap-2 md:flex-row md:gap-5 md:pt-16">
            <div className="mx-auto text-center md:mx-0 md:mr-auto md:text-left">
              <h1 className="text-3xl font-bold">{userData.name}</h1>
              <p className="text-lg font-semibold">{userData.tagline}</p>
            </div>
            <Button
              href={userData.profileSpecialLink.url}
              target="_blank"
              rel="noreferrer"
              startIcon={<InsertLinkIcon />}
              className="bg-primary "
              variant="contained"
              sx={{
                paddingBlock: '13px',
                flexShrink: '0',
              }}
            >
              {userData.profileSpecialLink.name}
            </Button>
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
