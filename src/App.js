import React, { Component } from 'react';
import Background from './bg.png';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Clock from './Clock.js';
import EditAlarm from './EditAlarm.js';
import AlarmSwitch from './AlarmSwitch.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      intervalId: null,
      time: null,
      period: null,
      alarmTime: "12:00:00",
      alarmPeriod: "am",
      alarmOn: false,
      alarmBuzzing: false,
      alarmEditing: false,
      lights: true,
      lightsOffColor: "#121212",
      variant: "display3",
      days: [
        'Sun', 
        'Mon', 
        'Tue', 
        'Wed', 
        'Thu', 
        'Fri', 
        'Sat'],
    }
  }

  getClockSize = () => {
    ( window.innerWidth > 350 ) && ( this.setState({ variant: "display2" }) );
    ( window.innerWidth > 450 ) && ( this.setState({ variant: "display3" }) );
    ( window.innerWidth > 580 ) && ( this.setState({ variant: "display4" }) );
  }

  getTime = () => {
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    let period = "am";

    /* FIND PERIOD */
    ( hours >= 12 ) && ( period = "pm" );
    /* FORMAT HOURS */
    ( hours > 12 ) && ( hours -= 12 );
    ( hours === 0 ) && ( hours = 12 );
    ( hours < 10 ) && ( hours = "0" + hours );
    /* FORMAT MINS */
    ( mins < 10 ) && ( mins = "0" + mins );
    /* FORMAT SECS */
    ( secs < 10 ) && ( secs = "0" + secs );

    this.setState({
      time: hours + ":" + mins + ":" + secs,
      period: period,
      displayedTime: hours + ":" + mins + ":" + secs,
      displayedPeriod: period,
    });

    /* TEMPORARY SOLUTION TO UPDATE CLOCK SIZE ON WINDOW RESIZE */
    this.getClockSize();
    /* CHECK AGAINST ALARM TIME */
    this.state.alarmOn && this.checkAlarm();
  }

  checkAlarm = () => {
    if(this.state.time === this.state.alarmTime){
      if (this.state.period === this.state.alarmPeriod){
        clearInterval(this.state.intervalId);
        this.setState({ intervalId: setInterval(this.flashClock, 400), alarmBuzzing: true });
      }
    }
  }

  endAlarm = () => {
    clearInterval(this.state.intervalId);
    this.setState({ alarmOm: false, alarmBuzzing: false, lights: true, intervalId: setInterval(this.getTime, 400)});
  }

  editAlarm = () => {
    clearInterval(this.state.intervalId);
    if(this.state.alarmEditing){
      this.setState({ 
        alarmEditing: false, 
        lights: true, 
        displayedTime: this.state.time,
        displayedPeriod: this.state.period,
        intervalId: setInterval(this.getTime, 1000) });
    }else{
      this.setState({
        alarmEditing: true, 
        displayedTime: this.state.alarmTime,
        displayedPeriod: this.state.alarmPeriod,
        intervalId: setInterval(this.flashClock, 400) });
    }
  }

  switchAlarm = () => {
    !(this.state.alarmEditing) && (this.state.alarmOn ? this.setState({ alarmOn: false }) : this.setState({ alarmOn: true }));
  }

  flashClock = () => {
    this.state.lights ? this.setState({ lights: false }) : this.setState({ lights: true });
  }

  raiseOne = (type) => {
    let alarmHour = parseInt( this.state.alarmTime.slice(0,2), 10 );
    let alarmMin = parseInt( this.state.alarmTime.slice(3,5), 10 );
    let alarmSec = parseInt( this.state.alarmTime.slice(6), 10 );

    /*SUBTRACT ONE DEPENDING ON WHICH TYPE*/
    (type === "hour") && (alarmHour = alarmHour + 1);
    (type === "min") && (alarmMin = alarmMin + 1);
    (type === "sec") && (alarmSec = alarmSec + 1);

    /*FORMAT HOURS*/
    (alarmHour > 12) && ( alarmHour = 1 );
    (alarmHour < 10) && ( alarmHour = "0" + alarmHour);

    /*FORMAT MINS*/
    (alarmMin > 59) && ( alarmMin = 0 );
    (alarmMin < 10) && ( alarmMin = "0" + alarmMin);

    /*FORMAT SECS*/
    (alarmSec > 59) && ( alarmSec = 0 );
    (alarmSec < 10) && ( alarmSec = "0" + alarmSec);

    let newTime = alarmHour + ":" + alarmMin + ":" + alarmSec;

    this.setState({
      alarmTime: newTime,
      displayedTime: newTime
    })
  }

  lowerOne = (type) => {
    let alarmHour = parseInt( this.state.alarmTime.slice(0,2), 10 );
    let alarmMin = parseInt( this.state.alarmTime.slice(3,5), 10 );
    let alarmSec = parseInt( this.state.alarmTime.slice(6), 10 );

    /*SUBTRACT ONE DEPENDING ON WHICH TYPE*/
    (type === "hour") && (alarmHour = alarmHour - 1);
    (type === "min") && (alarmMin = alarmMin - 1);
    (type === "sec") && (alarmSec = alarmSec - 1);

    /*FORMAT HOURS*/
    (alarmHour < 1) && ( alarmHour = 12 );
    (alarmHour < 10) && ( alarmHour = "0" + alarmHour);

    /*FORMAT MINS*/
    (alarmMin < 0) && ( alarmMin = 59 );
    (alarmMin < 10) && ( alarmMin = "0" + alarmMin);

    /*FORMAT SECS*/
    (alarmSec < 0) && ( alarmSec = 59 );
    (alarmSec < 10) && ( alarmSec = "0" + alarmSec);

    let newTime = alarmHour + ":" + alarmMin + ":" + alarmSec;

    this.setState({
      alarmTime: newTime,
      displayedTime: newTime
    })
  }

  switchAlarmPeriod = () => {
    ( this.state.alarmPeriod === "am" ) && this.setState({ alarmPeriod: "pm", displayedPeriod: "pm" });
    ( this.state.alarmPeriod === "pm" ) && this.setState({ alarmPeriod: "am", displayedPeriod: "am" });
  }

  componentDidMount(){
    this.getClockSize();
    this.getTime();
    this.setState({ intervalId: setInterval(this.getTime, 1000) });
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div 
          className="App" 
          style={{ backgroundImage: "url(" + Background + ")", backgroundSize: "cover" }} >
          
          <Grid 
            container 
            justify="center" 
            alignItems="center" 
            style={{ height: '100%' }} >

            <Grid item>
              <Paper style={{ padding: '40px 35px 25px 35px' }} >
                {/*CLOCK*/}
                <Clock 
                  time={this.state.time} 
                  displayedTime={this.state.displayedTime}
                  displayedPeriod={this.state.displayedPeriod}
                  variant={this.state.variant} 
                  days={this.state.days} 
                  alarmOn={this.state.alarmOn} 
                  offColor={this.state.lightsOffColor}
                  lights={this.state.lights} 
                  isEditing={this.state.alarmEditing} 
                  handleRaise={(type) => this.raiseOne(type)}
                  handleLower={(type) => this.lowerOne(type)}
                  handlePeriod={this.switchAlarmPeriod} />

                {/*BUTTONS*/}
                <Grid container spacing={32} justify="center" style={{ marginTop: '10px' }}>
                  <Grid item>
                    {/*EDIT ALARM BUTTON*/}
                    <EditAlarm 
                      handleEditAlarm={this.editAlarm} 
                      isEditing={this.state.alarmEditing} 
                      alarmBuzzing={this.state.alarmBuzzing} />
                  </Grid>
                  <Grid item>
                    {/*ALARM ON OFF BUTTON*/}
                    <AlarmSwitch 
                      handleSwitchAlarm={this.switchAlarm} 
                      handleEndAlarm={this.endAlarm}
                      isEditing={this.state.alarmEditing}
                      alarmBuzzing={this.state.alarmBuzzing} />
                  </Grid>
                </Grid>

              </Paper>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
