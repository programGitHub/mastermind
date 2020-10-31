import Link from 'components/Link';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';

interface Props {
  n: number
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
}));

/**
 * Success
 */
const Success = ({ n }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Typography
        align="center"
        className={classes.root}
        color="primary"
        paragraph
        variant="h5"
      >
        Bravo! ({ n })
      </Typography>

      <Typography align="center" variant="body2">
        <Link href="/">Accueil</Link>
      </Typography>
    </>
  );
};

Success.propTypes = {

}

export default Success;
