import NavItem from "../components/NavItem";
import classnames from "classnames";

export default function Nav({ dir }) {
  const dirs = {
    horizontal: "justify-center lg:space-x-20 md:space-x-10 py-8",
    vertical: "flex-col space-y-6",
  };

  const pickedDir = dirs[dir];

  return (
    <ul className={classnames("flex", pickedDir)}>
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Contact</NavItem>
    </ul>
  );
}
