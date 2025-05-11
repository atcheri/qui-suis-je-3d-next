"use client";

import { useRef, type FC, type PropsWithChildren } from "react";

interface GlowCardProps {
  card: { content: string; what: string };
  index: number;
}

const GlowCard: FC<PropsWithChildren<GlowCardProps>> = ({ card, index, children }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (index: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", `${angle + 60}`);
  };

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card mb-5 break-inside-avoid-column rounded-xl p-10"
    >
      <div className="glow"></div>
      <div className="mb-5 flex items-center gap-1">
        <p className="text-white-50 text-lg">{card.content}</p>
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.what}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
