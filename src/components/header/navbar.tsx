'use client';

import AuthHeader from '@/components/header/auth-header';
import Link from 'next/link';
import Image from 'next/image';
import DarkmodeToggle from './darkmode-toggle';

const Navbar = () => {
  return (
    <nav className='py-4 shadow flex justify-center'>
      <div className='container max-w-6xl flex justify-between items-center'>
        <section>
          <Link href={'/'}>
            <Image
              src='/socialsparkz.svg'
              alt='Social Sparkz logo'
              height={150}
              width={150}
            />
          </Link>
        </section>
        <section className='flex items-center'>
          <AuthHeader />
          <DarkmodeToggle />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
