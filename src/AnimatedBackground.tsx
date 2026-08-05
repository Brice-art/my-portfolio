import { useEffect, useMemo, useState } from "react";

const COLORS = {
  background: "#F7F5EE",
  strokes: ["#7C9A92", "#A06060", "#8A7BB8", "#C79B4D", "#4E7DA9"],
} as const;

type Viewport = {
  width: number;
  height: number;
};

type CurvePoint = {
  x: number;
  y: number;
};

type CurveConfig = {
  id: string;
  points: CurvePoint[];
  color: string;
  opacity: number;
  strokeWidth: number;
  offset: number;
};

function createCurves(viewport: Viewport): CurveConfig[] {
  const { width, height } = viewport;
  const count = Math.max(14, Math.floor(width / 120));
  const curves: CurveConfig[] = [];

  for (let i = 0; i < count; i += 1) {
    const yStart = (height / count) * i - height * 0.16;
    const points: CurvePoint[] = [];
    const segments = 12;

    for (let s = 0; s <= segments; s += 1) {
      const x = (width / segments) * s;
      const wave =
        Math.sin((s / segments) * Math.PI * 2 + i * 0.45) *
        (height * 0.045 + (i % 5) * 8);
      points.push({ x, y: yStart + wave + (i % 3) * 20 });
    }

    curves.push({
      id: `curve-${i}`,
      points,
      color: COLORS.strokes[i % COLORS.strokes.length],
      opacity: 0.22 + (i % 4) * 0.05,
      strokeWidth: 1.4 + (i % 3) * 0.4,
      offset: (i % 6) * 10,
    });
  }

  return curves;
}

export default function AnimatedBackground() {
  const [viewport, setViewport] = useState<Viewport>({
    width: 1440,
    height: 900,
  });
  const [scrollOffset, setScrollOffset] = useState(0);

  const curves = useMemo(() => createCurves(viewport), [viewport]);

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleScroll = () => {
      setScrollOffset(window.scrollY * 0.08);
    };

    updateViewport();
    handleScroll();

    window.addEventListener("resize", updateViewport);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
        background: `linear-gradient(135deg, ${COLORS.background} 0%, #F1EEE6 55%, #FBF8F0 100%)`,
      }}
    >
      <style>{`
        @keyframes pulseLine {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>

      <svg
        viewBox={`0 0 ${viewport.width} ${viewport.height}`}
        style={{ width: "100%", height: "100%" }}
        preserveAspectRatio="none"
      >
        {curves.map((curve) => {
          const d = curve.points
            .map((point, index) => {
              const prefix = index === 0 ? "M" : "L";
              return `${prefix} ${point.x} ${point.y}`;
            })
            .join(" ");

          return (
            <path
              key={curve.id}
              d={d}
              fill="none"
              stroke={curve.color}
              strokeWidth={curve.strokeWidth}
              strokeOpacity={curve.opacity}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{
                transform: `translate3d(0, ${scrollOffset * 0.55}px, 0)`,
                opacity: scrollOffset > 4 ? curve.opacity : 0.05,
              }}
            />
          );
        })}

        <path
          d={`M 0 ${viewport.height * 0.18} C ${viewport.width * 0.2} ${viewport.height * 0.1}, ${viewport.width * 0.48} ${viewport.height * 0.23}, ${viewport.width} ${viewport.height * 0.12}`}
          fill="none"
          stroke="#A06060"
          strokeWidth="1.4"
          strokeOpacity="0.24"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ transform: `translate3d(0, ${scrollOffset * 0.45}px, 0)`, opacity: scrollOffset > 4 ? 0.28 : 0.04 }}
        />
        <path
          d={`M 0 ${viewport.height * 0.72} C ${viewport.width * 0.25} ${viewport.height * 0.64}, ${viewport.width * 0.58} ${viewport.height * 0.88}, ${viewport.width} ${viewport.height * 0.7}`}
          fill="none"
          stroke="#4E7DA9"
          strokeWidth="1.4"
          strokeOpacity="0.24"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ transform: `translate3d(0, ${scrollOffset * 0.35}px, 0)`, opacity: scrollOffset > 4 ? 0.28 : 0.04 }}
        />
      </svg>
    </div>
  );
}
