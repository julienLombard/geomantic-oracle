import { createSlice, current } from '@reduxjs/toolkit';
import { geomanticFiguresData } from '../../data/geomanticFiguresData';
import { initialStateData } from '../../data/initialStateData';
import { figureHouseData } from '../../data/figureHouseData';

const initialState = initialStateData;

const findFigureName = (figure, list = geomanticFiguresData) => {
  const figureMatch = list.find((element) => {
    if (
      element.firstLine === figure.firstLine &&
      element.secondLine === figure.secondLine &&
      element.thirdLine === figure.thirdLine &&
      element.fourthLine === figure.fourthLine
    ) {
      return element;
    }
  });
  return figureMatch.name;
};

const isOdd = (num) => {
  return num % 2 ? 1 : 2;
};

const setPartOfFortune = (currentState) => {
  let num = Math.floor(sumFirstTwelves(currentState) / 12);
  num = num === 0 ? (num = 12) : num;
  return num;
};

const sumFirstTwelves = (currentState) => {
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

const findFigureByHouse = (houseNum, list = figureHouseData) => {
  const figureMatch = list.find((element) => {
    if (element.house === houseNum) {
      return element;
    }
  });
  return figureMatch.name;
};

const findLineValue = (figure, line) => {
  const value = figure[line];
  return value;
};

export const geomanticTheme = createSlice({
  name: 'geomanticTheme',
  initialState,
  reducers: {
    mountTheme(state, action) {
      state.mother1.firstLine = 1;
      state.mother1.secondLine = 1;
      state.mother1.thirdLine = 2;
      state.mother1.fourthLine = 2;
      state.mother1.name = findFigureName(current(state.mother1));

      state.mother2.firstLine = 1;
      state.mother2.secondLine = 2;
      state.mother2.thirdLine = 1;
      state.mother2.fourthLine = 2;
      state.mother2.name = findFigureName(current(state.mother2));

      state.mother3.firstLine = 2;
      state.mother3.secondLine = 2;
      state.mother3.thirdLine = 1;
      state.mother3.fourthLine = 1;
      state.mother3.name = findFigureName(current(state.mother3));

      state.mother4.firstLine = 2;
      state.mother4.secondLine = 1;
      state.mother4.thirdLine = 2;
      state.mother4.fourthLine = 2;
      state.mother4.name = findFigureName(current(state.mother4));

      state.daughter1.firstLine = state.mother1.firstLine;
      state.daughter1.secondLine = state.mother2.firstLine;
      state.daughter1.thirdLine = state.mother3.firstLine;
      state.daughter1.fourthLine = state.mother4.firstLine;
      state.daughter1.name = findFigureName(current(state.daughter1));

      state.daughter2.firstLine = state.mother1.secondLine;
      state.daughter2.secondLine = state.mother2.secondLine;
      state.daughter2.thirdLine = state.mother3.secondLine;
      state.daughter2.fourthLine = state.mother4.secondLine;
      state.daughter2.name = findFigureName(current(state.daughter2));

      state.daughter3.firstLine = state.mother1.thirdLine;
      state.daughter3.secondLine = state.mother2.thirdLine;
      state.daughter3.thirdLine = state.mother3.thirdLine;
      state.daughter3.fourthLine = state.mother4.thirdLine;
      state.daughter3.name = findFigureName(current(state.daughter3));

      state.daughter4.firstLine = state.mother1.fourthLine;
      state.daughter4.secondLine = state.mother2.fourthLine;
      state.daughter4.thirdLine = state.mother3.fourthLine;
      state.daughter4.fourthLine = state.mother4.fourthLine;
      state.daughter4.name = findFigureName(current(state.daughter4));

      // niece1
      state.niece1.firstLine = isOdd(
        state.mother1.firstLine + state.mother2.firstLine
      );
      state.niece1.secondLine = isOdd(
        state.mother1.secondLine + state.mother2.secondLine
      );
      state.niece1.thirdLine = isOdd(
        state.mother1.thirdLine + state.mother2.thirdLine
      );
      state.niece1.fourthLine = isOdd(
        state.mother1.fourthLine + state.mother2.fourthLine
      );
      state.niece1.name = findFigureName(current(state.niece1));

      // niece2
      state.niece2.firstLine = isOdd(
        state.mother3.firstLine + state.mother4.firstLine
      );
      state.niece2.secondLine = isOdd(
        state.mother3.secondLine + state.mother4.secondLine
      );
      state.niece2.thirdLine = isOdd(
        state.mother3.thirdLine + state.mother4.thirdLine
      );
      state.niece2.fourthLine = isOdd(
        state.mother3.fourthLine + state.mother4.fourthLine
      );
      state.niece2.name = findFigureName(current(state.niece2));

      // niece3
      state.niece3.firstLine = isOdd(
        state.daughter1.firstLine + state.daughter2.firstLine
      );
      state.niece3.secondLine = isOdd(
        state.daughter1.secondLine + state.daughter2.secondLine
      );
      state.niece3.thirdLine = isOdd(
        state.daughter1.thirdLine + state.daughter2.thirdLine
      );
      state.niece3.fourthLine = isOdd(
        state.daughter1.fourthLine + state.daughter2.fourthLine
      );
      state.niece3.name = findFigureName(current(state.niece3));

      // niece4
      state.niece4.firstLine = isOdd(
        state.daughter3.firstLine + state.daughter4.firstLine
      );
      state.niece4.secondLine = isOdd(
        state.daughter3.secondLine + state.daughter4.secondLine
      );
      state.niece4.thirdLine = isOdd(
        state.daughter3.thirdLine + state.daughter4.thirdLine
      );
      state.niece4.fourthLine = isOdd(
        state.daughter3.fourthLine + state.daughter4.fourthLine
      );
      state.niece4.name = findFigureName(current(state.niece4));

      // leftWitness
      state.leftWitness.firstLine = isOdd(
        state.niece1.firstLine + state.niece2.firstLine
      );
      state.leftWitness.secondLine = isOdd(
        state.niece1.secondLine + state.niece2.secondLine
      );
      state.leftWitness.thirdLine = isOdd(
        state.niece1.thirdLine + state.niece2.thirdLine
      );
      state.leftWitness.fourthLine = isOdd(
        state.niece1.fourthLine + state.niece2.fourthLine
      );
      state.leftWitness.name = findFigureName(current(state.leftWitness));

      // rightWitness
      state.rightWitness.firstLine = isOdd(
        state.niece3.firstLine + state.niece4.firstLine
      );
      state.rightWitness.secondLine = isOdd(
        state.niece3.secondLine + state.niece4.secondLine
      );
      state.rightWitness.thirdLine = isOdd(
        state.niece3.thirdLine + state.niece4.thirdLine
      );
      state.rightWitness.fourthLine = isOdd(
        state.niece3.fourthLine + state.niece4.fourthLine
      );
      state.rightWitness.name = findFigureName(current(state.rightWitness));

      // judge
      state.judge.firstLine = isOdd(
        state.leftWitness.firstLine + state.rightWitness.firstLine
      );
      state.judge.secondLine = isOdd(
        state.leftWitness.secondLine + state.rightWitness.secondLine
      );
      state.judge.thirdLine = isOdd(
        state.leftWitness.thirdLine + state.rightWitness.thirdLine
      );
      state.judge.fourthLine = isOdd(
        state.leftWitness.fourthLine + state.rightWitness.fourthLine
      );
      state.judge.name = findFigureName(current(state.judge));

      // conciliator
      state.conciliator.firstLine = isOdd(
        state.judge.firstLine +
          findLineValue(
            state[findFigureByHouse(state.houseOfQuestion.num)],
            'firstLine'
          )
      );
      state.conciliator.secondLine = isOdd(
        state.judge.secondLine +
          findLineValue(
            state[findFigureByHouse(state.houseOfQuestion.num)],
            'secondLine'
          )
      );
      state.conciliator.thirdLine = isOdd(
        state.judge.thirdLine +
          findLineValue(
            state[findFigureByHouse(state.houseOfQuestion.num)],
            'thirdLine'
          )
      );
      state.conciliator.fourthLine = isOdd(
        state.judge.fourthLine +
          findLineValue(
            state[findFigureByHouse(state.houseOfQuestion.num)],
            'fourthLine'
          )
      );
      state.conciliator.name = findFigureName(current(state.conciliator));

      // part of fortune
      state.partOfFortune.house = setPartOfFortune(current(state));
    },
  },
});

export const { mountTheme } = geomanticTheme.actions;

export const getGeomanticTheme = (state) => state.geomanticTheme;
// export const getGeomanticTheme = (state) => state.geomanticTheme.value;

export default geomanticTheme.reducer;
