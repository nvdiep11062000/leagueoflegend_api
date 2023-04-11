import React from 'react'
// import { useState } from 'react';
// import ChampionDetail from './ChampionDetail';
const Champion = ({id,name,tags,image,objectchamp}) => {
  // const [deatailChamp,setDetailChamp] = useState([])
  // const handleActiveID = (name) => {
  //   console.log(name);
  //   console.log(objectchamp);
  //   setDetailChamp(objectchamp)
  // }

  return (
    <>
    <div className="card" >  
        <img src={image} alt="Champion"></img>
        <div className="card_name">
         <span>{name}</span>
        </div>                   
    </div>
    </>
  )
}

export default Champion