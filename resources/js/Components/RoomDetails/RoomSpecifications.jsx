import React from "react";
import { Wifi, Snowflake, Sofa, Bath } from "lucide-react";

const RoomSpecifications = () => {
    const specifications = [
        {
            id: 1,
            icon: Wifi,
            label: "100Mbps WiFi",
            color: "text-blue-500",
        },
        {
            id: 2,
            icon: Snowflake,
            label: "Air Conditioning",
            color: "text-blue-400",
        },
        {
            id: 3,
            icon: Sofa,
            label: "Fully Furnished",
            color: "text-amber-500",
        },
        {
            id: 4,
            icon: Bath,
            label: "Private Bathroom",
            color: "text-cyan-500",
        },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specifications.map((spec) => {
                const Icon = spec.icon;
                return (
                    <div
                        key={spec.id}
                        className="p-4 border border-gray-100 dark:border-gray-800 rounded-lg flex flex-col items-center text-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-default"
                    >
                        <Icon className={`w-6 h-6 ${spec.color}`} />
                        <span className="text-xs text-gray-500 font-medium">
                            {spec.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default RoomSpecifications;
