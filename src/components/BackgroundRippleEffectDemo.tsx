import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function BackgroundRippleEffectDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden bg-background">
      <BackgroundRippleEffect />
      <div className="relative z-10 mt-60 w-full px-4">
        <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
          Interactive Background Ripple Effect
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
          Hover over the grid cells above and click to create mesmerizing ripple animations. 
          Perfect for hero sections and call-to-action areas.
        </p>
      </div>
    </div>
  );
}
