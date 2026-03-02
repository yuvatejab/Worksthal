"use client";

import dynamic from "next/dynamic";

const HoverVideoPlayer = dynamic(
  () => import("@/components/ui/hover-video-player").then((m) => m.HoverVideoPlayer),
  { ssr: false }
);
const NumberTicker = dynamic(
  () => import("@/components/ui/number-ticker").then((m) => m.NumberTicker),
  { ssr: false }
);

export function AboutVideoPlayer() {
  return (
    <HoverVideoPlayer
      videoSrc="/home page video.mp4"
      enableControls
      style={{
        width: "100%",
        maxWidth: "100vw",
        aspectRatio: "16/9",
      }}
    />
  );
}

export function StatTicker({ value }: { value: number }) {
  return <NumberTicker value={value} />;
}
