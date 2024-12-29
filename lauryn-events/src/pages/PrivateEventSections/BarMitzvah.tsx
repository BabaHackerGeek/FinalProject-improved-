import React, { useState, useEffect, FC } from 'react';
import { fetchUnsplashImages } from '../../services/unsplashService';

interface UnsplashImage {
  urls: {
    small: string;
  };
  alt_description?: string;
}

const BarMitzvah: FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);

  useEffect(() => {
    const fetchImages = async (): Promise<void> => {
      try {
        const data: UnsplashImage[] = await fetchUnsplashImages('bar mitzvah');
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Bar/Bat Mitzvah</h2>
      <p>Celebrate this important milestone with elegance and tradition.</p>
      <div className="image-carousel">
        {images.map((image: UnsplashImage, index: number) => (
          <img key={index} src={image.urls.small} alt={image.alt_description || 'Bar/Bat Mitzvah'} />
        ))}
      </div>
    </div>
  );
};

export default BarMitzvah;