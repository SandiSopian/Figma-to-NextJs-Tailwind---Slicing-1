import classnames from "classnames";

export default function Logo({ logoClassName }) {
  const addLogoClassName = logoClassName ? ` ${logoClassName}` : "";

  return (
    <div className="w-full w-16">
      <img src="/logo.png" alt="logo" className={classnames(addLogoClassName)} />
    </div>
  );
}
