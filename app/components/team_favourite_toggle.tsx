import React from "react";
import type { Place } from "~/api/interfaces/leaderboard";
import { useFavouritesStore } from "~/store/favourites_store";
import { useLeagueSelectedStore } from "~/store/league_selected_store";

export const TeamFavouriteToggle = ({ data }: { data: Place }) => {
  const favouritesStore = useFavouritesStore((state) => state);

  const selectedLeagueStore = useLeagueSelectedStore(
    (state) => state.league_id
  );

  return (
    <div>
      <button
        className="flex items-center justify-center w-full cursor-pointer"
        onClick={() => {
          if (favouritesStore.favourite_teams[data.team.id]) {
            console.log("aqui");
            favouritesStore.removeFavouriteTeam(data.team.id);
          } else {
            favouritesStore.addFavouriteTeam({
              team_id: data.team.id,
              team_name: data.team.name,
              team_logo: data.team.logo,
              team_league_id: selectedLeagueStore,
              team_league_name: data.group,
            });
          }
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="-1 0 21 21"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.57396 18.2578L9.3326 15.7735L14.0912 18.2578C14.7762 18.6154 15.5742 18.0332 15.4427 17.2718L14.5353 12.0184L18.38 8.29682C18.9372 7.75755 18.6317 6.81348 17.8643 6.70274L12.5456 5.93527L10.1683 1.15164C9.8251 0.461171 8.84011 0.461171 8.49695 1.15164L6.11957 5.93527L0.800908 6.70274C0.0334911 6.81348 -0.271953 7.75755 0.285159 8.29682L4.12988 12.0184L3.22255 17.2718C3.09104 18.0332 3.88899 18.6154 4.57396 18.2578Z"
            fill={
              favouritesStore.favourite_teams[data.team.id] ? "#ffb643" : ""
            }
          />
        </svg>
      </button>
    </div>
  );
};
