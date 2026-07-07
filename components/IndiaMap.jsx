'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle, Compass } from 'lucide-react';
import India from '@svg-maps/india';

// City positions mapped to the SVG viewBox (0 0 612 696)
const cities = [
  { name: 'Delhi', x: 258, y: 195 },
  { name: 'Kolkata', x: 420, y: 340 },
  { name: 'Mumbai', x: 168, y: 380 },
  { name: 'Hyderabad', x: 260, y: 430 },
  { name: 'Bengaluru', x: 235, y: 510 },
  { name: 'Chennai', x: 305, y: 500 },
];

// Ahmedabad HQ position
const hq = { x: 180, y: 310 };

export default function IndiaMap() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="relative w-full h-full min-h-[520px] flex items-center justify-center">
      {/* Floating Badge: APPROVED - top left */}
      <motion.div
        className="absolute -top-2 -left-4 xl:left-0 z-20"
        animate={shouldReduce ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-green-600 uppercase tracking-wider">Approved</p>
            <p className="text-sm font-bold text-gray-900">₹50L Sanctioned</p>
          </div>
        </div>
      </motion.div>

      {/* Floating Badge: LIVE NETWORK */}
      <motion.div
        className="absolute top-10 left-16 xl:left-24 z-20"
        animate={shouldReduce ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 3.5, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm shadow-green-400/50" />
          <div>
            <p className="text-[10px] font-bold text-green-600 uppercase tracking-wider">Live Network</p>
            <p className="text-sm font-semibold text-gray-800">28+ States · 5,000+ Clients</p>
          </div>
        </div>
      </motion.div>

      {/* Compass icon top-right */}
      <div className="absolute top-4 right-4 z-10">
        <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 flex items-center justify-center shadow-sm">
          <Compass className="w-5 h-5 text-blue-600" />
        </div>
      </div>

      {/* Main Map Container */}
      <div className="relative w-full max-w-[420px] mt-16">
        <svg
          viewBox={India.viewBox}
          className="w-full h-auto drop-shadow-xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="indiaFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <filter id="mapGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="2" dy="4" stdDeviation="6" floodOpacity="0.15" floodColor="#1E3A8A" />
            </filter>
          </defs>

          {/* Render all state paths as solid blue filled map */}
          <g fill="url(#indiaFill)" stroke="#1E40AF" strokeWidth="0.5" filter="url(#mapGlow)">
            {India.locations.map((loc) => (
              <path key={loc.id} d={loc.path} />
            ))}
          </g>

          {/* Connection lines from Ahmedabad HQ to cities */}
          <g stroke="#EF4444" strokeWidth="1.8" fill="none" opacity="0.4" strokeDasharray="6 5">
            {cities.map((city) => (
              <path
                key={city.name}
                d={`M ${hq.x},${hq.y} Q ${(hq.x + city.x) / 2 + 20},${(hq.y + city.y) / 2 - 20} ${city.x},${city.y}`}
              />
            ))}
          </g>

          {/* City markers */}
          {cities.map((city) => (
            <g key={city.name}>
              <circle cx={city.x} cy={city.y} r="7" fill="white" stroke="#6B7280" strokeWidth="2" />
              <circle cx={city.x} cy={city.y} r="3" fill="#6B7280" />
              <text
                x={city.x + 12}
                y={city.y + 4}
                fontSize="16"
                fontWeight="600"
                fill="#374151"
                fontFamily="Inter, system-ui, sans-serif"
              >
                {city.name}
              </text>
            </g>
          ))}

          {/* Ahmedabad HQ marker */}
          <g>
            <circle cx={hq.x} cy={hq.y} r="18" fill="#EF4444" opacity="0.12">
              <animate attributeName="r" values="18;30;18" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.12;0.02;0.12" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx={hq.x} cy={hq.y} r="12" fill="white" stroke="#EF4444" strokeWidth="3" />
            <circle cx={hq.x} cy={hq.y} r="5.5" fill="#EF4444" />
            <rect x={hq.x - 14} y={hq.y - 28} width="28" height="18" rx="5" fill="#EF4444" />
            <text x={hq.x} y={hq.y - 15} fontSize="11" fontWeight="700" fill="white" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">HQ</text>
          </g>
        </svg>

        {/* Ahmedabad label badge */}
        <motion.div
          className="absolute z-10"
          style={{ left: '8%', top: '44%' }}
          animate={shouldReduce ? {} : { scale: [1, 1.03, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="bg-red-500 text-white px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold whitespace-nowrap">
            Ahmedabad
          </div>
        </motion.div>

        {/* Legend */}
        <div className="mt-4 flex items-center gap-5 text-[11px] text-gray-500 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500 border-2 border-white shadow-sm" /> HQ
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-white border-2 border-gray-400" /> Metro
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-white border-2 border-gray-300" /> City
          </span>
        </div>
      </div>

      {/* Floating Badge: HQ AHMEDABAD - bottom right */}
      <motion.div
        className="absolute bottom-6 right-0 z-20"
        animate={shouldReduce ? {} : { y: [0, -5, 0] }}
        transition={{ duration: 3, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="bg-white rounded-2xl px-5 py-3 shadow-xl border border-gray-100">
          <p className="text-[10px] font-bold text-red-500 uppercase tracking-wider">HQ Ahmedabad</p>
          <p className="text-sm font-semibold text-gray-800 flex items-center gap-2 mt-0.5">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            Pan-India Reach
          </p>
        </div>
      </motion.div>
    </div>
  );
}
