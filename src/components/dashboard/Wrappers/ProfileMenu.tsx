import { UserContext } from '@/data/userData';
import ExpandIcon from '@/icons/Sidebar Icons/ExpandIcon';
import LogoutIcon from '@/icons/Sidebar Icons/LogoutIcon';
import { useSettings } from '@/lib/hooks/useSettings';
import { Button, ListItemIcon, Menu, MenuItem } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC, MouseEvent, useContext, useState } from 'react';

const ProfileMenu: FC = () => {
  const userData = useContext(UserContext);
  const { drawerCollapsed } = useSettings();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <div className="absolute bottom-0 left-0 w-full bg-base-300/30 backdrop-blur">
      <div
        className={`relative m-2 flex shrink-0 items-center justify-center gap-2 rounded-lg bg-base-300 py-2 text-lg transition-all duration-200 ${
          drawerCollapsed ? 'flex-col p-0' : 'px-2'
        }`}
      >
        <Link
          href={`/dashboard/user/${userData.enrollmentID}`}
          className="relative h-12 w-12 shrink-0 rounded-full transition-all duration-500"
        >
          <Image src={userData.profileURL} alt="Banner" fill />
        </Link>
        <div
          className={`flex origin-top-left flex-col transition-opacity delay-200 duration-500 ${
            drawerCollapsed
              ? 'h-0 w-0 scale-0 opacity-0'
              : 'scale-100 opacity-100 '
          }`}
        >
          <Link
            className="w-full max-w-[11rem] overflow-hidden text-ellipsis whitespace-nowrap font-bold transition-all duration-200 hover:text-primary"
            href={`/dashboard/user/${userData.enrollmentID}`}
          >
            {userData.name}
          </Link>
          <span className="text-sm text-base-content/70">
            {userData.enrollmentID}
          </span>
        </div>

        <Button
          id="basic-button"
          className="aspect-square h-10 !min-w-0 rounded-lg bg-primary !p-2"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          variant="contained"
        >
          <ExpandIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <span className="h-5 w-5">
                <LogoutIcon />
              </span>
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default ProfileMenu;
