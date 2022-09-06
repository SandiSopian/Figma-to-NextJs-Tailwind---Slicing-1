import classnames from "classnames";

export default function TitleSection({ children, className }) {
  const addClassName = className ? ` ${className}` : "";

  return <h1 className={classnames("text-5xl font-bold  mb-5", addClassName)}>{children}</h1>;
}
