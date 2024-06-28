import React, { useRef } from 'react';

interface ImageResizeProps {
  imageUrl: string;
  newWidth?: number;
  newHeight: number;
}

const ImageResizeComponent: React.FC<ImageResizeProps> = ({ imageUrl, newWidth, newHeight }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const resizeImage = (img: HTMLImageElement, canvas: HTMLCanvasElement, width: number, height: number) => {
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(img, 0, 0, width, height);
  };

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = event.currentTarget;
    const canvas = canvasRef.current;
    if (canvas) {
      resizeImage(img, canvas, newWidth!, newHeight);
    }
  };

  return (
    <div>
      <img
        src={imageUrl}
        alt="Original Image"
        onLoad={handleImageLoad}
        style={{ display: 'none' }} // Hide the original image
      />
      <canvas ref={canvasRef} />
    </div>
  );
};

export default ImageResizeComponent;
