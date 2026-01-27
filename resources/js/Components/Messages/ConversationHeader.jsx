// src/components/ConversationHeader.jsx
import React from "react";
import {
    ChevronLeft,
    Phone,
    Video,
    Info,
    MoreVertical,
    Users,
    Shield,
    Bell,
    Pin,
} from "lucide-react";

const ConversationHeader = ({
    conversation,
    onBack,
    onInfoToggle,
    showInfo,
}) => {
    return (
        <div className="bg-white border-b px-4 py-3">
            <div className="flex items-center justify-between">
                {/* Left side - Back button and user info */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={onBack}
                        className="p-2 hover:bg-gray-100 rounded-lg md:hidden"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                                {conversation.isGroup ? (
                                    <Users size={20} />
                                ) : (
                                    <img
                                        src={conversation.avatar}
                                        alt={conversation.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                )}
                            </div>
                            {conversation.online && !conversation.isGroup && (
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                            )}
                        </div>

                        <div>
                            <div className="flex items-center gap-1">
                                <h2 className="font-bold text-lg">
                                    {conversation.name}
                                </h2>
                                {conversation.isVerified && (
                                    <Shield
                                        size={16}
                                        className="text-blue-500 fill-blue-100"
                                    />
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-sm text-gray-600">
                                    {conversation.online
                                        ? "Online now"
                                        : "Last seen recently"}
                                </p>
                                {conversation.isGroup && (
                                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                                        {conversation.members} members
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Action buttons */}
                <div className="flex items-center gap-1">
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                        <Bell size={20} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                        <Pin size={20} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                        <Phone size={20} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                        <Video size={20} />
                    </button>
                    <button
                        onClick={onInfoToggle}
                        className={`p-2 rounded-lg ${showInfo ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100 text-gray-600"}`}
                    >
                        <Info size={20} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                        <MoreVertical size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConversationHeader;
