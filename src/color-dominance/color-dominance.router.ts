import express, { Request, Response } from "express";
import { extractDominantColor } from "./utils/color-extract";
import { RGBColor } from "./common/color.interface";
const multer = require('multer');


/**
 * Router Definition
 */
export const colorDominanceRouter = express.Router();

/**
 * Controller Definitions
 */

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }); // Destination folder for uploaded files

colorDominanceRouter.post('/upload', upload.single('image'), async (req: Request, res: Response) => {
   
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
  
      const buffer = req.file.buffer;  
      if(buffer != null && buffer!=undefined)
      {
      
        const dominantColor:RGBColor  = await extractDominantColor(buffer)
        res.json({
            dominantColor: dominantColor,
          });
      }
      
    } catch (error) {
     
      res.status(500).json({ error: 'An error occurred' });
    }
    
});
