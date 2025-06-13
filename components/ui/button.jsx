export function Button({ className = '', children }) {
  return <button className={`px-4 py-2 rounded font-semibold ${className}`}>{children}</button>;
}