"use client";
import { IconButton, Tooltip } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AppsIcon from "@mui/icons-material/Apps";
import MailIcon from "@mui/icons-material/Mail";

export function Menu() {
  const scrollToHome = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-0 sm:bottom-12 w-full sm:w-fit left-1/2 -translate-x-1/2 bg-accent rounded-t-xl sm:rounded-full py-3 px-6 flex items-center justify-around sm:justify-center gap-12 z-30">
      <Tooltip title="Home" placement="top" arrow>
        <IconButton
          className="group"
          onClick={() => scrollToHome("home")}
        >
          <HomeIcon className="text-textPrimary group-hover:text-secondary" />
        </IconButton>
      </Tooltip>
      <Tooltip title="About" placement="top" arrow>
        <IconButton
          className="group"
          onClick={() => scrollToHome("about")}
        >
          <PersonIcon className="text-textPrimary group-hover:text-secondary" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Projects" placement="top" arrow>
        <IconButton
          className="group"
          onClick={() => scrollToHome("projects")}
        >
          <AppsIcon className="text-textPrimary group-hover:text-secondary" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Contact" placement="top" arrow>
        <IconButton
          className="group"
          onClick={() => scrollToHome("contact")}
        >
          <MailIcon className="text-textPrimary group-hover:text-secondary" />
        </IconButton>
      </Tooltip>
    </div>
  );
}
