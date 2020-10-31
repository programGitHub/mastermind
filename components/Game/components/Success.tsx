import Link from 'components/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
}));

/**
 * Success
 */
const Success = () => {
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
        Bravo!
      </Typography>

      <Typography align="center" variant="body2">
        <Link href="/">Accueil</Link>
      </Typography>
    </>
  );
};

export default Success;
