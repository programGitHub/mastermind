import Button from '@material-ui/core/Button';
import Code from 'components/Code';
import { CodeColors } from 'types/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { useState } from 'react';

interface Props {
  onClose: () => void;
  onValid: (code: CodeColors) => void;
  open: boolean;
}

/**
 * CodePicker
 */
const CodePicker = ({ onClose, onValid, open }: Props) => {
  const [code, setCode] = useState<CodeColors>([7, 7, 7, 7, 7]);

  const handleValid = () => {
    onValid(code);
    onClose();
  };

  return (
    <Dialog fullWidth maxWidth="xs" onClose={onClose} open={open}>
      <DialogTitle>Choose a code</DialogTitle>

      <DialogContent>
        <Code onChange={setCode} value={code} />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="primary" onClick={handleValid}>
          Choose
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CodePicker.propTypes = {
  onClose: PropTypes.func.isRequired,
  onValid: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default CodePicker;
