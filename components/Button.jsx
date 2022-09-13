export default function Button({ children }) {
  return <button className="bg-black hover:bg-green-500 text-white font-semibold py-2 px-4 border-b-8 border-r-8 border-green-500 hover:border-gray-800 rounded transition font-mono lg:text-lg">{children}</button>;
}
