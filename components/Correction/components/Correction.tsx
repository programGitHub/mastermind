import Box from '@material-ui/core/Box';
import { Correction as CorrectionType } from 'types/colors';
import CorrectionColor from './CorrectionColor';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

const SIZE = 5;

interface Props {
  value: CorrectionType;
}

/**
 * Correction
 */
const Correction = ({ value }: Props) => {
  const [ok, notok, dunno] = useMemo(() => {
    const a = Math.min(SIZE, value[0]);
    const b = Math.min(5 - a, value[1]);
    const c = 5 - a - b;

    return [new Array(a).fill(0), new Array(b).fill(0), new Array(c).fill(0)];
  }, [value[0], value[1]]);

  return (
    <Box alignItems="center" display="flex" flexDirection="row" height="100%">
      {dunno.map((_, i) => (
        <CorrectionColor key={i} />
      ))}
      {notok.map((_, i) => (
        <CorrectionColor key={i}>{false}</CorrectionColor>
      ))}
      {ok.map((_, i) => (
        <CorrectionColor key={i}>{true}</CorrectionColor>
      ))}
    </Box>
  );
};

Correction.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default Correction;
