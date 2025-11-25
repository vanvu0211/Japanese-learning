export default function Button({ children, onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}