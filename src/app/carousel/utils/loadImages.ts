// src/app/carousel/utils/loadImages.ts

export async function loadImagePaths(folder: string): Promise<string[]> {
    try {
        const response = await fetch(`/carousel/api/imagePaths?folder=${encodeURIComponent(folder)}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.imagePaths;
    } catch (error) {
        console.error("Error loading image paths:", error);
        return [];
    }
}

export async function loadAllImagePaths(): Promise<{ [key: string]: string[] }> {
    const folders = ['carousel/img/comic-01', 'carousel/img/comic-02', 'carousel/img/comic-03', 'carousel/img/comic-04'];
    const imagePaths: { [key: string]: string[] } = {};

    for (const folder of folders) {
        imagePaths[folder] = await loadImagePaths(folder);
    }

    return imagePaths;
}
