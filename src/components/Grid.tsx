import { FC, useEffect, useState } from "react";
import { getImages, Image } from "../util";
import Photo from "./Image";

const Grid: FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    setImages(getImages());
  }, []);

  console.log(images);

  return (
    <div className="container">
      {images.map((image, index) => {
        return (
          <Photo
            horizontalSpan={image.hSpan}
            verticalSpan={image.vSpan}
            imageSource={image.source}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Grid;
