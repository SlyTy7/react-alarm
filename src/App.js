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
      time: null,
      alarmTime: "12:00:00",
      period: null,
      alarmPeriod: "am",
      variant: "display3",
      days: [
        'Sun', 
        'Mon', 
        'Tue', 
        'Wed', 
        'Thu', 
        'Fri', 
        'Sat'],
      alarmOn: false,
      alarmEditing: false,
      lights: true,
    }
  }

  clockResize = () => {
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

    /* FIND OUT AM/PM */
    ( hours >= 12 ) && ( period = "pm" );
    /* CONVERT TO 12 HOUR FORMAT */
    ( hours > 12 ) && ( hours -= 12 );
    /* CONVERT 0 TO 12 FOR AFTER MIDNIGHT */
    ( hours === 0 ) && ( hours = 12 );
    /* ADD ZERO IN FRONT OF HOURS AMOUNT */
    ( hours < 10 ) && ( hours = "0" + hours );
    /* ADD ZERO IN FRONT OF MINS AMOUNT */
    ( mins < 10 ) && ( mins = "0" + mins );
    /* ADD ZERO IN FRONT OF SECS AMOUNT */
    ( secs < 10 ) && ( secs = "0" + secs );

    this.setState({
      time: hours + ":" + mins + ":" + secs,
      period: period,
    });

    /* TEMPORARY SOLUTION TO UPDATE CLOCK SIZE ON WINDOW RESIZE */
    this.clockResize();

    /* CHECK AGAINST ALARM TIME */
    this.checkAlarm();
  }

  checkAlarm = () => {
    if(this.state.time === this.state.alarmTime && this.state.period === this.state.alarmPeriod){
      console.log("WAKEEEEE UPPPPPPP!!!!!!!");
    }
  }

  flashClock = () => {
    this.state.lights ? this.setState({ lights: false }) : this.setState({ lights: true });
  }

  handleEdit = () => {
    clearInterval(this.state.intervalId);
    if(this.state.alarmEditing){
      this.getTime();
      this.setState({ alarmEditing: false, lights: true, intervalId: setInterval(this.getTime, 1000) });
    }else{
      this.setState({ alarmEditing: true, time: this.state.alarmTime, period: this.state.alarmPeriod, intervalId: setInterval(this.flashClock, 400) });
    }
  }

  handleAlarmSwitch = () => {
    this.state.alarmOn ? this.setState({ alarmOn: false }) : this.setState({ alarmOn: true });
  }

  handleRaise = (type) => {
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
      time: newTime
    })
  }

  handleLower = (type) => {
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
      time: newTime
    })
  }

  handleAlarmPeriodSwitch = () => {
    ( this.state.alarmPeriod === "am" ) && this.setState({ alarmPeriod: "pm" });
    ( this.state.alarmPeriod === "pm" ) && this.setState({ alarmPeriod: "am" });
  }

  componentDidMount(){
    this.clockResize();
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
                  variant={this.state.variant} 
                  period={this.state.alarmEditing ? this.state.alarmPeriod : this.state.period } 
                  days={this.state.days} 
                  alarmOn={this.state.alarmOn} 
                  offColor='#070707'
                  lights={this.state.lights} 
                  isEditing={this.state.alarmEditing} 
                  handleRaise={(type) => this.handleRaise(type)}
                  handleLower={(type) => this.handleLower(type)}
                  handlePeriod={this.handleAlarmPeriodSwitch} />

                {/*BUTTONS*/}
                <Grid container spacing={32} justify="center" style={{ marginTop: '10px' }}>
                  <Grid item>
                    {/*EDIT ALARM BUTTON*/}
                    <EditAlarm edit={this.handleEdit} editing={this.state.alarmEditing} />
                  </Grid>
                  <Grid item>
                    {/*ALARM ON OFF BUTTON*/}
                    <AlarmSwitch alarmOn={this.handleAlarmSwitch} />
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
