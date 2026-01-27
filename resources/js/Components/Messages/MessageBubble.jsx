// src/components/MessageBubble.jsx
import React, { useState } from "react";
import {
    Check,
    CheckCheck,
    Clock,
    MoreVertical,
    Image as ImageIcon,
    Home,
    MapPin,
    DollarSign,
    Star,
    Reply,
    Forward,
    Copy,
    Trash2,
    Pin,
    Download,
} from "lucide-react";

const MessageBubble = ({
    message,
    isCurrentUser,
    onAction,
    menuOpen,
    onMenuToggle,
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const getStatusIcon = (status) => {
        switch (status) {
            case "sent":
                return <Clock size={12} className="text-gray-400" />;
            case "delivered":
                return <CheckCheck size={12} className="text-gray-400" />;
            case "read":
                return <CheckCheck size={12} className="text-blue-500" />;
            default:
                return null;
        }
    };

    const menuItems = [
        { icon: Reply, label: "Reply", action: "reply" },
        { icon: Forward, label: "Forward", action: "forward" },
        { icon: Copy, label: "Copy", action: "copy" },
        { icon: Pin, label: "Pin", action: "pin" },
        { icon: Trash2, label: "Delete", action: "delete", danger: true },
    ];

    const renderContent = () => {
        switch (message.type) {
            case "room-card":
                const room = message.content.data;
                return (
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 max-w-sm">
                        <div className="flex gap-3">
                            <img
                                src={room.image}
                                alt={room.title}
                                className="w-20 h-16 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                                <h4 className="font-bold text-gray-800">
                                    {room.title}
                                </h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="flex items-center gap-1 text-sm text-gray-600">
                                        <MapPin size={12} />
                                        <span>{room.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm font-semibold text-green-600">
                                        <DollarSign size={12} />
                                        <span>${room.price}/month</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {room.amenities.map((amenity, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-white px-2 py-1 rounded-full"
                                        >
                                            {amenity}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            View Listing
                        </button>
                    </div>
                );

            case "media":
                return (
                    <div className="grid grid-cols-2 gap-2">
                        {message.content.data.map((img, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={img}
                                    alt={`Shared image ${index + 1}`}
                                    className="rounded-lg w-full h-32 object-cover"
                                    onLoad={() => setImageLoaded(true)}
                                />
                                {!imageLoaded && (
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                                )}
                            </div>
                        ))}
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                            <ImageIcon size={14} />
                            <span>{message.content.data.length} images</span>
                        </div>
                    </div>
                );

            default:
                return (
                    <p className="whitespace-pre-wrap break-words">
                        {message.content}
                    </p>
                );
        }
    };

    return (
        <div
            className={`flex ${isCurrentUser ? "justify-end" : "justify-start"} group`}
        >
            <div
                className={`relative max-w-xl ${isCurrentUser ? "mr-4" : "ml-4"}`}
            >
                {/* Message Bubble */}
                <div
                    className={`relative rounded-2xl px-4 py-3 ${
                        isCurrentUser
                            ? "bg-blue-600 text-white rounded-br-none"
                            : "bg-white text-gray-800 rounded-bl-none shadow-sm border"
                    }`}
                >
                    {renderContent()}

                    {/* Timestamp and Status */}
                    <div
                        className={`flex items-center justify-end gap-1 mt-1 ${isCurrentUser ? "text-blue-100" : "text-gray-500"}`}
                    >
                        <span className="text-xs">{message.timestamp}</span>
                        {isCurrentUser && getStatusIcon(message.status)}
                    </div>
                </div>

                {/* Message Actions Menu */}
                <div className="absolute top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={onMenuToggle}
                        className={`p-1.5 rounded-full bg-white shadow-lg border ${
                            isCurrentUser ? "-left-10" : "-right-10"
                        }`}
                    >
                        <MoreVertical size={16} className="text-gray-600" />
                    </button>

                    {/* Dropdown Menu */}
                    {menuOpen && (
                        <div
                            className={`absolute top-0 ${
                                isCurrentUser ? "right-12" : "left-12"
                            } bg-white shadow-xl rounded-lg border py-1 z-10 min-w-[160px]`}
                        >
                            {menuItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        onAction(item.action, message.id)
                                    }
                                    className={`flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left ${item.danger ? "text-red-600" : "text-gray-700"}`}
                                >
                                    <item.icon size={16} />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MessageBubble;
