import * as actions from '@/actions';

const Navbar = () => {
  return (
    <nav className='flex justify-between p-4'>
      <section>Social Sparkz</section>
      <section>
        <form action={actions.signIn}>
          <button>Log in</button>
        </form>
      </section>
    </nav>
  );
};

export default Navbar;
