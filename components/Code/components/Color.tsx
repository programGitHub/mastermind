import Box from '@material-ui/core/Box';
import { Color as ColorType } from 'types/colors';
import ColorPicker from './ColorPicker';
import colors from '../colors';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { MouseEvent, useState } from 'react';

interface Props {
  children: ColorType;
  onChange?: (color: ColorType) => void;
}

const useStyles = makeStyles({
  box: {
    cursor: 'pointer',
  },
});

/**
 * Color
 */
const Color = ({ children, onChange }: Props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);

  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchor(e.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <>
      {onChange && (
        <ColorPicker
          anchor={anchor}
          onChange={onChange}
          onClose={handleClose}
        />
      )}

      <Box flex={1} margin={0.5}>
        <Box
          bgcolor={colors[children]}
          borderRadius="50%"
          boxShadow={3}
          className={onChange && classes.box}
          height="auto"
          onClick={onChange && handleOpen}
          paddingTop="100%"
        />
      </Box>
    </>
  );
};

Color.propTypes = {
  children: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};

export default Color;
