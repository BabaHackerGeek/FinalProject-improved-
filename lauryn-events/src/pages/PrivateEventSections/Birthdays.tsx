import React, { FC, useState, useEffect } from 'react';
import { fetchUnsplashImages } from '../../services/unsplashService';

interface UnsplashImage {
  urls: {
    small: string;
  };
  alt_description?: string;
}

const Birthdays: FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);

  useEffect(() => {
    const fetchImages = async (): Promise<void> => {
      try {
        const data: UnsplashImage[] = await fetchUnsplashImages('birthday event');
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Birthdays</h2>
      <p>Make your birthday celebrations unforgettable with our custom event services.</p>
      <div className="image-carousel">
        {images.map((image: UnsplashImage, index: number) => (
          <img key={index} src={image.urls.small} alt={image.alt_description || 'Birthday Event'} />
        ))}
      </div>
    </div>
  );
};

export default Birthdays;