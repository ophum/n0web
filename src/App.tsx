import React from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Home } from './pages/Home';
import {NetworkList} from './pages/NetworkList';
import {BlockStorageList} from './pages/BlockStorageList';
import {VirtualMachineList} from './pages/VirtualMachineList';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    sideMenuLink: {
      textDecoration: "none",
      color: "black",
    },
  }),
);
const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              n0web
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}>
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                {['/', 'networks', 'blockstorages', 'virtualmachines'].map((text, index) => (
                  <Link to={text} className={classes.sideMenuLink}>
                    <ListItem button key={index}>
                      <ListItemText primary={text} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </div>
          </Drawer>
          <main className={classes.content}>
            <Toolbar />
            <Switch>
            <Route exact path="/" children={<Home />} />
            <Route exact path="/networks" children={<NetworkList />} />
            <Route exact path="/blockstorages" children={<BlockStorageList />} />
            <Route exact path="/virtualmachines" children={<VirtualMachineList />} />
            </Switch>
          </main>
      </div>
   </BrowserRouter>
  );
}

export default App;
