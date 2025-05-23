import { Header, TournomentPills } from '~/components';

const ChampionsScreen = () => {
    return (
        <main className='dashboard wrapper'>
            <Header
                title={`Champions History 🏆`}
                subtitle={` The teams that have claimed glory season after season. Explore the winners of each league through the years.`}
            />
            <TournomentPills />
        </main>
    );
};

export default ChampionsScreen;
