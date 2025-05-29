import { Header } from "~/components";
import type { Route } from "../../+types/root";
import { Column } from "primereact/column";
import { AvatarWithNameComponent } from "~/components/avatar_with_name";
import { DataTable } from "primereact/datatable";
import { useTeamCompleteInformation } from "~/hooks/react_query/useTeamStatistics";
import type { Player } from "~/api/interfaces/team_squad";
import { useLeagueSelectedStore } from "~/store/league_selected_store";
import { Skeleton } from "primereact/skeleton";
import type { LeagueIds } from "~/index";
import { DataTableSkeleton } from "~/components/skeletons/data_table";
import { TeamCardSkeleton } from "~/components/skeletons/team_card";
import { StatsCardSkeleton } from "~/components/skeletons/stats_card";
import { StadiumCardSkeleton } from "~/components/skeletons/stadium_card";

const ClubDetailScreen = ({ params }: Route.ComponentProps) => {
  const { league_id, club_id } = params;

  const { data, isLoading } = useTeamCompleteInformation({
    league_id: +(league_id ?? 39) as LeagueIds, // Default to Premier League if no league_id is provided
    team_id: Number(club_id),
  });

  if (isLoading) {
    return (
      <main className="dashboard wrapper pb-0 h-full grid md:grid-cols-2 gap-5 content-start">
        <TeamCardSkeleton />
        <StatsCardSkeleton />
        <StadiumCardSkeleton />
        <div className="col-span-2">
          <DataTableSkeleton
            columns={[
              { name: "Id", style: { width: "5%" } },
              { name: "Player", style: { width: "25%" } },
              { name: "Number", style: { width: "10%" } },
              { name: "Position", style: { width: "15%" } },
              { name: "Age", style: { width: "10%" } },
            ]}
          />
        </div>
      </main>
    );
  }

  if (!data) {
    return <div className="text-center">No data found</div>;
  }

  return (
    <main className="dashboard wrapper pb-0 h-full grid grid-cols-1 md:grid-cols-2 gap-5 content-start">
      <div className="gap-4 bg-white rounded-20 shadow-xl w-full p-4">
        <p className="text-lg font-semibold mb-2 text-gray-100 uppercase">
          Team
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="size-28 aspect-square">
            <img
              src={data.team.logo}
              alt="Club Photo"
              className="object-contain"
            />
          </div>
          <div className="grid w-full gap-7">
            <div>
              <Header title={data.team.name} subtitle="" />
              <div className="flex items-center gap-2">
                <p className="font-semibold text-lg">
                  League:{" "}
                  <span className="font-normal text-base">
                    {data.team.league}
                  </span>
                </p>
                <div className="w-8">
                  <img
                    src={data.team.league_icon}
                    alt="League icon"
                    className="object-contain drop-shadow-black/40 drop-shadow-sm"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <p className="font-semibold text-lg">
                  Country:{" "}
                  <span className="font-normal text-base">
                    {data.team.league_country}
                  </span>
                </p>
                <div className="w-8">
                  <img
                    src={data.team.league_country_flag}
                    alt="Country flag"
                    className="object-contain drop-shadow-black/40 drop-shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-start-1 gap-4 bg-white rounded-20 shadow-xl w-full p-4">
        <p className="text-lg font-semibold mb-2 text-gray-100 uppercase">
          Stats 2023
        </p>

        <div className="grid grid-cols-2 w-full gap-x-4">
          <div>
            <p className="font-semibold text-lg">
              Wins:{" "}
              <span className="font-normal text-base">
                {data.statistics.wins}
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">
              Loses:{" "}
              <span className="font-normal text-base">
                {data.statistics.loses}
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">
              Draw:{" "}
              <span className="font-normal text-base">
                {data.statistics.draws}
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">
              Goals:{" "}
              <span className="font-normal text-base">
                {data.statistics.goals}
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">
              Clean sheet:{" "}
              <span className="font-normal text-base">
                {data.statistics.clean_sheets}
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">
              Preferred Lineup:{" "}
              <span className="font-normal text-base">
                {data.statistics.prefered_formation}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="md:row-start-1 md:row-span-2 md:col-start-2 bg-white rounded-20 shadow-xl w-full p-4">
        <p className="text-lg font-semibold mb-2 text-gray-100 uppercase">
          Stadium
        </p>
        <div className="rounded-20 overflow-hidden h-[200px]">
          <img
            src={data.stadium.image}
            alt="Stadium"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="grid grid-cols-2 w-full gap-x-4 mt-4">
          <div>
            <p className="font-semibold text-lg">
              Name:{" "}
              <span className="font-normal text-base">{data.stadium.name}</span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">
              Address:{" "}
              <span className="font-normal text-base">
                {data.stadium.address}
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">
              City:{" "}
              <span className="font-normal text-base">{data.stadium.city}</span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">
              Capacity:{" "}
              <span className="font-normal text-base">
                {data.stadium.capacity} people
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">
              Surface:{" "}
              <span className="font-normal text-base">
                {data.stadium.surface}
              </span>
            </p>
          </div>
          {/* <div>
                        <p className='font-semibold text-lg'>
                            Preferred Lineup: <span className='font-normal text-base'>4-2-3-1</span>
                        </p>
                    </div> */}
        </div>
      </div>

      <div className="md:col-span-2">
        <DataTable<Player[]>
          value={data.squad}
          size={"normal"}
          tableStyle={{ minWidth: "60rem" }}
          scrollable
          className="custom-dataTable-header">
          <Column
            align={"center"}
            header="Id"
            body={(data, { rowIndex }) => <span>{rowIndex + 1}</span>}></Column>

          <Column
            header="Player"
            body={(data: Player) => {
              return (
                <AvatarWithNameComponent
                  name={data.name}
                  imageUrl={data.photo}
                />
              );
            }}></Column>
          <Column
            header="Number"
            body={(data: Player) => {
              return (
                <AvatarWithNameComponent
                  name={`N°${data.number}`}
                  imageUrl={"/assets/icons/t-shirt.svg"}
                />
              );
            }}></Column>
          <Column
            header="Position"
            body={(data: Player) => <span>{data.position}</span>}></Column>
          <Column align={"center"} field="age" header="Age"></Column>
        </DataTable>
      </div>
    </main>
  );
};

export default ClubDetailScreen;
