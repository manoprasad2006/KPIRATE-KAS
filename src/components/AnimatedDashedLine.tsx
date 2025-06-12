import React from 'react';

interface AnimatedDashedLineProps {
  width?: number | string;
  height?: number | string;
  shipImg?: string;
}

const AnimatedDashedLine: React.FC<AnimatedDashedLineProps> = ({
  width = '100%',
  height = 120,
  shipImg = '/ship-dall.png',
}) => (
  <svg className="w-full" style={{ width, height }} viewBox="0 0 1200 120">
    <path
      d="M0,60 Q300,20 600,60 T1200,60"
      stroke="#00F6FF"
      strokeWidth="3"
      fill="none"
      strokeDasharray="10,5"
      className="animate-pulse"
    />
    {/* Animated ship */}
    <image
      href={shipImg}
      width="48"
      height="48"
      y="-32"
      style={{ filter: 'drop-shadow(0 0 8px #FFD700)' }}
    >
      <animateMotion
        dur="20s"
        repeatCount="indefinite"
        path="M0,60 Q300,20 600,60 T1200,60"
      />
    </image>
  </svg>
);

export default AnimatedDashedLine; 