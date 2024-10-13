import fs from "fs";
import path from "path";

export function loadImagePaths(folder: string) {
    const imgDirectory = path.join(process.cwd(), `public${folder}`);
    const filenames = fs.readdirSync(imgDirectory);

    const validFilenames = filenames.filter(filename => {
        return !filename.startsWith('.') && (filename.endsWith('.jpg') || filename.endsWith('.png') || filename.endsWith('.jpeg'));
    });

    validFilenames.sort();

    return validFilenames.map((filename) => `${folder}/${filename}`);
}
