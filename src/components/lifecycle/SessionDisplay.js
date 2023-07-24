import React from "react"
import './styles.scss'
 const seasonConfig  = {
     summer : {
         text: 'Nóng quá, thèm VitaminC!    ',
         iconName: 'sun'
     },
     winter : {
        text: 'Trời lạnh, nó lạnh ',
        iconName: 'snowflake'
    }
 }
  const getSeason = (lat, month) => {
     if(month< 2&& month >9   ) {
         return lat > 0 ? 'summer' :'winter'
     }
      else {
         return lat > 0 ? 'winter' : 'summer'
      }
  }
const SessionDisplay = (props) => {
    const session = getSeason(props.lat, new Date().getMonth())
    console.log(session);
     const {text, iconName} = seasonConfig[session]
     return (
       
            <div className={`season-display ${session}` }>
            <i className={`icon-left massive ${iconName} icon` }/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon` }/>
         </div>
     )
}
 export default SessionDisplay