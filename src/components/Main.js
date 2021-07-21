import React from 'react';
import HornedBeast from './HornedBeast';
import { animalData } from '../data';

function Main() {
  // console.log(animalData);
  return (
    <>
      {animalData.map((data, key) => {
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
