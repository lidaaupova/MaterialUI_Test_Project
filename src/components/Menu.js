import { AppBar, Box, IconButton, Toolbar, Typography, Container, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import ModalWindow from './ModalWindow';

const Menu = ({classes}) => {

	return (
		<AppBar position='fixed'>
			<Container fixed>
				<Toolbar>
					<IconButton
						edge='start'
						color='inherit'
						aria-label='menu'
						className={classes.menuButton}
					>
						<MenuIcon/>
					</IconButton>
					<Typography
						variant='h6'
						className={classes.title}
					>
						Web Developer Blog
					</Typography>
					<Box mr={3}>
						<ModalWindow/>
					</Box>
					<Button color='secondary' variant='contained'>Sign up</Button>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Menu;