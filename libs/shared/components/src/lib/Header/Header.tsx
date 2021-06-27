import './Header.module.scss';

import React, { useEffect } from 'react';

import { Link as RouterLink } from 'react-router-dom';

import { Button, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export interface HeaderProps {
  pages: {
    name: string;
    url: string;
    id: number;
  }[];
  title: string;
}

export function Header(props: HeaderProps) {
  const classes = useStyles();
  const { pages } = props;

  useEffect(() => {
    console.log('pages', props.pages);
  }, [props.pages]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          <Button
            component={RouterLink}
            to="/"
            color="primary"
            variant="contained"
          >
            {props.title}
          </Button>
        </Typography>
        {pages.map((page) => (
          <Button
            component={RouterLink}
            key={page.id}
            to={page.url}
            color="primary"
            variant="contained"
          >
            {page.name}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
