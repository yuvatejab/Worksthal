"use client";

import { useEffect, useState } from "react";
import { LightRays } from "@/components/ui/light-rays";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

type BackgroundType = "light-rays" | "flickering-grid" | "dot-pattern" | "none";

interface BackgroundManagerProps {
  activeSection: string;
}

export function BackgroundManager({ activeSection }: BackgroundManagerProps) {
  const [currentBg, setCurrentBg] = useState<BackgroundType>("light-rays");

  useEffect(() => {
    switch (activeSection) {
      case "home":
        setCurrentBg("light-rays");
        break;
      case "services":
        setCurrentBg("flickering-grid");
        break;
      case "about":
        setCurrentBg("none");
        break;
      case "tech-stack":
        setCurrentBg("dot-pattern");
        break;
      case "contact":
        setCurrentBg("light-rays");
        break;
      default:
        setCurrentBg("none");
    }
  }, [activeSection]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Light Rays Background */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-1000",
          currentBg === "light-rays" ? "opacity-100" : "opacity-0"
        )}
      >
        <LightRays
          count={5}
          color="rgba(161, 161, 170, 0.06)"
          blur={60}
          opacity={0.3}
          speed={22}
          length="80vh"
        />
      </div>

      {/* Flickering Grid Background */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-1000",
          currentBg === "flickering-grid" ? "opacity-40" : "opacity-0"
        )}
      >
        <FlickeringGrid
          className="absolute inset-0"
          squareSize={4}
          gridGap={6}
          color="rgb(161, 161, 170)"
          maxOpacity={0.03}
          flickerChance={0.02}
        />
      </div>

      {/* Dot Pattern Background */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-1000",
          currentBg === "dot-pattern" ? "opacity-100" : "opacity-0"
        )}
      >
        <DotPattern
          className={cn(
            "absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
          )}
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
        />
      </div>
    </div>
  );
}
