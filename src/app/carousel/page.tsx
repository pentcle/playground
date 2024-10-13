import Head from "next/head";
import path from "path";
import fs from "fs";
import { CarouselComponent } from "./CarouselComponent";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

async function loadImagePaths(folder: string) {
    const imgDirectory = path.join(process.cwd(), `public/carousel/img/${folder}`);
    const filenames = fs.readdirSync(imgDirectory);

    const validFilenames = filenames.filter((filename) => {
        return !filename.startsWith(".") && (filename.endsWith(".jpg") || filename.endsWith(".png") || filename.endsWith(".jpeg"));
    });

    return validFilenames.map((filename) => `/carousel/img/${folder}/${filename}`);
}

export default async function CarouselPage() {
    const comic01Paths = await loadImagePaths("comic-01");
    const comic02Paths = await loadImagePaths("comic-02");
    const comic03Paths = await loadImagePaths("comic-03");
    const comic04Paths = await loadImagePaths("comic-04");

    return (
        <article className="h-screen flex flex-col">
            <div className="flex-grow flex justify-center items-center overflow-hidden p-4">
                <Tabs defaultValue="comic01" className="flex flex-col h-full w-full max-w-5xl">
                    <TabsList className="w-full flex justify-center shrink-0 mb-4">
                        <TabsTrigger value="comic01">Comic 01</TabsTrigger>
                        <TabsTrigger value="comic02">Comic 02</TabsTrigger>
                        <TabsTrigger value="comic03">Comic 03</TabsTrigger>
                        <TabsTrigger value="comic04">Comic 04</TabsTrigger>
                    </TabsList>

                    <div className="flex-grow overflow-hidden">
                        <TabsContent value="comic01" className="h-full">
                            <CarouselComponent imagePaths={comic01Paths} />
                        </TabsContent>
                        <TabsContent value="comic02" className="h-full">
                            <CarouselComponent imagePaths={comic02Paths} />
                        </TabsContent>
                        <TabsContent value="comic03" className="h-full">
                            <CarouselComponent imagePaths={comic03Paths} />
                        </TabsContent>
                        <TabsContent value="comic04" className="h-full">
                            <CarouselComponent imagePaths={comic04Paths} />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

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
        </article>
    );
}
