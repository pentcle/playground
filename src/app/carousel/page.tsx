import Head from "next/head";
import path from "path";
import fs from "fs";
import { CarouselComponent } from "./CarouselComponent";

async function loadImagePaths() {
    const imgDirectory = path.join(process.cwd(), "public/carousel/img");
    const filenames = fs.readdirSync(imgDirectory);

    return filenames.map((filename) => `/carousel/img/${filename}`);
}

export default async function CarouselPage() {
    const imagePaths = await loadImagePaths();

    return (
        <div className="relative">
            <Head>
                <title>Carousel demo</title>
            </Head>
            <CarouselComponent imagePaths={imagePaths} />
            <p className="absolute bottom-4 right-4 z-30">
                <a
                    href="https://github.com/pentcle/playground/tree/main/src/app/carousel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    GitHub
                </a>
            </p>
        </div>
    );
}
