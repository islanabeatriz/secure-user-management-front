import { motion } from 'motion/react';

export function WavyBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradientes para as linhas */}
          <linearGradient id="blueGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 100, 255, 0)" />
            <stop offset="50%" stopColor="rgba(0, 100, 255, 0.6)" />
            <stop offset="100%" stopColor="rgba(0, 100, 255, 0)" />
          </linearGradient>
          <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 200, 255, 0)" />
            <stop offset="50%" stopColor="rgba(0, 200, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(0, 200, 255, 0)" />
          </linearGradient>
          <linearGradient id="lightBlueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(100, 180, 255, 0)" />
            <stop offset="50%" stopColor="rgba(100, 180, 255, 0.4)" />
            <stop offset="100%" stopColor="rgba(100, 180, 255, 0)" />
          </linearGradient>
          
          {/* Filtros de brilho */}
          <filter id="glow1">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Linha de onda 1 - Azul profundo */}
        <motion.path
          d="M-500,300 Q-250,200 0,300 T500,300 T1000,300 T1500,300 T2000,300 T2500,300"
          stroke="url(#blueGradient1)"
          strokeWidth="3"
          fill="none"
          filter="url(#glow1)"
          animate={{
            d: [
              "M-500,300 Q-250,200 0,300 T500,300 T1000,300 T1500,300 T2000,300 T2500,300",
              "M-500,300 Q-250,400 0,300 T500,300 T1000,300 T1500,300 T2000,300 T2500,300",
              "M-500,300 Q-250,200 0,300 T500,300 T1000,300 T1500,300 T2000,300 T2500,300",
            ],
            x: [-500, 500],
          }}
          transition={{
            d: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 15, repeat: Infinity, ease: "linear" },
          }}
        />

        {/* Linha de onda 2 - Ciano */}
        <motion.path
          d="M-500,400 Q-250,350 0,400 T500,400 T1000,400 T1500,400 T2000,400 T2500,400"
          stroke="url(#cyanGradient)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glow2)"
          animate={{
            d: [
              "M-500,400 Q-250,350 0,400 T500,400 T1000,400 T1500,400 T2000,400 T2500,400",
              "M-500,400 Q-250,450 0,400 T500,400 T1000,400 T1500,400 T2000,400 T2500,400",
              "M-500,400 Q-250,350 0,400 T500,400 T1000,400 T1500,400 T2000,400 T2500,400",
            ],
            x: [500, -500],
          }}
          transition={{
            d: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        />

        {/* Linha de onda 3 - Azul claro */}
        <motion.path
          d="M-500,500 Q-250,480 0,500 T500,500 T1000,500 T1500,500 T2000,500 T2500,500"
          stroke="url(#lightBlueGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow1)"
          animate={{
            d: [
              "M-500,500 Q-250,480 0,500 T500,500 T1000,500 T1500,500 T2000,500 T2500,500",
              "M-500,500 Q-250,520 0,500 T500,500 T1000,500 T1500,500 T2000,500 T2500,500",
              "M-500,500 Q-250,480 0,500 T500,500 T1000,500 T1500,500 T2000,500 T2500,500",
            ],
            x: [-300, 300],
          }}
          transition={{
            d: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 25, repeat: Infinity, ease: "linear" },
          }}
        />

        {/* Linha de onda 4 - Azul profundo superior */}
        <motion.path
          d="M-500,200 Q-250,170 0,200 T500,200 T1000,200 T1500,200 T2000,200 T2500,200"
          stroke="url(#blueGradient1)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glow2)"
          animate={{
            d: [
              "M-500,200 Q-250,170 0,200 T500,200 T1000,200 T1500,200 T2000,200 T2500,200",
              "M-500,200 Q-250,230 0,200 T500,200 T1000,200 T1500,200 T2000,200 T2500,200",
              "M-500,200 Q-250,170 0,200 T500,200 T1000,200 T1500,200 T2000,200 T2500,200",
            ],
            x: [400, -600],
          }}
          transition={{
            d: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 18, repeat: Infinity, ease: "linear" },
          }}
        />

        {/* Linha de onda 5 - Ciano superior */}
        <motion.path
          d="M-500,250 Q-250,230 0,250 T500,250 T1000,250 T1500,250 T2000,250 T2500,250"
          stroke="url(#cyanGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow1)"
          animate={{
            d: [
              "M-500,250 Q-250,230 0,250 T500,250 T1000,250 T1500,250 T2000,250 T2500,250",
              "M-500,250 Q-250,270 0,250 T500,250 T1000,250 T1500,250 T2000,250 T2500,250",
              "M-500,250 Q-250,230 0,250 T500,250 T1000,250 T1500,250 T2000,250 T2500,250",
            ],
            x: [-400, 400],
          }}
          transition={{
            d: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 22, repeat: Infinity, ease: "linear" },
          }}
        />

        {/* Linha de onda 6 - Azul claro inferior */}
        <motion.path
          d="M-500,600 Q-250,580 0,600 T500,600 T1000,600 T1500,600 T2000,600 T2500,600"
          stroke="url(#lightBlueGradient)"
          strokeWidth="3"
          fill="none"
          filter="url(#glow2)"
          animate={{
            d: [
              "M-500,600 Q-250,580 0,600 T500,600 T1000,600 T1500,600 T2000,600 T2500,600",
              "M-500,600 Q-250,620 0,600 T500,600 T1000,600 T1500,600 T2000,600 T2500,600",
              "M-500,600 Q-250,580 0,600 T500,600 T1000,600 T1500,600 T2000,600 T2500,600",
            ],
            x: [300, -700],
          }}
          transition={{
            d: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 28, repeat: Infinity, ease: "linear" },
          }}
        />
      </svg>

      {/* Partículas de luz sutis */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: '3px',
              height: '3px',
              background: `radial-gradient(circle, rgba(${i % 2 === 0 ? '0, 180, 255' : '100, 200, 255'}, 0.6) 0%, transparent 70%)`,
              boxShadow: `0 0 10px rgba(${i % 2 === 0 ? '0, 180, 255' : '100, 200, 255'}, 0.5)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 150 - 75],
              y: [0, Math.random() * 150 - 75],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}
