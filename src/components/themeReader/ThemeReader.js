import React from 'react';
import { figureInterpretationData as data } from '../../data/figureInterpretationData';
import './themeReader.css';

export const ThemeReader = (props) => {
  const { figures } = props;

  return (
    <div>
      <form>
        <button type="submit">Intepretation</button>
      </form>

      <div className="interpretation-table">
        <table>
          <tbody>
            <tr>
              <th scope="row">Maison 1</th>
              <td>
                {data[figures.mother2.name] &&
                  data[figures.mother2.name].maison_1}
              </td>
            </tr>
            <tr>
              <th scope="row">Maison 2</th>
              <td>
                {data[figures.daughter2.name] &&
                  data[figures.daughter2.name].maison_1}
              </td>
            </tr>
            <tr>
              <th scope="row">Maison 3</th>
              <td>
                {data[figures.niece2.name] &&
                  data[figures.niece2.name].maison_1}
              </td>
            </tr>
            <tr>
              <th scope="row">Maison 4</th>
              <td>
                {data[figures.mother3.name] &&
                  data[figures.mother3.name].maison_1}
              </td>
            </tr>
            <tr>
              <th scope="row">Maison 5</th>
              <td>
                {data[figures.daughter3.name] &&
                  data[figures.daughter3.name].maison_1}
              </td>
            </tr>
            <tr>
              <th scope="row">Maison 6</th>
              <td>
                {data[figures.niece3.name] &&
                  data[figures.niece3.name].maison_1}
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <th scope="row">Maison 7</th>
              <td>
                {data[figures.mother4.name] &&
                  data[figures.mother4.name].maison_1}
              </td>
            </tr>
            <tr>
              <th scope="row">Maison 8</th>
              <td>
                {data[figures.daughter4.name] &&
                  data[figures.daughter4.name].maison_1}
              </td>
            </tr>
            <tr>
              <th scope="row">Maison 9</th>
              <td>
                {data[figures.niece4.name] &&
                  data[figures.niece4.name].maison_1}
              </td>
            </tr>
            <tr>
              <th scope="row">Maison 10</th>
              <td>
                {data[figures.mother1.name] &&
                  data[figures.mother1.name].maison_1}
              </td>
            </tr>
            <tr>
              <th scope="row">Maison 11</th>
              <td>
                {data[figures.daughter1.name] &&
                  data[figures.daughter1.name].maison_1}
              </td>
            </tr>
            <tr>
              <th scope="row">Maison 12</th>
              <td>
                {data[figures.niece1.name] &&
                  data[figures.niece1.name].maison_1}
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th scope="row">Témoin droit</th>
              <td>
                {data[figures.rightWitness.name] &&
                  data[figures.rightWitness.name].maison_1}
              </td>
            </tr>
            <tr>
              <th scope="row">Témoin Gauche</th>
              <td>
                {data[figures.leftWitness.name] &&
                  data[figures.leftWitness.name].maison_1}
              </td>
            </tr>
            <tr>
              <th scope="row">Juge</th>
              <td>
                {data[figures.judge.name] && data[figures.judge.name].maison_1}
              </td>
            </tr>
            <tr>
              <th scope="row">Conciliator</th>
              <td>
                {data[figures.conciliator.name] &&
                  data[figures.conciliator.name].general}
              </td>
            </tr>
            <tr>
              <th scope="row">Part de fortune</th>
              <td>
                {data[figures.partOfFortune.name] &&
                  data[figures.partOfFortune.name].maison_1}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
