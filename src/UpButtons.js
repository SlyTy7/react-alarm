import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import UpIcon from '@material-ui/icons/ArrowDropUp';

class UpButtons extends Component {
  render() {
    return (
      <Grid container justify="space-around" spacing={40} style={{ margin: "-50px -20px -30px -20px"}} >

        <Grid item>
          <Button
            mini
            variant="fab"
            aria-label="up" 
            color="secondary" 
            onClick={ () => this.props.handleRaise("hour") } >
            <UpIcon />
          </Button> 
        </Grid>

        <Grid item>
          <Button
            mini
            variant="fab"
            aria-label="up" 
            color="secondary" 
            onClick={ () => this.props.handleRaise("min") } >
            <UpIcon />
          </Button> 
        </Grid>

        <Grid item>
          <Button
            mini
            variant="fab"
            aria-label="up" 
            color="secondary" 
            onClick={ () => this.props.handleRaise("sec") } >
            <UpIcon />
          </Button> 
        </Grid>

      </Grid>
    );
  }
}

export default UpButtons;
