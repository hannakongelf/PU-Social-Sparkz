import { AuthHeader, CreateHeader } from '@/components/header';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
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
          <CreateHeader />
        </section>
      </div>
    </nav>
  );
};
