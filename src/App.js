import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Background from './bg.png';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: null,
      period: null,
      variant: "display1",
    }
  }

  clockResize = () => {
    ( window.innerWidth > 400 ) && ( this.setState({ variant: "display2" }) );
    ( window.innerWidth > 500 ) && ( this.setState({ variant: "display3" }) );
    ( window.innerWidth > 681 ) && ( this.setState({ variant: "display4" }) );
  }

  getTime = () => {
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    let period = "AM";

    /* FIND OUT AM/PM */
    ( hours > 12 ) && ( period = "PM" );
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
  }

  tick = () => {
    /* UPDATE TIME EVERY SECOND */
    setInterval(this.getTime, 1000);
  }

  componentDidMount(){
    this.clockResize();
    this.getTime();
    this.tick();
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
              
              <Paper style={{ padding: '35px 50px' }} >

                <Paper style={{ padding: '0px 30px 20px 30px', backgroundColor: '#000' }}>

                  <Typography
                    variant={this.state.variant} 
                    color="primary" 
                    style={{ position: 'absolute', fontFamily: 'digital-7', zIndex: '100' }} >
                    {this.state.time} {this.state.period}
                  </Typography>

                  <Typography
                    variant={this.state.variant} 
                    style={{ fontFamily: 'digital-7', color: '#79797936' }} >
                    88:88:88 AM
                  </Typography>

                </Paper>

                <Grid container spacing={16} justify="center" style={{ marginTop: "25px" }}>

                  <Grid item>
                    <Button variant="contained" color="secondary" children="New Alarm" />                   
                  </Grid>

                  <Grid item>
                    <Button variant="contained" children="Delete Alarm" />
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
