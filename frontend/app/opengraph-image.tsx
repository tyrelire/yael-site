import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yes Invoice — Facturière pour infirmières libérales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#FAF8F5",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Blob déco haut droite */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 480,
            height: 480,
            borderRadius: "50%",
            backgroundColor: "rgba(158,139,111,0.18)",
            filter: "blur(80px)",
          }}
        />
        {/* Blob déco bas gauche */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            backgroundColor: "rgba(158,139,111,0.12)",
            filter: "blur(60px)",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
          <span style={{ fontFamily: "serif", color: "#9E8B6F", fontSize: 52, lineHeight: 1 }}>Y</span>
          <span style={{ fontFamily: "serif", color: "#2D2219", fontSize: 40, fontWeight: 700, lineHeight: 1, marginLeft: -2 }}>es</span>
          <span style={{ color: "#2D2219", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginLeft: 12, alignSelf: "flex-end", marginBottom: 4, opacity: 0.55 }}>
            Invoice
          </span>
        </div>

        {/* Titre */}
        <div
          style={{
            fontFamily: "serif",
            color: "#2D2219",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 700,
            marginBottom: 24,
          }}
        >
          Vous soignez.{"\n"}Je m&apos;occupe du reste.
        </div>

        {/* Sous-titre */}
        <div
          style={{
            color: "rgba(45,34,25,0.65)",
            fontSize: 24,
            lineHeight: 1.5,
            maxWidth: 620,
            marginBottom: 48,
          }}
        >
          Facturation d&apos;actes infirmiers · Télétransmission SESAM-Vitale · Suivi remboursements
        </div>

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            backgroundColor: "#2D2219",
            color: "#FAF8F5",
            padding: "14px 28px",
            borderRadius: 14,
            alignSelf: "flex-start",
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          <span>Premier échange offert →</span>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 80,
            color: "rgba(45,34,25,0.35)",
            fontSize: 18,
            letterSpacing: "0.05em",
          }}
        >
          yesinvoice.fr
        </div>
      </div>
    ),
    { ...size }
  );
}
