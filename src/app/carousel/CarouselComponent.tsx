import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselComponent({imagePaths}: { imagePaths: string[] }) {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <Carousel className="w-full max-w-5xl flex flex-col">
                <CarouselContent>
                    {imagePaths.sort().map((imagePath, index) => (
                        <CarouselItem key={index} className="flex items-center justify-center">
                            <div
                                className="relative w-full h-[calc(100vh-14rem)] max-h-[100vh] sm:max-h-[80vw] lg:max-h-[70vw] overflow-hidden">
                                <img
                                    src={imagePath}
                                    alt={`Slide ${index + 1}`}
                                    className="absolute inset-0 w-full h-full object-contain rounded-xl"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className={"opacity-70"}>
                    <CarouselPrevious className="left-0"/>
                    <CarouselNext className="right-0"/>
                </div>
            </Carousel>
        </div>
    );
}
