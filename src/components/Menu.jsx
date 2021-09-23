import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { NavLink } from "react-router-dom";
import {
  Layers as LayersIcon,
  BarChart as BarChartIcon,
  Person as PersonIcon,
} from "@material-ui/icons";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

export default function Menu(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* Stock */}
          <ListItem
            component={NavLink}
            to="/stock"
            button
            key="stock"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Stock" />
          </ListItem>

          {/* Report */}
          <ListItem
            component={NavLink}
            to="/report"
            button
            key="report"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Report" />
          </ListItem>

          {/* AboutUS */}
          <ListItem
            component={NavLink}
            to="/aboutus"
            button
            key="aboutus"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="AboutUs" />
          </ListItem>

          {/* Data */}
          <ListItem
            component={NavLink}
            to="/data"
            button
            key="data"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Data" />
          </ListItem>

          {/* Data */}
          <ListItem
            component={NavLink}
            to="/signUp"
            button
            key="signUp"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="signUp" />
          </ListItem>

          {/* Data */}
          <ListItem
            component={NavLink}
            to="/signIn"
            button
            key="signIn"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="signIn" />
          </ListItem>

          {/* Form */}
          <ListItem
            component={NavLink}
            to="/form"
            button
            key="form"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="form" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
