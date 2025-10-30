/**
 * Generate a noise texture data URL for grain effect overlay
 * Creates a 128x128 canvas with random noise pattern
 */
export function generateNoiseDataUrl(): string {
  if (typeof window === 'undefined') {
    return '';
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    return '';
  }

  const size = 128;
  canvas.width = size;
  canvas.height = size;

  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  // Generate random noise
  for (let i = 0; i < data.length; i += 4) {
    const noise = Math.random() * 255;
    data[i] = noise;     // R
    data[i + 1] = noise; // G
    data[i + 2] = noise; // B
    data[i + 3] = 255;   // A
  }

  ctx.putImageData(imageData, 0, 0);
  
  return canvas.toDataURL('image/png');
}
