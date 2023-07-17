import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import "@fontsource/playfair-display";
import NavContainer from "./NavContainer";

function NavBar() {
  const [user, setUser] = React.useState<boolean>(false);

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
          {/* Nav for large devices */}
          <NavContainer
            user={user}
            setUser={setUser}
            xs="none"
            md="flex"
            gap="4rem"
          />

          {/* Nav for medium and small devices */}
          <NavContainer
            user={user}
            setUser={setUser}
            xs="flex"
            md="none"
            gap="2rem"
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
