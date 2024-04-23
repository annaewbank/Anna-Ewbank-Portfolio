// Function to append a relative path onto the base URL of the website and return the URL
// Allows dynamic import of images into components
export function getImageUrl(path) {
  return new URL(`assets/${path}`, import.meta.url).href;
}
