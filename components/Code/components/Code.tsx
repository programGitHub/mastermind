import Box from '@material-ui/core/Box';
import { CodeColors } from 'types/colors';
import Color from './Color';
import PropTypes from 'prop-types';

interface Props {
  onChange?: (newColors: CodeColors) => void;
  value: CodeColors;
}

/**
 * Code
 */
const Code = ({ onChange, value }: Props) => {
  const handleChange = (index: number) => (newColor: number) => {
    const newValue = value.map((color, i) =>
      i === index ? newColor : color
    ) as CodeColors;

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Box display="flex" flexDirection="row" width="100%">
      {value.map((color, i) => (
        <Color key={i} onChange={onChange && handleChange(i)}>
          {color}
        </Color>
      ))}
    </Box>
  );
};

Code.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default Code;
