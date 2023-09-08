import Vibrant from 'node-vibrant';
import { RGBColor } from '../common/color.interface';


export const extractDominantColor = async (imageBuffer: Buffer):Promise<RGBColor> => {
    const vibrant = new Vibrant(imageBuffer, { quality: 1 });

    return vibrant.getPalette()
    .then((palette) => {
      if (palette) {
        const colorCounts: Record<string, number> = {};
        const swatches = [palette.Vibrant, palette.DarkVibrant, palette.LightVibrant];

        // Count the occurrence of each color in the swatches
        for (const swatch of swatches) {
          if (swatch) {
            const rgb = swatch.rgb.join(',');
            colorCounts[rgb] = (colorCounts[rgb] || 0) + 1;
          }
        }

        // Find the color with the highest count (dominant color)
        let dominantColor: string | null = null;
        let maxCount = 0;
        for (const rgb in colorCounts) {
          if (colorCounts[rgb] > maxCount) {
            maxCount = colorCounts[rgb];
            dominantColor = rgb;
          }
        }

        if (dominantColor) {
       
          const rgbValues = dominantColor.split(',').map(Number) as RGBColor;
          return rgbValues;
        }
      }

     
      return [0, 0, 0] as RGBColor; // Default to black RGB color
    })
    .catch((error) => {
      console.error('Error extracting dominant color:', error);
      throw error; // Rethrow the error for further handling
    });
  };