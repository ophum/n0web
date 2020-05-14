import React from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Home } from './pages/Home';
import {NetworkList} from './pages/networks/NetworkList';
import {ApplyNetwork} from './pages/networks/ApplyNetwork';
import {GetNetwork} from './pages/networks/GetNetwork';
import {BlockStorageList} from './pages/blockstorages/BlockStorageList';
import {GetBlockStorage} from './pages/blockstorages/GetBlockStorage';
import {VirtualMachineList} from './pages/virtualmachines/VirtualMachineList';
import {CreateVirtualMachine} from './pages/virtualmachines/CreateVirtualMachine';
import {GetVirtualMachine} from './pages/virtualmachines/GetVirtualMachine';
import { ImageList } from './pages/images/ImageList';

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
                {['/', '/networks', '/blockstorages', '/virtualmachines', '/images'].map((text, index) => (
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
            <Route exact path="/networks/apply" children={<ApplyNetwork />} />
            <Route exact path="/networks/get/:name" children={<GetNetwork />} />
            <Route exact path="/blockstorages" children={<BlockStorageList />} />
            <Route exact path="/blockstorages/get/:name" children={<GetBlockStorage />} />
            <Route exact path="/virtualmachines" children={<VirtualMachineList />} />
            <Route exact path="/virtualmachines/create" children={<CreateVirtualMachine />} />
            <Route exact path="/virtualmachines/get/:name" children={<GetVirtualMachine />} />
            <Route exact path="/images" children={<ImageList />} />
            </Switch>
          </main>
      </div>
   </BrowserRouter>
  );
}

export default App;
