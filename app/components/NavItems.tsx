import { Link, NavLink } from 'react-router';
import { sidebarItems } from '~/constants';
import { cn } from '~/lib/utils';

const user = {
    name: 'Mauricio',
    email: 'mauricio.corzo@yahoo.com',
    imageUrl: '/assets/images/user.jpg',
};

const NavItems = ({ closeNavbar }: { closeNavbar: () => void }) => {
    return (
        <section className='nav-items'>
            <Link to={'/'} className='link-logo'>
                <img src='/assets/icons/logo.svg' className='size-7' alt='' />
                <h1>StatBall</h1>

                <button className='ml-auto block lg:hidden cursor-pointer' onClick={closeNavbar}>
                    <img src='/assets/icons/arrow-back.svg' alt='Go back' />
                </button>
            </Link>
            <div className='container'>
                <nav>
                    <p className='opacity-80 text-xs'>MAIN MENU</p>
                    {sidebarItems.map((item) => (
                        <NavLink to={item.href} key={item.id}>
                            {({ isActive }) => (
                                <div
                                    className={cn('group nav-item', {
                                        'bg-primary-100 !text-white': isActive,
                                    })}>
                                    <img
                                        src={item.icon}
                                        alt={item.label}
                                        className={`group-hover:brightness-0 size-6 group-hover:invert ${
                                            isActive ? 'brightness-0 invert' : 'text-dark-200'
                                        }`}
                                    />
                                    {item.label}
                                </div>
                            )}
                        </NavLink>
                    ))}

                    <p className='opacity-80 text-xs uppercase'>Last Visited</p>
                </nav>

                <footer className='nav-footer mt-auto'>
                    <img className='object-cover object-top' src={user.imageUrl} alt={user.name} />
                    <article>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </article>
                </footer>
            </div>
        </section>
    );
};

export default NavItems;
