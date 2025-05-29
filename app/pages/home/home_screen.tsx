import { FilterMatchMode } from "primereact/api";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable, type DataTableFilterMeta } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { NavLink } from "react-router";
import { Header, TournomentPills } from "~/components";
import { AvatarWithNameComponent } from "~/components/avatar_with_name";
import { Top3ViewComponent } from "~/components/top_3_component";
import { useLeaderboard } from "~/hooks/react_query/useLeaderboard";
import type { Place } from "~/api/interfaces/leaderboard";
import { getOrdinalSuffix, sortItems } from "~/lib/utils";
import { useLastVisitedStore } from "~/store/last_visited_store";
import { useLeagueSelectedStore } from "~/store/league_selected_store";
import { DataTableSkeleton } from "~/components/skeletons/data_table";
import { Top3Skeleton } from "~/components/skeletons/top_3";
import { RecentMatchesComponent } from "~/components/last_matches";
import { ErrorComponent } from "~/components/error_component";
import { TeamFavouriteToggle } from "~/components/team_favourite_toggle";

import { CascadeSelect } from "primereact/cascadeselect";

import { sortableColumns } from "~/constants";
import { X } from "lucide-react";

const Home = () => {
  const selectedLeagueStore = useLeagueSelectedStore(
    (state) => state.league_id
  );

  const { data, isLoading, error } = useLeaderboard({
    league_id: selectedLeagueStore,
  });

  const addTeamVisit = useLastVisitedStore((state) => state.addTeamVisit);

  const [filterValue, setFilterValue] = useState("");
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    "team.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });

  if (error) {
    return (
      <main className="dashboard wrapper">
        <Header
          title={`League Standings ⚽`}
          subtitle={`Check the latest rankings across multiple football leagues.`}
        />
        <TournomentPills />
        {/* <div className="w-full text-center">
          <p className="text-red-500">Error loading standings data.</p>
        </div> */}
        <ErrorComponent
          title={"Laderboard Error"}
          message={error.message || "Unable to load league standings."}
        />
      </main>
    );
  }

  const [page, setPage] = useState(0);
  const [selectValue, setSelectValue] = useState<{
    name?: "Place" | "Club";
    type?: "asc" | "desc";
  } | null>({});

  const sortedStandings = sortItems({
    arr: data?.standings || [],
    key: selectValue?.name,
    order: selectValue?.type || "asc",
  });

  return (
    <main className="dashboard wrapper">
      <Header
        title={`League Standings ⚽`}
        subtitle={`Check the latest rankings across multiple football leagues.`}
      />
      <TournomentPills />

      {isLoading ? (
        <div className=" w-full justify-center">
          <Top3Skeleton />
          <DataTableSkeleton
            columns={[
              { name: "Place", style: { width: "10%" } },
              { name: "Club", style: { width: "30%" } },
              { name: "Points", style: { width: "10%" } },
              { name: "Played", style: { width: "10%" } },
              { name: "Won", style: { width: "10%" } },
              { name: "Draw", style: { width: "10%" } },
              { name: "Lost", style: { width: "10%" } },
              { name: "Recents", style: { width: "20%" } },
            ]}
          />
        </div>
      ) : (
        <>
          <Top3ViewComponent
            data={data!.standings.slice(0, 3).map((team) => ({
              position: team.rank as 1 | 2 | 3,
              name: team.team.name,
              image: team.team.logo,
              badge_text: team.points + " PTS",
            }))}
          />

          <div>
            <DataTable<Place[]>
              header={() => (
                <div className="flex sm:items-center justify-between sm:flex-row flex-col gap-3">
                  <div className="flex justify-center items-center gap-2 ">
                    <CascadeSelect
                      placeholder="Sort by"
                      options={sortableColumns}
                      optionLabel="cname"
                      optionGroupLabel="name"
                      optionGroupChildren={["types"]}
                      pt={{
                        wrapper: {
                          className:
                            "[&_.p-cascadeselect-sublist-wrapper]:!left-0 [&_.p-cascadeselect-sublist-wrapper]:!top-[65px] sm:[&_.p-cascadeselect-sublist-wrapper]:!left-full sm:[&_.p-cascadeselect-sublist-wrapper]:!top-0",
                        },
                      }}
                      value={
                        selectValue?.name
                          ? `${selectValue.name} - ${selectValue.type}`
                          : null
                      }
                      onChange={(e) => {
                        const sortType = e.value.code.split("-")[1];

                        setSelectValue({
                          name: e.value.cname,
                          type: sortType,
                        });
                      }}
                      //quiero seleccionar un hijo de este elemento con tailwind
                      className="w-full sm:w-52 capitalize "
                    />
                    {selectValue?.name && (
                      <button
                        onClick={() => setSelectValue(null)}
                        className="hover:bg-gray-200 p-1 rounded-full cursor-pointer size-8 shrink-0">
                        <X />
                      </button>
                    )}
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <InputText
                      className="w-full md:w-72"
                      value={filterValue}
                      onChange={(e) => {
                        setFilterValue(e.target.value);
                        setFilters({
                          ...filters,
                          "team.name": {
                            value: e.target.value,
                            matchMode: FilterMatchMode.STARTS_WITH,
                          },
                        });
                      }}
                      placeholder="Club Search"
                    />
                    {filterValue && (
                      <button
                        onClick={() => {
                          setFilterValue("");
                          setFilters({
                            "team.name": {
                              value: null,
                              matchMode: FilterMatchMode.STARTS_WITH,
                            },
                          });
                        }}
                        className="hover:bg-gray-200 p-1 rounded-full cursor-pointer size-8 shrink-0">
                        <X />
                      </button>
                    )}
                  </div>
                </div>
              )}
              value={sortedStandings}
              key={
                selectValue?.name
                  ? selectValue.name + "-" + selectValue.type
                  : "default"
              }
              filters={filters}
              size={"normal"}
              tableStyle={{ minWidth: "60rem" }}
              scrollable
              paginator
              rows={5}
              first={page}
              onPage={(e) => setPage(e.first)}
              className="custom-dataTable-header">
              <Column
                align={"center"}
                className="!pl-3 !pr-0 w-[1%] whitespace-nowrap"
                headerClassName="!pl-3 !pr-0 w-[1%] whitespace-nowrap"
                header="Fav."
                body={(data: Place) => (
                  <TeamFavouriteToggle data={data} />
                )}></Column>
              <Column
                align={"center"}
                field="rank"
                header="Place"
                body={(data) => (
                  <span>{getOrdinalSuffix(data.rank)}</span>
                )}></Column>
              <Column
                field="team.name"
                header="Club"
                body={(data) => {
                  return (
                    <NavLink
                      to={`/league/${selectedLeagueStore}/club-detail/${data.team.id}`}
                      onClick={() => {
                        addTeamVisit({
                          team_id: data.team.id,
                          team_league_id: selectedLeagueStore,
                          team_name: data.team.name,
                          team_logo: data.team.logo,
                        });
                      }}>
                      <AvatarWithNameComponent
                        name={data.team.name}
                        imageUrl={data.team.logo}
                      />
                    </NavLink>
                  );
                }}></Column>
              <Column
                field="points"
                header="Points"
                body={(data) => (
                  <span>
                    {data.points} <span className="font-semibold">PTS</span>
                  </span>
                )}></Column>
              <Column
                align={"center"}
                field="all.played"
                header="Played"></Column>
              <Column align={"center"} field="all.win" header="Won"></Column>
              <Column align={"center"} field="all.draw" header="Draw"></Column>
              <Column align={"center"} field="all.lose" header="Lost"></Column>
              <Column
                align={"center"}
                field="form"
                header="Recents"
                className="whitespace-nowrap overflow-hidden overflow-ellipsis "
                body={(data) => (
                  <RecentMatchesComponent matches={[...data.form]} />
                )}></Column>
            </DataTable>
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
