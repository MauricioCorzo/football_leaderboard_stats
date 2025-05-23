import { Check, Minus, X } from 'lucide-react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Header, TournomentPills } from '~/components';
import { teams } from '~/constants';
import { getOrdinalSuffix } from '~/lib/utils';

const AvatarPlusNameComponent = (data: { name: string; imageUrl: string }) => {
    return (
        <div className='flex items-center gap-2 '>
            <img alt={data.name} src={data.imageUrl} className='rounded-full aspect-square size-9 object-cover' />
            <span>{data.name}</span>
        </div>
    );
};

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
    return (
        <main className='dashboard wrapper'>
            <Header title={`League Standings ⚽`} subtitle={`Check the latest rankings across multiple football leagues.`} />
            <TournomentPills />

            <div className='h-[300px] w-full grid grid-cols-12 grid-rows-12 gap-x-2'>
                <div className='col-start-1 col-end-5 lg:col-start-4 lg:col-end-6 row-span-12 grid grid-rows-12 '>
                    <div className='justify-self-center self-end justify-items-center  row-start-1 row-span-6 text-center'>
                        <img src='https://media.api-sports.io/football/teams/42.png' alt='' className='size-18 lg:size-24 object-contain' />
                        <p className='text-xs lg:text-base'>Arsenal</p>
                    </div>
                    <div className='bg-[#B9B4C780] rounded-t-20 row-span-6 row-start-7 flex flex-col items-center justify-center'>
                        <p className='font-medium'>2nd</p>
                        <span className='inline-flex items-center rounded-md bg-gray-50/80 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset'>
                            89 PTS
                        </span>
                    </div>
                </div>
                <div className='col-start-5 col-end-9 lg:col-start-6 lg:col-end-8 row-span-12 grid grid-rows-12 '>
                    <div className='justify-self-center self-end justify-items-center row-start-1 row-span-5 text-center'>
                        <img src='https://media.api-sports.io/football/teams/50.png' alt='' className='size-18 lg:size-24 object-contain' />
                        <p className='text-xs lg:text-base'>Manchester City</p>
                    </div>
                    <div className='bg-[#FCEFCB] rounded-t-20 row-span-7 row-start-6 flex flex-col items-center justify-center'>
                        <p className='font-medium'>1st</p>

                        <span className='inline-flex items-center rounded-md bg-gray-50/80 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset'>
                            91 PTS
                        </span>
                    </div>
                </div>
                <div className='col-start-9 col-end-13 lg:col-start-8 lg:col-end-10 row-span-12 grid grid-rows-12 '>
                    <div className='justify-self-center self-end justify-items-center row-start-1 row-span-7 text-center'>
                        <img src='https://media.api-sports.io/football/teams/40.png' alt='' className='size-18 lg:size-24 object-contain' />
                        <p className='text-xs lg:text-base'>Liverpool</p>
                    </div>
                    <div className='bg-[#D9ABAB] rounded-t-20 row-span-5 row-start-8 flex flex-col items-center justify-center'>
                        <p className='font-medium'>3rd</p>
                        <span className='inline-flex items-center rounded-md bg-gray-50/80 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset'>
                            82 PTS
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <DataTable value={teams} size={'large'} tableStyle={{ minWidth: '60rem' }} scrollable>
                    <Column
                        className='!p-1  w-fit'
                        align={'center'}
                        field='rank'
                        header='Place'
                        body={(data) => <span>{getOrdinalSuffix(data.rank)}</span>}></Column>
                    <Column
                        className='!p-1  w-fit'
                        field='team'
                        header='Club'
                        body={(data) => {
                            console.log({ data });
                            return <AvatarPlusNameComponent name={data.team.name} imageUrl={data.team.logo} />;
                        }}></Column>
                    <Column
                        className='!p-1  w-fit'
                        field='points'
                        header='Points'
                        body={(data) => (
                            <span>
                                {data.points} <span className='font-semibold'>PTS</span>
                            </span>
                        )}></Column>
                    <Column className='!p-1  w-fit' align={'center'} field='all.played' header='Played'></Column>
                    <Column className='!p-1  w-fit' align={'center'} field='all.win' header='Won'></Column>
                    <Column className='!p-1  w-fit' align={'center'} field='all.draw' header='Draw'></Column>
                    <Column className='!p-1  w-fit' align={'center'} field='all.lose' header='Lost'></Column>
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
