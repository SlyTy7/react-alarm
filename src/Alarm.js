import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Alarm extends Component {

  render() {
    return (
      <Grid item>
        <Typography variant="button" children="alarm" color={ this.props.alarmOn ? "primary" : "inherit" } />
      </Grid>
    );
  }
}

export default Alarm;
