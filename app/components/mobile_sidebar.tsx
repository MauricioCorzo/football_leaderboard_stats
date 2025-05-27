import React, { useState } from "react";
import { Link } from "react-router";
import NavItems from "./nav_items";
import { cn } from "~/lib/utils";

const MobileSidebar = () => {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);
  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img src="/assets/icons/logo.svg" alt="Logo" className="size-7" />
          <h1>StatBall</h1>
        </Link>

        <button onClick={() => setOpenMobileSidebar(!openMobileSidebar)}>
          <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
        </button>
      </header>

      <div
        className={cn("fixed inset-0 bg-black/0 transition invisible", {
          "bg-black/25 visible": openMobileSidebar,
        })}
        onClick={() => setOpenMobileSidebar(!openMobileSidebar)}></div>
      <aside
        className={cn(
          "w-full max-w-[270px] bg-white fixed z-[100] inset-0 -translate-x-[110%] transition-transform duration-200 ease-in-out",
          {
            "translate-0": openMobileSidebar,
          }
        )}>
        <NavItems closeNavbar={() => setOpenMobileSidebar(false)} />
      </aside>
    </div>
  );
};

export default MobileSidebar;
