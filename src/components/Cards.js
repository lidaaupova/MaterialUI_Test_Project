import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

import LayersIcon from '@mui/icons-material/Layers';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';


const Cards = ({classes}) => {

  const cards = [1,2,3,4,5,6,7,8,9];

  return (
    <Container
      className={classes.cardGrid}
      maxWidth="md"
    >
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image='https://images.unsplash.com/photo-1682173051316-86ad29c08b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                  Blog post 
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color="primary">
                  View
                </Button>
                <Button size='small' color="primary">
                  Edit
                </Button>
                <LayersIcon/>
                <PlayCircleFilledIcon/>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Cards;