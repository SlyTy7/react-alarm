import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Period extends Component {

  render() {
    return (
      <React.Fragment>
        <Grid item>
          <Typography variant="button" children="am" color={this.props.period === "am" ? "primary" : "inherit"} />
        </Grid>
        <Grid item>
          <Typography variant="button" children="pm" color={this.props.period === "pm" ? "primary" : "inherit"} />
        </Grid>
      </React.Fragment>
    );
  }
}

export default Period;
