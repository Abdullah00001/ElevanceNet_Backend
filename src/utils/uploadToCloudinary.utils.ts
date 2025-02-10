import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import fs from 'fs';
import configCloudinary from '../configs/cloudinary.configs.js';

configCloudinary();

const uploadToCloudinary = async (
  imagePath: string
): Promise<string | null> => {
  try {
    if (!imagePath) {
      return null;
    }
    const cloudinaryResponse: UploadApiResponse =
      await cloudinary.uploader.upload(imagePath, {
        resource_type: 'auto',
      });
    fs.unlinkSync(imagePath);
    return cloudinaryResponse.url;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Image Upload Failed\nMessage: ${error.message}`);
    } else {
      console.error(
        'An unexpected error occurred during the image upload process.'
      );
    }
    fs.unlinkSync(imagePath);
    return null;
  }
};

export default uploadToCloudinary;
