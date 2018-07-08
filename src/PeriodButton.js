import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class PeriodButton extends Component {
  render() {
    return (
      <Grid container justify="space-around" spacing={40} style={{ margin: "10px -20px -90px -20px" }}>

        <Grid item>
          <Button
            mini
            variant="fab"
            aria-label="add" 
            color="secondary" 
            onClick={ this.props.handlePeriod } >
            <AddIcon />
          </Button> 
        </Grid>

      </Grid>
    );
  }
}

export default PeriodButton;
