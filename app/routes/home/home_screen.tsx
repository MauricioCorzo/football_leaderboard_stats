import { Header, TournomentPills } from '~/components';

const Home = () => {
    return (
        <main className='dashboard wrapper'>
            <Header title={`League Standings ⚽`} subtitle={`Check the latest rankings across multiple football leagues.`} />
            <TournomentPills />
        </main>
    );
};

export default Home;
