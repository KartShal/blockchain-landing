import { useState, useEffect, useRef } from "react";

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
          padding: 14px 32px;
          border-radius: 50px;
          font-size: 15px;
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
          padding: 14px 32px;
          border-radius: 50px;
          font-size: 15px;
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
          {["⬡", "◈", "●", "✦"].map((icon, i) => (
            <span key={i} style={{ color: "rgba(255,255,255,0.6)", cursor: "pointer", fontSize: 16, transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}
            >{icon}</span>
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
          width: "100%", maxWidth: 900,
          height: 340,
          background: "linear-gradient(180deg, transparent 0%, rgba(67,97,238,0.08) 40%, rgba(114,9,183,0.15) 100%)",
          borderRadius: "60% 60% 0 0",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden",
        }}>
          {/* Infinity loop visual */}
          <svg viewBox="0 0 800 300" style={{ width: "90%", maxWidth: 700, opacity: 0.85 }}>
            {/* Main infinity shape */}
            <path
              d="M200,150 C200,80 300,40 400,150 C500,260 600,220 600,150 C600,80 500,40 400,150 C300,260 200,220 200,150 Z"
              fill="none" stroke="url(#infGrad)" strokeWidth="18" strokeLinecap="round"
            />
            <defs>
              <linearGradient id="infGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4361ee" />
                <stop offset="50%" stopColor="#7209b7" />
                <stop offset="100%" stopColor="#f72585" />
              </linearGradient>
              <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a0b4ff" />
                <stop offset="100%" stopColor="#7209b7" />
              </linearGradient>
            </defs>

            {/* Left robot */}
            <g transform="translate(130, 90)">
              <ellipse cx="0" cy="80" rx="32" ry="36" fill="url(#bodyGrad)" opacity="0.9"/>
              <circle cx="0" cy="80" r="18" fill="none" stroke="#4361ee" strokeWidth="2"/>
              <circle cx="-7" cy="78" r="6" fill="#00d4ff" opacity="0.8"/>
              <circle cx="7" cy="78" r="6" fill="#00d4ff" opacity="0.8"/>
              {/* Arms */}
              <path d="M-32,60 Q-70,20 -60,-20" fill="none" stroke="#a0b4ff" strokeWidth="8" strokeLinecap="round"/>
              <circle cx="-60" cy="-20" r="12" fill="#b5179e"/>
              <path d="M32,60 Q70,20 60,-20" fill="none" stroke="#a0b4ff" strokeWidth="8" strokeLinecap="round"/>
              <circle cx="60" cy="-20" r="12" fill="#b5179e"/>
            </g>

            {/* Right robot */}
            <g transform="translate(670, 90)">
              <ellipse cx="0" cy="80" rx="32" ry="36" fill="url(#bodyGrad)" opacity="0.9"/>
              <circle cx="0" cy="80" r="18" fill="none" stroke="#f72585" strokeWidth="2"/>
              <circle cx="-7" cy="78" r="6" fill="#ff6b9d" opacity="0.8"/>
              <circle cx="7" cy="78" r="6" fill="#ff6b9d" opacity="0.8"/>
              <path d="M-32,60 Q-70,20 -60,-20" fill="none" stroke="#a0b4ff" strokeWidth="8" strokeLinecap="round"/>
              <circle cx="-60" cy="-20" r="12" fill="#4361ee"/>
              <path d="M32,60 Q70,20 60,-20" fill="none" stroke="#a0b4ff" strokeWidth="8" strokeLinecap="round"/>
              <circle cx="60" cy="-20" r="12" fill="#4361ee"/>
            </g>

            {/* Ground glow */}
            <ellipse cx="400" cy="290" rx="350" ry="18" fill="url(#infGrad)" opacity="0.2"/>
          </svg>
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
