import React, { useState } from "react";
import { Navbar } from "@/Components/Navbar";
import Footer from "@/Components/Home/Footer";
import PostNoticeModal from "@/Components/SocialFeed/PostNoticeModal";
import {
    Search,
    Bell,
    Clock,
    MapPin,
    DollarSign,
    Heart,
    MessageCircle,
    Sparkles,
    Users,
    TrendingUp,
    SlidersHorizontal,
    Coffee,
    Moon,
    Film,
    Shield,
    ChevronDown,
    Briefcase,
    Heart as HeartIcon,
    Dog,
    Music,
    BookOpen,
    Globe,
    CalendarDays,
    UsersRound,
    UserPlus,
    Coffee as CoffeeIcon,
    Gamepad2,
    Camera,
    Languages,
} from "lucide-react";
import { Link } from "@inertiajs/react";

export default function SocialHub() {
    const [selectedPost, setSelectedPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState("latest");
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({
        priceMin: "",
        priceMax: "",
        location: "",
        moveInDate: "",
        gender: "",
        occupation: "",
        lifestyle: [],
        interests: [],
    });

    const [roommatePosts, setRoommatePosts] = useState([
        {
            id: 1,
            user: {
                id: 1,
                name: "Sarah Chen",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                role: "Digital Designer",
                isVerified: true,
                age: 28,
                occupation: "Digital Designer",
                nationality: "Malaysian",
                languages: ["English", "Mandarin", "Cantonese"],
                interests: ["Photography", "Cooking", "Hiking", "Cats"],
                lifestyle: ["Non-smoker", "Early bird", "Clean freak"],
            },
            title: "Looking for Female Roommate in Bangsar",
            excerpt:
                "2BR apartment with city views. Looking for someone who loves cats! 🐱",
            content:
                "I'm a 28-year-old digital designer looking for a female roommate to share a beautiful 2BR apartment in Bangsar. The apartment has stunning city views, is fully furnished, and is close to public transport. I have a cute cat named Mochi, so you must love cats! I'm clean, organized, and work from home 3 days a week. Looking for someone similar who values cleanliness and quiet time but also enjoys occasional hangouts and movie nights.",
            type: "roommate",
            lookingFor: {
                gender: "Female",
                ageRange: "25-35",
                occupation: "Professional/Student",
                lifestyle: ["Non-smoker", "Pet lover", "Clean"],
            },
            tags: [
                "#Bangsar",
                "#FemaleOnly",
                "#PetFriendly",
                "#Professional",
                "#CatLover",
            ],
            images: [], // No room images, just user profile
            location: "Bangsar, Kuala Lumpur",
            budget: "RM 800-1,000/month",
            moveInDate: "Jan 15, 2024",
            duration: "Long term (1 year+)",
            likes: 42,
            comments: 8,
            matches: 5,
            isLiked: false,
            isSaved: false,
            createdAt: "2 hours ago",
            distance: "2.5 km",
            viewCount: 156,
            groupSize: "Looking for 1 roommate",
            preferences: {
                gender: "Female",
                occupation: "Professional/Student",
                ageRange: "25-35",
                pets: "Cat friendly",
                smoking: "Non-smoker",
                cleanliness: "Very important",
            },
        },
        {
            id: 2,
            user: {
                id: 2,
                name: "Lisa Wong",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                role: "Medical Student",
                isVerified: false,
                age: 23,
                occupation: "Medical Student",
                nationality: "Malaysian",
                languages: ["English", "Malay", "Mandarin"],
                interests: ["Cooking", "Reading", "Yoga", "K-drama"],
                lifestyle: ["Non-smoker", "Quiet", "Studious"],
            },
            title: "Medical Student Looking for Roommates near UM",
            excerpt:
                "Quiet, clean, love cooking. Looking for similar students!",
            content:
                "Just moved to KL for my medical studies at UM! I'm looking for 1-2 roommates to share an apartment near campus. I'm very focused on my studies so I appreciate quiet environments, but I also love cooking and sharing meals on weekends. I'm clean, organized, and respectful of shared spaces. Would love to find fellow students who understand the medical school lifestyle!",
            type: "roommate",
            lookingFor: {
                gender: "Female",
                ageRange: "20-26",
                occupation: "Medical/Health Science Students",
                lifestyle: ["Quiet", "Studious", "Non-smoker"],
            },
            tags: [
                "#UniversityMalaya",
                "#MedicalStudent",
                "#Quiet",
                "#Cooking",
                "#StudyBuddy",
            ],
            images: [],
            location: "University Malaya area",
            budget: "RM 600-750/month",
            moveInDate: "Feb 1, 2024",
            duration: "At least 1 year",
            likes: 28,
            comments: 15,
            matches: 8,
            isLiked: false,
            isSaved: false,
            createdAt: "1 day ago",
            distance: "0.5 km",
            viewCount: 89,
            groupSize: "Looking for 1-2 roommates",
            preferences: {
                gender: "Female",
                occupation: "Medical/Health Science Student",
                ageRange: "20-26",
                smoking: "Non-smoker",
                studyHabits: "Quiet study environment",
            },
        },
        {
            id: 3,
            user: {
                id: 3,
                name: "Raj Kumar",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                role: "Marketing Executive",
                isVerified: true,
                age: 32,
                occupation: "Marketing Executive",
                nationality: "Malaysian",
                languages: ["English", "Malay", "Tamil"],
                interests: ["Travel", "Music", "Sports", "Tech"],
                lifestyle: ["Social", "Active", "Occasional drinker"],
            },
            title: "Professional Male Looking for Housemate in Mont Kiara",
            excerpt:
                "3BR luxury apartment. Looking for another professional to share.",
            content:
                "I'm a marketing executive in my early 30s looking for a housemate to share a luxury 3BR apartment in Mont Kiara. I travel frequently for work, so you'll have plenty of solo time. I'm social but respect privacy. The apartment has amazing facilities - gym, pool, and security. I'm looking for someone professional, clean, and easy-going.",
            type: "roommate",
            lookingFor: {
                gender: "Male",
                ageRange: "28-40",
                occupation: "Professional",
                lifestyle: ["Clean", "Respectful", "Socially balanced"],
            },
            tags: [
                "#MontKiara",
                "#Professional",
                "#Luxury",
                "#EasyGoing",
                "#Travel",
            ],
            images: [],
            location: "Mont Kiara, Kuala Lumpur",
            budget: "RM 1,300-1,500/month",
            moveInDate: "March 1, 2024",
            duration: "Long term preferred",
            likes: 89,
            comments: 7,
            matches: 12,
            isLiked: true,
            isSaved: true,
            createdAt: "2 days ago",
            distance: "3.2 km",
            viewCount: 412,
            groupSize: "Looking for 1 roommate",
            preferences: {
                gender: "Male",
                occupation: "Professional",
                ageRange: "28-40",
                smoking: "Non-smoker preferred",
                socialLevel: "Balanced",
            },
        },
        {
            id: 4,
            user: {
                id: 4,
                name: "Priya Kaur",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                role: "Dentist",
                isVerified: true,
                age: 31,
                occupation: "Dentist",
                nationality: "Malaysian",
                languages: ["English", "Malay", "Punjabi"],
                interests: ["Yoga", "Cooking", "Reading", "Gardening"],
                lifestyle: ["Non-smoker", "Early bird", "Health conscious"],
            },
            title: "Female Professional Looking for Roommate - Bangsar South",
            excerpt:
                "Near universities, looking for professional/student female roommate",
            content:
                "I'm a dentist looking for a female roommate to share my apartment in Bangsar South. The location is perfect - walking distance to Taylor's and Help University, and close to many cafes and restaurants. I'm health-conscious, love cooking healthy meals, and practice yoga daily. I'm looking for someone clean, respectful, and positive to share this space with.",
            type: "roommate",
            lookingFor: {
                gender: "Female",
                ageRange: "25-35",
                occupation: "Professional/Student",
                lifestyle: ["Health-conscious", "Clean", "Respectful"],
            },
            tags: [
                "#BangsarSouth",
                "#FemaleOnly",
                "#Professional",
                "#Yoga",
                "#HealthyLifestyle",
            ],
            images: [],
            location: "Bangsar South, KL",
            budget: "RM 900-1,100/month",
            moveInDate: "Feb 20, 2024",
            duration: "Minimum 6 months",
            likes: 45,
            comments: 11,
            matches: 7,
            isLiked: false,
            isSaved: false,
            createdAt: "5 days ago",
            distance: "1.1 km",
            viewCount: 95,
            groupSize: "Looking for 1 roommate",
            preferences: {
                gender: "Female",
                occupation: "Professional/Student",
                ageRange: "25-35",
                smoking: "Non-smoker",
                lifestyle: "Health-conscious",
            },
        },
        {
            id: 5,
            user: {
                id: 5,
                name: "Ahmad Fauzi",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                role: "Software Developer",
                isVerified: false,
                age: 26,
                occupation: "Software Developer",
                nationality: "Malaysian",
                languages: ["English", "Malay"],
                interests: ["Gaming", "Tech", "Movies", "Badminton"],
                lifestyle: ["Night owl", "Gamer", "Casual"],
            },
            title: "Gamer/Developer Looking for Like-minded Roommate",
            excerpt:
                "Looking for someone who understands the developer/gamer lifestyle",
            content:
                "Hey! I'm a software developer working from home. Looking for a roommate who's also into tech/gaming. I'm pretty chill and keep to myself but also enjoy gaming sessions and tech talks. The apartment is near public transport and has fast fiber internet (important!). I'm clean but not obsessive. Would prefer someone who understands the irregular hours of a developer!",
            type: "roommate",
            lookingFor: {
                gender: "Male",
                ageRange: "24-35",
                occupation: "Tech/IT/Developer",
                lifestyle: [
                    "Gamer-friendly",
                    "Night owl friendly",
                    "Clean enough",
                ],
            },
            tags: ["#Developer", "#Gamer", "#Tech", "#NightOwl", "#Wifi"],
            images: [],
            location: "Petaling Jaya, Selangor",
            budget: "RM 700-850/month",
            moveInDate: "Immediate",
            duration: "Flexible",
            likes: 34,
            comments: 9,
            matches: 4,
            isLiked: false,
            isSaved: true,
            createdAt: "3 days ago",
            distance: "2.0 km",
            viewCount: 67,
            groupSize: "Looking for 1 roommate",
            preferences: {
                gender: "Male",
                occupation: "Tech/IT",
                smoking: "OK if not indoors",
                schedule: "Flexible",
            },
        },
        {
            id: 6,
            user: {
                id: 6,
                name: "Nina Hassan",
                avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                role: "PhD Student",
                isVerified: false,
                age: 26,
                occupation: "PhD Student - Biotechnology",
                nationality: "Malaysian",
                languages: ["English", "Malay", "Arabic"],
                interests: ["Research", "Coffee", "Reading", "Plants"],
                lifestyle: ["Quiet", "Studious", "Non-smoker", "Plant parent"],
            },
            title: "PhD Student Seeking Quiet Roommate near UKM",
            excerpt:
                "Looking for another researcher/student who values quiet study time",
            content:
                "I'm a PhD student in Biotechnology looking for a roommate who understands the demands of research life. I spend long hours in the lab and need a peaceful environment to recharge. I love plants (I have several!) and enjoy quiet evenings with a book. Looking for someone similarly focused on their studies/research who values quiet and cleanliness.",
            type: "roommate",
            lookingFor: {
                gender: "Female",
                ageRange: "24-32",
                occupation: "PhD Student/Researcher",
                lifestyle: [
                    "Quiet",
                    "Studious",
                    "Non-smoker",
                    "Plant-friendly",
                ],
            },
            tags: ["#PhDStudent", "#Researcher", "#Quiet", "#UKM", "#Plants"],
            images: [],
            location: "Bangi, Selangor",
            budget: "RM 500-600/month",
            moveInDate: "March 1, 2024",
            duration: "Long term (2 years+)",
            likes: 18,
            comments: 6,
            matches: 3,
            isLiked: false,
            isSaved: false,
            createdAt: "1 week ago",
            distance: "1.5 km",
            viewCount: 43,
            groupSize: "Looking for 1 roommate",
            preferences: {
                gender: "Female",
                occupation: "PhD Student/Researcher",
                ageRange: "24-32",
                smoking: "Non-smoker",
                noiseLevel: "Very quiet",
            },
        },
        {
            id: 7,
            user: {
                id: 7,
                name: "Jason Tan",
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                role: "Chef",
                isVerified: true,
                age: 29,
                occupation: "Chef",
                nationality: "Malaysian",
                languages: ["English", "Mandarin", "Cantonese"],
                interests: ["Cooking", "Food", "Fitness", "Travel"],
                lifestyle: ["Early bird", "Foodie", "Clean"],
            },
            title: "Chef Looking for Foodie Roommate",
            excerpt: "Love cooking? Let's share meals and kitchen adventures!",
            content:
                "I'm a chef at a restaurant in KL, and I'm looking for a roommate who appreciates good food! I love experimenting with recipes on my days off and would love to share meals with a like-minded foodie. I'm clean (comes with the profession!), organized, and work irregular hours. Looking for someone who enjoys food, is respectful of kitchen space, and would be up for occasional cooking sessions together!",
            type: "roommate",
            lookingFor: {
                gender: "Any",
                ageRange: "25-35",
                occupation: "Any",
                lifestyle: ["Foodie", "Clean", "Respectful of kitchen"],
            },
            tags: ["#Chef", "#Foodie", "#Cooking", "#KL", "#FoodLover"],
            images: [],
            location: "KLCC Area, Kuala Lumpur",
            budget: "RM 1,000-1,200/month",
            moveInDate: "April 1, 2024",
            duration: "Long term",
            likes: 56,
            comments: 12,
            matches: 9,
            isLiked: true,
            isSaved: false,
            createdAt: "4 days ago",
            distance: "0.8 km",
            viewCount: 178,
            groupSize: "Looking for 1 roommate",
            preferences: {
                gender: "Any",
                occupation: "Any",
                smoking: "Non-smoker",
                kitchenEtiquette: "Very important",
            },
        },
        {
            id: 8,
            user: {
                id: 8,
                name: "Maya Krishnan",
                avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                role: "Yoga Instructor",
                isVerified: false,
                age: 27,
                occupation: "Yoga Instructor & Wellness Coach",
                nationality: "Malaysian",
                languages: ["English", "Malay", "Tamil"],
                interests: ["Yoga", "Meditation", "Healthy Living", "Nature"],
                lifestyle: [
                    "Non-smoker",
                    "Vegetarian",
                    "Early bird",
                    "Mindful",
                ],
            },
            title: "Wellness-Oriented Roommate Wanted",
            excerpt: "Create a peaceful, healthy living space together",
            content:
                "I'm a yoga instructor looking for a roommate who shares an interest in wellness and mindful living. I'm looking to create a peaceful, positive home environment. I practice yoga daily, meditate, and eat a plant-based diet. I'd love to find someone who appreciates a calm atmosphere, doesn't smoke, and is interested in healthy living. We don't have to be the same, but mutual respect for this lifestyle is important!",
            type: "roommate",
            lookingFor: {
                gender: "Female",
                ageRange: "25-35",
                occupation: "Any",
                lifestyle: [
                    "Health-conscious",
                    "Non-smoker",
                    "Mindful",
                    "Respectful",
                ],
            },
            tags: [
                "#Yoga",
                "#Wellness",
                "#Vegetarian",
                "#MindfulLiving",
                "#Peaceful",
            ],
            images: [],
            location: "Damansara Heights, KL",
            budget: "RM 900-1,100/month",
            moveInDate: "Feb 15, 2024",
            duration: "Minimum 6 months",
            likes: 47,
            comments: 8,
            matches: 6,
            isLiked: false,
            isSaved: true,
            createdAt: "3 days ago",
            distance: "1.2 km",
            viewCount: 92,
            groupSize: "Looking for 1 roommate",
            preferences: {
                gender: "Female",
                occupation: "Any",
                smoking: "Non-smoker",
                diet: "Vegetarian/vegan friendly",
                atmosphere: "Calm and peaceful",
            },
        },
    ]);

    const handleLike = (postId) => {
        setRoommatePosts(
            roommatePosts.map((post) => {
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
        setRoommatePosts(
            roommatePosts.map((post) => {
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

    const handleComment = (postId, commentText) => {
        const newComment = {
            id: Date.now(),
            user: "Current User",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            comment: commentText,
            timestamp: "Just now",
        };

        setRoommatePosts(
            roommatePosts.map((post) => {
                if (post.id === postId) {
                    return {
                        ...post,
                        comments: post.comments + 1,
                        commentList: [...(post.commentList || []), newComment],
                    };
                }
                return post;
            }),
        );
    };

    const openPostModal = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const closePostModal = () => {
        setIsModalOpen(false);
        setSelectedPost(null);
    };

    const lifestyleOptions = [
        { id: "non-smoker", label: "Non-smoker", icon: Shield },
        { id: "pet-friendly", label: "Pet friendly", icon: Dog },
        { id: "early-bird", label: "Early bird", icon: Clock },
        { id: "night-owl", label: "Night owl", icon: Moon },
        { id: "clean-freak", label: "Clean freak", icon: Sparkles },
        { id: "social", label: "Social", icon: Users },
        { id: "quiet", label: "Quiet", icon: Bell },
        { id: "vegetarian", label: "Vegetarian", icon: CoffeeIcon },
        { id: "gamer", label: "Gamer", icon: Gamepad2 },
        { id: "fitness", label: "Fitness", icon: HeartIcon },
    ];

    const interestOptions = [
        { id: "cooking", label: "Cooking", icon: Coffee },
        { id: "photography", label: "Photography", icon: Camera },
        { id: "music", label: "Music", icon: Music },
        { id: "reading", label: "Reading", icon: BookOpen },
        { id: "travel", label: "Travel", icon: Globe },
        { id: "movies", label: "Movies", icon: Film },
        { id: "sports", label: "Sports", icon: TrendingUp },
        { id: "yoga", label: "Yoga", icon: HeartIcon },
    ];

    // Filter and sort posts
    const filteredPosts = roommatePosts
        .filter((post) => {
            // Search filter
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const matchesSearch =
                    post.title.toLowerCase().includes(query) ||
                    post.content.toLowerCase().includes(query) ||
                    post.location.toLowerCase().includes(query) ||
                    post.user.name.toLowerCase().includes(query) ||
                    post.tags.some((tag) => tag.toLowerCase().includes(query));
                if (!matchesSearch) return false;
            }

            // Price filter
            if (filters.priceMin || filters.priceMax) {
                const budgetNum = parseInt(
                    post.budget.replace(/[^0-9-]/g, "").split("-")[0],
                );
                if (filters.priceMin && budgetNum < parseInt(filters.priceMin))
                    return false;
                if (filters.priceMax && budgetNum > parseInt(filters.priceMax))
                    return false;
            }

            // Location filter
            if (
                filters.location &&
                !post.location
                    .toLowerCase()
                    .includes(filters.location.toLowerCase())
            )
                return false;

            // Gender preference filter
            if (
                filters.gender &&
                post.preferences.gender !== filters.gender &&
                post.preferences.gender !== "Any"
            )
                return false;

            // Occupation filter
            if (
                filters.occupation &&
                !post.preferences.occupation
                    .toLowerCase()
                    .includes(filters.occupation.toLowerCase())
            )
                return false;

            // Lifestyle filters
            if (filters.lifestyle.length > 0) {
                const hasMatchingLifestyle = filters.lifestyle.some(
                    (lifestyle) =>
                        post.preferences.lifestyle?.some((pref) =>
                            pref
                                .toLowerCase()
                                .includes(lifestyle.toLowerCase()),
                        ),
                );
                if (!hasMatchingLifestyle) return false;
            }

            return true;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "latest":
                    return new Date(b.createdAt) - new Date(a.createdAt);
                case "popular":
                    return b.viewCount - a.viewCount;
                case "matches":
                    return b.matches - a.matches;
                case "budget_low":
                    const aBudget = parseInt(
                        a.budget.replace(/[^0-9-]/g, "").split("-")[0],
                    );
                    const bBudget = parseInt(
                        b.budget.replace(/[^0-9-]/g, "").split("-")[0],
                    );
                    return aBudget - bBudget;
                default:
                    return 0;
            }
        });

    const getMatchPercentage = (post) => {
        // This would ideally be based on user preferences
        // For demo, return random percentage
        return Math.floor(Math.random() * 30) + 70; // 70-100%
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                            Roommate Connect{" "}
                            <span className="text-primary">🤝</span>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            Find your perfect roommate or form a group to rent
                            together
                        </p>
                    </div>

                    <Link
                        href="/create-roommate-post"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <UserPlus className="w-5 h-5" />
                        Find a Roommate
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by name, location, interests, or tags..."
                            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-lg shadow-sm"
                        />
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                        {/* Sort Dropdown */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2.5 pr-10 text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            >
                                <option value="latest">Latest First</option>
                                <option value="popular">Most Viewed</option>
                                <option value="matches">Best Match</option>
                                <option value="budget_low">
                                    Budget: Low to High
                                </option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>

                        {/* Filter Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                                showFilters
                                    ? "bg-primary text-white"
                                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            Filters
                            {Object.values(filters)
                                .flat()
                                .filter((v) => v && v.length > 0).length >
                                0 && (
                                <span className="ml-1 px-1.5 py-0.5 bg-red-500 text-white text-xs rounded-full">
                                    {
                                        Object.values(filters).filter(
                                            (v) => v && v.length > 0,
                                        ).length
                                    }
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Results Count */}
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Showing{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            {filteredPosts.length}
                        </span>{" "}
                        potential roommates
                    </p>
                </div>

                {/* Expandable Filters */}
                {showFilters && (
                    <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 animate-slideDown">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                Filter Roommate Preferences
                            </h3>
                            <button
                                onClick={() =>
                                    setFilters({
                                        priceMin: "",
                                        priceMax: "",
                                        location: "",
                                        moveInDate: "",
                                        gender: "",
                                        occupation: "",
                                        lifestyle: [],
                                        interests: [],
                                    })
                                }
                                className="text-sm text-primary hover:text-primary/80"
                            >
                                Clear all
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Budget Range */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Budget Range (RM)
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        value={filters.priceMin}
                                        onChange={(e) =>
                                            setFilters({
                                                ...filters,
                                                priceMin: e.target.value,
                                            })
                                        }
                                        className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        value={filters.priceMax}
                                        onChange={(e) =>
                                            setFilters({
                                                ...filters,
                                                priceMax: e.target.value,
                                            })
                                        }
                                        className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    />
                                </div>
                            </div>

                            {/* Location */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Preferred Location
                                </label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Enter area..."
                                        value={filters.location}
                                        onChange={(e) =>
                                            setFilters({
                                                ...filters,
                                                location: e.target.value,
                                            })
                                        }
                                        className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    />
                                </div>
                            </div>

                            {/* Move-in Date */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Move-in Date
                                </label>
                                <div className="relative">
                                    <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="date"
                                        value={filters.moveInDate}
                                        onChange={(e) =>
                                            setFilters({
                                                ...filters,
                                                moveInDate: e.target.value,
                                            })
                                        }
                                        className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    />
                                </div>
                            </div>

                            {/* Gender Preference */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Gender Preference
                                </label>
                                <select
                                    value={filters.gender}
                                    onChange={(e) =>
                                        setFilters({
                                            ...filters,
                                            gender: e.target.value,
                                        })
                                    }
                                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                >
                                    <option value="">Any</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                </select>
                            </div>

                            {/* Occupation */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Occupation
                                </label>
                                <select
                                    value={filters.occupation}
                                    onChange={(e) =>
                                        setFilters({
                                            ...filters,
                                            occupation: e.target.value,
                                        })
                                    }
                                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                >
                                    <option value="">Any</option>
                                    <option value="Student">Student</option>
                                    <option value="Professional">
                                        Professional
                                    </option>
                                    <option value="Medical">Medical</option>
                                    <option value="Tech">Tech</option>
                                </select>
                            </div>

                            {/* Lifestyle Preferences */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Lifestyle
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {lifestyleOptions
                                        .slice(0, 6)
                                        .map(({ id, label, icon: Icon }) => (
                                            <button
                                                key={id}
                                                onClick={() => {
                                                    const newLifestyle =
                                                        filters.lifestyle.includes(
                                                            label,
                                                        )
                                                            ? filters.lifestyle.filter(
                                                                  (l) =>
                                                                      l !==
                                                                      label,
                                                              )
                                                            : [
                                                                  ...filters.lifestyle,
                                                                  label,
                                                              ];
                                                    setFilters({
                                                        ...filters,
                                                        lifestyle: newLifestyle,
                                                    });
                                                }}
                                                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                                    filters.lifestyle.includes(
                                                        label,
                                                    )
                                                        ? "bg-primary text-white"
                                                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                                }`}
                                            >
                                                <Icon className="w-3 h-3" />
                                                {label}
                                            </button>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Roommate Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => {
                            const matchPercentage = getMatchPercentage(post);
                            return (
                                <div
                                    key={post.id}
                                    onClick={() => openPostModal(post)}
                                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer border border-gray-100 dark:border-gray-700 group"
                                >
                                    {/* Profile Header Section */}
                                    <div className="relative h-32 bg-gradient-to-r from-primary/80 to-purple-600/80 p-4">
                                        {/* Match Score Badge */}
                                        <div className="absolute top-3 right-3">
                                            <div className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                                <HeartIcon className="w-3 h-3" />
                                                {matchPercentage}% Match
                                            </div>
                                        </div>

                                        {/* Profile Avatar */}
                                        <div className="absolute -bottom-12 left-4">
                                            <div className="relative">
                                                <img
                                                    src={post.user.avatar}
                                                    alt={post.user.name}
                                                    className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                                                />
                                                {post.user.isVerified && (
                                                    <div className="absolute bottom-1 right-1 bg-blue-500 rounded-full p-1">
                                                        <svg
                                                            className="w-3 h-3 text-white"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="pt-14 p-4">
                                        {/* Name and Basic Info */}
                                        <div className="mb-2">
                                            <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                                                {post.user.name},{" "}
                                                {post.user.age}
                                            </h3>
                                            <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                                <Briefcase className="w-3 h-3" />
                                                <span>
                                                    {post.user.occupation}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm mb-2 line-clamp-1">
                                            {post.title}
                                        </h4>

                                        {/* Location and Budget */}
                                        <div className="flex items-center justify-between mb-2 text-xs">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3 text-primary" />
                                                <span className="text-gray-600 dark:text-gray-400">
                                                    {
                                                        post.location.split(
                                                            ",",
                                                        )[0]
                                                    }
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <DollarSign className="w-3 h-3 text-green-500" />
                                                <span className="font-semibold text-gray-900 dark:text-white">
                                                    {post.budget}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Looking For Badge */}
                                        <div className="mb-2">
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-xs">
                                                <Users className="w-3 h-3" />
                                                Looking for:{" "}
                                                {post.lookingFor.gender},{" "}
                                                {post.lookingFor.ageRange}
                                            </span>
                                        </div>

                                        {/* Preferences Tags */}
                                        <div className="flex flex-wrap gap-1 mb-2">
                                            {Object.entries(post.preferences)
                                                .slice(0, 3)
                                                .map(([key, value], index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs text-gray-600 dark:text-gray-400"
                                                    >
                                                        {key}: {value}
                                                    </span>
                                                ))}
                                        </div>

                                        {/* Interests */}
                                        <div className="flex flex-wrap gap-1 mb-2">
                                            {post.user.interests
                                                .slice(0, 3)
                                                .map((interest, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 bg-primary/10 text-primary rounded-lg text-xs"
                                                    >
                                                        {interest}
                                                    </span>
                                                ))}
                                            {post.user.interests.length > 3 && (
                                                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs text-gray-600 dark:text-gray-400">
                                                    +
                                                    {post.user.interests
                                                        .length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* Languages */}
                                        <div className="flex items-center gap-1 mb-3 text-xs text-gray-500 dark:text-gray-500">
                                            <Languages className="w-3 h-3" />
                                            <span>
                                                {post.user.languages.join(
                                                    " • ",
                                                )}
                                            </span>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-1">
                                                    <Heart
                                                        className={`w-3 h-3 ${post.isLiked ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                                                    />
                                                    <span className="text-xs text-gray-600 dark:text-gray-400">
                                                        {post.likes}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MessageCircle className="w-3 h-3 text-gray-400" />
                                                    <span className="text-xs text-gray-600 dark:text-gray-400">
                                                        {post.comments}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <UsersRound className="w-3 h-3 text-gray-400" />
                                                    <span className="text-xs text-gray-600 dark:text-gray-400">
                                                        {post.matches} matches
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3 text-gray-400" />
                                                <span className="text-xs text-gray-500 dark:text-gray-500">
                                                    {post.createdAt}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Group Size */}
                                        <div className="mt-2 text-xs text-center text-primary bg-primary/5 py-1 rounded-lg">
                                            {post.groupSize}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-full text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                            <Users className="w-16 h-16 text-gray-400 mx-auto mb-3" />
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                No roommate posts found
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                                Try adjusting your filters or be the first to
                                post!
                            </p>
                            <Link
                                href="/create-roommate-post"
                                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all"
                            >
                                <UserPlus className="w-4 h-4" />
                                Post Your Roommate Search
                            </Link>
                        </div>
                    )}
                </div>

                {/* Load More Button */}
                {filteredPosts.length > 0 &&
                    filteredPosts.length < roommatePosts.length && (
                        <div className="mt-8 text-center">
                            <button className="px-8 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 font-medium hover:border-primary hover:text-primary transition-all hover:shadow-lg">
                                Load More Potential Roommates
                            </button>
                        </div>
                    )}
            </div>

            {/* Post Notice Modal */}
            <PostNoticeModal
                isOpen={isModalOpen}
                onClose={closePostModal}
                post={selectedPost}
                onLike={handleLike}
                onSave={handleSave}
                onComment={handleComment}
                type="roommate"
            />

            <Footer />
        </div>
    );
}
