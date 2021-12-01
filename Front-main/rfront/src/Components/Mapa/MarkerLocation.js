import React from "react";
import '../../Components/Mapa/Map.css'

import {Marker, Popup} from 'react-leaflet'
import {IconLocation} from "./IconLocation";

function MarkerLocation (lng){
    
    return (
        <Marker position={[lng.lng,lng.lat]} icon={IconLocation} >
            <Popup>
                <h1>Tu estas aqui</h1>
            </Popup>
        </Marker>
    );
}

export default MarkerLocation