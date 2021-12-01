import React, {useState, useEffect,Fragment} from 'react'
import {MapContainer,TileLayer, MapConsumer} from 'react-leaflet'
import MarkerShop from './MarkersShops';
import MarkerLocation from './MarkerLocation';
import "leaflet/dist/leaflet.css"
import './Map.css';
import 'leaflet';
import img from '../../assets/Mapa/tienda.jpg'


import {lugares} from '../../assets/Mapa/places.json'


function MapView(props){

    const lng = props.lng
    const lat = props.lat

    
    
    return (
        
        <Fragment>
            <MapContainer center={[lat,lng]} zoom={props.zoom} minZoom={props.minZoom}>
            {/* <MapConsumer >
            {(map) => {
                map.flyTo([lat,lng])
                botonLocation.add(map);
             return null
            }}
            </MapConsumer> */}
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <MarkerLocation  lng={lat} lat={lng}/>
            <MarkerShop lugares={lugares}/>
              
            </MapContainer>
            
        </Fragment>
        
    )
};

export default MapView