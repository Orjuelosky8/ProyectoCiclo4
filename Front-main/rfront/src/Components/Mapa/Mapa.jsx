import React, {useState, useEffect} from 'react'
import MapView from './ViewMap'
import { useLocation} from 'react-router-dom'
function Mapa (){

    const location = useLocation();
    const data = location.state
 
    
    
    // const [state, setstate] = useState({
    //     longitud:4.627354,
    //     latitud:-74.082807,
    //     zoom: 13,
    //     minZoom: 5
        
    // })

    // useEffect(()=>{
    //     navigator.geolocation.getCurrentPosition(
    //         function(position){
    //             setstate({
    //                 longitud:position.coords.longitude,
    //                 latitud: position.coords.latitude
                    
    //             })
                

    //         },
    //         function(error){
    //             console.log(error)
    //         },
    //         {
    //             enableHighAccuracy: true
    //         }
    //     );
    // })
    
    return (
        <div>
            <header className='header'></header>
            <MapView lng={data.longitud} lat={data.latitud} zoom={data.zoom} minZoom ={data.minZoom} />
            
        </div>
    )
}

export default Mapa
