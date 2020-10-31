import { CodeColors, Correction } from 'types/colors';

export default function getCorrection(
  code: CodeColors,
  solution: CodeColors
): Correction {
  let correct = 0,
    incorrect = 0;

  let arr = [...code];

  solution.forEach((color) => {
    const id = arr.findIndex((e) => e === color);

    if (id < 0) {
      return;
    }

    incorrect++;

    arr = arr.filter((e, i) => i !== id);
  });

  solution.forEach((color, i) => {
    if (color === code[i]) {
      correct++;
      incorrect--;
    }
  });

  return [correct, incorrect];
}
