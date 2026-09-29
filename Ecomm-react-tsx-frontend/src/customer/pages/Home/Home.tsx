import { useNavigate } from "react-router-dom";

const whatsappNumber = "919999999999";
const instagramUsername = "your_instagram";

const freshFoods = [
  {
    name: "Pulihora",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    description: "Traditional tangy tamarind rice",
  },
  {
    name: "Curd Rice",
    image:
      "https://images.unsplash.com/photo-1596560548464-f010549b84d9?auto=format&fit=crop&w=700&q=80",
    description: "Cool and comforting homemade curd rice",
  },
  {
    name: "Gaarelu",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    description: "Crispy traditional South Indian vadas",
  },
  {
    name: "Poornalu",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    description: "Homemade traditional sweet",
  },
];

const categories = [
  {
    title: "Freshly Served",
    text: "Fresh traditional meals prepared with homemade flavours.",
    icon: "🍚",
  },
  {
    title: "Karapu Podulu & Snacks",
    text: "Authentic podis, chekkeralu and homemade laddus.",
    icon: "🌶️",
  },
  {
    title: "Pickles & Chutneys",
    text: "Traditional pickles and chutneys made in small batches.",
    icon: "🥭",
  },
];

function Home() {
  const navigate = useNavigate();

  const orderWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I would like to know about today's homemade food menu and prices."
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const orderInstagram = () => {
    window.open(`https://instagram.com/${instagramUsername}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#fffaf0] text-[#4b3621]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f4ead7]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-12 lg:py-24">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#8b5e34]">
              Homemade • Traditional • Fresh
            </p>

            <h1 className="font-serif text-5xl font-bold leading-tight text-[#56391f] md:text-6xl">
              Made with love,
              <br />
              just like home.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#73583d]">
              Authentic homemade Indian food, traditional podis, snacks,
              pickles and sweets prepared in small batches with love and
              familiar family recipes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/products")}
                className="rounded-full bg-[#6b7d3a] px-7 py-3 font-semibold text-white shadow-md transition hover:bg-[#52642a]"
              >
                Explore Menu
              </button>

              <button
                onClick={orderWhatsApp}
                className="rounded-full border-2 border-[#6b7d3a] px-7 py-3 font-semibold text-[#52642a] transition hover:bg-[#6b7d3a] hover:text-white"
              >
                Order on WhatsApp
              </button>
            </div>

            <button
              onClick={orderInstagram}
              className="mt-4 text-sm font-semibold text-[#8b5e34] underline underline-offset-4"
            >
              Order / enquire through Instagram →
            </button>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85"
                alt="Homemade Indian food"
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-[#fffaf0] px-6 py-4 shadow-xl">
              <p className="text-sm text-[#8b5e34]">Prepared with</p>
              <p className="font-serif text-xl font-bold">Love & Tradition ❤️</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8b5e34]">
            What we make
          </p>

          <h2 className="mt-2 font-serif text-4xl font-bold text-[#56391f]">
            From our kitchen to your home
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#73583d]">
            Explore traditional foods made with simple ingredients and
            homemade care.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-[#eadbc1] bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#f4ead7] text-4xl">
                {category.icon}
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#56391f]">
                {category.title}
              </h3>

              <p className="mt-3 leading-7 text-[#73583d]">
                {category.text}
              </p>

              <button
                onClick={() => navigate("/products")}
                className="mt-5 font-semibold text-[#6b7d3a]"
              >
                View menu →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIAL FOODS */}
      <section className="bg-[#f1eadc] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8b5e34]">
                Customer favourites
              </p>

              <h2 className="mt-2 font-serif text-4xl font-bold text-[#56391f]">
                Fresh from the kitchen
              </h2>
            </div>

            <button
              onClick={() => navigate("/products")}
              className="font-semibold text-[#6b7d3a]"
            >
              See full menu →
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {freshFoods.map((food) => (
              <div
                key={food.name}
                className="overflow-hidden rounded-3xl bg-white shadow-sm"
              >
                <img
                  src={food.image}
                  alt={food.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="font-serif text-2xl font-bold text-[#56391f]">
                    {food.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#73583d]">
                    {food.description}
                  </p>

                  <button
                    onClick={() => navigate("/products")}
                    className="mt-4 font-semibold text-[#6b7d3a]"
                  >
                    View food →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATERING */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#68783b] px-8 py-12 text-white shadow-xl md:px-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f5dfb8]">
                Small gatherings & celebrations
              </p>

              <h2 className="mt-3 font-serif text-4xl font-bold">
                Homemade food for your special occasions
              </h2>

              <p className="mt-5 leading-7 text-[#f4f0df]">
                Planning a small function, pooja, birthday or family
                gathering? We prepare customized menus for approximately
                30–40 people.
              </p>

              <button
                onClick={() => navigate("/catering")}
                className="mt-7 rounded-full bg-white px-7 py-3 font-semibold text-[#59692f] transition hover:bg-[#f5ead7]"
              >
                Enquire for Catering
              </button>
            </div>

            <div className="text-center text-8xl">
              🍱
            </div>
          </div>
        </div>
      </section>

      {/* MANUAL ORDER */}
      <section className="bg-[#fff5e4] px-6 py-16 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8b5e34]">
          Prefer to message us?
        </p>

        <h2 className="mt-3 font-serif text-4xl font-bold text-[#56391f]">
          Order directly from us
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#73583d]">
          You can also send us your requirements directly. We'll check
          availability, prepare your order details and confirm the final
          price and delivery charges with you.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <button
            onClick={orderWhatsApp}
            className="rounded-full bg-[#6b7d3a] px-8 py-3 font-semibold text-white shadow-md"
          >
            💬 Order on WhatsApp
          </button>

          <button
            onClick={orderInstagram}
            className="rounded-full bg-[#8b5e34] px-8 py-3 font-semibold text-white shadow-md"
          >
            📷 Order on Instagram
          </button>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="border-t border-[#eadbc1] bg-[#fffaf0] px-6 py-8 text-center">
        <p className="font-serif text-xl font-bold text-[#56391f]">
          Made in our kitchen, shared with love ❤️
        </p>

        <p className="mt-2 text-sm text-[#8b7052]">
          Traditional homemade flavours • Freshly prepared • Small batches
        </p>
      </section>
    </div>
  );
}

export default Home;
