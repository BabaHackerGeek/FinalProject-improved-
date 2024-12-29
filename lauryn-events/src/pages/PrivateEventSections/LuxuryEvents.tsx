import React, { useState, useEffect, FC } from 'react';
import { fetchUnsplashImages } from '../../services/unsplashService';

interface UnsplashImage {
  urls: {
    small: string;
  };
  alt_description?: string;
}

const LuxuryEvents: FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);

  useEffect(() => {
    const fetchImages = async (): Promise<void> => {
      try {
        const data: UnsplashImage[] = await fetchUnsplashImages('luxury hotel events');
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Luxury Events in Hotels</h2>
      <p>Indulge in luxury with our high-end event planning services for exclusive venues.</p>
      <div className="image-carousel">
        {images.map((image: UnsplashImage, index: number) => (
          <img key={index} src={image.urls.small} alt={image.alt_description || 'Luxury Event'} />
        ))}
      </div>
    </div>
  );
};

export default LuxuryEvents;