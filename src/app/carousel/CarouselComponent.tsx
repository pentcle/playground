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
            <Carousel className="w-full h-full">
                <CarouselContent className="h-full">
                    {imagePaths.sort().map((imagePath, index) => (
                        <CarouselItem key={index} className="h-full flex items-center justify-center">
                            <img
                                src={imagePath}
                                alt={`Slide ${index + 1}`}
                                className="max-w-[95vw] max-h-[85vh] object-contain"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
            </Carousel>
        </div>
    );
}
