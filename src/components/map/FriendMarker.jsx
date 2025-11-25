import { Marker, Popup } from "react-leaflet";

export default function FriendMarker({ friend }) {
  return (
    <Marker position={[friend.latitude, friend.longitude]}>
      <Popup>
        <div className="text-center">
          <p className="font-bold text-purple-600">{friend.userName}</p>
          <p className="text-xs text-gray-500">Đang online</p>
        </div>
      </Popup>
    </Marker>
  );
}