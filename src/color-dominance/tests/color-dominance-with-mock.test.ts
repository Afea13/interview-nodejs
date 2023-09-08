import fs from 'fs';
import Vibrant from 'node-vibrant';
import path from 'path';
import { extractDominantColor } from '../utils/color-extract';
import {readFileAsBinary} from "../utils/manage-image"
import { RGBColor } from '../common/color.interface';

//testing the mock for Vibrant

jest.mock('node-vibrant', () => {
    return {
      __esModule: true,
      default: jest.fn().mockImplementation(() => {
        return {
          getPalette: jest.fn().mockResolvedValue({
            Vibrant: { rgb: [123, 45, 67] },
            DarkVibrant: { rgb: [34, 56, 78] },
            LightVibrant: { rgb: [90, 12, 34] },
          }),
        };
      }),
    };
  });

describe('extractDominantColor', () => {
  it('should extract the dominant color from the palette', async () => {
    const imageFilePath = path.resolve(__dirname, '../../assets/pic.jpg');


    const imageBuffer = await readFileAsBinary(imageFilePath);
    const dominantColor:RGBColor = await extractDominantColor(imageBuffer);
    expect(Vibrant).toHaveBeenCalledWith(imageBuffer, { quality: 1 });
    expect(dominantColor).toEqual([123, 45, 67]);
    
   
  });
});