export default function HomeEN() {
  return (
    <main style={{ minHeight: "100vh", color: "#111" }}>
      {/* HERO amb vídeo de fons */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "relative", zIndex: 1, padding: "6rem 1.5rem", background: "rgba(0,0,0,0.40)" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <h1 style={{ fontSize: "44px", lineHeight: 1.1, color: "#fff", margin: 0 }}>
              Excellence Beyond Horizons
            </h1>
            <p style={{ marginTop: "14px", fontSize: "18px", color: "#f1f1f1", maxWidth: 820 }}>
              Premium yacht brokerage and nautical consultancy. We buy, sell and operate with captain-level timing. We
              connect people and boats across the Mediterranean — and beyond. With over a decade of experience, a trusted
              international network and an approach that combines precision and proximity, we deliver real results with
              the attention you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* WHY / WHO WE ARE */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "3rem 1.5rem" }}>
        <h2 style={{ fontSize: "32px", margin: "0 0 12px" }}>Who We Are</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#444" }}>
          We are Liqüid Yachting, a new generation of yacht brokerage and consultancy born from more than a decade of
          experience in the industry. Over the years, we have connected clients from around the world with the boats of
          their dreams and helped owners sell their vessels under the best possible conditions. Our work goes far beyond
          buying and selling: we advise, manage and support each project so that everything flows with precision and peace
          of mind. The name Liqüid reflects our philosophy: the ability to adapt to every situation like water — flowing
          around obstacles and always finding the best course. We move with agility, yet with the strength of a consolidated
          track record. Because we understand the value of time, the importance of details and the weight of every decision
          in the nautical world. Fluidity is not a coincidence: it’s the result of experience, precision and vision applied
          to every detail.
        </p>
      </section>
    </main>
  );
}
