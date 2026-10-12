"use client";

import { useState } from "react";
import Image from "next/image";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  title: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export function BeforeAfterSlider({
  before,
  after,
  title,
  beforeLabel = "قبل",
  afterLabel = "بعد",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div
      className="comparison__frame"
      role="group"
      aria-label={title}
    >
      <Image
        src={before}
        alt={`${title} — قبل العلاج`}
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="comparison__image"
        draggable={false}
      />
      <Image
        src={after}
        alt={`${title} — بعد العلاج`}
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="comparison__image comparison__after"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      <input
        className="comparison__range"
        type="range"
        min={0}
        max={100}
        step={1}
        value={position}
        aria-label={`اسحب لمقارنة صور ${title} قبل وبعد`}
        onChange={(event) => setPosition(Number(event.target.value))}
      />

      <div className="comparison__divider" style={{ left: `${position}%` }} aria-hidden="true">
        <span className="comparison__handle">↔</span>
      </div>

      <span className="comparison__label comparison__label--before">{beforeLabel}</span>
      <span className="comparison__label comparison__label--after">{afterLabel}</span>
    </div>
  );
}
