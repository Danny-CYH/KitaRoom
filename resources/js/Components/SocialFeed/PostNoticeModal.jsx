// Components/SocialFeed/PostNoticeModal.jsx
import React, { useState } from "react";
import {
    X,
    Heart,
    MessageCircle,
    Share2,
    Bookmark,
    MapPin,
    Calendar,
    DollarSign,
    Users,
    Home,
    ChevronLeft,
    ChevronRight,
    Send,
    MoreVertical,
} from "lucide-react";

export default function PostNoticeModal({
    isOpen,
    onClose,
    post,
    onLike,
    onSave,
    onComment,
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [commentText, setCommentText] = useState("");

    if (!isOpen || !post) return null;

    const nextImage = () => {
        if (post.images.length > 0) {
            setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
        }
    };

    const prevImage = () => {
        if (post.images.length > 0) {
            setCurrentImageIndex(
                (prev) => (prev - 1 + post.images.length) % post.images.length,
            );
        }
    };

    const handleSubmitComment = (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            onComment(post.id, commentText);
            setCommentText("");
        }
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-y-auto lg:overflow-hidden">
                        {/* Image Gallery Section */}
                        {post.images && post.images.length > 0 && (
                            <div className="lg:w-3/5 relative bg-gray-100 dark:bg-gray-800">
                                <div className="relative h-64 lg:h-full min-h-[300px]">
                                    <img
                                        src={post.images[currentImageIndex]}
                                        alt={`Post image ${currentImageIndex + 1}`}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Image Navigation */}
                                    {post.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>

                                            {/* Image Counter */}
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 rounded-full text-white text-sm">
                                                {currentImageIndex + 1} /{" "}
                                                {post.images.length}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Content Section */}
                        <div
                            className={`${post.images && post.images.length > 0 ? "lg:w-2/5" : "w-full"} flex flex-col h-full`}
                        >
                            {/* User Info */}
                            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={post.user.avatar}
                                        alt={post.user.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold text-gray-900 dark:text-white">
                                                {post.user.name}
                                            </h3>
                                            {post.user.isVerified && (
                                                <span className="text-blue-500 text-sm">
                                                    ✓
                                                </span>
                                            )}
                                            <span className="text-sm text-gray-500 dark:text-gray-500">
                                                • {post.createdAt}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {post.user.role}
                                        </p>
                                    </div>
                                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                                        <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                    </button>
                                </div>
                            </div>

                            {/* Post Content */}
                            <div className="flex-1 overflow-y-auto p-6">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {post.title}
                                </h2>

                                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    {post.content}
                                </p>

                                {/* Details Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-500">
                                                Location
                                            </p>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                {post.location}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <DollarSign className="w-4 h-4 text-green-500" />
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-500">
                                                Price
                                            </p>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                {post.price}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-purple-500" />
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-500">
                                                Available From
                                            </p>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                {post.availableFrom}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {post.type === "room" ? (
                                            <Home className="w-4 h-4 text-blue-500" />
                                        ) : (
                                            <Users className="w-4 h-4 text-pink-500" />
                                        )}
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-500">
                                                Type
                                            </p>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                                                {post.type}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {post.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-700 dark:text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Comments Section */}
                                <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                        <MessageCircle className="w-4 h-4" />
                                        Comments ({post.comments.length})
                                    </h4>

                                    <div className="space-y-4 mb-4 max-h-60 overflow-y-auto">
                                        {post.comments.map((comment) => (
                                            <div
                                                key={comment.id}
                                                className="flex gap-3"
                                            >
                                                <img
                                                    src={comment.avatar}
                                                    alt={comment.user}
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="font-medium text-sm text-gray-900 dark:text-white">
                                                            {comment.user}
                                                        </span>
                                                        <span className="text-xs text-gray-500 dark:text-gray-500">
                                                            {comment.timestamp}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                                        {comment.comment}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Add Comment */}
                                    <form
                                        onSubmit={handleSubmitComment}
                                        className="flex gap-2"
                                    >
                                        <input
                                            type="text"
                                            value={commentText}
                                            onChange={(e) =>
                                                setCommentText(e.target.value)
                                            }
                                            placeholder="Write a comment..."
                                            className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                                        />
                                        <button
                                            type="submit"
                                            className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => onLike(post.id)}
                                        className={`p-2 rounded-full transition-colors ${
                                            post.isLiked
                                                ? "text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20"
                                                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                        }`}
                                    >
                                        <Heart
                                            className={`w-5 h-5 ${post.isLiked ? "fill-current" : ""}`}
                                        />
                                    </button>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        {post.likes}
                                    </span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                                        <MessageCircle className="w-5 h-5" />
                                    </button>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        {post.comments.length}
                                    </span>
                                </div>

                                <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={() => onSave(post.id)}
                                    className={`p-2 rounded-full transition-colors ${
                                        post.isSaved
                                            ? "text-primary"
                                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }`}
                                >
                                    <Bookmark
                                        className={`w-5 h-5 ${post.isSaved ? "fill-current" : ""}`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
