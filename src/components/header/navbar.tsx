import * as actions from '@/actions';
import AuthHeader from '@/components/header/auth-header';
import { ClassNames } from '@emotion/react';
import Link from 'next/link';
import CreateHeader from '@/components/header/create-header';

const Navbar = () => {
  return (
    <nav className='flex justify-between py-4 items-center'>
      <section>
        <Link href={'/'}>
          Social <span className={'text-yellow-400'}>Sparkz</span>
        </Link>
      </section>
      <section className='flex items-center'>
        <AuthHeader />
        <CreateHeader />
      </section>
    </nav>
  );
};

export default Navbar;
