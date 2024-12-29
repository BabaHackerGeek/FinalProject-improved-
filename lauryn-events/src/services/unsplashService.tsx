const UNSPLASH_BASE_URL: string = "https://api.unsplash.com/photos/random";

export const fetchUnsplashImages = async (query: string, count: number = 5): Promise<any[]> => {
  try {
    console.log(`${UNSPLASH_BASE_URL}?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&query=${query}&count=${count}`);
    const response: Response = await fetch(`${UNSPLASH_BASE_URL}?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&query=${query}&count=${count}`);
    if (!response.ok) {
      throw new Error("Failed to fetch images from Unsplash");
    }
    const data: any = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};