// src/pages/Messages.jsx
import React, { useState, useEffect, useRef } from "react";
import {
    Search,
    Filter,
    MoreVertical,
    Send,
    Image,
    Paperclip,
    Smile,
    Video,
    Phone,
    Info,
    X,
    Check,
    CheckCheck,
    Clock,
    UserPlus,
    Users,
    Shield,
    Bell,
    Pin,
    Trash2,
    Archive,
    Star,
    Reply,
    Forward,
    Copy,
    Mic,
    Eye,
    EyeOff,
    Calendar,
    MapPin,
    DollarSign,
    Home,
} from "lucide-react";
import MessageSidebar from "../components/Messages/MessageSidebar";
import ConversationHeader from "../components/Messages/ConversationHeader";
import MessageInput from "../components/Messages/MessageInput";
import MessageBubble from "../components/Messages/MessageBubble";

// Mock data
const mockConversations = [
    {
        id: 1,
        userId: "u001",
        name: "Alex Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        lastMessage: "Sure! Let me check the room availability for you.",
        timestamp: "10:30 AM",
        unread: 2,
        online: true,
        isVerified: true,
        role: "Potential Roommate",
        typing: false,
    },
    {
        id: 2,
        userId: "u002",
        name: "Sarah Miller",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        lastMessage: "The viewing is scheduled for tomorrow at 3 PM.",
        timestamp: "Yesterday",
        unread: 0,
        online: false,
        isVerified: true,
        role: "Landlord",
        typing: false,
    },
    {
        id: 3,
        userId: "u003",
        name: "David Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        lastMessage: "Shared a room listing with you",
        timestamp: "2 days ago",
        unread: 0,
        online: true,
        isVerified: false,
        role: "Room Seeker",
        typing: true,
    },
    {
        id: 4,
        userId: "u004",
        name: "Group: Downtown Apartments",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Group",
        lastMessage: "Emma: Anyone interested in splitting rent?",
        timestamp: "1 week ago",
        unread: 5,
        online: false,
        isVerified: false,
        isGroup: true,
        members: 4,
        typing: false,
    },
    {
        id: 5,
        userId: "u005",
        name: "Michael Wong",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
        lastMessage: "Thanks for confirming the booking!",
        timestamp: "2 weeks ago",
        unread: 0,
        online: false,
        isVerified: true,
        role: "Tenant",
        typing: false,
    },
];

const mockMessages = [
    {
        id: 1,
        senderId: "u001",
        content:
            "Hi! I saw your room listing in Downtown. Is it still available?",
        timestamp: "9:30 AM",
        status: "read",
        type: "text",
    },
    {
        id: 2,
        senderId: "current",
        content:
            "Yes, it's still available! Would you like to schedule a viewing?",
        timestamp: "9:32 AM",
        status: "read",
        type: "text",
    },
    {
        id: 3,
        senderId: "u001",
        content: "That would be great! What times work for you this week?",
        timestamp: "9:35 AM",
        status: "read",
        type: "text",
    },
    {
        id: 4,
        senderId: "current",
        content: "How about Thursday afternoon? I'm free from 2-5 PM.",
        timestamp: "9:37 AM",
        status: "read",
        type: "text",
    },
    {
        id: 5,
        senderId: "u001",
        content: "Perfect! Let's do Thursday at 3 PM.",
        timestamp: "9:40 AM",
        status: "delivered",
        type: "text",
    },
    {
        id: 6,
        senderId: "current",
        content: "Great! I'll send you the address and room details.",
        timestamp: "9:42 AM",
        status: "sent",
        type: "text",
    },
    {
        id: 7,
        senderId: "current",
        content: {
            type: "room-listing",
            data: {
                id: "room123",
                title: "Luxury Studio Downtown",
                price: 1800,
                location: "Downtown Core",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
                amenities: ["Fully Furnished", "Gym Access", "Parking"],
            },
        },
        timestamp: "9:45 AM",
        status: "sent",
        type: "room-card",
    },
    {
        id: 8,
        senderId: "u001",
        content: "Looks amazing! Can you share more photos?",
        timestamp: "10:15 AM",
        status: "read",
        type: "text",
    },
    {
        id: 9,
        senderId: "current",
        content: {
            type: "images",
            data: [
                "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=200&fit=crop",
            ],
        },
        timestamp: "10:30 AM",
        status: "sent",
        type: "media",
    },
];

