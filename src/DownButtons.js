import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DownIcon from '@material-ui/icons/ArrowDropDown';

class DownButtons extends Component {
  render() {
    return (
      <Grid container justify="space-around" spacing={40} style={{ margin: "10px -20px -90px -20px" }}>

        <Grid item>
          <Button variant="fab" aria-label="down" mini color="secondary">
            <DownIcon />
          </Button> 
        </Grid>

        <Grid item>
          <Button variant="fab" aria-label="down" mini color="secondary">
            <DownIcon />
          </Button> 
        </Grid>

        <Grid item>
          <Button variant="fab" aria-label="down" mini color="secondary">
            <DownIcon />
          </Button> 
        </Grid>

      </Grid>
    );
  }
}

export default DownButtons;
