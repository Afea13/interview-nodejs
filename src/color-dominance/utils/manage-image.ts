import * as fs from 'fs';

export function readFileAsBinary(filePath: string): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => {
      try {
        fs.readFile(filePath, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }