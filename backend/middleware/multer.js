import multer from "multer";

// Memory storage: files are kept in RAM as buffers (no disk path required).
// productController uploads buffers directly to Cloudinary.
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 }, // 8 MB per file
});

export default upload;
