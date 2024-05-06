import React from 'react'
import data from "../../utils/data.json"
import CardTeam from './cardTeam';

import styles from "./cardTeam.module.css"
const CardsTeam = () => {
    const [team, setTeam] = React.useState([]);

    const getTeam = () => {
        try{
            const res = data.team;
            setTeam(res);
        }catch(error){
            console.log(error)
        }
    }

    React.useEffect(() => {
        getTeam()
    }, [])


  return (
    <div className={styles.wrapper}>
        {team.map(people => 
           <CardTeam key={people.id} people={people}/>
        )}
    </div>
  )
}

export default CardsTeam