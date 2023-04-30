import { Paper, Typography, Grid, Button, Container } from "@mui/material";

const Header = ({classes}) => {

  return (
    <Paper
      className={classes.mainFeaturesPost}
      style={{backgroundImage: `url(https://images.unsplash.com/photo-1682173051316-86ad29c08b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80)`}}
    >
      <Container fixed>
        <Grid container>
          <div className={classes.overlay}/>
          <Grid item md={6}>
            <div className={classes.mainFeaturesPostContent}>
              <Typography
                component='h1'
                variant='h3'
                color='inherit'
                gutterBottom
              >
                Web Developer Blog
              </Typography>
              <Typography
                component='h5'
                color='inherit'
                paragraph
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ex esse autem adipisci omnis reiciendis quo, reprehenderit eos ratione voluptatibus veritatis sunt, nam voluptatem! Earum?
              </Typography>
              <Button variant='contained' color='secondary'>
                Learn more
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default Header;