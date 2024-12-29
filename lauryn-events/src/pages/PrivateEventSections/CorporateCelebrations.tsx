import React, { useState, useEffect, FC } from 'react';
import { fetchUnsplashImages } from '../../services/unsplashService';

interface UnsplashImage {
  urls: {
    small: string;
  };
  alt_description?: string;
}

const CorporateCelebrations: FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);

  useEffect(() => {
    const fetchImages = async (): Promise<void> => {
      try {
        const data: UnsplashImage[] = await fetchUnsplashImages('corporate celebrations');
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Corporate Celebrations</h2>
      <p>Host impactful corporate events with professional planning and execution.</p>
      <div className="image-carousel">
        {images.map((image: UnsplashImage, index: number) => (
          <img key={index} src={image.urls.small} alt={image.alt_description || 'Corporate Celebration'} />
        ))}
      </div>
    </div>
  );
};

export default CorporateCelebrations;