export interface Image {
  source: string;
  hSpan: number;
  vSpan: number;
}

const IMAGE_URL = "https://source.unsplash.com/random?sig=";
const IMAGE_COUNT = 50;

const getRandomNumber = (limit: number): number => {
  const random = Math.floor(Math.random() * limit) + 1;
  return random;
};

export const getImages = (): Image[] => {
  const images = Array.from(
    { length: IMAGE_COUNT },
    (_, index): Image => {
      return {
        source: `${IMAGE_URL}${index + 1}`,
        hSpan: getRandomNumber(4),
        vSpan: getRandomNumber(4)
      };
    }
  );
  const imagesToFillHoles = Array.from(
    { length: 20 },
    (_, index): Image => {
      return {
        source: `${IMAGE_URL}${index + 1}`,
        hSpan: 1,
        vSpan: 1
      };
    }
  );

  return images.concat(imagesToFillHoles);
};
