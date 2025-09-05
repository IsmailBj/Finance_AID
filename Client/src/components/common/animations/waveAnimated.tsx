import { FC } from "react";

const WaveAnimated: FC = () => {
  return (
    <div className="wave-animation">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="6%" y1="26%" x2="94%" y2="74%">
            <stop offset="5%" stopColor="#284866" />
            <stop offset="95%" stopColor="#3a76a9" />
          </linearGradient>
        </defs>

        <path
          d="M 0,400 L 0,100 C 191.867,117.333 383.733,134.667 559,129 C 734.267,123.333 892.933,94.667 1037,86 C 1181.067,77.333 1310.533,88.667 1440,100 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="0.53"
          className="path-0"
        />

        <path
          d="M 0,400 L 0,233 C 153.467,229.8 306.933,226.6 481,224 C 655.067,221.4 849.733,219.4 1013,221 C 1176.267,222.6 1308.133,227.8 1440,233 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="1"
          className="path-1"
        />
      </svg>
    </div>
  );
};

export const Wave: FC = () => {
  return (
    <div className="wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2f6899"
          fill-opacity="1"
          d="M0,0L120,53.3C240,107,480,213,720,218.7C960,224,1200,128,1320,80L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default WaveAnimated;
