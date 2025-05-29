import { Header } from "./header.";
import type { TeamDetailData } from "~/hooks/react_query/useTeamStatistics";

type ClubDetailInfoCardsProps = {
  data: TeamDetailData;
};

export const ClubTeamCard = ({ data }: ClubDetailInfoCardsProps) => (
  <div className="gap-4 bg-white rounded-20 shadow-xl w-full p-4">
    <p className="text-lg font-semibold mb-2 text-gray-100 uppercase">Team</p>
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div className="size-28 aspect-square">
        <img src={data.team.logo} alt="Club Photo" className="object-contain" />
      </div>
      <div className="grid w-full gap-7">
        <div>
          <Header title={data.team.name} subtitle="" />
          <div className="flex items-center gap-2">
            <p className="font-semibold text-lg">
              League:{" "}
              <span className="font-normal text-base">{data.team.league}</span>
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
);

export const ClubStatsCard = ({ data }: ClubDetailInfoCardsProps) => (
  <div className="md:col-start-1 gap-4 bg-white rounded-20 shadow-xl w-full p-4">
    <p className="text-lg font-semibold mb-2 text-gray-100 uppercase">
      Stats 2023
    </p>
    <div className="grid grid-cols-2 w-full gap-x-4">
      <div>
        <p className="font-semibold text-lg">
          Wins:{" "}
          <span className="font-normal text-base">{data.statistics.wins}</span>
        </p>
      </div>
      <div>
        <p className="font-semibold text-lg">
          Loses:{" "}
          <span className="font-normal text-base">{data.statistics.loses}</span>
        </p>
      </div>
      <div>
        <p className="font-semibold text-lg">
          Draw:{" "}
          <span className="font-normal text-base">{data.statistics.draws}</span>
        </p>
      </div>
      <div>
        <p className="font-semibold text-lg">
          Goals:{" "}
          <span className="font-normal text-base">{data.statistics.goals}</span>
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
);

export const ClubStadiumCard = ({ data }: ClubDetailInfoCardsProps) => (
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
          <span className="font-normal text-base">{data.stadium.address}</span>
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
          <span className="font-normal text-base">{data.stadium.surface}</span>
        </p>
      </div>
    </div>
  </div>
);

export const ClubDetailInfoCards = ({ data }: ClubDetailInfoCardsProps) => (
  <>
    <ClubTeamCard data={data} />
    <ClubStatsCard data={data} />
    <ClubStadiumCard data={data} />
  </>
);
