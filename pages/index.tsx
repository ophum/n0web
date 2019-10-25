import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// import MailIcon from '@material-ui/icons/Mail';
// import InboxIcon from '@material-ui/icons/MoveToInbox';

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
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }),
);

export default function Index() {
	const classes = useStyles();
  return (
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
			}}
			anchor="left"
		>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				{['Network', 'BlockStorage', 'VirtualMachine', 'Node'].map((text) => (
					<Link href={text.toLowerCase()}>
						<ListItem button key={text}>
							<ListItemText primary={text} />
						</ListItem>
					</Link>
				))}
			</List>
		</Drawer>
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Typography paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
				facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
				gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
				donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
				adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
				Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
				imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
				arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
				donec massa sapien faucibus et molestie ac.
			</Typography>
			<Typography paragraph>
				Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
				facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
				tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
				consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
				vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
				hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
				tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
				nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
				accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
			</Typography>
		</main>
	</div>
  );
}
