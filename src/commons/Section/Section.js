import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '../../styles';

import styles from './styles';

const Section = ({ component = 'section', classes, title, children }) => {
  const $title = useRef();

  return (
    <Grid component={component} container className={classes.section} justify="center" alignItems="center">
      <Grid item xs={10}>
        { title && (
          <Typography component="h2" className={classes.sectionTitle} variant="h5" ref={$title}>
            { title }
          </Typography>
        ) }

        { children }
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Section);
