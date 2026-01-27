// src/components/MessageSidebar.jsx
import React from "react";
import {
    Search,
    Filter,
    UserPlus,
    MessageSquare,
    Users,
    Shield,
    CheckCircle,
    X,
} from "lucide-react";

const MessageSidebar = ({
    isOpen,
    onClose,
    conversations,
    selectedId,
    onSelect,
    searchQuery,
    onSearchChange,
    filter,
    onFilterChange,
}) => {
    const filters = [
        { id: "all", label: "All", icon: MessageSquare },
        {
            id: "unread",
            label: "Unread",
            badge: conversations.filter((c) => c.unread > 0).length,
        },
        { id: "groups", label: "Groups", icon: Users },
        { id: "verified", label: "Verified", icon: Shield },
    ];

    return (
        <div
            className={`${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} 
      transition-transform duration-300 fixed md:relative z-40 w-full md:w-96 h-full bg-white border-r flex flex-col`}
        >
            {/* Sidebar Header */}
            <div className="p-4 border-b">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Messages</h2>
                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <UserPlus size={20} />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-lg md:hidden"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Search */}
                <div className="relative mb-4">
                    <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                    />
                    <input
                        type="text"
                        placeholder="Search conversations..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>

                {/* Filters */}
                <div className="flex gap-1 overflow-x-auto pb-2">
                    {filters.map((f) => {
                        const Icon = f.icon;
                        return (
                            <button
                                key={f.id}
                                onClick={() => onFilterChange(f.id)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${filter === f.id ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`}
                            >
                                {Icon && <Icon size={16} />}
                                <span>{f.label}</span>
                                {f.badge && f.badge > 0 && (
                                    <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                                        {f.badge}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto">
                {conversations.length === 0 ? (
                    <div className="text-center py-12">
                        <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">No conversations found</p>
                    </div>
                ) : (
                    conversations.map((conv) => (
                        <div
                            key={conv.id}
                            onClick={() => onSelect(conv)}
                            className={`flex items-center gap-3 p-4 border-b cursor-pointer transition-colors hover:bg-gray-50 ${selectedId === conv.id ? "bg-blue-50 border-blue-200" : ""}`}
                        >
                            {/* Avatar */}
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                                    {conv.isGroup ? (
                                        <Users size={20} />
                                    ) : (
                                        <img
                                            src={conv.avatar}
                                            alt={conv.name}
                                            className="w-12 h-12 rounded-full"
                                        />
                                    )}
                                </div>
                                {conv.online && !conv.isGroup && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                                )}
                            </div>

                            {/* Conversation Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold truncate flex items-center gap-1">
                                        {conv.name}
                                        {conv.isVerified && (
                                            <CheckCircle
                                                size={14}
                                                className="text-blue-500 fill-blue-100"
                                            />
                                        )}
                                    </h3>
                                    <span className="text-xs text-gray-500">
                                        {conv.timestamp}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-gray-600 truncate">
                                        {conv.typing ? (
                                            <span className="text-blue-600 italic">
                                                typing...
                                            </span>
                                        ) : (
                                            conv.lastMessage
                                        )}
                                    </p>
                                    {conv.unread > 0 && (
                                        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                                            {conv.unread}
                                        </span>
                                    )}
                                </div>
                                {conv.isGroup && (
                                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                                        <Users size={12} />
                                        <span>{conv.members} members</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Bottom Info */}
            <div className="p-4 border-t bg-gray-50">
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">
                            Secure & Encrypted
                        </span>
                    </div>
                    <span className="text-gray-500">
                        {conversations.length} conversations
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MessageSidebar;
