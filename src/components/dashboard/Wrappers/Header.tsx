import { UserContext } from '@/data/userData';
import SearchIcon from '@/icons/SearchIcon';
import {
  Avatar,
  Divider,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Toolbar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useContext } from 'react';

const Header: FC = () => {
  const userData = useContext(UserContext);
  const router = useRouter();
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: theme.spacing(2),
          height: '4.5rem',
          flexShrink: '0',
          position: 'relative',
        }}
        disableGutters
        id="mob-header"
        className="justify-center lg:justify-between"
      >
        <h1
          className={`text-3xl font-bold capitalize ${
            tablet
              ? 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
              : ''
          }`}
        >
          {router.pathname.split('/')[2]}
        </h1>
        <FormControl variant="filled" required className="w-full max-w-md">
          <InputLabel htmlFor="head-search">Search</InputLabel>
          <FilledInput
            id="head-search"
            name="search"
            onChange={() => {}}
            type="text"
            {...(tablet ? { disabled: true } : {})}
            sx={{ borderRadius: '999px' }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  LinkComponent={Link}
                  href={`/dashboard/user/${userData.enrollmentID}`}
                >
                  <Avatar
                    sx={{ bgcolor: 'primary' }}
                    alt={userData.name}
                    src={userData.profileURL}
                  />
                </IconButton>
              </InputAdornment>
            }
            startAdornment={
              <InputAdornment position="start">
                <span className="w-6">
                  <SearchIcon />
                </span>
              </InputAdornment>
            }
          />
        </FormControl>
      </Toolbar>
      <Divider />
    </>
  );
};

export default Header;
