import * as actions from '@/actions';
import AuthHeader from '@/components/auth-header';

const Navbar = () => {
  return (
    <nav className='flex justify-between py-4 items-center'>
      <section>Social Sparkz</section>
      <AuthHeader />
    </nav>
  );
};

export default Navbar;
