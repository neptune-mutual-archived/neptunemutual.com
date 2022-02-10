export const CodeButtonComponent = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`font-sora text-xs py-2 px-3 rounded-3xl mr-4 ${className}`}
    >
      {children}
    </button>
  );
};
