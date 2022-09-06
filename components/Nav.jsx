import NavItem from "../components/NavItem";

export default function Nav() {
  return (
    <ul className="flex justify-center space-x-20 py-8">
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Contact</NavItem>
    </ul>
  );
}
