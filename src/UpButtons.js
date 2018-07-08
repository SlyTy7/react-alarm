import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import UpIcon from '@material-ui/icons/ArrowDropUp';

class UpButtons extends Component {
  render() {
    return (
      <Grid container justify="space-around" spacing={40} style={{ margin: "-50px -20px -30px -20px"}} >

        <Grid item>
          <Button variant="fab" aria-label="up" mini color="secondary">
            <UpIcon />
          </Button> 
        </Grid>

        <Grid item>
          <Button variant="fab" aria-label="up" mini color="secondary">
            <UpIcon />
          </Button> 
        </Grid>

        <Grid item>
          <Button variant="fab" aria-label="up" mini color="secondary">
            <UpIcon />
          </Button> 
        </Grid>

      </Grid>
    );
  }
}

export default UpButtons;
