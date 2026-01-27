// src/components/LocationMap.jsx
import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import marker images
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const LocationMap = ({ locations, onLocationClick, height = "500px" }) => {
    const mapContainer = useRef(null);
    const mapRef = useRef(null);
    const markersRef = useRef([]);

    useEffect(() => {
        // Initialize map only once
        if (mapContainer.current && !mapRef.current) {
            // Center on Singapore coordinates
            mapRef.current = L.map(mapContainer.current).setView(
                [1.3521, 103.8198],
                12,
            );

            // Add OpenStreetMap tiles
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "© OpenStreetMap contributors",
                maxZoom: 19,
            }).addTo(mapRef.current);
        }

        // Clear existing markers
        markersRef.current.forEach((marker) => marker.remove());
        markersRef.current = [];

        // Add markers for each location
        if (mapRef.current && locations.length > 0) {
            locations.forEach((location) => {
                const marker = L.marker([
                    location.coordinates.lat,
                    location.coordinates.lng,
                ]).addTo(mapRef.current);

                // Create popup content
                const popupContent = `
          <div style="padding: 10px; min-width: 200px;">
            <h3 style="font-weight: bold; margin-bottom: 5px;">${location.name}</h3>
            <p style="color: #666; margin-bottom: 5px;">${location.availableRooms} rooms available</p>
            <p style="font-weight: bold; color: #2563eb;">From $${location.averagePrice}/month</p>
            <button 
              style="margin-top: 10px; width: 100%; background-color: #2563eb; color: white; padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer;"
              onclick="window.dispatchEvent(new CustomEvent('select-location', { detail: ${location.id} }))"
            >
              View Details
            </button>
          </div>
        `;

                marker.bindPopup(popupContent);

                // Add click event
                marker.on("click", () => {
                    onLocationClick(location);
                });

                markersRef.current.push(marker);
            });

            // Fit bounds to show all markers
            if (markersRef.current.length > 0) {
                const bounds = L.latLngBounds(
                    markersRef.current.map((m) => m.getLatLng()),
                );
                mapRef.current.fitBounds(bounds, { padding: [50, 50] });
            }
        }

        // Cleanup on unmount
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [locations, onLocationClick]);

    return (
        <div className="relative rounded-xl overflow-hidden shadow-lg">
            <div ref={mapContainer} style={{ height }} className="w-full" />
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 z-[1000]">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Available Rooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Budget Friendly</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Add global event listener for popup buttons
if (typeof window !== "undefined") {
    window.addEventListener("select-location", (e) => {
        console.log("Location selected from popup:", e.detail);
        // You can dispatch a custom event or use your state management here
    });
}

export default LocationMap;
