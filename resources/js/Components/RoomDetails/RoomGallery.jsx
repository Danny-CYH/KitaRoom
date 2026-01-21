import React, { useState } from "react";
import { motion } from "framer-motion";

const RoomGallery = () => {
    const [activeImage, setActiveImage] = useState(0);

    const galleryImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            alt: "Spacious modern master bedroom with city view",
            title: "Master Bedroom",
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            alt: "Modern bathroom with glass shower",
            title: "Bathroom",
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            alt: "Fully equipped shared kitchen area",
            title: "Kitchen",
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            alt: "Lounge and living room space",
            title: "Living Room",
        },
        {
            id: 5,
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            alt: "Balcony view of Kuala Lumpur skyline",
            title: "Balcony View",
        },
    ];

    return (
        <div className="mb-8">
            {/* Main Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[16/9] md:aspect-[21/9] w-full mb-4 rounded-xl overflow-hidden"
            >
                <img
                    src={galleryImages[activeImage].url}
                    alt={galleryImages[activeImage].alt}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    {galleryImages[activeImage].title}
                </div>
            </motion.div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {galleryImages.map((image, index) => (
                    <motion.button
                        key={image.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveImage(index)}
                        className={`relative aspect-video rounded-lg overflow-hidden border-2 ${activeImage === index ? "border-primary" : "border-transparent"}`}
                    >
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                        />
                        {index === 4 && (
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">
                                    +12
                                </span>
                            </div>
                        )}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default RoomGallery;
