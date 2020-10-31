import Box from '@material-ui/core/Box';
import { Color } from 'types/colors';
import colors from '../colors';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import PropTypes from 'prop-types';

const SIZE = 30;

interface Props {
  anchor: HTMLElement | null;
  onChange: (color: Color) => void;
  onClose: () => void;
}

const useStyles = makeStyles({
  box: {
    cursor: 'pointer',
  },
});

/**
 * ColorPicker
 */
const ColorPicker = ({ anchor, onChange, onClose }: Props) => {
  const classes = useStyles();

  return (
    <Popover anchorEl={anchor} onClose={onClose} open={!!anchor}>
      <Box padding={2}>
        <Grid container spacing={2} justify="center">
          {Object.values(colors).map((color, i) => (
            <Grid item key={color} xs={4}>
              <Box
                bgcolor={color}
                borderRadius="50%"
                boxShadow={3}
                className={classes.box}
                height={SIZE}
                onClick={() => {
                  onChange(i);
                  onClose();
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Popover>
  );
};

ColorPicker.propTypes = {
  anchor: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ColorPicker;
