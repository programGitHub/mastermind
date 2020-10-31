import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

interface Props {
  children?: boolean;
}

/**
 * CorrectionColor
 */
const CorrectionColor = ({ children }: Props) => (
  <Box flex={1} margin={0.5}>
    {typeof children === 'boolean' && (
      <Box
        bgcolor={children ? '#000000' : '#ffffff'}
        borderRadius="50%"
        boxShadow={3}
        height="auto"
        paddingTop="100%"
      />
    )}
  </Box>
);

CorrectionColor.propTypes = {
  children: PropTypes.bool,
};

export default CorrectionColor;
