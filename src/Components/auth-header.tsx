'use client';

import * as actions from '@/actions';
import { useSession } from 'next-auth/react';
import Button from './common/button';

const AuthHeader = () => {
  const session = useSession();

  if (session.status === 'loading') return null;
  else if (session.data?.user)
    return (
      <section className='flex gap-4 items-center'>
        <div>{session.data.user.name}</div>
        <form action={actions.signOut}>
          <Button type='submit'>Sign out</Button>
        </form>
      </section>
    );
  else
    return (
      <section>
        <form action={actions.signIn}>
          <Button type='submit'>Sign in</Button>
        </form>
      </section>
    );
};

export default AuthHeader;
