import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import cards from "../../data/cardsData";
import "./MapParis.css";

// Correction du bug d'icônes Leaflet dans React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function MapParis() {
  return (
    <div className="map-container">
      <MapContainer center={[48.8566, 2.3522]} zoom={12} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {cards.map((place, index) => (
          <Marker key={index} position={[place.lat, place.lng]}>
            <Popup>
              <div className="popup">
                <img src={place.img} alt={place.alt} className="popup-thumb" />
                <strong>{place.title}</strong>
                <p className="popup-address">{place.address}</p>
                <p className="popup-desc">{place.desc}</p>
                <a
                  href={place.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-link"
                >
                  Voir le site →
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
