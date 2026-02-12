import React, { useState, useEffect } from 'react'
import Image1 from "../../assets/menu-images/20250818_HBCU_CW1_1079.JPG"
import Image2 from "../../assets/menu-images/20250818_HBCU_CW1_1095.JPG"


export default function ImageSlider({imageList=null, interval=1, extraStyles=""}) {

    // Default images
    const default_images = [
        Image1,
        Image2,
    ]; 

    // holds all images in the slider
    const [images] = useState(imageList || default_images);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide functionality
    useEffect(() => {
        if (images.length === 0) return;

        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval * 1000); // Convert seconds to milliseconds

        return () => clearInterval(intervalId);
    }, [images.length, interval]);

    if (images.length === 0) {
        return null;
    }

    return (
        <div className={`flex-1 w-full overflow-hidden flex items-center justify-center ${extraStyles}`}>
            <img 
                src={images[currentIndex]} 
                alt={`Slide ${currentIndex + 1}`}
                className="max-w-full max-h-full w-auto h-auto object-contain"
            />
        </div>
    )
}
