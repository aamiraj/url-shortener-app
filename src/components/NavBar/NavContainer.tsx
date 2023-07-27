import React from 'react'
import Box from "@mui/material/Box";
import Logo from "./Logo";
import ProfileMenu from "./ProfileMenu";
import LargeNavMenu from "./LargeNavMenu";
import SmallNavMenu from "./SmallNavMenu";
import { UserContext } from "../../contexts/UserProvider";

type AppProps = {
  xs: string;
  md: string;
  gap: string;
};
const NavContainer = ({ xs, md, gap }: AppProps) => {
  const value = React.useContext(UserContext);
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
        {value?.user?.email ? (
          <ProfileMenu value={value} />
        ) : xs === "flex" ? (
          <SmallNavMenu value={value} />
        ) : (
          <LargeNavMenu />
        )}
        <Logo xs={xs} md={md} />
      </Box>
    </>
  );
};

export default NavContainer;
