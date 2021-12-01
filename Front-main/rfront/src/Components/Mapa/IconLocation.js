import L from "leaflet";
import icon from "../../assets/Mapa/pinu.svg";

export const IconLocation = L.icon({
  iconUrl: icon,
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});
