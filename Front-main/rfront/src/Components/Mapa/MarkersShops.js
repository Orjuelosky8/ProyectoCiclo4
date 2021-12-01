import React from "react";
import '../../Components/Mapa/Map.css'

import MarkerShop from "./MarkerShop";
// import infoDrawer from "./drawer";


function MarkersShop (props){

    const {lugares} = props

    const markers = lugares.map((place) =>(
     
      <MarkerShop place={place}></MarkerShop>
    ))

    return markers;
}

export default MarkersShop