/**
 * Converts a full image path to its corresponding thumbnail path
 * Example: "./img/photo.jpg" -> "./img/thumbnails/photo.jpg"
 */
export function getThumbnailPath(imagePath: string): string {
  const parts = imagePath.split("/");
  const filename = parts[parts.length - 1];
  return `./img/thumbnails/${filename}`;
}

/**
 * Generates thumbnail paths for an array of images
 */
export function getThumbnailPaths(images: string[]): string[] {
  return images.map(getThumbnailPath);
}
