import { useState, useEffect } from "react";

export default function ExplosionPage() {
    const [showExplosion, setShowExplosion] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowExplosion(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-black">
            {showExplosion ? (
                <img
                    src="/explosion1.gif"
                    alt="Explosion"
                    width={500}
                    height={500}
                />
            ) : (
                <p className="text-white text-xl">Loading explosion...</p>
            )}
        </div>
    );
}
