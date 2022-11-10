import { Tabs } from '@/components/core';
import { AboutSection, Records } from '@/components/dashboard/Profile';
import { UserContext } from '@/data/userData';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { Button, IconButton } from '@mui/material';
import { NextPage } from 'next';
import Image from 'next/image';
import { useContext, useState } from 'react';
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
    <div className="container mx-auto p-4 xl:p-10">
      <div className="overflow-hidden rounded-xl border-2 border-primary/40">
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
        <div className="relative space-y-5 py-5 md:px-10">
          <div className="relative -mt-10 flex flex-col items-center gap-2 md:mt-0 md:flex-row md:items-start md:gap-5">
            <div className="relative aspect-square h-20 md:absolute md:top-1/2 md:h-56 md:-translate-y-2/3">
              <Image
                src={userData.profileURL}
                alt="profile"
                fill
                className="overflow-hidden rounded-full"
              />
            </div>
            <div className="flex w-full flex-col flex-wrap items-start gap-2 md:ml-60 md:flex-row md:gap-5 md:pt-0">
              <div className="mx-auto text-center md:mx-0 md:mr-auto md:text-left">
                <h1 className="text-3xl font-bold">{userData.name}</h1>
                <p className="text-lg font-semibold">{userData.tagline}</p>
              </div>
              <Button
                href={userData.profileSpecialLink.url}
                target="_blank"
                rel="noreferrer"
                startIcon={<InsertLinkIcon />}
                className="mx-auto bg-primary md:mx-0"
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
          <div className="">
            <Tabs tabs={tabs} value={selectedTab} setValue={setSelectedTab} />
          </div>
          {selectedTab === 'about' ? <AboutSection /> : <Records />}
        </div>
      </div>
    </div>
  );
};

export default User;
