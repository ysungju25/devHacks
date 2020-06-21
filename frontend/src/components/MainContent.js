import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import PhoneInteraction from './PhoneInteraction';


const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    justify: "center",
    align: 'center',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    
  },
  fullWidth: {
    width: '100%',
  },
  titlename:{
    align: 'center',
  }
}));

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography   align='center' variant='h1' className={classes.titlename} >Be <b>Responsibl.</b> with your <b>Space</b></Typography>
      </div>
      <div className={classes.content}>
        <Typography  variant='h6' align='center' paragraph>
          Be safe out there
        </Typography>
      </div>
      <div className={classes.content}>
        <PhoneInteraction></PhoneInteraction>
      </div>


    </main>
  );
}

export default MainContent;
