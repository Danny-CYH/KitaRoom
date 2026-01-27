import React from "react";
import { Plus } from "lucide-react";

const Stories = () => {
    const stories = [
        {
            id: 1,
            user: "Sarah",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            hasNew: true,
        },
        {
            id: 2,
            user: "Mike",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            hasNew: false,
        },
        {
            id: 3,
            user: "Emma",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            hasNew: true,
        },
        {
            id: 4,
            user: "John",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            hasNew: false,
        },
        {
            id: 5,
            user: "Lisa",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            hasNew: true,
        },
    ];

    return (
        <div className="mb-6">
            <div className="flex items-center gap-4 overflow-x-auto pb-4">
                {/* Create Story */}
                <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-900 border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                            <Plus className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                        </div>
                    </div>
                    <span className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                        Your Story
                    </span>
                </div>

                {/* Stories */}
                {stories.map((story) => (
                    <div key={story.id} className="flex flex-col items-center">
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-blue-500">
                            <img
                                src={story.image}
                                alt={story.user}
                                className="w-full h-full object-cover"
                            />
                            {story.hasNew && (
                                <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
                            )}
                        </div>
                        <span className="mt-2 text-xs font-medium text-gray-900 dark:text-white">
                            {story.user}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stories;
