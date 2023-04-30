import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(1)
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

export default useStyles;