import React from 'react'
import { useState, useEffect,createContext } from 'react'
import axios from 'axios'
import Champion from '../components/Champion'
import { imagechampapi } from '../data/api'
import "../style/Champion.scss"
import { Link } from 'react-router-dom'
const ChampionShow = () => {
  const API_LOL = "https://ddragon.leagueoflegends.com/cdn/13.7.1/data/vn_VN/champion.json"
  const API_Champ = "https://ddragon.leagueoflegends.com/cdn/13.7.1/data/vn_VN/champion/"
  const [championList,setchampionList] = useState([]);

  useEffect(() => {
    getAllChamp();
  },[]);


  const getAllChamp = async() => {
    const response = await axios
          .get(API_LOL)
          .catch((err) => console.log("Erro:" ,err));
    // console.log("allchamp >>",response.data.data);
    // console.log(">>allchamp2", Object.values(response.data.data));
    getChampData(Object.values(response.data.data));
  }

  const getChampData = async(result) => {
    const champarr = [];
    const response = await Promise.all(
      result.map((champItem) => {
        return axios(API_Champ + `${champItem.id}.json`)
        .then((result) => {
          champarr.push(result.data.data[champItem.id])
        });
      })
    );
    // console.log("champarr>>>>",champarr);
    setchampionList(champarr);
  };
  return (
    <>
      <h2>Với hơn 150 vị tướng, chắc chắn bạn sẽ tìm được lựa chọn phù hợp với lối chơi của mình. Hãy luyện một, hoặc tất cả cũng được nhé!</h2>
      <div className="cards">
                {championList.map((champ) => (
                  <Link key={champ.id} to={`/championdetails/${champ.name}`}>
                    <Champion                    
                      id={championList.findIndex((p) => p.id === champ.id) + 1}
                      name={champ.name}
                      image={`${imagechampapi}/${champ.id}_0.jpg`}
                      tags={champ.tags}
                      objectchamp={champ}
                    />
                  </Link>
                ))}
      </div>   
    </>
  )
}

export default ChampionShow