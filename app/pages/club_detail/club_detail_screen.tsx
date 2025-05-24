import { Header } from '~/components';
import type { Route } from '../../+types/root';
import { Column } from 'primereact/column';
import { AvatarWithNameComponent } from '~/components/AvatarWithName';
import { team_squad, type TeamPlayerInfo } from '~/constants';
import { DataTable } from 'primereact/datatable';

const ClubDetailScreen = ({ params }: Route.ComponentProps) => {
    return (
        <main className='dashboard wrapper pb-0 h-full grid grid-cols-2 gap-5 content-start'>
            <div className='gap-4 bg-white rounded-20 shadow-xl w-full p-4'>
                <p className='text-lg font-semibold mb-2 text-gray-100 uppercase'>Team</p>
                <div className='flex items-center gap-4'>
                    <div className='size-28 aspect-square'>
                        <img src='https://media.api-sports.io/football/teams/50.png' alt='Club Photo' className='object-contain' />
                    </div>
                    <div className='grid w-full gap-7'>
                        <div>
                            <Header title='Manchester City' subtitle='' />
                            <div className='flex items-center gap-2'>
                                <p className='font-semibold text-lg'>
                                    League: <span className='font-normal text-base'>Premier League</span>
                                </p>
                                <div className='w-8'>
                                    <img
                                        src='https://media.api-sports.io/football/leagues/39.png'
                                        alt='Country flag'
                                        className='object-contain drop-shadow-black/40 drop-shadow-sm'
                                    />
                                </div>
                            </div>
                            <div className='flex items-center gap-2 mt-1'>
                                <p className='font-semibold text-lg'>
                                    Country: <span className='font-normal text-base'>England</span>
                                </p>
                                <div className='w-8'>
                                    <img
                                        src='https://media.api-sports.io/flags/gb-eng.svg'
                                        alt='Country flag'
                                        className='object-contain drop-shadow-black/40 drop-shadow-sm'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-start-1 gap-4 bg-white rounded-20 shadow-xl w-full p-4'>
                <p className='text-lg font-semibold mb-2 text-gray-100 uppercase'>Stats 2023</p>

                <div className='grid grid-cols-2 w-full gap-x-4'>
                    <div>
                        <p className='font-semibold text-lg'>
                            Wins: <span className='font-normal text-base'>23</span>
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-lg'>
                            Loses: <span className='font-normal text-base'>4</span>
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-lg'>
                            Draw: <span className='font-normal text-base'>8</span>
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-lg'>
                            Goals: <span className='font-normal text-base'>66</span>
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-lg'>
                            Clean sheet: <span className='font-normal text-base'>13</span>
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-lg'>
                            Preferred Lineup: <span className='font-normal text-base'>4-2-3-1</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='row-start-1 row-span-2 col-start-2 bg-white rounded-20 shadow-xl w-full p-4'>
                <p className='text-lg font-semibold mb-2 text-gray-100 uppercase'>Stadium</p>
                <div className='rounded-20 overflow-hidden h-[200px]'>
                    <img
                        src='https://media.api-sports.io/football/venues/556.png'
                        alt='Stadium'
                        className='h-full w-full object-cover object-center'
                    />
                </div>
                <div className='grid grid-cols-2 w-full gap-x-4 mt-4'>
                    <div>
                        <p className='font-semibold text-lg'>
                            Name: <span className='font-normal text-base'>Old Trafford</span>
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-lg'>
                            Address: <span className='font-normal text-base'>Sir Matt Busby Way</span>
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-lg'>
                            City: <span className='font-normal text-base'>Manchester</span>
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-lg'>
                            Capacity: <span className='font-normal text-base'>76212 people</span>
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-lg'>
                            Surface: <span className='font-normal text-base'>Grass</span>
                        </p>
                    </div>
                    {/* <div>
                        <p className='font-semibold text-lg'>
                            Preferred Lineup: <span className='font-normal text-base'>4-2-3-1</span>
                        </p>
                    </div> */}
                </div>
            </div>

            <div className='col-span-2'>
                <DataTable<TeamPlayerInfo[]>
                    value={team_squad}
                    size={'normal'}
                    tableStyle={{ minWidth: '60rem' }}
                    scrollable
                    className='custom-dataTable-header'>
                    <Column align={'center'} header='Id' body={(data, { rowIndex }) => <span>{rowIndex + 1}</span>}></Column>

                    <Column
                        header='Player'
                        body={(data: TeamPlayerInfo) => {
                            return <AvatarWithNameComponent name={data.name} imageUrl={data.photo} />;
                        }}></Column>
                    <Column
                        header='Number'
                        body={(data: TeamPlayerInfo) => {
                            return <AvatarWithNameComponent name={`N°${data.number}`} imageUrl={'/assets/icons/t-shirt.svg'} />;
                        }}></Column>
                    <Column header='Position' body={(data: TeamPlayerInfo) => <span>{data.position}</span>}></Column>
                    <Column align={'center'} field='age' header='Age'></Column>
                </DataTable>
            </div>
        </main>
    );
};

export default ClubDetailScreen;
