import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const skills = ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "AI SaaS"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #11001F 0%, #2a004a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#c4b5fd", marginBottom: 12 }}>
          {siteConfig.location}
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.1 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 48, color: "#e9d5ff", marginTop: 8 }}>
          {siteConfig.role}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 48 }}>
          {skills.map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                fontSize: 28,
                padding: "10px 24px",
                borderRadius: 9999,
                border: "1px solid rgba(255,255,255,0.35)",
                color: "#f5f3ff",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
