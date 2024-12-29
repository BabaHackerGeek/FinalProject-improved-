import React, { useState, useEffect, FC } from 'react';
import { fetchUnsplashImages } from '../../services/unsplashService';

interface UnsplashImage {
  urls: {
    small: string;
  };
  alt_description?: string;
}

const Weddings: FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);

  useEffect(() => {
    const fetchImages = async (): Promise<void> => {
      try {
        const data: UnsplashImage[] = await fetchUnsplashImages('wedding');
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Weddings</h2>
      <p>Make your wedding a day to remember with our customized planning services.</p>
      <div className="image-carousel">
        {images.map((image: UnsplashImage, index: number) => (
          <img key={index} src={image.urls.small} alt={image.alt_description || 'Wedding Event'} />
        ))}
      </div>
    </div>
  );
};

export default Weddings;