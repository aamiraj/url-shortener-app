import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";

type AppProps = {
  value: any;
};
const ProfileMenu = ({ value }: AppProps) => {
  const { user, signOutFromApp }: any = value;
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOnClick = async () => {
    await signOutFromApp();
  };
  return (
    <>
      <Box sx={{ order: 2 }}>
        <Tooltip title={user?.email}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt={user?.email} src={user.photoURL} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseUserMenu();
              handleOnClick();
            }}
          >
            <Typography textAlign="center">Log out</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default ProfileMenu;
