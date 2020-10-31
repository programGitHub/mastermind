import base64 from 'base-64';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { CodeColors, Color } from 'types/colors';
import CodePicker from 'components/CodePicker';
import Layout from 'components/Layout';
import { makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import TextField from '@material-ui/core/TextField';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';

function generate(code: CodeColors): string {
  return base64.encode(code.join(''));
}

function getRandomColor(): Color {
  return Math.floor(Math.random() * 9);
}

function getRandomCode(): CodeColors {
  const code = [0, 0, 0, 0, 0];

  return code.map(() => getRandomColor()) as CodeColors;
}

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(2),
  },
}));

/**
 * Home
 */
const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(generate(getRandomCode()));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleGenerate = (c?: CodeColors) => {
    const code = c || getRandomCode();
    setValue(generate(code));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <Box alignItems="center" display="flex" padding={2}>
        <TextField
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={value}
        />

        <Button
          className={classes.button}
          disableElevation
          onClick={() => {
            handleGenerate();
          }}
          variant="contained"
        >
          Generate
        </Button>
      </Box>

      <Box marginTop={5} textAlign="center">
        <Button disableElevation onClick={handleOpen} variant="contained">
          Enter a Code
        </Button>

        <Button
          className={classes.button}
          color="primary"
          disableElevation
          onClick={() => {
            Router.push('/game/[code]', `/game/${value}`);
          }}
          variant="contained"
        >
          Play
        </Button>
      </Box>

      <CodePicker onClose={handleClose} onValid={handleGenerate} open={open} />
    </Layout>
  );
};

export default Home;
