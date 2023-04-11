import { useParams } from 'react-router-dom'
import { useState ,useEffect } from 'react';
import React from 'react'
const ChampionDetail = () => {

  const params = useParams();
  const [champ,setChamp] = useState({})
  const [img,setImg] = useState({})

  const getChamp = async () => {
    const result = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.7.1/data/vn_VN/champion/${params.id}.json`)
    const data = await result.json();
    setChamp(data.data[params.id])
    console.log("data",data.data[params.id])
  }

  const getImgChamp = async () => {
    const result = await fetch(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.id}_0.jpg`)
setImg(result.url);
  }
  
  useEffect(()=>{
    getChamp()
    getImgChamp()
  })
  return (
    <>
    <div className="champion-detail">
        <div className="background-img">
          <img src={img} alt="pic" /> 
        </div>
        
        <div className="container">
          <div className="img-champ">
            <img src={img} alt="" />
            <div className="name-champ">
              <span>{champ.title}</span>
              <span>{champ.name}</span>
            </div>
          </div>
          <div className="infor-champ">
            <div className="infor-lore-champ">
              <p>{champ.lore}</p>
            </div>

          </div>
        </div>    
    </div>
    </>
  )
}

export default ChampionDetail