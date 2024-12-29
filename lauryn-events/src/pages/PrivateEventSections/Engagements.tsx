import React, { useState, useEffect, FC } from 'react';
import { fetchUnsplashImages } from '../../services/unsplashService';

interface Image {
  urls: {
    small: string;
  };
  alt_description?: string;
}

const Engagements: FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async (): Promise<void> => {
      try {
        const data: Image[] = await fetchUnsplashImages('engagement');
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Engagements</h2>
      <p>Celebrate your engagement with a touch of elegance and unforgettable moments.</p>
      <div className="image-carousel">
        {images.map((image: Image, index: number) => (
          <img key={index} src={image.urls.small} alt={image.alt_description || 'Engagement Event'} />
        ))}
      </div>
    </div>
  );
};

export default Engagements;