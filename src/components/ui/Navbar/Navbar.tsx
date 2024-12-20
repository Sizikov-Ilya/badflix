import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Typography,
  Link,
  ListItemIcon,
  Divider,
  Slide,
  useScrollTrigger,
  Stack,
} from "@mui/material";
import { Link as RouterLink } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext, useState } from "react";
import {
  iconComponents,
  IconNameType,
  MOVIE_LISTS,
  TOP_LISTS,
} from "../../../constants";
import Search from "../Search";
import { ColorModeContext } from "../../../context/ColorModeContext";
import { Brightness7 } from "@mui/icons-material";

const Icon: React.FC<{ iconName: IconNameType }> = ({ iconName }) => {
  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const { toggleColorMode } = useContext(ColorModeContext);

  const trigger = useScrollTrigger({
    target: window,
  });

  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              open={isOpen}
              onClose={handleDrawerToggle}
            >
              <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
                <List>
                  {TOP_LISTS.map((item) => (
                    <Link key={item.title} component={RouterLink} to={item.url}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <Icon iconName={item.icon} />
                          </ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
                <Divider />
                <List>
                  {MOVIE_LISTS.map((item) => (
                    <Link key={item.title} component={RouterLink} to={item.url}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <Icon iconName={item.icon} />
                          </ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Box>
            </Drawer>
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Typography
                component={RouterLink}
                to={"/"}
                sx={{ color: "white", textDecoration: "none" }}
                variant="h4"
              >
                badflixx
              </Typography>
              <Search />
              <IconButton
                sx={{
                  marginLeft: 2,
                  position: "relative",
                  width: 40,
                  "--IconButton-hoverBg": "transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
                color="inherit"
                onClick={toggleColorMode}
              >
                <Brightness7
                  sx={{ position: "absolute", right: "50%", top: "-25%" }}
                />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}
