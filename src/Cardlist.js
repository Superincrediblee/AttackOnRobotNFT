import React from "react";
import Card from "./Card";
const Cardlist=({robots})=>{
    return(
      <div>
        { robots.map((user,i) => {
        return <Card key={i} 
        id={robots[i].id}
         name={robots[i].name} 
         regement={robots[i].regement} 
         rank={robots[i].rank}/>
    })}
      </div>
    )
}
export default Cardlist