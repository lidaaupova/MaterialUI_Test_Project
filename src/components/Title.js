import { Container, Typography, Grid, Button } from "@mui/material";

const Title = ({classes}) => {

  return (
		<div className={classes.mainContent}>
			<Container maxWidth="md">
				<Typography
					variant='h2'
					align='center'
					color="textPrimary"
					gutterBottom
				>
					Web Developer Blog
				</Typography>
				<Typography
					variant='h5'
					align='center'
					color="textSecondary"
					paragraph
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloremque qui at? Accusamus inventore ipsam tempore dicta officiis recusandae animi reiciendis, veritatis cum expedita quae possimus, neque eveniet et quod natus! Accusamus officiis dolorum facere.
				</Typography>
				<div className={classes.mainButtons}>
					<Grid container spacing={2} justifyContent='center'>
						<Grid item>
							<Button variant='contained' color='primary'>Start now</Button>
						</Grid>
						<Grid item>
							<Button variant='outlined' color='primary'>Learn more</Button>
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	)
}

export default Title;