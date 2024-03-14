'use client';

import { useSession } from 'next-auth/react';
import {
  Avatar,
  Box,
  Chip,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import * as actions from '@/actions';
import Image from 'next/image';
import Link from 'next/link';
import DarkmodeToggle from './darkmode-toggle';

const UserMenuDropdown = () => {
  const session = useSession();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu}>
                <Chip
                  avatar={
                    session.data?.user?.image ? (
                      <Avatar>
                        <Image
                          src={session.data.user.image}
                          fill
                          alt='profile image'
                        />
                      </Avatar>
                    ) : undefined
                  }
                  label={<label>{session.data?.user?.name}</label>}
                  variant='outlined'
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Link href={'/my-profile'}>My profile</Link>
              </MenuItem>
              <MenuItem>
                <Typography>
                  <DarkmodeToggle />
                </Typography>
              </MenuItem>
              <MenuItem>
                <form action={actions.signOut}>
                  <button type='submit'>Sign out</button>
                </form>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
};

export default UserMenuDropdown;
