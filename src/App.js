import React, { useState } from 'react';

import Button from '@mui/material/Button';
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Paper, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { makeStyles } from 'tss-react/mui';

import LayersIcon from '@mui/icons-material/Layers';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';


const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1) //1 - по умолчанию 8px
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0, .3)"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  },
  footer: {
    margin: theme.spacing(3)
  },
  navigation: {
    marginBottom: theme.spacing(2)
  }
}))

const cards = [1,2,3,4,5,6,7,8,9];

const App = () => {
  const {classes} = useStyles();
  const [value, setValue] = useState("recents");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <AppBar position='fixed'> {/*Панель навигации, используется для логотипа, заголовка, навигации и т.д. Может быть контекстным меню или навигационным*/}
        <Container fixed> {/*Центрирует содержимое по горизонтали*/}
          <Toolbar> {/*Элемент, в который обычно кладутся иконки, логотипы и кнопки для адаптивного меню*/}
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
            </Typography> {/*Компонент, в котором мы записываем текст*/}
            <Box mr={3}> {/*Компонент, который используется как обёртка для большинства используемых css-свойст, т.е. создаёт новые DOM элемент, по умолчанию div, но можно изменить свойством component*/}
              <Button color='inherit' variant='outline' onClick={handleClickOpen}>Log in</Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby='form-fialog-title'>
                <DialogTitle id='form-fialog-title'>Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to see videos</DialogContentText>
                  <TextField 
                    autoFocus
                    margin="dense"
                    id='name'
                    label="Email Address"
                    type='email'
                    fullWidth
                  />
                  <TextField
                    margin="dense"
                    id='password'
                    label="Passwpord"
                    type='password'
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">Cancel</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color='secondary' variant='contained'>Sign up</Button>
          </Toolbar>
        </Container>
      </AppBar>
      
      <main>
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
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.navigation}
        >
          <BottomNavigationAction
            label="Recents"
            value='recents'
            icon={<RestoreIcon/>}
          />
          <BottomNavigationAction
            label="Favorites"
            value='favorites'
            icon={<FavoriteIcon/>}
          />
          <BottomNavigationAction
            label="Nearby"
            value='nearby'
            icon={<LocationOnIcon/>}
          />
          <BottomNavigationAction
            label="Folder"
            value='folder'
            icon={<FolderIcon/>}
          />
        </BottomNavigation>
        <Typography align='center' color='textSecondary' component='p' variant='subtitle1'>
          Web Developer Blog react JS Material UI site
        </Typography>
      </footer>
    </>
  );
}

export default App;
