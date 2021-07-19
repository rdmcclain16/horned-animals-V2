import React from 'react';
import HornedBeast from './HornedBeast';
import Parrot from '../images/parrot-2756488_1920.jpg';

function Main() {
  return (
    <>
      <HornedBeast title="Parrot" imageURL={Parrot} desc="Colorful, loud, trpoical bird."/>
      <HornedBeast/>
    </>
  );
}

export default Main;
