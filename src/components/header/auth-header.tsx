'use client';

import * as actions from '@/actions';
import { useSession } from 'next-auth/react';
import { Button, Link } from '@mui/material';
import UserMenuDropdown from './user-menu-dropdown';

const AuthHeader = () => {
  const session = useSession();

  if (session.status === 'loading') return null;
  else if (session.data?.user)
    return (
      <section className='flex gap-4 items-center'>
        <UserMenuDropdown/>
      </section>
    );
  else
    return (
      <section>
        <form action={actions.signIn}>
          <Button type='submit' size="small" variant='contained'>
            Sign in
          </Button>
        </form>
      </section>
    );
};

export default AuthHeader;
