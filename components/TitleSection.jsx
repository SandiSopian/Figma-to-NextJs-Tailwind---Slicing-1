import classnames from "classnames";

export default function TitleSection({ children, className }) {
  const addClassName = className ? ` ${className}` : "";

  return <h1 className={classnames("text-4xl font-light mb-5 opacity-80", addClassName)}>{children}</h1>;
}
