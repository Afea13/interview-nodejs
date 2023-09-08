
import path from 'path';
import {readFileAsBinary} from "../utils/manage-image"
import { extractDominantColor } from '../utils/color-extract';
import { RGBColor } from '../common/color.interface';
import "./matchers/arrayEqualValuesMatcher"

describe('Image Dominant Color Tests', () => {
    
    const FileName="pic.jpg";
    const FileExpectedDominance:RGBColor=[60, 68, 204];

    const imageFilePath = path.resolve(__dirname, `../../assets/${FileName}`);
    let imageBuffer:Buffer;

    beforeEach(async ()=>{
        // store the file in buffer for all subsequent tests
        imageBuffer = await readFileAsBinary(imageFilePath);
    })

    it('the file is read and buffered ', async () => {     
         
         expect(imageBuffer).not.toBeNull() ;  
    })
     
    it('should extract the correct dominant color from binary code of image',async ()=>{
        const dominantColor:RGBColor = await extractDominantColor(imageBuffer); 
      
        // Assert that the extracted dominantColor is an array of three numbers
        /*expect(Array.isArray(dominantColor)).toBe(true);
        expect(dominantColor.length).toBe(3);         */
        expect(dominantColor).toHaveEqualValues(FileExpectedDominance);

    });
});



