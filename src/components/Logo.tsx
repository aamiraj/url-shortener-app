import React from "react";
import Typography from "@mui/material/Typography";

interface Display {
  xs: string | undefined;
  md: string | undefined;
}
const Logo = ({ xs, md }: Display) => {
  return (
    <>
      <Typography
        variant="h4"
        noWrap
        component="a"
        href="/"
        color="secondary"
        sx={{
          mr: 2,
          display: { xs: xs, md: md },
          fontFamily: "playfair-display",
          fontWeight: 700,
          letterSpacing: ".3rem",
          textDecoration: "none",
        }}
      >
        URL
        <span style={{ color: "#92B4EC" }}>SHORTENER</span>
      </Typography>
    </>
  );
};

export default Logo;
