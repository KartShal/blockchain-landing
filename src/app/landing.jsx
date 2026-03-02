"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const NAV_LINKS = ["Smart Contracts", "Services", "Solutions", "Roadmap", "Whitepaper"];

const FEATURES = [
  {
    icon: "⚡",
    title: "120K TPS Speed",
    desc: "Blazing-fast transaction throughput powered by next-gen Proof of Stake consensus.",
  },
  {
    icon: "🛡️",
    title: "AI-Based Security",
    desc: "Guaranteed data integrity with machine learning anomaly detection at every layer.",
  },
  {
    icon: "♾️",
    title: "Infinite Scalability",
    desc: "Horizontal scaling without bottlenecks — grow from 100 to 100M users seamlessly.",
  },
  {
    icon: "🔗",
    title: "Smart Contracts",
    desc: "Deploy audited, gas-optimized contracts with one click using our intuitive SDK.",
  },
  {
    icon: "🌐",
    title: "Cross-Chain Bridge",
    desc: "Native interoperability with 20+ blockchains, enabling frictionless asset transfers.",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    desc: "Live dashboards and on-chain analytics to monitor your dApp performance.",
  },
];

const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "CTO at NexaFinance",
    avatar: "AR",
    rating: 5,
    text: "The throughput blew us away. We migrated our entire payment rail to this chain and latency dropped by 80%. Absolutely game-changing infrastructure.",
  },
  {
    name: "Sophia Chen",
    role: "Blockchain Lead at OmniAI",
    avatar: "SC",
    rating: 5,
    text: "The AI security layer caught three exploit attempts in our first month. No other chain offers anything close to this level of proactive protection.",
  },
  {
    name: "Marcus Webb",
    role: "Founder at DecentraHub",
    avatar: "MW",
    rating: 5,
    text: "Onboarding was seamless and the cross-chain bridge saved us months of integration work. The developer experience is miles ahead of competitors.",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#f59e0b", fontSize: 16 }}>★</span>
      ))}
    </div>
  );
}

