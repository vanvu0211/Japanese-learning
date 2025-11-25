import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function Home() {
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    if (name.trim() && group.trim()) {
      navigate(`/track?group=${group.toUpperCase()}&name=${encodeURIComponent(name)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Tìm Nhau Ngày Tốt Nghiệp
          </h1>
          <p className="text-gray-600 text-lg">Đừng để lạc nhau trong ngày quan trọng!</p>
        </div>

        <div className="space-y-6">
          <Input
            placeholder="Nhập tên của bạn"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Mã lớp / mã nhóm (VD: DH21CNTT, K45)"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            style={{ textTransform: "uppercase" }}
          />

          <Button
            onClick={handleJoin}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl py-5"
          >
            Vào ngay thôi nào!
          </Button>
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Hoặc quét QR của bạn bè để vào chung nhóm
        </p>
      </div>
    </div>
  );
}