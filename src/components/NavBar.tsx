import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Logo from "./Logo";
import ProfileMenu from "./ProfileMenu";
import SmallNavMenu from "./SmallNavMenu";
import LargeNavMenu from "./LargeNavMenu";
import "@fontsource/playfair-display";

const pages = ["Sign In with Google", "Sign In"];

function NavBar() {
  const [user, setUser] = React.useState<Boolean>(false);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        my: "2rem",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for large devices */}
          <Logo xs="none" md="flex" />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {user ? <ProfileMenu /> : <SmallNavMenu pages={pages} />}
            {/* Logo for medium and small devices */}
            <Logo xs="flex" md="none" />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "4rem",
            }}
          >
            {user ? <ProfileMenu /> : <LargeNavMenu pages={pages} />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
