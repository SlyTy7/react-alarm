import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Time from './Time.js';
import Days from './Days.js';
import Period from './Period.js';
import Alarm from './Alarm.js';
import UpButtons from './UpButtons.js';
import DownButtons from './DownButtons.js';


class Clock extends Component {

  render() {
    return (
      <Paper style={{ padding: '0px 30px 30px 30px', backgroundColor: '#000', color: this.props.offColor }}>
        <Grid container spacing={16} justify="center" > 
          {/*CLOCK*/}
          <Grid item>


            { this.props.isEditing && <UpButtons /> }

            <Time time={this.props.time} variant={this.props.variant} lights={this.props.lights} />

            { this.props.isEditing && <DownButtons /> }

          </Grid>
          {/*STATUS*/}
          <Grid item>
            <Grid container spacing={8} direction="column" justify="center" style={{ marginTop: '50%' }} >
              {/*PERIOD*/}
              <Period period={this.props.period} />
              {/*ALARM*/}
              <Alarm alarmOn={this.props.alarmOn} />
            </Grid>
          </Grid>
        </Grid>
        {/*DAYS*/}
        <Days days={this.props.days} />
      </Paper>
    );
  }
}

export default Clock;