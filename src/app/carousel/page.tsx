"use client";

import React, { useState, useEffect } from "react";
import { CarouselComponent } from "./CarouselComponent";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { loadAllImagePaths } from "./utils/loadImages";
import styles from "./Carousel.module.css";

export default function CarouselPage() {
    const [activeTab, setActiveTab] = useState("comic01");
    const [imagePaths, setImagePaths] = useState<{[key: string]: string[]}>({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchImagePaths = async () => {
            setIsLoading(true);
            const paths = await loadAllImagePaths();
            setImagePaths(paths);
            setIsLoading(false);
        };
        fetchImagePaths();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <article className="h-screen flex flex-col">
            <div className="flex-grow flex flex-col overflow-hidden p-4">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full w-full">
                    <TabsList className="w-full flex justify-center shrink-0 mb-4">
                        <TabsTrigger value="comic01">Comic 01</TabsTrigger>
                        <TabsTrigger value="comic02">Comic 02</TabsTrigger>
                        <TabsTrigger value="comic03">Comic 03</TabsTrigger>
                        <TabsTrigger value="comic04">Comic 04</TabsTrigger>
                    </TabsList>
                    <div className="flex-grow overflow-hidden relative">
                        {['comic-01', 'comic-02', 'comic-03', 'comic-04'].map((comic, index) => (
                            <TabsContent
                                key={comic}
                                value={`comic0${index + 1}`}
                                className={`h-full w-full absolute top-0 left-0 ${
                                    activeTab === `comic0${index + 1}`
                                        ? styles.fadeIn
                                        : "opacity-0 pointer-events-none"
                                }`}
                            >
                                <CarouselComponent imagePaths={imagePaths[`carousel/img/${comic}`] || []} />
                            </TabsContent>
                        ))}
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
