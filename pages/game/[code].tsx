import base64 from 'base-64';
import { CodeColors } from 'types/colors';
import GameCp from 'components/Game';
import { GetServerSideProps } from 'next';
import Layout from 'components/Layout';
import PropTypes from 'prop-types';

interface Props {
  solution: CodeColors;
}

/**
 * Game
 */
const Game = ({ solution }: Props) => (
  <Layout>
    <GameCp solution={solution} />
  </Layout>
);

Game.propTypes = {
  solution: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const code = base64
    .decode(params?.code as string)
    .split('')
    .map((e: string) => +e);

  return {
    props: {
      solution: code,
    },
  };
};

export default Game;
