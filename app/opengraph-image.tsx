import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Emek Conta | Endüstriyel Sızdırmazlık Çözümleri";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1a2536",
          padding: "60px 70px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#ffffff",
          position: "relative",
        }}
      >
        {/* Subtle background industrial grid accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: "12px solid #233044",
            pointerEvents: "none",
          }}
        />

        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Logo Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                backgroundColor: "#b7410e",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "28px",
                fontWeight: 900,
                letterSpacing: "-1px",
              }}
            >
              EC
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: 900,
                  letterSpacing: "-0.5px",
                  color: "#ffffff",
                  lineHeight: "1.1",
                }}
              >
                EMEK CONTA
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "#94a3b8",
                  letterSpacing: "3px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                Sanayi ve Ticaret
              </span>
            </div>
          </div>

          {/* Established Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#243248",
              border: "1px solid #33445d",
              padding: "8px 18px",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                color: "#b7410e",
                fontWeight: 900,
                fontSize: "14px",
              }}
            >
              ★ 1997'DEN BERİ
            </span>
            <span style={{ color: "#94a3b8", fontSize: "14px", fontWeight: 500 }}>
              27+ Yıllık İmalat Tecrübesi
            </span>
          </div>
        </div>

        {/* Main Center Pitch */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "960px",
            margin: "30px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "4px",
                backgroundColor: "#b7410e",
              }}
            />
            <span
              style={{
                color: "#f97316",
                fontSize: "15px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Endüstriyel Sızdırmazlık Çözümleri
            </span>
          </div>

          <h1
            style={{
              fontSize: "52px",
              fontWeight: 900,
              lineHeight: "1.15",
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-1px",
            }}
          >
            Ağır Sanayi & Denizcilik İçin Güvenilir Sızdırmazlık
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#cbd5e1",
              margin: 0,
              lineHeight: "1.4",
            }}
          >
            Spiral Sarımlı Contalar • Saf Grafit • Klingrit • EPDM/NBR • CAD & Teknik Resme Göre Özel İmalat
          </p>
        </div>

        {/* Footer Technical Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #2d3c52",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          {/* Standards Badges */}
          <div style={{ display: "flex", gap: "10px" }}>
            {["ASME B16.20", "DIN 2690", "EN 1514", "CAD / CNC KESİM"].map(
              (std, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#111a26",
                    border: "1px solid #28374c",
                    padding: "6px 14px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    color: "#e2e8f0",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  {std}
                </div>
              )
            )}
          </div>

          {/* Contact Details */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              fontSize: "15px",
              color: "#94a3b8",
              fontWeight: 600,
            }}
          >
            <span style={{ color: "#ffffff" }}>emekconta.com</span>
            <span>•</span>
            <span>+90 (212) 293 25 09</span>
            <span>•</span>
            <span style={{ color: "#38bdf8" }}>İstanbul</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
