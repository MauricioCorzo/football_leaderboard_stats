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
import { ClubDetailInfoCards } from "~/components/club_detail_info_cards";

const ClubDetailScreen = ({ params }: Route.ComponentProps) => {
  const { league_id, club_id } = params;

  const { data, isLoading } = useTeamCompleteInformation({
    league_id: +(league_id ?? 39) as LeagueIds,
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
      <ClubDetailInfoCards data={data} />
      <div className="md:col-span-2">
        <DataTable<Player[]>
          value={data.squad}
          size={"normal"}
          tableStyle={{ minWidth: "60rem" }}
          scrollable
          paginator
          rows={5}
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
