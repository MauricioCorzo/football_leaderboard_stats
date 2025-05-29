import { Header, TournomentPills } from "~/components";
import {
  useFavouritesStore,
  type FavouriteTeam,
} from "~/store/favourites_store";

function TeamCard({ team }: { team: FavouriteTeam }) {
  const removeFavouriteTeam = useFavouritesStore(
    (state) => state.removeFavouriteTeam
  );
  return (
    <div className="w-full max-w-sm bg-white  rounded-2xl overflow-hidden shadow-xl">
      <div className="flex flex-col items-center py-10 px-5 bg-white">
        <div className="size-24 flex items-center justify-center">
          <img
            className="w-auto h-full object-contain"
            src={team.team_logo}
            alt="Bonnie image"
          />
        </div>
        <h5 className="my-1 text-xl font-medium text-dark-100">
          {team.team_name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 text-center text-pretty">
          {team.team_league_name}
        </span>
        <div className="flex mt-4 md:mt-6">
          <button
            onClick={() => removeFavouriteTeam(team.team_id)}
            className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-100 rounded-lg hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

const FavoriteTeamsScreen = () => {
  const favourites_teams = useFavouritesStore((state) => state.favourite_teams);

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Your Favorite Teams ⭐`}
        subtitle={`The teams you love the most.`}
      />
      <div className="grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {Object.values(favourites_teams).map((team) => (
          <TeamCard key={team.team_id} team={team} />
        ))}
      </div>
    </main>
  );
};

export default FavoriteTeamsScreen;
