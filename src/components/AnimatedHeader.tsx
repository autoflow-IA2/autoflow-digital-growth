import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export const AnimatedHeader = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Wave parameters - creating flowing waves
    const getWaves = (canvasHeight: number) => [
      {
        amplitude: 80,
        frequency: 0.008,
        speed: 0.015,
        y: canvasHeight * 0.35,
        color: "#A855F7", // Bright purple
        glowColor: "rgba(168, 85, 247, 1)",
        thickness: 4,
      },
      {
        amplitude: 70,
        frequency: 0.01,
        speed: 0.02,
        y: canvasHeight * 0.42,
        color: "#06B6D4", // Cyan
        glowColor: "rgba(6, 182, 212, 1)",
        thickness: 3,
      },
      {
        amplitude: 90,
        frequency: 0.007,
        speed: 0.018,
        y: canvasHeight * 0.48,
        color: "#8B5CF6", // Purple
        glowColor: "rgba(139, 92, 246, 1)",
        thickness: 4,
      },
      {
        amplitude: 75,
        frequency: 0.012,
        speed: 0.022,
        y: canvasHeight * 0.55,
        color: "#14B8A6", // Teal
        glowColor: "rgba(20, 184, 166, 1)",
        thickness: 3,
      },
      {
        amplitude: 85,
        frequency: 0.009,
        speed: 0.016,
        y: canvasHeight * 0.62,
        color: "#A855F7", // Bright purple
        glowColor: "rgba(168, 85, 247, 1)",
        thickness: 3,
      },
      {
        amplitude: 65,
        frequency: 0.011,
        speed: 0.019,
        y: canvasHeight * 0.68,
        color: "#06B6D4", // Cyan
        glowColor: "rgba(6, 182, 212, 0.9)",
        thickness: 3,
      },
    ];

    // Set canvas size
    let waves = getWaves(canvas.height);
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      waves = getWaves(canvas.height);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let time = 0;
    let animationFrameId: number;

    const drawWave = (
      wave: typeof waves[0],
      time: number,
      ctx: CanvasRenderingContext2D
    ) => {
      ctx.beginPath();
      ctx.moveTo(0, wave.y);

      for (let x = 0; x < canvas.width; x += 1) {
        const y =
          wave.y +
          Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude;
        ctx.lineTo(x, y);
      }

      // Create gradient for the wave
      const gradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, wave.y + wave.amplitude);
      if (wave.color.includes("#A855F7") || wave.color.includes("#8B5CF6")) {
        // Purple to magenta gradient
        gradient.addColorStop(0, "#EC4899"); // Pink/Magenta
        gradient.addColorStop(0.5, wave.color);
        gradient.addColorStop(1, "#8B5CF6"); // Purple
      } else {
        // Cyan to blue gradient
        gradient.addColorStop(0, "#06B6D4"); // Cyan
        gradient.addColorStop(0.5, wave.color);
        gradient.addColorStop(1, "#3B82F6"); // Blue
      }

      // Multiple glow layers for stronger effect
      ctx.shadowBlur = 30;
      ctx.shadowColor = wave.glowColor;
      ctx.strokeStyle = gradient;
      ctx.lineWidth = wave.thickness;
      ctx.stroke();

      // Additional glow layer
      ctx.shadowBlur = 15;
      ctx.lineWidth = wave.thickness * 0.5;
      ctx.stroke();

      // Reset shadow
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      // Enhanced dark gradient background with subtle color variation
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#0A0419"); // Dark purple
      gradient.addColorStop(0.3, "#1A0B2E"); // Medium purple
      gradient.addColorStop(0.5, "#2D1B4E"); // Lighter purple (center)
      gradient.addColorStop(0.7, "#1A0B2E"); // Medium purple
      gradient.addColorStop(1, "#0A0419"); // Dark purple
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.3;

      waves.forEach((wave) => {
        drawWave(wave, time, ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0A0419 0%, #1A0B2E 30%, #2D1B4E 50%, #1A0B2E 70%, #0A0419 100%)"
      }}
    >
      {/* Animated waves canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "screen", opacity: 0.9 }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main Title */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span
              className="inline-block animate-text-glow bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent"
              style={{
                textShadow:
                  "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(139, 92, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)",
              }}
            >
              Autoflow
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 uppercase tracking-widest animate-fade-in"
            style={{
              animationDelay: "0.3s",
              textShadow: "0 2px 10px rgba(255, 255, 255, 0.3)",
            }}
          >
            Intelligent Automation
          </p>

          {/* CTA Button - Teste nossos Agente */}
          <div
            className="animate-fade-in pt-8"
            style={{
              animationDelay: "0.6s",
            }}
          >
            <Button
              asChild
              variant="gradient"
              size="xl"
              className="group relative overflow-hidden min-w-[280px] sm:min-w-[320px] bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:from-purple-500 hover:via-pink-400 hover:to-purple-500 text-white border-2 border-white/30 shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:shadow-[0_0_60px_rgba(236,72,153,0.8)] transition-all duration-500"
            >
              <a
                href="https://portifolio.casalsmart.com/"
                className="flex items-center gap-3 text-white"
              >
                <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 text-white" />
                <span className="text-lg sm:text-xl font-bold text-white">
                  Teste nossos Agentes
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative star icon (bottom right) */}
      <div
        className="absolute bottom-8 right-8 w-6 h-6 opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          className="w-full h-full"
        >
          <path d="M12 2L14.5 8.5L21 11L14.5 13.5L12 20L9.5 13.5L3 11L9.5 8.5L12 2Z" />
        </svg>
      </div>
    </section>
  );
};

