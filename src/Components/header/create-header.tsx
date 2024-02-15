'use client';

import Button from '../common/button';
import Link from 'next/link';
import * as actions from '@/actions';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

const CreateHeader = () => {
  const session = useSession();
  const pathname = usePathname();
  console.log(pathname);

  if (session.status === 'loading') return null;
  else if (pathname === '/create') return null;
  else if (session.data?.user)
    return (
      <section className='flex gap-4 items-center'>
        <Link href={'/create'} className={'ml-4'}>
          <Button type='submit' className='bg-purple-500'>
            Create new game
          </Button>
        </Link>
      </section>
    );
};

export default CreateHeader;