function FloatingOrb({ style }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        ...style,
        filter: "blur(60px)",
        opacity: 0.35,
      }}
    />
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        background: "#050508",
        color: "#fff",
        fontFamily: "var(--font-sora), sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .grad-text {
          background: linear-gradient(90deg, #f72585 0%, #b5179e 40%, #7209b7 70%, #4361ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-primary {
          background: transparent;
          border: 2px solid #f72585;
          color: #fff;
          padding: 18px 48px;
          border-radius: 50px;
          font-size: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          letter-spacing: 0.02em;
        }
        .btn-primary:hover {
          background: linear-gradient(90deg, #f72585, #7209b7);
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 0 30px #f7258566;
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid rgba(255,255,255,0.4);
          color: #fff;
          padding: 18px 48px;
          border-radius: 50px;
          font-size: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          letter-spacing: 0.02em;
        }
        .btn-secondary:hover {
          border-color: #fff;
          background: rgba(255,255,255,0.06);
          transform: translateY(-2px);
        }

        .feature-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 32px 28px;
          transition: all 0.35s;
          position: relative;
          overflow: hidden;
        }
        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(247,37,133,0.06), rgba(114,9,183,0.06));
          opacity: 0;
          transition: opacity 0.35s;
          border-radius: 20px;
        }
        .feature-card:hover::before { opacity: 1; }
        .feature-card:hover {
          border-color: rgba(247,37,133,0.3);
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(114,9,183,0.2);
        }

        .testimonial-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 32px;
          transition: all 0.35s;
        }
        .testimonial-card:hover {
          border-color: rgba(67,97,238,0.4);
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(67,97,238,0.15);
        }

        .nav-link {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          transition: color 0.2s;
          cursor: pointer;
        }
        .nav-link:hover { color: #fff; }

        .avatar-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          flex-shrink: 0;
          background: linear-gradient(135deg, #f72585, #7209b7);
        }

        @keyframes float1 {
          0%,100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes float2 {
          0%,100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-14px) scale(0.96); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-title { animation: fadeUp 0.8s ease both; }
        .hero-sub { animation: fadeUp 0.8s 0.15s ease both; }
        .hero-desc { animation: fadeUp 0.8s 0.3s ease both; }
        .hero-btns { animation: fadeUp 0.8s 0.45s ease both; }

        .orb1 { animation: float1 8s ease-in-out infinite; }
        .orb2 { animation: float2 10s ease-in-out infinite; }

        footer a { color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s; }
        footer a:hover { color: #fff; }

        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 40px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(5,5,8,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.3s",
        }}
      >
        {/* Logo */}
        <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-0.02em" }}>
          SITE NAME
        </div>

        {/* Desktop Nav */}
        <nav className="hide-mobile" style={{ display: "flex", gap: 36 }}>
          {NAV_LINKS.map((link) => (
            <a key={link} className="nav-link">{link}</a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hide-mobile" style={{ display: "flex", gap: 18, alignItems: "center" }}>
  {[
    {
      name: "GitHub",
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
    },
    {
      name: "Discord",
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
    },
    {
      name: "Reddit",
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
    },
    {
      name: "Twitter",
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
  ].map((item, i) => (
    <span
      key={i}
      title={item.name}
      style={{ color: "rgba(255,255,255,0.6)", cursor: "pointer", transition: "color 0.2s", display: "flex" }}
      onMouseEnter={e => e.currentTarget.style.color = "#fff"}
      onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
    >
      {item.svg}
    </span>
  ))}
</div>

        {/* Mobile Hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: "#fff", fontSize: 24, cursor: "pointer", display: "none" }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="show-mobile" style={{
          position: "fixed", top: 72, left: 0, right: 0, zIndex: 99,
          background: "rgba(5,5,8,0.97)", borderBottom: "1px solid rgba(255,255,255,0.08)",
          flexDirection: "column", padding: "24px 40px", gap: 20, display: "none"
        }}>
          {NAV_LINKS.map(link => (
            <a key={link} className="nav-link" style={{ fontSize: 16 }} onClick={() => setMenuOpen(false)}>{link}</a>
          ))}
        </div>
      )}

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 120,
          paddingBottom: 0,
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background orbs */}
        <FloatingOrb className="orb1" style={{ width: 500, height: 500, top: "10%", left: "-10%", background: "radial-gradient(circle, #f72585, transparent)" }} />
        <FloatingOrb className="orb2" style={{ width: 600, height: 600, top: "5%", right: "-15%", background: "radial-gradient(circle, #4361ee, transparent)" }} />
        <FloatingOrb style={{ width: 300, height: 300, bottom: "20%", left: "30%", background: "radial-gradient(circle, #7209b7, transparent)" }} />

        {/* Small floating dots */}
        {[
          { top: "38%", left: "10%", size: 12, color: "#f72585" },
          { top: "55%", left: "5%", size: 8, color: "#b5179e" },
          { top: "42%", right: "8%", size: 14, color: "#4361ee" },
          { top: "60%", right: "12%", size: 10, color: "#7209b7" },
        ].map((dot, i) => (
          <div key={i} style={{
            position: "absolute",
            width: dot.size, height: dot.size,
            borderRadius: "50%",
            background: dot.color,
            top: dot.top, left: dot.left, right: dot.right,
            boxShadow: `0 0 20px ${dot.color}`,
            animation: `float${i % 2 + 1} ${6 + i}s ease-in-out infinite`,
          }} />
        ))}

        <div style={{ position: "relative", zIndex: 2, maxWidth: 900, padding: "0 24px" }}>
          <h1
            className="hero-title grad-text"
            style={{ fontSize: "clamp(36px, 6vw, 84px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 4 }}
          >
            THE BEST WEBSITE EVER
          </h1>
          <h2
            className="hero-sub"
            style={{ fontSize: "clamp(28px, 4.5vw, 64px)", fontWeight: 700, color: "#fff", marginBottom: 24, letterSpacing: "-0.02em" }}
          >
            Scalable.
          </h2>
          <p
            className="hero-desc"
            style={{ fontSize: "clamp(14px, 1.6vw, 17px)", color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}
          >
            Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of Stake, its consensus algorithm enables unlimited speeds.
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary">Get started</button>
            <button className="btn-secondary">Read more</button>
          </div>
        </div>

        {/* Robot illustration placeholder */}
        <div style={{
  position: "relative", zIndex: 2, marginTop: 60,
  width: "100%", maxWidth: 1500,
}}>
  <Image
    src="/hero-robot.webp"
    alt="Hero illustration"
    width={1500}
    height={500}
    priority
    style={{ width: "100%", height: "auto", objectFit: "contain" }}
  />
</div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" style={{ padding: "100px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "#f72585", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
            Why Choose Us
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Built for the{" "}
            <span className="grad-text">Future of Web3</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 16, maxWidth: 520, margin: "16px auto 0", lineHeight: 1.7, fontSize: 15 }}>
            Every layer engineered for performance, security, and developer experience.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {FEATURES.map((f, i) => (
            <div key={i} className="feature-card">
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: "linear-gradient(135deg, rgba(247,37,133,0.15), rgba(114,9,183,0.15))",
                border: "1px solid rgba(247,37,133,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, marginBottom: 20
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: "#fff" }}>{f.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS BANNER */}
      <div style={{
        background: "linear-gradient(90deg, rgba(247,37,133,0.08), rgba(114,9,183,0.12), rgba(67,97,238,0.08))",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "48px 40px",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32 }}>
          {[
            { num: "120K", label: "Transactions Per Second" },
            { num: "99.99%", label: "Network Uptime" },
            { num: "2M+", label: "Active Wallets" },
            { num: "$4.8B", label: "Total Value Locked" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div className="grad-text" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em" }}>{stat.num}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginTop: 6 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" style={{ padding: "100px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "#4361ee", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
            Testimonials
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Trusted by{" "}
            <span className="grad-text">Innovators</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 16, maxWidth: 480, margin: "16px auto 0", lineHeight: 1.7, fontSize: 15 }}>
            Teams building the next generation of decentralized applications choose us.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card">
              <StarRating count={t.rating} />
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}>
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div className="avatar-circle">{t.avatar}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, marginTop: 2 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: "80px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(247,37,133,0.06) 0%, rgba(114,9,183,0.1) 50%, rgba(67,97,238,0.06) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Ready to <span className="grad-text">Build Faster?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.7, marginBottom: 40 }}>
            Join thousands of developers already building on the fastest blockchain in the world.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary">Start Building</button>
            <button className="btn-secondary">Read Docs</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 40px 36px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 48, marginBottom: 60 }}>
            {/* Brand */}
            <div style={{ maxWidth: 260 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 16 }}>SITE NAME</div>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, lineHeight: 1.7 }}>
                The next-generation blockchain infrastructure for scalable, secure, and lightning-fast decentralized applications.
              </p>
            </div>

            {/* Links */}
            {[
              { title: "Product", links: ["Smart Contracts", "Services", "Solutions", "Roadmap"] },
              { title: "Resources", links: ["Whitepaper", "Documentation", "GitHub", "Blog"] },
              { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
            ].map((col) => (
              <div key={col.title}>
                <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 20 }}>
                  {col.title}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {col.links.map((link) => (
                    <a key={link} href="#" style={{ fontSize: 14 }}>{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
              © 2026 SITE NAME. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="#" style={{ fontSize: 13 }}>Privacy Policy</a>
              <a href="#" style={{ fontSize: 13 }}>Terms of Service</a>
              <a href="#" style={{ fontSize: 13 }}>Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
