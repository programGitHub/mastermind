import Box from '@material-ui/core/Box';
import { Children } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

interface Props {
  children: React.ReactNode;
}

/**
 * Line
 */
const Line = ({ children }: Props) => {
  const [left, right] = Children.toArray(children);

  return (
    <Grid container justify="space-evenly" spacing={2}>
      <Grid item xs={7}>
        {left}
      </Grid>

      <Grid item xs={4}>
        {right}
      </Grid>
    </Grid>
  );
};

Line.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Line;
