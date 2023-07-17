import React from "react";
import Box from "@mui/material/Box";
import Logo from "./Logo";
import ProfileMenu from "./ProfileMenu";
import LargeNavMenu from "./LargeNavMenu";
import SmallNavMenu from "./SmallNavMenu";

const pages = ["Sign In with Google", "Sign In"];

interface Display {
  user: boolean;
  xs: string;
  md: string;
  gap: string;
}
const NavContainer = ({ user, xs, md, gap }: Display) => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: xs, md: md },
          justifyContent: "space-between",
          alignItems: "center",
          gap: gap,
        }}
      >
        {user ? (
          <ProfileMenu />
        ) : xs === "flex" ? (
          <SmallNavMenu pages={pages} />
        ) : (
          <LargeNavMenu pages={pages} />
        )}
        <Logo xs={xs} md={md} />
      </Box>
    </>
  );
};

export default NavContainer;
