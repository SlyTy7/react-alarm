import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SwapIcon from '@material-ui/icons/SwapVert';

class PeriodButton extends Component {
  render() {
    return (
      <Grid container justify="space-around" spacing={40} style={{ margin: "10px -60px -90px 10px" }}>

        <Grid item>
          <Button
            mini
            variant="fab"
            aria-label="add" 
            color="secondary" 
            onClick={ this.props.handlePeriod } >
            <SwapIcon />
          </Button> 
        </Grid>

      </Grid>
    );
  }
}

export default PeriodButton;
