// LoginHero.jsx
import React from "react";

const LoginHero = () => {
    return (
        <div className="h-full flex flex-col">
            <div className="text-4xl leading-tight font-display font-semibold max-w-md">
                Discover rooms and roommates across Malaysia faster
            </div>

            <p className="mt-6 text-white/85 max-w-md">
                “KitaRoom helped me secure a room in KL within days. Verified
                profiles and smart filters made it easy to decide.”
            </p>

            <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold">
                    AC
                </div>
                <div>
                    <div className="font-semibold">Aisha C.</div>
                    <div className="text-sm text-white/70">
                        Product Designer at Sunway
                    </div>
                </div>
            </div>

            <div className="mt-auto pt-10">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70">
                    Join 1k teams
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-2">? KLCC</div>
                    <div className="flex items-center gap-2">? Mont Kiara</div>
                    <div className="flex items-center gap-2">? Subang</div>
                    <div className="flex items-center gap-2">? Johor Bahru</div>
                </div>
            </div>
        </div>
    );
};

export default LoginHero;
