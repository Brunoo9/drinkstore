import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const filePath = path.resolve(__dirname, "../public/uploads");
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadAvatar = multer({
  storage: diskStorage,
});

export { uploadAvatar };
