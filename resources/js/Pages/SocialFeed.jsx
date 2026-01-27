import React, { useState } from "react";
import { Navbar } from "@/Components/Navbar";
import Footer from "@/Components/Home/Footer";
import CreatePost from "@/Components/SocialFeed/CreatePost";
import FeedPost from "@/Components/SocialFeed/FeedPost";
import Stories from "@/Components/SocialFeed/Stories";
import Sidebar from "@/Components/SocialFeed/Sidebar";
import Trending from "@/Components/SocialFeed/Trending";
import {
    Search,
    Filter,
    TrendingUp,
    Users,
    MapPin,
    Home,
    Calendar,
    DollarSign,
    Heart,
    MessageCircle,
    Share2,
    Bookmark,
    MoreVertical,
} from "lucide-react";

export default function SocialFeed() {
    const [activeTab, setActiveTab] = useState("all");
    const [posts, setPosts] = useState([
        {
            id: 1,
            user: {
                id: 1,
                name: "Sarah Chen",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                role: "Digital Designer",
                isVerified: true,
            },
            content:
                "Looking for a female roommate in Bangsar! I've found this amazing 2BR apartment with stunning city views. Budget: RM 800-1,000/month. Must love cats! 🐱",
            type: "roommate",
            tags: ["#Bangsar", "#FemaleOnly", "#PetFriendly", "#Professional"],
            images: [
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            ],
            location: "Bangsar, Kuala Lumpur",
            price: "RM 900/month",
            availableFrom: "Jan 15, 2024",
            likes: 42,
            comments: 8,
            shares: 3,
            isLiked: false,
            isSaved: false,
            createdAt: "2 hours ago",
        },
        {
            id: 2,
            user: {
                id: 2,
                name: "Ahmad Daniel",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                role: "Software Engineer",
                isVerified: true,
            },
            content:
                "Master room available in Sunway Geo Residences! Comes with private bathroom, balcony, and high-speed internet. Walking distance to Sunway University.",
            type: "room",
            tags: ["#Sunway", "#MasterRoom", "#StudentFriendly", "#NearCampus"],
            images: [
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            ],
            location: "Sunway Geo Residences, Subang Jaya",
            price: "RM 850/month",
            availableFrom: "Immediate",
            likes: 67,
            comments: 12,
            shares: 5,
            isLiked: true,
            isSaved: true,
            createdAt: "5 hours ago",
        },
        {
            id: 3,
            user: {
                id: 3,
                name: "Lisa Wong",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                role: "Medical Student",
                isVerified: false,
            },
            content:
                "Just moved to KL for my studies! Looking for roommates near UM. I'm clean, quiet, and love cooking. Budget around RM 600-700.",
            type: "roommate",
            tags: [
                "#UniversityMalaya",
                "#Student",
                "#BudgetFriendly",
                "#Cooking",
            ],
            images: [],
            location: "University Malaya area",
            price: "RM 650/month",
            availableFrom: "Feb 1, 2024",
            likes: 28,
            comments: 15,
            shares: 2,
            isLiked: false,
            isSaved: false,
            createdAt: "1 day ago",
        },
        {
            id: 4,
            user: {
                id: 4,
                name: "Raj Kumar",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                role: "Marketing Executive",
                isVerified: true,
            },
            content:
                "Whole 3BR apartment for rent in Mont Kiara! Perfect for professionals. Comes with gym, pool, and 24/7 security.",
            type: "room",
            tags: ["#MontKiara", "#Luxury", "#Professional", "#FullyFurnished"],
            images: [
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            ],
            location: "Mont Kiara, Kuala Lumpur",
            price: "RM 2,800/month",
            availableFrom: "March 1, 2024",
            likes: 89,
            comments: 7,
            shares: 9,
            isLiked: true,
            isSaved: true,
            createdAt: "2 days ago",
        },
    ]);

    const handleLike = (postId) => {
        setPosts(
            posts.map((post) => {
                if (post.id === postId) {
                    return {
                        ...post,
                        isLiked: !post.isLiked,
                        likes: post.isLiked ? post.likes - 1 : post.likes + 1,
                    };
                }
                return post;
            }),
        );
    };

    const handleSave = (postId) => {
        setPosts(
            posts.map((post) => {
                if (post.id === postId) {
                    return {
                        ...post,
                        isSaved: !post.isSaved,
                    };
                }
                return post;
            }),
        );
    };

    const tabs = [
        { id: "all", label: "All Posts", icon: Home },
        { id: "rooms", label: "Rooms", icon: Home },
        { id: "roommates", label: "Roommates", icon: Users },
        { id: "trending", label: "Trending", icon: TrendingUp },
    ];

    const filteredPosts =
        activeTab === "all"
            ? posts
            : posts.filter((post) => post.type === activeTab);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Community Feed
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Connect, share, and find your perfect living space with
                        our community
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-6 space-y-6">
                            <Sidebar />
                            <Trending />
                        </div>
                    </div>

                    {/* Main Feed */}
                    <div className="lg:w-2/4">
                        {/* Stories */}
                        <Stories />

                        {/* Create Post */}
                        <CreatePost />

                        {/* Feed Tabs */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
                                <div className="flex space-x-1">
                                    {tabs.map(({ id, label, icon: Icon }) => (
                                        <button
                                            key={id}
                                            onClick={() => setActiveTab(id)}
                                            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-colors ${
                                                activeTab === id
                                                    ? "text-primary border-b-2 border-primary bg-primary/5 dark:bg-primary/10"
                                                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
                                            }`}
                                        >
                                            <Icon className="w-4 h-4" />
                                            {label}
                                        </button>
                                    ))}
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                                    <Filter className="w-4 h-4" />
                                    Filters
                                </button>
                            </div>
                        </div>

                        {/* Posts Feed */}
                        <div className="space-y-6">
                            {filteredPosts.map((post) => (
                                <FeedPost
                                    key={post.id}
                                    post={post}
                                    onLike={() => handleLike(post.id)}
                                    onSave={() => handleSave(post.id)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-6 space-y-6">
                            {/* Search */}
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search posts, users, or locations..."
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    />
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                                    Community Stats
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            Active Posts
                                        </span>
                                        <span className="font-bold text-primary">
                                            1,248
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            Connections Made
                                        </span>
                                        <span className="font-bold text-green-500">
                                            5,678
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            Online Now
                                        </span>
                                        <span className="font-bold text-blue-500">
                                            342
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Suggested Connections */}
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                                    Suggested for You
                                </h3>
                                <div className="space-y-4">
                                    {[1, 2, 3].map((_, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700" />
                                                <div>
                                                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                                                        User {index + 1}
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                                        Looking in KL
                                                    </p>
                                                </div>
                                            </div>
                                            <button className="text-xs font-medium text-primary hover:text-blue-700">
                                                Follow
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
