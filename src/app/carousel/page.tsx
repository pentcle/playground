"use client";
import React, { useState, useEffect } from "react";
import { CarouselComponent } from "./CarouselComponent";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { loadAllImagePaths } from "./utils/loadImages";
import styles from "./Carousel.module.css";

export default function CarouselPage() {
    const [activeTab, setActiveTab] = useState("techne");
    const [imagePaths, setImagePaths] = useState<{ [key: string]: string[] }>({});
    const [isLoading, setIsLoading] = useState(true);
    const [showGlow, setShowGlow] = useState(false);

    const tabColors: { [key: string]: string } = {
        techne: "rgba(219, 241, 247, 0.8)",
        transmission: "rgba(230, 236, 117, 0.8)",
        community: "rgba(238, 166, 208, 0.8)",
        dominion: "rgba(227, 111, 76, 0.8)",
    };

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
        setShowGlow(true);
        const timeout = setTimeout(() => setShowGlow(false), 1000);

        return () => clearTimeout(timeout);
    }, [activeTab]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const tabs = ["techne", "transmission", "community", "dominion"];

    return (
        <article className="h-screen flex flex-col relative overflow-hidden bg-[#222A30]">
            <div
                className={`${styles.backgroundGlow} ${showGlow ? styles.glowFadeIn : styles.glowFadeOut}`}
                style={{
                    "--glow-color": tabColors[activeTab],
                    "--glow-fade-color": tabColors[activeTab].replace("0.8", "0.2"),
                } as React.CSSProperties}
            ></div>
            <div className="flex-grow flex flex-col overflow-hidden p-4 relative z-10 py-8">
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
                    className="text-white underline"
                >
                    GitHub
                </a>
            </p>
        </article>
    );
}
