import React from "react";
import { AppBar, Button, Container, IconButton, Toolbar, Typography, Box, Paper, Grid, Card, CardMedia, CardContent, 
        CardActions,
        DialogContentText,
        TextField} from '@material-ui/core';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';


const useStyles = makeStyles((theme) => ({
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
    marginBottom: theme.spacing(6),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(9),

  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
  }, 
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}));

const cards = [
  1,2,3,4,5,6,7,8,9,10
];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpenLogIn = () => {
    setOpen(true);
  };
  const handleCloseLogIn = () => {
    setOpen(false);
  }; 

  return (
    <>
      <AppBar position="static">
        <Container fixed>
          <Toolbar>
            <IconButton edge="start"
              color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon></MenuIcon>
            </IconButton>
            <Typography variant="h6" className={classes.title}>Firdavs Usmonov</Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined" onClick={handleClickOpenLogIn}>LogIn</Button>
              <Dialog open={open} onClose={handleCloseLogIn} aria-labelledby="form-dialog-title-log-in">
                <DialogTitle id="form-dialog-title-log-in"></DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in</DialogContentText>
                  <TextField 
                    autoFocus
                    margin="dence"
                    id="email"
                    label="Email Adress"
                    type="email"
                    fullWidth
                  />
                  <TextField 
                    autoFocus
                    margin="dence"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseLogIn} color="primary">Cancel</Button>
                  <Button onClick={handleCloseLogIn} color="primary">Log in</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">SignUp</Button>
          </Toolbar>
        </Container>
      </AppBar >
      <main>
        <Paper className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
          <Container fixed>
            <div className={classes.overlay} />
            <Grid Container>
              <Grid Item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="Inherit"
                    gutterBottom>
                    About me
                  </Typography>
                  <Typography
                    variant="h5"
                    color="Inherit"
                    paragraph>
                    Only with high quality and on time - website layout with clean cross-browser valid code. BEM, GULP, SCSS, CSS3 \ HTML5, JavaScript, jQuery.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom >Portfolio</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>Layout guarantee. Within a week after the transfer of the archive with the finished layout, I correct my mistakes for free and immediately, which could have been missed when accepting the work and noticed later.</Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">Start now</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">Learn more</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}> 
                <Card className={classes.card}>
                  <CardMedia 
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>Blog post</Typography>
                    <Typography>Content Content Content Content</Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    More
                  </Button>
                  <LayerIcon />
                  <PlayCircleFilledIcon />
                  </CardActions> 
                </Card>
              </Grid>
            ))};
          </Grid>
        </Container>
      </main>
      <footer>
          {/*<Typography variant="h6" align="center" gutterBottom>fjfira92@gmail.com</Typography>*/}
          <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
          >
            <BottomNavigationAction 
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
            />
            <BottomNavigationAction 
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
            />
            <BottomNavigationAction 
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
            />
            <BottomNavigationAction 
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
            />
          </BottomNavigation>
          <Typography align="center" color="textSecondary" component="p" variant="subtitle1" >           
            fjfira92@gmail.com
          </Typography>
          <Typography align="center" color="textSecondary" component="p" variant="subtitle1">           
            The site was created on technology React and Material UI
          </Typography>
      </footer>
    </>

  );
}

export default App;
