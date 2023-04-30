import Menu from './Menu';
import Header from './Header';
import Title from './Title';
import Cards from './Cards';
import Footer from './Footer';

import useStyles from '../hooks/useStyles';

const App = () => {
  const {classes} = useStyles();
  
  return (
    <>    
      <Menu classes={classes}/>
      <main>
        <Header classes={classes}/>
        <Title classes={classes}/>
        <Cards classes={classes}/>
      </main>
      <Footer classes={classes}/>
    </>
  );
}

export default App;
