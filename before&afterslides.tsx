import { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function BeforeAfterSlider({ before, after, title, description }) {
  const [sliderPos, setSliderPos] = useState(50);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="relative aspect-square rounded-[2.5rem] overflow-hidden cursor-ew-resize">
        <img src={after} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
          <img src={before} className="absolute inset-0 w-full h-full object-cover grayscale" />
        </div>
        <div className="absolute top-0 bottom-0 w-px bg-accent" style={{ left: `${sliderPos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg"><ArrowLeftRight size={20}/></div>
        </div>
      </div>
      <div>
        <h3 className="text-4xl font-bold">{title}</h3>
        <p className="text-soft-gray mt-4">{description}</p>
      </div>
    </div>
  );
}
