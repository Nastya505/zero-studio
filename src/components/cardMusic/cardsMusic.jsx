import React from 'react'
import data from "../../utils/data.json"
import styles from "./cardMusic.module.css"

import CardMusic from './cardMusic'
const CardsMusic = () => {
    const [music, setMusic] = React.useState([]);
    const [activeId, setActiveId] = React.useState(null);


    const getMusic = () => {
        try{
            const res = data.projects;
            setMusic(res);
        }catch(error){
            console.log(error)
        }
    }

    React.useEffect(() => {
        getMusic()
    }, [])


  return (
    <div className={styles.cards}>
        {music.map(m => 
           <CardMusic key={m.id} id={m.id} music={m} activeId={activeId} setActiveId={setActiveId}/>
        )}
    </div>
  )
}

export default CardsMusic