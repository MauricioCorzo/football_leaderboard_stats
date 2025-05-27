import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";
import { useLastVisitedStore } from "~/store/last_visited_store";
import { useLeagueSelectedStore } from "~/store/league_selected_store";

const user = {
  name: "Mauricio",
  email: "mauricio.corzo@yahoo.com",
  imageUrl: "/assets/images/user.jpg",
};

const NavItems = ({ closeNavbar }: { closeNavbar: () => void }) => {
  const lastTeamsVisited = useLastVisitedStore((state) => state.teams_visited);
  const updateLeagueSelected = useLeagueSelectedStore(
    (state) => state.updateLeagueSelected
  );

  return (
    <section className="nav-items">
      <Link to={"/"} className="link-logo">
        <img src="/assets/icons/logo.svg" className="size-7" alt="" />
        <h1>StatBall</h1>

        <button
          className="ml-auto block lg:hidden cursor-pointer"
          onClick={closeNavbar}>
          <img src="/assets/icons/arrow-back.svg" alt="Go back" />
        </button>
      </Link>
      <div className="container">
        <nav>
          <p className="opacity-80 text-xs">MAIN MENU</p>
          {sidebarItems.map((item) => (
            <NavLink to={item.href} key={item.id}>
              {({ isActive }) => (
                <div
                  className={cn("group nav-item", {
                    "bg-primary-100 !text-white": isActive,
                  })}>
                  <img
                    src={item.icon}
                    alt={item.label}
                    className={`group-hover:brightness-0 size-6 group-hover:invert ${
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    }`}
                  />
                  {item.label}
                </div>
              )}
            </NavLink>
          ))}

          <p className="opacity-80 text-xs uppercase">Last Visited</p>
          {lastTeamsVisited.length > 0 &&
            lastTeamsVisited.map((team) => (
              <NavLink
                to={`/league/${team?.team_league_id}/club-detail/${team?.team_id}`}
                key={team?.team_id}>
                {({ isActive }) => (
                  <div
                    className={cn("group nav-item ", {
                      "!bg-primary-100 hover:brightness-110 !text-white":
                        isActive,
                      "hover:!bg-zinc-200 hover:!text-black": !isActive,
                    })}>
                    <img
                      className="size-8"
                      src={team?.team_logo}
                      alt={team?.team_name}
                      //   className={`group-hover:brightness-0 size-6 group-hover:invert ${
                      //     isActive ? "brightness-0 invert" : "text-dark-200"
                      //   }`}
                    />
                    <span>{team?.team_name}</span>
                  </div>
                )}
              </NavLink>
            ))}
        </nav>

        <footer className="nav-footer mt-8 ">
          <img
            className="object-cover object-top"
            src={user.imageUrl}
            alt={user.name}
          />
          <article>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </article>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
