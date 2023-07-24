
import React from 'react'
import SessionDisplay from './SessionDisplay'
import './styles.scss'
import Spinner from './Spinner/Spinner'
class Lifecycle extends React.Component {
   state = {lat:null, errorMessage: ''}
    componentDidMount() {
         window.navigator.geolocation.getCurrentPosition(
            position =>{
             this.setState({lat: position.coords.latitude})},
             err =>  {
                this.setState({errorMessage:err.message})
             }
         )
    }
    //  render 
     render () {
         if(this.state.errorMessage && !this.state.lat) {
             return <div>Error: {this.state.errorMessage}</div>
         }
         if(!this.state.errorMessage && this.state.lat) {
            return <SessionDisplay lat={this.state.lat}/>
        }
        return <Spinner/>
     }
}
 export default Lifecycle
