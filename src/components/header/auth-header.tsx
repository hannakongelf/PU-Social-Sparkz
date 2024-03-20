'use client';

import * as actions from '@/actions';
import { useSession } from 'next-auth/react';
import UserMenuDropdown from './user-menu-dropdown';
import Button from '@mui/material/Button';

const AuthHeader = () => {
  const session = useSession();

  if (session.status === 'loading') return null;
  else if (session.data?.user)
    return (
      <section className='flex gap-4 items-center'>
        <UserMenuDropdown />
      </section>
    );
  else
    return (
      <section className='mr-6'>
        <form action={actions.signIn}>
          <Button type='submit' size='small' variant='contained'>
            Sign in
          </Button>
        </form>
      </section>
    );
};

export default AuthHeader;
