import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  styled,
  Tooltip,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useContext, useState } from 'react';
import { useSidebarIcons } from '../../../../icons/Sidebar Icons';
import { width } from '../../../../lib/config';
import { SettingsContext } from '../../../../lib/context/settings';
import useSidebarMenu from '../../../../lib/hooks/useSidebarMenu';
import { Logo, Modal } from '../../../core';
import ProfileMenu from '../ProfileMenu';
import SettingModal from '../SettingsModal';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

const Sidebar: FC = () => {
  const router = useRouter();
  const sidebarOptions = useSidebarMenu();
  const sidebarIcons = useSidebarIcons();
  const { toggleDrawer, drawerCollapsed, toggleDrawerCollapsed } =
    useContext(SettingsContext);
  const { open, closed } = width.drawer;
  const [modalState, setModalState] = useState(false);
  const handleModalState = (): void => setModalState((p) => !p);

  return (
    <>
      <Drawer
        variant="permanent"
        open
        sx={{
          position: 'relative',
          // width: drawerCollapsed ? closed : open,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            overflowX: 'hidden',
            width: drawerCollapsed ? closed : open,
            boxSizing: 'border-box',
            transitionProperty: 'all',
          },
        }}
      >
        {/* Header Component */}
        <DrawerHeader>
          <Collapse orientation="horizontal" in={!drawerCollapsed}>
            <Link href="/dashboard/home">
              <Logo height={30} />
            </Link>
          </Collapse>
          <Paper variant="outlined" className="overflow-hidden">
            <IconButton
              className="rounded-none"
              onClick={toggleDrawerCollapsed}
            >
              {drawerCollapsed ? <AddIcon /> : <RemoveIcon />}
            </IconButton>
          </Paper>
        </DrawerHeader>
        <Divider />
        <MenuList sx={{ padding: '8px' }}>
          {sidebarOptions.map((option) => (
            <Tooltip
              key={option.name}
              title={option.name}
              placement="right"
              disableInteractive
            >
              <MenuItem
                onClick={() => {
                  void router.push(`/dashboard/${option.link}`);
                  toggleDrawer();
                }}
                sx={{
                  ...(router.pathname === `/dashboard/${option.link}`
                    ? {
                        '&, &:hover, &:focus': {
                          color: 'background.paper',
                          backgroundColor: 'primary.main',
                        },
                      }
                    : {
                        color: 'text.primary',
                        backgroundColor: 'transaprent',
                      }),
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  <span className={'w-6'}>{sidebarIcons[option.link]}</span>
                </ListItemIcon>
                <ListItemText
                  className="trnasition-opacity delay-100 duration-200"
                  sx={{ opacity: drawerCollapsed ? 0 : 1 }}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: '700',
                    },
                  }}
                >
                  {option.name}
                </ListItemText>
              </MenuItem>
            </Tooltip>
          ))}
        </MenuList>

        {/* Profile Menu */}
        <ProfileMenu settingModalToggle={handleModalState} />
      </Drawer>
      {/* Setting Modal */}
      <Modal
        id="setting-modal"
        modalState={modalState}
        handleModalSate={handleModalState}
      >
        <SettingModal />
      </Modal>
      {/* SIebar open Close Btn */}
    </>
  );
};

export default Sidebar;
