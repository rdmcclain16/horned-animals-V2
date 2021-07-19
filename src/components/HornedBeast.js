import React from 'react';

function HornedBeast(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <img height="500px" alt="bird picture" title="Picture of a bird" src={props.imageURL}/>;
      <p>{props.desc}</p>
    </>
  );
}

export default HornedBeast;
