import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

interface Props {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),

    boxShadow: theme.shadows[3],
    margin: 'auto',
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    maxWidth: 500,
    minHeight: 200,

    [theme.breakpoints.down('xs')]: {
      boxShadow: 'none',
      margin: 0,
    },
  },
}));

/**
 * Layout
 */
const Layout = ({ children }: Props) => {
  const classes = useStyles();

  return <Box className={classes.root}>{children}</Box>;
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
