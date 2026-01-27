// src/components/MessageInput.jsx
import React, { useState } from "react";
import {
    Send,
    Image,
    Paperclip,
    Smile,
    Mic,
    X,
    MapPin,
    DollarSign,
    Calendar,
} from "lucide-react";

const MessageInput = ({
    value,
    onChange,
    onSend,
    onKeyPress,
    onFileSelect,
    onEmojiSelect,
}) => {
    const [showQuickActions, setShowQuickActions] = useState(false);

    const quickActions = [
        { icon: MapPin, label: "Share Location", color: "text-blue-500" },
        { icon: Calendar, label: "Schedule Viewing", color: "text-green-500" },
        { icon: DollarSign, label: "Share Budget", color: "text-yellow-500" },
    ];

    return (
        <div className="bg-white border-t px-4 py-3">
            {/* Quick Actions */}
            {showQuickActions && (
                <div className="mb-3 bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                            Quick Actions
                        </span>
                        <button
                            onClick={() => setShowQuickActions(false)}
                            className="p-1 hover:bg-gray-200 rounded"
                        >
                            <X size={16} />
                        </button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {quickActions.map((action, index) => (
                            <button
                                key={index}
                                className="flex flex-col items-center p-2 bg-white rounded-lg border hover:border-blue-300 transition-colors"
                            >
                                <action.icon
                                    className={`${action.color} mb-1`}
                                    size={20}
                                />
                                <span className="text-xs text-gray-600">
                                    {action.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input Area */}
            <div className="flex items-end gap-2">
                {/* Attachment Button */}
                <div className="relative">
                    <button
                        onClick={() => setShowQuickActions(!showQuickActions)}
                        className="p-3 hover:bg-gray-100 rounded-full text-gray-600"
                    >
                        <Paperclip size={20} className="rotate-45" />
                    </button>
                </div>

                {/* Main Input */}
                <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-2">
                    <textarea
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onKeyPress={onKeyPress}
                        placeholder="Type your message..."
                        className="w-full bg-transparent resize-none focus:outline-none max-h-32 min-h-[40px]"
                        rows="1"
                    />

                    {/* Bottom Row */}
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={onFileSelect}
                                className="p-1.5 hover:bg-gray-200 rounded text-gray-600"
                            >
                                <Image size={18} />
                            </button>
                            <button
                                onClick={onEmojiSelect}
                                className="p-1.5 hover:bg-gray-200 rounded text-gray-600"
                            >
                                <Smile size={18} />
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-1.5 hover:bg-gray-200 rounded text-gray-600">
                                <Mic size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Send Button */}
                <button
                    onClick={onSend}
                    disabled={!value.trim()}
                    className={`p-3 rounded-full ${value.trim() ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"} transition-colors`}
                >
                    <Send size={20} className="text-white" />
                </button>
            </div>

            {/* Message Tips */}
            <div className="mt-2 text-xs text-gray-500 flex items-center gap-4">
                <span>Press Enter to send</span>
                <span>Shift + Enter for new line</span>
            </div>
        </div>
    );
};

export default MessageInput;
