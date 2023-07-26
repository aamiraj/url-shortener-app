import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { UserContext } from "../../contexts/UserProvider";
import { useNavigate } from "react-router-dom";

const SmallNavMenu = () => {
  const { signInWithGoogle }: any = React.useContext(UserContext);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOnClick = () => {
    navigate("/sign-in");
  };
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="primary"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          flexGrow: 1,
          display: { xs: "block", md: "none" },
        }}
      >
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography
            onClick={() => signInWithGoogle()}
            color="primary"
            textAlign="center"
          >
            Sign In With Google
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleOnClick();
            handleCloseNavMenu();
          }}
        >
          <Typography color="primary" textAlign="center">
            Sign In
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default SmallNavMenu;
