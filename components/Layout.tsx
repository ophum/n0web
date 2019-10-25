import * as React from 'react';

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

interface IProps {
	children: React.ReactNode,
	title: string,
}

export default function Layout(props: IProps) {
	const children = props.children;
	const classes = useStyles();
  return (
		<div className={classes.root}>
		<CssBaseline />
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<Typography variant="h6" noWrap>
					{props.title}
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
			{children}
		</main>
	</div>
  );
}
