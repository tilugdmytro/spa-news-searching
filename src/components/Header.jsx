import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AdbIcon from "@mui/icons-material/Adb";

function Header() {
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        </IconButton>
        <Typography>Search for news</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
