import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import PropTypes from 'prop-types';

interface Props {
  onClick: () => void;
}

/**
 * Valid
 */
const Valid = ({ onClick }: Props) => (
  <Box alignItems="center" display="flex" justifyContent="center" height="100%">
    <Button
      color="primary"
      endIcon={<DoneIcon />}
      onClick={onClick}
      size="small"
    >
      Check
    </Button>
  </Box>
);

Valid.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Valid;
