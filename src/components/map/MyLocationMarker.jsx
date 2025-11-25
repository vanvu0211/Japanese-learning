import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const myIcon = L.divIcon({
  className: "my-location-pulse",
  html: `
    <div style="
      background: #10b981;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 4px solid white;
      box-shadow: 0 0 20px #10b981;
    "></div>
  `,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
});

export default function MyLocationMarker({ position, userName }) {
  if (!position) return null;

  return (
    <Marker position={position} icon={myIcon}>
      <Popup>
        <div className="text-center">
          <p className="font-bold text-green-600">Bạn đang ở đây</p>
          <p className="text-sm">{userName}</p>
        </div>
      </Popup>
    </Marker>
  );
}