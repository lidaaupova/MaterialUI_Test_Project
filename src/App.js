import React from 'react';
import Button from '@mui/material/Button';
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1) //1 - по умолчанию 8px
  },
  title: {
    flexGrow: 1
  }
}))

const App = () => {
  const {classes} = useStyles();

  return (
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
            <Button color='inherit' variant='outline'>Log in</Button>
          </Box>
          <Button color='secondary' variant='contained'>Sign up</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
