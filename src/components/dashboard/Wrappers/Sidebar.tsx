import { width } from '@/lib/config';
import { useSettings } from '@/lib/hooks/useSettings';
import useSidebarMenu from '@/lib/hooks/useSidebarMenu';
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
  Toolbar,
  Tooltip,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useSidebarIcons } from '../../../icons/Sidebar Icons';
import { Logo } from '../../core';
import ProfileMenu from './ProfileMenu';

const Sidebar: FC = () => {
  const router = useRouter();
  const sidebarOptions = useSidebarMenu();
  const sidebarIcons = useSidebarIcons();
  const { drawerCollapsed, toggleDrawerCollapsed } = useSettings();
  const { open, closed } = width.drawer;
  const theme = useTheme();

  return (
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
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: theme.spacing(2),
          justifyContent: 'space-between',
          height: '4.5rem',
        }}
        disableGutters
      >
        <Collapse orientation="horizontal" in={!drawerCollapsed}>
          <Link href="/dashboard/home">
            <Logo height={30} />
          </Link>
        </Collapse>
        <Paper variant="outlined" className="overflow-hidden">
          <IconButton className="rounded-none" onClick={toggleDrawerCollapsed}>
            {drawerCollapsed ? <AddIcon /> : <RemoveIcon />}
          </IconButton>
        </Paper>
      </Toolbar>
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
      <ProfileMenu />
    </Drawer>
  );
};

export default Sidebar;
