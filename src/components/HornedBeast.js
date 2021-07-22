import React from 'react';
import { BsFillHeartFill} from 'react-icons/bs';

const { useState } = React;

function HornedBeast({image_url, title, description}) {
  const handleClick = () => {
    setCounter(counter + 1);
  };

  const [counter, setCounter] = useState(0);

  return (
    <>
      <h2>{title}</h2>

      <p>{description}</p>

      <button onClick={handleClick}>
        <img 
          height="500px" 
          alt={title} 
          onClick={handleClick}
          title="Picture of a bird" 
          src={image_url}>
        </img>
        <BsFillHeartFill />
        {counter}
        {/* <div style={{backgroundImage: `url(${image_url})`, objectFit: "cover", height: "500px", width: "500px"}}>
          {counter}
        </div> */}
      </button>
    </>
  );
}

export default HornedBeast;
