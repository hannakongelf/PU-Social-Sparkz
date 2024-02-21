import AuthHeader from '@/components/header/auth-header';
import Link from 'next/link';
import CreateHeader from '@/components/header/create-header';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='flex justify-between py-4 items-center'>
      <section>
        <Link href={'/'}>
          <Image src="/socialsparkz.svg" alt="Social Sparkz logo" height={150} width={150}/> 
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
