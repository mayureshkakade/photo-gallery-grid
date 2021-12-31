import { FC } from "react";

interface ImageProps {
  horizontalSpan: number;
  verticalSpan: number;
  imageSource: string;
}

const Image: FC<ImageProps> = ({
  horizontalSpan,
  verticalSpan,
  imageSource
}) => {
  return (
    <div className={`photo h${horizontalSpan} v${verticalSpan}`}>
      <img className="photo-artwork" src={imageSource} alt="gallery item" />
      <div className="photo-overlay"></div>
    </div>
  );
};

export default Image;
