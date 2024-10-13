import fs from 'fs';
import path from 'path';

export function loadImagePaths() {
    const imgDirectory = path.join(process.cwd(), "public/carousel/img");
    const filenames = fs.readdirSync(imgDirectory);

    return filenames.map((filename) => `/carousel/img/${filename}`);
}
