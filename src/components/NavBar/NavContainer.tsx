import React from "react";
import Box from "@mui/material/Box";
import Logo from "./Logo";
import ProfileMenu from "./ProfileMenu";
import LargeNavMenu from "./LargeNavMenu";
import SmallNavMenu from "./SmallNavMenu";

interface Display {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
  xs: string;
  md: string;
  gap: string;
}
const NavContainer = ({ user, setUser, xs, md, gap }: Display) => {
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
          <ProfileMenu setUser={setUser} />
        ) : xs === "flex" ? (
          <SmallNavMenu setUser={setUser} />
        ) : (
          <LargeNavMenu setUser={setUser} />
        )}
        <Logo xs={xs} md={md} />
      </Box>
    </>
  );
};

export default NavContainer;
