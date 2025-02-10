import { v2 as cloudinary, ConfigOptions } from 'cloudinary';
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET_KEY,
  CLOUDINARY_NAME,
} from '../const.js';

const configCloudinary = (): void => {
  const configuration: ConfigOptions = {
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET_KEY,
  };
  cloudinary.config(configuration);
};

export default configCloudinary;
