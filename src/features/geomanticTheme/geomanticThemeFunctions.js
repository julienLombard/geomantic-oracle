import { geomanticFiguresData } from '../../data/geomanticFiguresData';
import { figureHouseData } from '../../data/figureHouseData';

export const findFigureName = (figure, list = geomanticFiguresData) => {
  const figureMatch = list.find((element) => {
    if (
      element.firstLine === figure.firstLine &&
      element.secondLine === figure.secondLine &&
      element.thirdLine === figure.thirdLine &&
      element.fourthLine === figure.fourthLine
    ) {
      return element;
    } else {
      return null;
    }
  });
  return figureMatch.name;
};

export const isOdd = (num) => {
  return num % 2 ? 1 : 2;
};

export const setPartOfFortune = (currentState) => {
  let num = Math.floor(sumFirstTwelves(currentState) / 12);
  num = num === 0 ? (num = 12) : num;
  return num;
};

export const sumFirstTwelves = (currentState) => {
  let sum = 0;
  const numLine = ['firstLine', 'secondLine', 'thirdLine', 'fourthLine'];

  for (let i = 1; i < numLine.length; i++) {
    sum +=
      currentState.mother1[numLine[i]] +
      currentState.mother2[numLine[i]] +
      currentState.mother3[numLine[i]] +
      currentState.mother4[numLine[i]];
    sum +=
      currentState.daughter1[numLine[i]] +
      currentState.daughter2[numLine[i]] +
      currentState.daughter3[numLine[i]] +
      currentState.daughter4[numLine[i]];
    sum +=
      currentState.niece1[numLine[i]] +
      currentState.niece2[numLine[i]] +
      currentState.niece3[numLine[i]] +
      currentState.niece4[numLine[i]];
  }
  return sum;
};

export const findFigureByHouse = (houseNum, list = figureHouseData) => {
  const figureMatch = list.find((element) => {
    if (element.house === houseNum) {
      return element;
    } else {
      return null;
    }
  });
  return figureMatch.name;
};

export const findLineValue = (figure, line) => {
  const value = figure[line];
  return value;
};

export const setFigures = (first, second, third, fourth) => {
  const figure = {
    firstLine: first,
    secondLine: second,
    thirdLine: third,
    fourthLine: fourth,
  };
  figure.name = findFigureName(figure);
  return figure;
};
