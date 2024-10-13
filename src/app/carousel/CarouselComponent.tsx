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
        <div className="flex items-center justify-center h-screen">
            <Carousel className="max-w-xl">
                <CarouselContent>
                    {imagePaths.map((imagePath, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <img src={imagePath} alt={`Slide ${index + 1}`} className="w-full h-auto"/>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious>Previous</CarouselPrevious>
                <CarouselNext>Next</CarouselNext>
            </Carousel>
        </div>
    );
}
