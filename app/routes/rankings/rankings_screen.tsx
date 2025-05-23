import { Header, TournomentPills } from '~/components';

const RankingsScreen = () => {
    return (
        <main className='dashboard wrapper'>
            <Header title={`Top Performers ⚡`} subtitle={`The best in goals, assists, minutes played, and more. Who's leading the race?`} />
            <TournomentPills />
        </main>
    );
};

export default RankingsScreen;
