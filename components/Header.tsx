import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Header() {
	return (
		<div>
			<style jsx global>
				{`
					body{
						margin: 0;
						padding: 0;
					}
				`}
			</style>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">n0web</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}