const Messages = () => {
    const [conversations, setConversations] = useState(mockConversations);
    const [messages, setMessages] = useState(mockMessages);
    const [selectedConversation, setSelectedConversation] = useState(
        mockConversations[0],
    );
    const [newMessage, setNewMessage] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("all");
    const [showUserInfo, setShowUserInfo] = useState(false);
    const [messageMenu, setMessageMenu] = useState(null);
    const messagesEndRef = useRef(null);
    const fileInputRef = useRef(null);

    // Auto-scroll to bottom
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSendMessage = () => {
        if (!newMessage.trim()) return;

        const newMsg = {
            id: messages.length + 1,
            senderId: "current",
            content: newMessage,
            timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
            status: "sent",
            type: "text",
        };

        setMessages([...messages, newMsg]);
        setNewMessage("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleSelectConversation = (conversation) => {
        setSelectedConversation(conversation);
        // In mobile view, close sidebar when selecting conversation
        if (window.innerWidth < 768) {
            setSidebarOpen(false);
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Handle file upload logic
            console.log("File selected:", file.name);
        }
    };

    const handleMessageAction = (action, messageId) => {
        setMessageMenu(null);
        switch (action) {
            case "reply":
                // Implement reply
                break;
            case "forward":
                // Implement forward
                break;
            case "copy":
                navigator.clipboard.writeText(
                    messages.find((m) => m.id === messageId)?.content || "",
                );
                break;
            case "delete":
                setMessages(messages.filter((m) => m.id !== messageId));
                break;
            case "pin":
                // Implement pin
                break;
        }
    };

    const filteredConversations = conversations
        .filter((conv) => {
            if (filter === "unread") return conv.unread > 0;
            if (filter === "groups") return conv.isGroup;
            if (filter === "verified") return conv.isVerified;
            return true;
        })
        .filter(
            (conv) =>
                conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                conv.lastMessage
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()),
        );

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <MessageSidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                conversations={filteredConversations}
                selectedId={selectedConversation.id}
                onSelect={handleSelectConversation}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                filter={filter}
                onFilterChange={setFilter}
            />

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Top Bar - Only shows on mobile when sidebar is closed */}
                {!sidebarOpen && (
                    <div className="md:hidden bg-white border-b p-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="flex items-center gap-2 text-blue-600"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            Conversations
                        </button>
                    </div>
                )}

                {/* Conversation Header */}
                <ConversationHeader
                    conversation={selectedConversation}
                    onBack={() =>
                        window.innerWidth < 768 && setSidebarOpen(true)
                    }
                    onInfoToggle={() => setShowUserInfo(!showUserInfo)}
                    showInfo={showUserInfo}
                />

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
                        {/* Date Separator */}
                        <div className="flex items-center justify-center my-8">
                            <div className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
                                Today
                            </div>
                        </div>

                        {/* Messages */}
                        {messages.map((message) => (
                            <MessageBubble
                                key={message.id}
                                message={message}
                                isCurrentUser={message.senderId === "current"}
                                onAction={handleMessageAction}
                                menuOpen={messageMenu === message.id}
                                onMenuToggle={() =>
                                    setMessageMenu(
                                        messageMenu === message.id
                                            ? null
                                            : message.id,
                                    )
                                }
                            />
                        ))}

                        {/* Typing Indicator */}
                        {selectedConversation.typing && (
                            <div className="flex items-center space-x-2">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                    <img
                                        src={selectedConversation.avatar}
                                        alt={selectedConversation.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                </div>
                                <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>
                </div>

                {/* Message Input */}
                <MessageInput
                    value={newMessage}
                    onChange={setNewMessage}
                    onSend={handleSendMessage}
                    onKeyPress={handleKeyPress}
                    onFileSelect={() => fileInputRef.current?.click()}
                    onEmojiSelect={() => {}}
                />

                {/* Hidden file input */}
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileUpload}
                    accept="image/*,.pdf,.doc,.docx"
                />
            </div>

            {/* User Info Sidebar */}
            {showUserInfo && (
                <div className="w-80 border-l bg-white hidden md:block">
                    <div className="p-6">
                        {/* User Profile */}
                        <div className="text-center mb-8">
                            <div className="relative inline-block">
                                <img
                                    src={selectedConversation.avatar}
                                    alt={selectedConversation.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                />
                                <div
                                    className={`absolute bottom-4 right-4 w-4 h-4 rounded-full border-2 border-white ${selectedConversation.online ? "bg-green-500" : "bg-gray-400"}`}
                                />
                            </div>
                            <h3 className="text-xl font-bold flex items-center justify-center gap-2">
                                {selectedConversation.name}
                                {selectedConversation.isVerified && (
                                    <Shield className="w-5 h-5 text-blue-500 fill-blue-100" />
                                )}
                            </h3>
                            <p className="text-gray-600">
                                {selectedConversation.role}
                            </p>
                            <div className="flex gap-2 justify-center mt-3">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                                    <Phone size={16} />
                                    Call
                                </button>
                                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
                                    <Video size={16} />
                                    Video
                                </button>
                            </div>
                        </div>

                        {/* Shared Items */}
                        <div className="mb-8">
                            <h4 className="font-semibold mb-4 flex items-center gap-2">
                                <Paperclip size={18} />
                                Shared Items
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Image
                                        className="text-blue-500"
                                        size={20}
                                    />
                                    <div className="flex-1">
                                        <p className="font-medium">5 photos</p>
                                        <p className="text-sm text-gray-500">
                                            Last shared today
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Home
                                        className="text-green-500"
                                        size={20}
                                    />
                                    <div className="flex-1">
                                        <p className="font-medium">
                                            3 room listings
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            2 shared by you
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Shared Listings */}
                        <div className="mb-8">
                            <h4 className="font-semibold mb-4">
                                Shared Listings
                            </h4>
                            <div className="bg-blue-50 rounded-xl p-4">
                                <div className="flex gap-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=100&h=75&fit=crop"
                                        className="w-16 h-12 rounded-lg object-cover"
                                        alt="Room"
                                    />
                                    <div>
                                        <h5 className="font-semibold text-sm">
                                            Downtown Studio
                                        </h5>
                                        <div className="flex items-center gap-1 text-xs text-gray-600">
                                            <MapPin size={12} />
                                            <span>1.2 km away</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs font-semibold text-green-600 mt-1">
                                            <DollarSign size={12} />
                                            <span>1,800/month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Privacy & Security */}
                        <div className="border-t pt-6">
                            <h4 className="font-semibold mb-4 flex items-center gap-2">
                                <Shield size={18} />
                                Privacy
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">
                                        Encrypted Messages
                                    </span>
                                    <div className="flex items-center gap-2 text-green-600">
                                        <Check size={16} />
                                        <span className="text-xs">ON</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">
                                        Read Receipts
                                    </span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            defaultChecked
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Messages;
