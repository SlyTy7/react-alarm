import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Time from './Time.js';
import Days from './Days.js';
import Period from './Period.js';

class Clock extends Component {

  render() {
    return (
      <Paper style={{ padding: '0px 30px 40px 30px', backgroundColor: '#000', color: '#79797936' }}>
        <Grid container spacing={16} alignItems="center" justify="center" > 
          {/*CLOCK*/}
          <Grid item>
            <Time time={this.props.time} variant={this.props.variant} />
          </Grid>
          {/*PERIOD*/}
          <Grid item>
            <Period period={this.props.period} />
          </Grid>
        </Grid>
        {/*DAYS*/}
        <Days days={this.props.days} />
      </Paper>
    );
  }
}

export default Clock;
