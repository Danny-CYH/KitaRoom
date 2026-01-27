import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Heart,
    MessageCircle,
    Share2,
    Bookmark,
    MoreVertical,
    MapPin,
    DollarSign,
    Calendar,
    CheckCircle,
    Home,
    Users,
    ChevronDown,
    Send,
    Smile,
} from "lucide-react";

const FeedPost = ({ post, onLike, onSave }) => {
    const [showComments, setShowComments] = useState(false);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([
        {
            id: 1,
            user: {
                name: "Mike Johnson",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            },
            text: "Is this pet-friendly? I have a small dog 🐶",
            time: "1 hour ago",
            likes: 3,
        },
        {
            id: 2,
            user: {
                name: "Emma Wilson",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            },
            text: "Interested! Can I schedule a viewing?",
            time: "2 hours ago",
            likes: 1,
        },
    ]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            const newComment = {
                id: comments.length + 1,
                user: {
                    name: "You",
                    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                text: comment,
                time: "Just now",
                likes: 0,
            };
            setComments([...comments, newComment]);
            setComment("");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
        >
            {/* Post Header */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <img
                                src={post.user.avatar}
                                alt={post.user.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-800"
                            />
                            {post.user.isVerified && (
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-3 h-3 text-white" />
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h4 className="font-bold text-gray-900 dark:text-white">
                                    {post.user.name}
                                </h4>
                                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                                    {post.user.role}
                                </span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {post.createdAt} •{" "}
                                {post.type === "room"
                                    ? "Room Listing"
                                    : "Looking for Roommate"}
                            </p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>

                {/* Post Content */}
                <div className="mb-4">
                    <p className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
                        {post.content}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Post Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{post.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <DollarSign className="w-4 h-4" />
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {post.price}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">
                                Available {post.availableFrom}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Images */}
                {post.images.length > 0 && (
                    <div
                        className={`mb-6 rounded-xl overflow-hidden ${post.images.length === 1 ? "" : "grid grid-cols-2 gap-2"}`}
                    >
                        {post.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Post image ${index + 1}`}
                                className="w-full h-64 object-cover"
                            />
                        ))}
                    </div>
                )}

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                        <span>{post.likes} likes</span>
                        <span>{post.comments} comments</span>
                        <span>{post.shares} shares</span>
                    </div>
                    <span>
                        {post.type === "room" ? (
                            <Home className="w-4 h-4" />
                        ) : (
                            <Users className="w-4 h-4" />
                        )}
                    </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between border-t border-b border-gray-100 dark:border-gray-700 py-3">
                    <button
                        onClick={onLike}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                            post.isLiked
                                ? "text-red-500 bg-red-50 dark:bg-red-900/20"
                                : "text-gray-600 dark:text-gray-400 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}
                    >
                        <Heart
                            className={`w-5 h-5 ${post.isLiked ? "fill-current" : ""}`}
                        />
                        <span className="font-medium">Like</span>
                    </button>

                    <button
                        onClick={() => setShowComments(!showComments)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-medium">Comment</span>
                    </button>

                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-green-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span className="font-medium">Share</span>
                    </button>

                    <button
                        onClick={onSave}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                            post.isSaved
                                ? "text-amber-500 bg-amber-50 dark:bg-amber-900/20"
                                : "text-gray-600 dark:text-gray-400 hover:text-amber-500 hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}
                    >
                        <Bookmark
                            className={`w-5 h-5 ${post.isSaved ? "fill-current" : ""}`}
                        />
                        <span className="font-medium">Save</span>
                    </button>
                </div>
            </div>

            {/* Comments Section */}
            {showComments && (
                <div className="border-t border-gray-100 dark:border-gray-700 p-6">
                    <div className="space-y-4 mb-6">
                        {comments.map((comment) => (
                            <div
                                key={comment.id}
                                className="flex items-start gap-3"
                            >
                                <img
                                    src={comment.user.avatar}
                                    alt={comment.user.name}
                                    className="w-8 h-8 rounded-full"
                                />
                                <div className="flex-1">
                                    <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-3">
                                        <div className="flex items-center justify-between mb-1">
                                            <h5 className="font-bold text-sm text-gray-900 dark:text-white">
                                                {comment.user.name}
                                            </h5>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {comment.time}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                                            {comment.text}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 mt-2 ml-3">
                                        <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                                            Like ({comment.likes})
                                        </button>
                                        <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                                            Reply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add Comment */}
                    <form
                        onSubmit={handleCommentSubmit}
                        className="flex items-center gap-3"
                    >
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Write a comment..."
                                className="w-full pl-4 pr-10 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-500"
                            >
                                <Smile className="w-5 h-5" />
                            </button>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all"
                        >
                            <Send className="w-5 h-5" />
                        </motion.button>
                    </form>
                </div>
            )}
        </motion.div>
    );
};

export default FeedPost;
