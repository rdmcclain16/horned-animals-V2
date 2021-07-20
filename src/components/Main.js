import React from 'react';
import HornedBeast from './HornedBeast';
// import Parrot from '../images/parrot-2756488_1920.jpg';
import { animalData } from '../data';

function Main() {
  // console.log(animalData);
  return (
    <>
      {/* <HornedBeast title="Parrot" imageURL={Parrot} desc="Colorful, loud, trpoical bird."/> */}
      {/* <HornedBeast/> */}

      {animalData.map((data, key) => {
        // console.log(data.title);
        return (
          <div key={key}>
            <HornedBeast
              key={key}
              image_url={data.image_url}
              title={data.title}
              description={data.description}
            />
          </div>
        );
      })}
    </>
  );
}

export default Main;
