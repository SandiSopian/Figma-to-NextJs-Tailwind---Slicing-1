import classnames from "classnames";

export default function ImgAsset({ image, imageClassName }) {
  const addImageClassName = imageClassName ? ` ${imageClassName}` : "";

  return (
    <picture>
      <img src={image} className={classnames(addImageClassName)} />
    </picture>
  );
}
