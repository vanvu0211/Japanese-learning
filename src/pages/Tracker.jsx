import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MapWrapper from "../components/map/MapWrapper";
import MyLocationMarker from "../components/map/MyLocationMarker";
import FriendMarker from "../components/map/FriendMarker";
import Card from "../components/ui/Card";
import connection from "../lib/signalr";

export default function Tracker() {
  const [searchParams] = useSearchParams();
  const groupId = searchParams.get("group") || "";
  const userName = decodeURIComponent(searchParams.get("name") || "Ẩn danh");

  const [friends, setFriends] = useState([]);
  const [myPosition, setMyPosition] = useState(null);

  useEffect(() => {
    if (!groupId || !userName) return;

    connection.start().then(() => {
      connection.invoke("JoinGroup", groupId, userName);

      connection.on("LocationUpdate", (data) => {
        setFriends(prev => {
          const filtered = prev.filter(f => f.connectionId !== data.connectionId);
          return [...filtered, data];
        });
      });

      connection.on("UserLeft", (id) => {
        setFriends(prev => prev.filter(f => f.connectionId !== id));
      });
    });

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setMyPosition([latitude, longitude]);
        connection.invoke("SendLocation", groupId, latitude, longitude, userName);
      },
      null,
      { enableHighAccuracy: true }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
      connection.stop();
    };
  }, [groupId, userName]);

  if (!groupId || !userName) {
    return <div className="p-10 text-center text-3xl text-red-600">Lỗi tham số!</div>;
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-purple-600 to-blue-600 relative overflow-hidden">
      <div className="h-full p-4">
        <Card className="h-full max-w-6xl mx-auto overflow-hidden">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 text-center">
              <h1 className="text-3xl font-bold">Tìm Nhau Ngày Tốt Nghiệp</h1>
              <p className="text-xl mt-2">Nhóm: <span className="font-mono">{groupId}</span></p>
              <p className="text-2xl mt-3">
                Có <span className="font-bold text-yellow-300">{friends.length + 1}</span> người đang online
              </p>
            </div>

            {/* Bản đồ */}
            <div className="flex-1 relative">
              <MapWrapper center={myPosition}>
                <MyLocationMarker position={myPosition} userName={userName} />
                {friends.map(friend => (
                  <FriendMarker key={friend.connectionId} friend={friend} />
                ))}
              </MapWrapper>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}