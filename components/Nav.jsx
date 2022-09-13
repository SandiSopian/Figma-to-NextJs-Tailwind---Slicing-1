import NavItem from "../components/NavItem";
import classnames from "classnames";

export default function Nav({ dir }) {
  const dirs = {
    horizontal: "justify-center mr-8 space-x-6 md:space-x-10 lg:space-x-20 py-8",
    vertical: "flex-col space-y-6",
  };

  const pickedDir = dirs[dir];

  return (
    <ul className={classnames("flex hover:cursor-pointer", pickedDir)}>
      <NavItem href="/#hero">Home</NavItem>
      <NavItem href="/#benefit">About</NavItem>
      <NavItem href="/#download">Download</NavItem>
    </ul>
  );
}
