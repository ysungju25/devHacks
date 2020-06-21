import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';


import PropTypes from "prop-types";
//import classNames from "classnames";
import {
  Grid,
  Container,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp
} from "@material-ui/core";

import InputAdornment from '@material-ui/core/InputAdornment';

import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';

import Input from '@material-ui/core/Input';

import TextField from '@material-ui/core/TextField';

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: `linear-gradient(#cfd9df,#e2ebf0)`,
    color: 'grey',
  },
  bigAvatar: {
    margin: 30,
    width: 100,
    height: 100,
  },
  card: {
    boxShadow: theme.shadows[2],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(),
      paddingBottom: theme.spacing(3)
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto"
    }
  },
}));

function PhoneInteraction() {
  const classes = useStyles();
  const handleOnSubmitPhone = event  => {

  }
  const width = 200;

  return (
    <Box display="flex" justifyContent="center" className="row" >
              <Container maxWidth="sm" padding="10%">                
                  <Card
                    className={classes.card}
                    data-aos-delay="200"
                    data-aos="zoom-in"                
                  >                
                    <Typography
                      variant={isWidthUp("lg", width) ? "h2" : "h3"}
                      fontFamily="Segoe UI"
                    >
                      How are you doing?
                    </Typography>
                    <br></br>
                    <Typography
                      variant={isWidthUp("lg", width) ? "h6" : "body1"}
                      color="textSecondary"                      
                    >
                       
                      Enter your phone number below and we'll deliver information that will keep you safe.                  
                    </Typography>
                    <br></br>
                    <form onSubmit={handleOnSubmitPhone}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <PhoneIphoneIcon style={{ fontSize: 40 }}/>
                        </Grid>
                        <Grid item>
                          <TextField  height="150%" width="150%" id="input-with-icon-grid" label="5714214739" variant="outlined"  />
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit" 
                            fullWidth
                            className={classes.extraLargeButton}
                            classes={{ label: classes.extraLargeButtonLabel }}
                            //href={"API CALL" }
                          >
                            Get Help
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                    {/** <ContactDemo/> */}                    
                  </Card>                
              </Container>    
          </Box>
  );
}

export default PhoneInteraction;
