"use client";
import React, { useState, useEffect } from "react";
import { CarouselComponent } from "./CarouselComponent";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { loadAllImagePaths } from "./utils/loadImages";
import styles from "./Carousel.module.css";

export default function CarouselPage() {
    const [activeTab, setActiveTab] = useState("techne");
    const [imagePaths, setImagePaths] = useState<{[key: string]: string[]}>({});
    const [isLoading, setIsLoading] = useState(true);
    const [showGlow, setShowGlow] = useState(false); // Initialize showGlow

    useEffect(() => {
        const fetchImagePaths = async () => {
            setIsLoading(true);
            const paths = await loadAllImagePaths();
            setImagePaths(paths);
            setIsLoading(false);
        };
        fetchImagePaths();
    }, []);

    useEffect(() => {
        // Toggle the glow effect when the active tab changes
        setShowGlow(true);
        const timeout = setTimeout(() => setShowGlow(false), 1000); // Example: glow fades out after 1 second

        return () => clearTimeout(timeout); // Cleanup timeout on unmount or when activeTab changes
    }, [activeTab]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const tabs = ["techne", "transmission", "community", "dominion"];

    return (
        <article className="h-screen flex flex-col relative overflow-hidden bg-[#20282F]">
            <div className={`${styles.backgroundGlow} ${showGlow ? styles.glowFadeIn : styles.glowFadeOut}`}></div>
            <div className="flex-grow flex flex-col overflow-hidden p-4 relative z-10">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full w-full">
                    <TabsList className="w-full flex justify-center shrink-0 mb-4">
                        {tabs.map((tab) => (
                            <TabsTrigger key={tab} value={tab} className="capitalize">
                                {tab}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <div className="flex-grow overflow-hidden relative">
                        {tabs.map((tab) => (
                            <TabsContent
                                key={tab}
                                value={tab}
                                className={`h-full w-full absolute top-0 left-0 ${
                                    activeTab === tab ? styles.fadeIn : "opacity-0 pointer-events-none"
                                }`}
                            >
                                <CarouselComponent imagePaths={imagePaths[`carousel/img/${tab}`] || []} />
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
