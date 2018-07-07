import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Period extends Component {

  render() {
    return (
      <Grid container spacing={16} direction="column" >
        <Grid item>
          <Typography variant="button" children="am" color={this.props.period === "am" ? "primary" : "inherit"} />
        </Grid>
        <Grid item>
          <Typography variant="button" children="pm" color={this.props.period === "pm" ? "primary" : "inherit"} />
        </Grid>
      </Grid>
    );
  }
}

export default Period;
