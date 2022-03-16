import { createSlice, current } from '@reduxjs/toolkit';
import { initialStateData } from '../../data/initialStateData';
import {
  isOdd,
  setPartOfFortune,
  findFigureByHouse,
  findLineValue,
  setFigures,
} from './geomanticThemeFunctions';

const initialState = initialStateData;

export const geomanticTheme = createSlice({
  name: 'geomanticTheme',
  initialState,
  reducers: {
    mountTheme(state, action) {
      state.mother1 = setFigures(1, 1, 2, 2);
      state.mother2 = setFigures(1, 2, 1, 2);
      state.mother3 = setFigures(2, 2, 1, 1);
      state.mother4 = setFigures(2, 1, 2, 2);

      // daughter
      state.daughter1 = setFigures(
        state.mother1.firstLine,
        state.mother2.firstLine,
        state.mother3.firstLine,
        state.mother4.firstLine
      );

      state.daughter2 = setFigures(
        state.mother1.secondLine,
        state.mother2.secondLine,
        state.mother3.secondLine,
        state.mother4.secondLine
      );

      state.daughter3 = setFigures(
        state.mother1.thirdLine,
        state.mother2.thirdLine,
        state.mother3.thirdLine,
        state.mother4.thirdLine
      );

      state.daughter4 = setFigures(
        state.mother1.fourthLine,
        state.mother2.fourthLine,
        state.mother3.fourthLine,
        state.mother4.fourthLine
      );

      // niece
      state.niece1 = setFigures(
        isOdd(state.mother1.firstLine + state.mother2.firstLine),
        isOdd(state.mother1.secondLine + state.mother2.secondLine),
        isOdd(state.mother1.thirdLine + state.mother2.thirdLine),
        isOdd(state.mother1.fourthLine + state.mother2.fourthLine)
      );

      state.niece2 = setFigures(
        isOdd(state.mother3.firstLine + state.mother4.firstLine),
        isOdd(state.mother3.secondLine + state.mother4.secondLine),
        isOdd(state.mother3.thirdLine + state.mother4.thirdLine),
        isOdd(state.mother3.fourthLine + state.mother4.fourthLine)
      );

      state.niece3 = setFigures(
        isOdd(state.daughter1.firstLine + state.daughter2.firstLine),
        isOdd(state.daughter1.secondLine + state.daughter2.secondLine),
        isOdd(state.daughter1.thirdLine + state.daughter2.thirdLine),
        isOdd(state.daughter1.fourthLine + state.daughter2.fourthLine)
      );

      state.niece4 = setFigures(
        isOdd(state.daughter3.firstLine + state.daughter4.firstLine),
        isOdd(state.daughter3.secondLine + state.daughter4.secondLine),
        isOdd(state.daughter3.thirdLine + state.daughter4.thirdLine),
        isOdd(state.daughter3.fourthLine + state.daughter4.fourthLine)
      );

      // rightWitness, lefttWitness and judge
      state.rightWitness = setFigures(
        isOdd(state.niece1.firstLine + state.niece2.firstLine),
        isOdd(state.niece1.secondLine + state.niece2.secondLine),
        isOdd(state.niece1.thirdLine + state.niece2.thirdLine),
        isOdd(state.niece1.fourthLine + state.niece2.fourthLine)
      );

      state.leftWitness = setFigures(
        isOdd(state.niece3.firstLine + state.niece4.firstLine),
        isOdd(state.niece3.secondLine + state.niece4.secondLine),
        isOdd(state.niece3.thirdLine + state.niece4.thirdLine),
        isOdd(state.niece3.fourthLine + state.niece4.fourthLine)
      );

      state.judge = setFigures(
        isOdd(state.rightWitness.firstLine + state.leftWitness.firstLine),
        isOdd(state.rightWitness.secondLine + state.leftWitness.secondLine),
        isOdd(state.rightWitness.thirdLine + state.leftWitness.thirdLine),
        isOdd(state.rightWitness.fourthLine + state.leftWitness.fourthLine)
      );

      // conciliator
      state.conciliator = setFigures(
        isOdd(
          state.judge.firstLine +
            findLineValue(
              state[findFigureByHouse(state.houseOfQuestion.num)],
              'firstLine'
            )
        ),
        isOdd(
          state.judge.secondLine +
            findLineValue(
              state[findFigureByHouse(state.houseOfQuestion.num)],
              'secondLine'
            )
        ),
        isOdd(
          state.judge.thirdLine +
            findLineValue(
              state[findFigureByHouse(state.houseOfQuestion.num)],
              'thirdLine'
            )
        ),
        isOdd(
          state.judge.fourthLine +
            findLineValue(
              state[findFigureByHouse(state.houseOfQuestion.num)],
              'fourthLine'
            )
        )
      );

      // part of fortune
      state.partOfFortune.house = setPartOfFortune(current(state));
    },
  },
});

export const { mountTheme } = geomanticTheme.actions;

export const getGeomanticTheme = (state) => state.geomanticTheme;
// export const getGeomanticTheme = (state) => state.geomanticTheme.value;

export default geomanticTheme.reducer;
