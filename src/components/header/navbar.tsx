import AuthHeader from '@/components/header/auth-header';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-between py-4 items-center'>
      <section>
        <Link href={'/'}>
          Social <span className={'text-yellow-400'}>Sparkz</span>
        </Link>
      </section>
      <AuthHeader />
    </nav>
  );
};

export default Navbar;
