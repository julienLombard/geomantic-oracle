import React from 'react';

export const Figure = (props) => {
  const { id, figure } = props;
  return (
    <div className="figure-div" id={id}>
      <p className="figure-points">{figure.firstLine === 1 ? ' . ' : '. .'}</p>
      <p className="figure-points">{figure.secondLine === 1 ? ' . ' : '. .'}</p>
      <p className="figure-points">{figure.thirdLine === 1 ? ' . ' : '. .'}</p>
      <p className="figure-points">{figure.fourthLine === 1 ? ' . ' : '. .'}</p>
      <p className="figure-name">{figure.name}</p>
    </div>
  );
};
