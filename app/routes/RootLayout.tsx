import { Outlet } from 'react-router';
import { MobileSidebar, NavItems } from '~/components';

const RootLayout = () => {
    return (
        <div className='flex flex-col lg:flex-row min-h-screen w-full'>
            <MobileSidebar />
            <aside className='w-full self-start max-w-[270px] hidden sticky top-0 lg:block bg-white'>
                <NavItems closeNavbar={() => {}} />
            </aside>
            <aside className='w-full h-full bg-light-200 pt-8 lg:pt-10 overflow-x-hidden'>
                <Outlet />
            </aside>
        </div>
    );
};

export default RootLayout;
