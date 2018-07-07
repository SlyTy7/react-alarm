import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Days from './Days.js';
import Background from './bg.png';
import AddIcon from '@material-ui/icons/Add';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: null,
      period: null,
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

  clockResize = () => {
    ( window.innerWidth > 350 ) && ( this.setState({ variant: "display2" }) );
    ( window.innerWidth > 450 ) && ( this.setState({ variant: "display3" }) );
    ( window.innerWidth > 550 ) && ( this.setState({ variant: "display4" }) );
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

  /* UPDATE TIME EVERY SECOND */
  tick = () => {
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
              
              <Paper style={{ padding: '40px 35px 25px 35px' }} >

                <Paper style={{ padding: '0px 30px 40px 30px', backgroundColor: '#000', color: '#79797936' }}>

                  {/*CLOCK*/}
                  <Grid container spacing={16} alignItems="center" justify="center" > 

                    {/*CLOCK*/}
                    <Grid item>
                      <Typography
                        variant={this.state.variant} 
                        color="primary" 
                        style={{ position: 'absolute', fontFamily: 'digital-7', zIndex: '100' }}
                        children={this.state.time} />

                      <Typography
                        variant={this.state.variant} 
                        color="inherit"
                        style={{ fontFamily: 'digital-7' }} 
                        children="88:88:88" />
                    </Grid>

                    {/*PERIOD*/}
                    <Grid item>
                      <Grid container spacing={16} direction="column" >
                        <Grid item>
                          <Typography variant="button" children="am" color="inherit" />
                        </Grid>
                        <Grid item>
                          <Typography variant="button" children="pm" color="primary" />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>


                  <Days days={this.state.days} />
                </Paper>

                <Grid container spacing={8} justify="center" style={{ marginTop: "-30px" }}>

                  <Grid item>
                    <Button variant="fab" aria-label="add" color="secondary" >
                      <AddIcon />
                    </Button>                 
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
