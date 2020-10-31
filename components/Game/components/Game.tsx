import Code from 'components/Code';
import { CodeColors, Color, Correction as CorrectionType } from 'types/colors';
import Correction from 'components/Correction';
import getCorrection from '../utils/getCorrection';
import Line from './Line';
import PropTypes from 'prop-types';
import Success from './Success';
import { useReducer } from 'react';
import Valid from './Valid';

interface Props {
  solution: CodeColors;
}

type ACTIONTYPE =
  | { type: 'CHANGE'; code: CodeColors }
  | {
      type: 'HISTO';
      histo: { code: CodeColors; correction: CorrectionType }[];
    }
  | { type: 'SUCCESS' };

const initialState = {
  code: [
    Color.White,
    Color.White,
    Color.White,
    Color.White,
    Color.White,
  ] as CodeColors,
  history: [] as { code: CodeColors; correction: CorrectionType }[],
  success: false,
};

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        code: action.code,
      };

    case 'HISTO':
      return {
        ...state,
        history: action.histo,
      };

    case 'SUCCESS':
      return {
        ...state,
        success: true,
      };

    default:
      return {
        ...state,
      };
  }
}

/**
 * Game
 */
const Game = ({ solution }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (code: CodeColors) =>
    dispatch({
      type: 'CHANGE',
      code,
    });

  const handleValid = () => {
    const correction = getCorrection(state.code, solution);

    dispatch({
      type: 'HISTO',
      histo: [...state.history, { code: state.code, correction }],
    });

    if (correction[0] === state.code.length) {
      dispatch({
        type: 'SUCCESS',
      });
    }
  };

  return (
    <>
      {state.history.map(({ code, correction }, i) => (
        <Line key={i}>
          <Code value={code} />
          <Correction value={correction} />
        </Line>
      ))}

      {state.success ? (
        <Success />
      ) : (
        <Line>
          <Code onChange={handleChange} value={state.code} />
          <Valid onClick={handleValid} />
        </Line>
      )}
    </>
  );
};

Game.propTypes = {
  solution: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default Game;
