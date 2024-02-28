import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AiOutlineDashboard } from "react-icons/ai";
import { SlTag } from "react-icons/sl";
import { FaRegListAlt } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import Orders from "./Orders/Orders";
import Chip from "@mui/material/Chip";
import { IoMoonOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { ReactComponent as TranslateIcon } from "./assets/translate-icon.svg";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  background: "transparent",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [chips, setChips] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState("Inbox");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (text) => {
    setSelectedItem(text);
  };

  const handleDelete = (chipToDelete) => () => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "Dashboard":
        return (
          <React.Fragment>
            <Chip
              style={{ color: "blue" }}
              label="Dashboard"
              variant="outlined"
              onDelete={() => handleDelete("Dashboard")}
            />
            <Typography paragraph>Content for Dashboard page</Typography>
          </React.Fragment>
        );
      case "Inventory":
        return (
          <React.Fragment>
            <Chip
              style={{
                color: "blue",
              }}
              label="Inventory"
              variant="outlined"
              onDelete={() => handleDelete("Inventory")}
            />
            <Typography paragraph>Content for Inventory page</Typography>
          </React.Fragment>
        );
      case "Orders":
        return (
          <React.Fragment>
            <Chip
              style={{
                color: "blue",
              }}
              label="Orders"
              variant="outlined"
              onDelete={() => handleDelete("Orders")}
            />
            <Orders />
          </React.Fragment>
        );
      case "Shipping":
        return (
          <React.Fragment>
            <Chip
              style={{
                color: "blue",
              }}
              label="Shipping"
              variant="outlined"
              onDelete={() => handleDelete("Shipping")}
            />
            <Typography paragraph>Content for Shipping page</Typography>
          </React.Fragment>
        );
      case "Channel":
        return (
          <React.Fragment>
            <Chip
              style={{
                color: "blue",
              }}
              label="Channel"
              variant="outlined"
              onDelete={() => handleDelete("Channel")}
            />
            <Typography paragraph>Content for Channel page</Typography>
          </React.Fragment>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: "flex" }} style={{ position: "relative" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <IconButton
        style={{
          position: "absolute",
          top: "16px",
          right: "120px",
        }}
      >
        <IoMoonOutline />
      </IconButton>
      <IconButton style={{ position: "absolute", top: "16px", right: "80px" }}>
        <GoBell />
      </IconButton>
      <IconButton style={{ position: "absolute", top: "16px", right: "40px" }}>
        <TranslateIcon width="25px" height="25px" />
      </IconButton>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {
              text: "Dashboard",
              icon: <AiOutlineDashboard size={24} style={{ color: "black" }} />,
            },
            {
              text: "Inventory",
              icon: <SlTag size={24} style={{ color: "black" }} />,
            },
            {
              text: "Orders",
              icon: <FaRegListAlt size={24} style={{ color: "black" }} />,
            },
            {
              text: "Shipping",
              icon: (
                <MdOutlineLocalShipping size={24} style={{ color: "black" }} />
              ),
            },
            {
              text: "Channel",
              icon: <CiShare2 size={26} style={{ color: "black" }} />,
            },
          ].map((item, index) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => handleListItemClick(item.text)}
              selected={selectedItem === item.text}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {renderContent()}
      </Main>
    </Box>
  );
}
