export default function CardHeader({ children }) {
  return (
    <div className="px-6 pt-6 pb-4 border-b border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800">{children}</h3>
    </div>
  );
}