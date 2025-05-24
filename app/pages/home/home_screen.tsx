import { Check, Minus, X } from 'lucide-react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Navigate, NavLink } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
import { Header, TournomentPills } from '~/components';
import { AvatarWithNameComponent } from '~/components/AvatarWithName';
import { Top3ViewComponent } from '~/components/top_3_component';
import { leaderboard } from '~/constants/leaderboard';
import type { Place } from '~/interfaces/leaderboard';
import { getOrdinalSuffix } from '~/lib/utils';
import { useLeagueSelectedStore } from '~/store/league_selected_store';

const RecentMatchesComponent = ({ matches }: { matches: Array<'W' | 'L' | 'D'> }) => {
    return (
        <>
            {matches.map((result) => {
                switch (result) {
                    case 'W':
                        return (
                            <div className='inline-flex items-center size-6  mr-1 rounded-full bg-green-600'>
                                <Check className='inline w-full text-white' size={'18'} />
                            </div>
                        );
                    case 'L':
                        return (
                            <div className='inline-flex items-center size-6  mr-1 rounded-full bg-red-600'>
                                <X className='inline w-full text-white' size={'18'} />
                            </div>
                        );
                    case 'D':
                        return (
                            <div className='inline-flex items-center size-6  mr-1 rounded-full bg-gray-600'>
                                <Minus className='inline w-full text-white' size={'18'} />
                            </div>
                        );
                }
            })}
        </>
    );
};

const Home = () => {
    const selectedLeagueStore = useLeagueSelectedStore((state) => state.league_id);

    const leaderboard_data = leaderboard[selectedLeagueStore];

    return (
        <main className='dashboard wrapper'>
            <Header title={`League Standings ⚽`} subtitle={`Check the latest rankings across multiple football leagues.`} />
            <TournomentPills />

            <Top3ViewComponent
                data={leaderboard_data.league.standings.slice(0, 3).map((team) => ({
                    position: team.rank as 1 | 2 | 3,
                    name: team.team.name,
                    image: team.team.logo,
                    badge_text: team.points + ' PTS',
                }))}
            />

            <div>
                <DataTable<Place[]>
                    value={leaderboard_data.league.standings}
                    size={'normal'}
                    tableStyle={{ minWidth: '60rem' }}
                    scrollable
                    className='custom-dataTable-header'>
                    <Column align={'center'} field='rank' header='Place' body={(data) => <span>{getOrdinalSuffix(data.rank)}</span>}></Column>
                    <Column
                        field='team'
                        header='Club'
                        body={(data) => {
                            return (
                                <NavLink to={`/club-detail/${data.team.id}`}>
                                    <AvatarWithNameComponent name={data.team.name} imageUrl={data.team.logo} />
                                </NavLink>
                            );
                        }}></Column>
                    <Column
                        field='points'
                        header='Points'
                        body={(data) => (
                            <span>
                                {data.points} <span className='font-semibold'>PTS</span>
                            </span>
                        )}></Column>
                    <Column align={'center'} field='all.played' header='Played'></Column>
                    <Column align={'center'} field='all.win' header='Won'></Column>
                    <Column align={'center'} field='all.draw' header='Draw'></Column>
                    <Column align={'center'} field='all.lose' header='Lost'></Column>
                    <Column
                        align={'center'}
                        field='form'
                        header='Recents'
                        className='whitespace-nowrap overflow-hidden overflow-ellipsis '
                        body={(data) => <RecentMatchesComponent matches={[...data.form]} />}></Column>
                </DataTable>
            </div>
        </main>
    );
};

export default Home;
