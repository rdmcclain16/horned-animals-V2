import React from 'react';

function HornedBeast({image_url, title, description}) {
  console.log(title);
  return (
    <>
      <h2>{title}</h2>
      <img height="500px" alt={title} title="Picture of a bird" src={image_url}/>
      <p>{description}</p>
    </>
  );
}

export default HornedBeast;
