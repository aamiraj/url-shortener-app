import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Logo from "./Logo";
import ProfileMenu from "./ProfileMenu";
import LargeNavMenu from "./LargeNavMenu";
import SmallNavMenu from "./SmallNavMenu";
import { UserContext } from "../../contexts/UserProvider";

interface Display {
  xs: string;
  md: string;
  gap: string;
}
const NavContainer = ({xs, md, gap }: Display) => {
  const {user}:any = useContext(UserContext)
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
        {user?.email ? (
          <ProfileMenu />
        ) : xs === "flex" ? (
          <SmallNavMenu />
        ) : (
          <LargeNavMenu />
        )}
        <Logo xs={xs} md={md} />
      </Box>
    </>
  );
};

export default NavContainer;
