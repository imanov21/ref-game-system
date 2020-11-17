import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { AccessAlarm } from '@material-ui/icons';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  link: {
    color: '#fff',
    display: 'flex',
    textDecoration: "none",
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Link href="/" variant="body2" className={classes.link}>
              <AccessAlarm className={classes.icon} />
              <Typography variant="h6" color="inherit" noWrap>
                Challenge
              </Typography>
            </Link>

            <Link href="/sign-in" >
              <Button variant="outlined">
                Sign in
              </Button>
            </Link>
            <Link href="/sign-up" >
              <Button variant="outlined" color="secondary">
                Sign up
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </>
  );
}