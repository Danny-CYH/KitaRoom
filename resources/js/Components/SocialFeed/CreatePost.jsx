import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Image,
    MapPin,
    DollarSign,
    Calendar,
    Home,
    Users,
    X,
    Smile,
} from "lucide-react";

const CreatePost = () => {
    const [postType, setPostType] = useState("room");
    const [content, setContent] = useState("");
    const [images, setImages] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        // In real app, you would upload to cloud storage
        setImages([...images, ...files.slice(0, 4 - images.length)]);
    };

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle post creation
        console.log({ postType, content, images });
        setContent("");
        setImages([]);
        setShowForm(false);
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
            {!showForm ? (
                <div className="p-4">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                            Y
                        </div>
                        <button
                            onClick={() => setShowForm(true)}
                            className="flex-1 text-left px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-gray-600 dark:text-gray-400"
                        >
                            What are you looking for today?
                        </button>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-6">
                            <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                <Image className="w-5 h-5" />
                                <span className="text-sm">Photo</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors">
                                <MapPin className="w-5 h-5" />
                                <span className="text-sm">Location</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-amber-500 transition-colors">
                                <DollarSign className="w-5 h-5" />
                                <span className="text-sm">Price</span>
                            </button>
                        </div>
                        <button
                            onClick={() => setShowForm(true)}
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all"
                        >
                            Create Post
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            Create New Post
                        </h3>
                        <button
                            type="button"
                            onClick={() => setShowForm(false)}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Post Type Selection */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                            I'm looking for a...
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => setPostType("room")}
                                className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                                    postType === "room"
                                        ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400"
                                        : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600"
                                }`}
                            >
                                <Home className="w-5 h-5" />
                                <span className="font-medium">Room</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setPostType("roommate")}
                                className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                                    postType === "roommate"
                                        ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400"
                                        : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600"
                                }`}
                            >
                                <Users className="w-5 h-5" />
                                <span className="font-medium">Roommate</span>
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder={`Describe what you're looking for...`}
                            className="w-full min-h-[120px] p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                        />
                    </div>

                    {/* Image Preview */}
                    {images.length > 0 && (
                        <div className="mb-6">
                            <div className="grid grid-cols-2 gap-3">
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative rounded-xl overflow-hidden"
                                    >
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt={`Preview ${index + 1}`}
                                            className="w-full h-32 object-cover"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(index)}
                                            className="absolute top-2 right-2 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Additional Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                        </div>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Budget"
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                        </div>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Move-in Date"
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-4">
                            <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors cursor-pointer">
                                <Image className="w-5 h-5" />
                                <span className="text-sm">Add Photos</span>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                            </label>
                            <button
                                type="button"
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-amber-500 transition-colors"
                            >
                                <Smile className="w-5 h-5" />
                                <span className="text-sm">Emoji</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
                            >
                                Cancel
                            </button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all"
                            >
                                Post Now
                            </motion.button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default CreatePost;
