import { Link } from "react-scroll";
import { Typography } from "@mui/material";

const ButtonLink = ({ page, theme, handleCloseNavMenu }) => {
  return (
    <Link
      to={page ? page.toLowerCase().replace(" ", "-") : "home"}
      spy={true}
      smooth={true}
      offset={-70}
      duration={1500}
      onClick={handleCloseNavMenu}
      activeClass="active"
    >
      {page || (
        <Typography
          variant="h6"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: theme.palette.text.primary,
            textDecoration: "none",
          }}
        >
          SHOPPY AI
        </Typography>
      )}
    </Link>
  );
};

export default ButtonLink;
