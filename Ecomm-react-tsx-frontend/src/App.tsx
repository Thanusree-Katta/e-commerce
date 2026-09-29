import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ImgHTMLAttributes } from "react";
import "./App.css";

/* ---------- CONFIG: change these ---------- */
const whatsappNumber = "919133919293";
const phoneDisplay = "+91 9133919293";
const instagramLink = "https://www.instagram.com/kammati._.ruchulu/";
const whatsappChannelLink = "YOUR_WHATSAPP_CHANNEL_LINK";

const IMG = {
  logo: "/images/logo.png",
  story: "/images/mom-making-snacks.png",
  catering: "/images/catering.png",
  podulu: "/images/podulu.jpg",
  floral: "/images/bapu-floral-bg.png",
};


/* ---------- HELPERS ---------- */
const open = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

const orderOnWhatsApp = (item = "") => {
  const msg = item
    ? `Namaste! I would like to enquire about ${item} from Kammani Vantillu.`
    : "Namaste! I would like to enquire about Kammani Vantillu.";
  open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`);
};

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

/* Image that tries other file extensions if the first one is not found */
const EXTS = ["jpg", "png", "jpeg", "webp", "avif", ""];
const SmartImg = ({ src = "", alt = "", ...rest }: ImgHTMLAttributes<HTMLImageElement>) => {
  const base = src.replace(/\.(jpe?g|png|webp|avif)$/i, "");
  const [i, setI] = useState(-1);
  const current = i < 0 ? src : `${base}${EXTS[i] ? "." + EXTS[i] : ""}`;
  return <img {...rest} src={current} alt={alt} onError={() => i < EXTS.length - 1 && setI(i + 1)} />;
};

/* ---------- ICONS ---------- */
const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
    <path d="M9 8.5c0 3 2.5 5.5 5.5 5.5l1.2-1.5-2-1-.8.8c-.9-.4-1.6-1.1-2-2l.8-.8-1-2z" fill="currentColor" stroke="none" />
  </svg>
);

/* ---------- DATA ---------- */
type Item = { image: string; name: string; description: string; group: string; qty?: string; price?: number };

// Catering menu
const cateringItems: Item[] = [
  { group: "Flavoured Rice", image: "/images/curd-rice.jpg", name: "Curd Rice", description: "Creamy, comforting and homemade." },
  { group: "Flavoured Rice", image: "/images/pulihora.jpg", name: "Pulihora", description: "Traditional tangy tamarind rice." },
  { group: "Flavoured Rice", image: "/images/kobbari-annam.jpg", name: "Kobbari Annam", description: "Fragrant coconut rice." },
  { group: "Flavoured Rice", image: "/images/pudina-rice.jpg", name: "Pudina Rice", description: "Fresh, aromatic mint rice." },
  { group: "Flavoured Rice", image: "/images/tomato-rice.jpg", name: "Tomato Rice", description: "Homestyle tomato rice." },
  { group: "Flavoured Rice", image: "/images/sambar-rice.jpg", name: "Sambar Rice", description: "Hearty rice cooked with vegetables and sambar." },
  { group: "Sweets", image: "/images/chekkera-pongal.jpg", name: "Chekkera Pongal", description: "Sweet, ghee-rich pongal." },
  { group: "Sweets", image: "/images/poornalu.jpg", name: "Poornalu", description: "Festive sweet made with care." },
  { group: "Savouries", image: "/images/gaarelu.jpg", name: "Gaarelu", description: "Crispy traditional vada." },
];

// Snacks & Pickles
// NOTE: rename "ravva laddu.jpg" to "ravva-laddu.jpg" (and update below) to avoid the space
const snackItems: Item[] = [
  { group: "Snacks", image: "/images/murukku.jpg", name: "Murukku", description: "Crunchy, hand-pressed and fried fresh.", qty: "250 g", price: 140 },
  { group: "Laddus", image: "/images/kobbari-laddu.jpg", name: "Kobbari Laddu", description: "Coconut laddu, soft and sweet.", qty: "250 g", price: 170 },
  { group: "Laddus", image: "/images/dryfriut-laddu.jpg", name: "Dry Fruit Laddu", description: "Rich, nutty and energising.", qty: "250 g", price: 300 },
  { group: "Laddus", image: "/images/ravva%20laddu.jpg", name: "Rava Laddu", description: "Classic semolina laddu.", qty: "250 g", price: 140 },
  { group: "Pickles", image: "/images/gongura.jpg", name: "Gongura Pickle", description: "Tangy, spicy, unmistakably Andhra.", qty: "250 g", price: 150 },
  { group: "Pickles", image: "/images/avakaya.jpg", name: "Avakaya Pickle", description: "The mango pickle every home waits for.", qty: "250 g", price: 160 },
];

// Podulu, price per 250 g
const podis = [
  { name: "Nalla Karam Podi", price: 180 },
  { name: "Dry Fruits Podi", price: 250 },
  { name: "Palli Podi", price: 160 },
  { name: "Karivepaku Podi", price: 180 },
  { name: "Putnala Podi", price: 150 },
  { name: "Munagaku Podi", price: 200 },
];

const values = [
  "Traditional Telugu recipes",
  "Homemade taste",
  "Quality ingredients",
  "Hygienic preparation",
  "Delivered to your home",
];

const steps = [
  { t: "Tell us the occasion", d: "Pooja, birthday or family gathering, and roughly how many guests." },
  { t: "Choose your menu", d: "We suggest a traditional menu and adjust it to your taste." },
  { t: "We cook it fresh", d: "Prepared in our home kitchen for your day." },
  { t: "Pickup or delivery", d: "Delivery can be discussed based on your location." },
];

const marquee = ["రుచి", "సంప్రదాయం", "ఆప్యాయత", "మా ఇంటి రుచులు", "కమ్మని వంటిల్లు"];

/* ---------- COMPONENTS ---------- */
const FoodCard = ({ item, index, onOrder }: { item: Item; index: number; onOrder: (name: string) => void }) => (
  <article className="food-card" style={delay(index * 0.06)}>
    <div className="food-image">
      <SmartImg src={item.image} alt={item.name} loading="lazy" />
    </div>
    <div className="food-body">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      {item.price && (
        <p className="price"><strong>₹{item.price}</strong><span>{item.qty}</span></p>
      )}
      {item.price && (
        <button onClick={() => onOrder(`${item.name} (${item.qty})`)}>Order</button>
      )}
    </div>
  </article>
);

/* Filterable grid used for both Catering and Snacks & Pickles */
const FilterGrid = ({ items, groups, onOrder }: { items: Item[]; groups: string[]; onOrder: (name: string) => void }) => {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? items : items.filter((i) => i.group === filter);
  return (
    <>
      <div className="filters" data-reveal>
        {["All", ...groups].map((g) => (
          <button key={g} className={filter === g ? "on" : ""} onClick={() => setFilter(g)}>
            {g}
          </button>
        ))}
      </div>
      <div className="food-grid" key={filter}>
        {shown.map((item, i) => (
          <FoodCard key={item.name} item={item} index={i} onOrder={onOrder} />
        ))}
      </div>
    </>
  );
};

const Notice = () => (
  <p className="notice" data-reveal>
    <b>How to order:</b> for now, orders and enquiries are taken only through WhatsApp DM or Instagram.{" "}
    <a href={whatsappChannelLink} target="_blank" rel="noopener noreferrer">Join our WhatsApp Channel</a> for updates.
  </p>
);

/* Choose WhatsApp or Instagram */
const OrderModal = ({ item, onClose }: { item: string; onClose: () => void }) => (
  <div className="modal-back" onClick={onClose}>
    <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
      <button className="modal-x" onClick={onClose} aria-label="Close">×</button>
      <h3>Order {item}</h3>
      <p>Choose how you'd like to place your order.</p>
      <div className="modal-actions">
        <button className="btn green" onClick={() => { orderOnWhatsApp(item); onClose(); }}>Order on WhatsApp</button>
        <button className="btn maroon" onClick={() => { open(instagramLink); onClose(); }}>Order on Instagram</button>
      </div>
      <small>On Instagram, send us a message with the item name and quantity.</small>
    </div>
  </div>
);

/* ---------- PAGE ---------- */
const Home = () => {
  const root = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [orderItem, setOrderItem] = useState<string | null>(null);

  /* scroll progress + hero parallax */
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        root.current?.style.setProperty("--progress", `${max > 0 ? y / max : 0}`);
        root.current?.style.setProperty("--parallax", `${Math.min(y, 900)}px`);
        setScrolled(y > 60);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* reveal on scroll */
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* active nav link */
  useEffect(() => {
    const ids = ["home", "catering", "podulu", "snacks"];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const nav = (id: string) => {
    setMenuOpen(false);
    go(id);
  };

  const links = [
    ["home", "Home"],
    ["catering", "Catering"],
    ["podulu", "Podulu"],
    ["snacks", "Snacks & Pickles"],
  ];

  return (
    <div className="page" ref={root}>
      <div className="progress" />

      {/* NAVBAR (logo on the left) */}
      <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
        <button className="logo-btn" onClick={() => nav("home")} aria-label="Kammani Vantillu home">
          <SmartImg src={IMG.logo} alt="కమ్మని వంటిల్లు - Kammani Vantillu" />
        </button>

        <nav className={`links ${menuOpen ? "open" : ""}`}>
          {links.map(([id, label]) => (
            <button key={id} className={active === id ? "on" : ""} onClick={() => nav(id)}>
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" onClick={() => open(instagramLink)} aria-label="Instagram"><IgIcon /></button>
          <button className="icon-btn wa" onClick={() => orderOnWhatsApp()} aria-label="WhatsApp"><WaIcon /></button>
          <button className={`burger ${menuOpen ? "x" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-bg" />
        <div className="hero-glow" />
        {["a", "b", "c", "d", "e", "f", "g", "h"].map((k) => (
          <span key={k} className={`petal p-${k}`}>❀</span>
        ))}

        <div className="hero-content">
          <h1 className="mask"><span className="rise" style={delay(0.35)}>కమ్మని రుచులు</span></h1>

          <h2 className="hero-line">
            <span className="mask"><span className="rise" style={delay(0.65)}>మా ఇంటి కమ్మటి రుచులు…</span></span>
            <span className="mask"><span className="rise" style={delay(0.85)}>మీ ఇంటి వరకు</span></span>
          </h2>

          <div className="gold-line rise-in" style={delay(1.1)}><span>❖</span></div>

          <p className="hero-english rise-in" style={delay(1.2)}>
            Authentic Telugu flavours made with traditional recipes, using quality ingredients and homemade goodness.
          </p>
          <p className="hero-desc rise-in" style={delay(1.3)}>
            From festive sweets to everyday snacks, pickles and podulu, we bring the true taste of home to your table.
          </p>

          <div className="hero-buttons rise-in" style={delay(1.45)}>
            <button className="btn gold" onClick={() => orderOnWhatsApp()}>Order on WhatsApp</button>
            <button className="btn maroon" onClick={() => open(instagramLink)}>Follow on Instagram</button>
          </div>
        </div>

        <button className="scroll-cue" onClick={() => go("story")} aria-label="Scroll down">
          <span>Scroll</span><i />
        </button>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((w, i) => (
            <span key={i}>{w}<b>✦</b></span>
          ))}
        </div>
      </div>

      {/* STORY */}
      <section id="story" className="story">
        <div className="story-photo" data-reveal>
          <div className="arch"><SmartImg src={IMG.story} alt="Making traditional snacks at home" loading="lazy" /></div>
          <span className="stamp">Made at home</span>
        </div>

        <div className="story-text">
          <h2 data-reveal>From our kitchen<br />to your home</h2>
          <p className="telugu" data-reveal style={delay(0.1)}>మా ఇంటి కమ్మటి రుచులు… మీ ఇంటి వరకు ❤️</p>
          <p data-reveal style={delay(0.15)}>
            Every home deserves the warmth of Telugu cooking. Inspired by recipes passed down through generations,
            we prepare each sweet, snack, podi and pickle the way it is made in our own kitchen.
          </p>
          <p data-reveal style={delay(0.2)}>
            From everyday favourites to festive treats, we want to take these cherished flavours from our
            kitchen to every home.
          </p>
          <ul className="values">
            {values.map((v, i) => (
              <li key={v} data-reveal style={delay(0.25 + i * 0.07)}><i>❦</i>{v}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 1) CATERING */}
      <section id="catering" className="catering-section">
        <div className="catering">
          <div className="catering-text">
            <h2 data-reveal>Homemade catering<br />for small gatherings</h2>
            <p data-reveal style={delay(0.1)}>
              Planning a pooja, birthday, family gathering or small event? We prepare customized traditional menus
              for about 30–40 people.
            </p>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.t} data-reveal style={delay(0.15 + i * 0.1)}>
                  <span>{i + 1}</span>
                  <div><h3>{s.t}</h3><p>{s.d}</p></div>
                </li>
              ))}
            </ol>
            <div className="contact">
              <button className="btn brown" onClick={() => orderOnWhatsApp("Catering enquiry")}>Enquire for catering</button>
              <button className="btn green" onClick={() => open(whatsappChannelLink)}>Join WhatsApp Channel</button>
              <a className="phone" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">WhatsApp: {phoneDisplay}</a>
            </div>
          </div>
          <div className="catering-photo" data-reveal>
            <SmartImg src={IMG.catering} alt="Kammani Vantillu catering" loading="lazy" />
          </div>
        </div>

        <div className="block">
          <div className="section-head" data-reveal>
            <h2>Catering menu</h2>
            <p>Flavoured rice, festive sweets and savouries, freshly prepared. Prices and availability on request.</p>
          </div>
          <Notice />
          <FilterGrid items={cateringItems} groups={["Flavoured Rice", "Sweets", "Savouries"]} onOrder={setOrderItem} />
        </div>
      </section>

      {/* 2) PODULU */}
      <section id="podulu" className="podi">
        <div className="podi-photo" data-reveal>
          <SmartImg src={IMG.podulu} alt="Traditional Telugu podulu" loading="lazy" />
        </div>
        <div className="podi-text">
          <h2 data-reveal>Podulu</h2>
          <p className="sub" data-reveal style={delay(0.05)}>A little spice, a lot of flavour.</p>
          <p data-reveal style={delay(0.1)}>
            The kind of podi that turns a simple plate of hot rice and ghee into a celebration.
          </p>
          <table className="podi-table" data-reveal style={delay(0.15)}>
            <thead>
              <tr><th>Podi</th><th>250 g price</th><th /></tr>
            </thead>
            <tbody>
              {podis.map((p) => (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td className="amt">₹{p.price}</td>
                  <td><button onClick={() => setOrderItem(`${p.name} (250 g)`)}>Order</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <Notice />
        </div>
      </section>

      {/* 3) SNACKS & PICKLES */}
      <section id="snacks" className="snacks block">
        <div className="section-head" data-reveal>
          <h2>Snacks &amp; Pickles</h2>
          <p>Crunchy snacks, laddus and pickles made in small batches. Prices are per 250 g.</p>
        </div>
        <Notice />
        <FilterGrid items={snackItems} groups={["Snacks", "Laddus", "Pickles"]} onOrder={setOrderItem} />
      </section>

      {/* ORDER */}
      <section className="order">
        <div className="order-inner" data-reveal>
          <h2>Bring a little homemade<br />goodness home</h2>
          <p>Tell us what you're looking for. We'll confirm availability and share the price and delivery details.</p>
          <div className="hero-buttons">
            <button className="btn gold" onClick={() => orderOnWhatsApp()}>Order on WhatsApp</button>
            <button className="btn maroon" onClick={() => open(instagramLink)}>Follow on Instagram</button>
            <button className="btn green" onClick={() => open(whatsappChannelLink)}>Join WhatsApp Channel</button>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="final">
        <SmartImg src={IMG.floral} alt="" loading="lazy" />
        <div className="final-inner" data-reveal>
          <p className="telugu">రుచి • సంప్రదాయం • ఆప్యాయత</p>
          <h2>కమ్మని వంటిల్లు<br />మీ ఇంటి వరకు</h2>
          <p className="tag">Authentic flavours from our home to yours.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2>కమ్మని వంటిల్లు</h2>
        <p className="en">Kammani Vantillu</p>
        <div className="foot-links">
          {links.map(([id, label]) => (<button key={id} onClick={() => nav(id)}>{label}</button>))}
          <button onClick={() => open(instagramLink)}>Instagram</button>
          <button onClick={() => open(whatsappChannelLink)}>WhatsApp Channel</button>
        </div>
        <p className="copy">© 2026 Kammani Vantillu. Traditional flavours, made with love.</p>
      </footer>

      {orderItem && <OrderModal item={orderItem} onClose={() => setOrderItem(null)} />}

      {/* FLOATING WHATSAPP */}
      <button className={`float-wa ${scrolled ? "show" : ""}`} onClick={() => orderOnWhatsApp()} aria-label="Order on WhatsApp">
        <WaIcon />
      </button>
    </div>
  );
};

export default Home;