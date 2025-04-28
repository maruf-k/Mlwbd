import React from "react";

const featuredMovies = [
  {
    title: "Dune: Part Two (2024)",
    img: "https://ext.same-assets.com/1897685032/386172575.jpeg",
    rating: 8.8,
    year: "2024",
  },
  {
    title: "Marco (2024)",
    img: "https://ext.same-assets.com/1897685032/3618680841.jpeg",
    rating: 8.7,
    year: "2024",
  },
  {
    title: "Pushpa 2: The Rule Reloaded (2024)",
    img: "https://ext.same-assets.com/1897685032/3251761138.png",
    rating: 8.7,
    year: "2024",
  },
  {
    title: "Kalki 2898 AD (2024)",
    img: "https://ext.same-assets.com/1897685032/2565107559.png",
    rating: 8.3,
    year: "2024",
  },
  {
    title: "Rebel Moon: Chalice of Blood (2024)",
    img: "https://ext.same-assets.com/1897685032/2085548222.png",
    rating: 0,
    year: "2024",
  },
];

const latestMovies = [
  {
    title: "Ne Zha 2 (2025)",
    img: "https://ext.same-assets.com/1897685032/953706356.jpeg",
  },
  {
    title: "Spark: L.I.F.E. (2023)",
    img: "https://ext.same-assets.com/1897685032/1128538305.jpeg",
  },
  {
    title: "The Last of Us: Season 2",
    img: "https://ext.same-assets.com/1897685032/1672515079.jpeg",
  },
  {
    title: "I Saw the TV Glow (2024)",
    img: "https://ext.same-assets.com/1897685032/3052397889.png",
  },
  {
    title: "Thudarum (2025)",
    img: "https://ext.same-assets.com/1897685032/1175151387.jpeg",
  },
  {
    title: "Intinti Ramayanam (2023)",
    img: "https://ext.same-assets.com/1897685032/1337354036.jpeg",
  },
  {
    title: "Good Bad Ugly (2025)",
    img: "https://ext.same-assets.com/1897685032/2019945273.jpeg",
  },
  {
    title: "Ash (2025)",
    img: "https://ext.same-assets.com/1897685032/2507592024.jpeg",
  },
  {
    title: "Paappan (2022)",
    img: "https://ext.same-assets.com/1897685032/3309804956.jpeg",
  },
];

const sidebarCategories = [
  "Action Movies",
  "Hollywood Hindi",
  "Bollywood Movies",
  "Animated & Cartoon Movies",
  "Drama",
  "Thriller",
  "Comedy",
  "Mystery",
  "Series & Shows",
  "Bangladeshi Movies",
  "Telugu",
  "Tamil",
  "Malayalam",
  "Korean & Chinese",
  "Spanish & Turkish",
  "Dual Audio",
  "Hindi Dubbed",
  "HEVC Collection",
];

function App() {
  return (
    <div className="min-h-screen bg-[#181b1f] text-gray-200">
      {/* Header */}
      <header className="bg-[#101113] border-b border-[#222] px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://ext.same-assets.com/1897685032/1363916553.png"
            alt="Fojik Logo"
            className="w-8 h-8 mr-2"
          />
          <span className="text-xl font-bold text-white font-sans">Fojik<span className="text-[#b82425]">.com</span></span>
          <nav className="ml-6 hidden md:flex gap-4 text-[15px]">
            <a href="#" className="hover:text-[#c7b098]">Movies</a>
            <a href="#" className="hover:text-[#c7b098]">Genres</a>
            <a href="#" className="hover:text-[#c7b098]">Special Categories</a>
          </nav>
        </div>
        <form className="flex items-center bg-[#232629] px-2 py-1 rounded max-w-xs w-full">
          <input
            className="bg-transparent outline-none border-none text-white px-2 py-1 flex-grow"
            placeholder="Search..."
          />
          <svg width="18" className="ml-1" height="18" fill="none" stroke="gray" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </form>
      </header>

      {/* Main content wrapper */}
      <main className="flex flex-col lg:flex-row px-2 md:px-8 gap-4 mt-6">
        {/* Main content */}
        <div className="flex-1 max-w-[1024px] mx-auto w-full">
          {/* Carousel/Hero */}
          <section className="w-full grid grid-cols-2 gap-3 mb-6">
            <img src="https://ext.same-assets.com/1897685032/386172575.jpeg" className="rounded-lg w-full h-40 object-cover" alt="Tailgate" />
            <img src="https://ext.same-assets.com/1897685032/3618680841.jpeg" className="rounded-lg w-full h-40 object-cover" alt="The Little Prince" />
          </section>

          {/* Featured section */}
          <section>
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="w-2 h-5 bg-[#b82425] rounded-md block" />
              Featured
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
              {featuredMovies.map((movie) => (
                <div key={movie.title} className="relative">
                  <img src={movie.img} alt={movie.title} className="rounded shadow-lg w-full h-40 object-cover border border-[#232629]" />
                  {movie.rating !== 0 && (
                    <span className="absolute top-1 left-1 bg-[#b82425] text-xs px-2 py-0.5 rounded font-bold">{movie.rating}</span>
                  )}
                  <div className="absolute bottom-0 left-0 w-full bg-black/70 text-[13px] p-1 rounded-b">{movie.title}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Latest Movies section */}
          <section>
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="w-2 h-5 bg-[#b82425] rounded-md block" />
              Latest Movies
              <span className="bg-[#b82425] text-xs px-1.5 ml-2 rounded">NEW</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
              {latestMovies.map((movie) => (
                <div key={movie.title} className="relative">
                  <img src={movie.img} alt={movie.title} className="rounded shadow-lg w-full h-40 object-cover border border-[#232629]" />
                  <div className="absolute bottom-0 left-0 w-full bg-black/70 text-[12px] p-1 rounded-b">{movie.title}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Blog/Last entries */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="w-2 h-5 bg-[#b82425] rounded-md block" /> Last Entries
            </h2>
            <div className="bg-[#15181b] p-4 rounded-lg text-sm">
              <div className="flex justify-between border-b border-[#232629] py-2 text-[#c7b098]">
                <span>28</span>
                <span>MLWBD Movie Download: Your Ultimate Guide to Accessing Movies and TV Shows</span>
                <span>MLWBD</span>
              </div>
              <div className="flex justify-between border-b border-[#232629] py-2">
                <span>27</span>
                <span>Download MLWBD | What is MLWBD.com? MLWBD | MLWBD.me | MLWBD.site</span>
                <span>MLWBD</span>
              </div>
              <div className="flex justify-between border-b border-[#232629] py-2">
                <span>15</span>
                <span>GDRIVE Google Drive Link Expire Solution</span>
                <span>MLWBD</span>
              </div>
              <div className="flex justify-between py-2">
                <span>35</span>
                <span>BJC Browser | Google Drive Link Expire Solution</span>
                <span>MLWBD</span>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-[320px] mt-4 lg:mt-0 lg:ml-6 flex-shrink-0">
          {/* Latest Updates */}
          <div className="bg-[#15181b] rounded-lg mb-6 p-4">
            <h3 className="text-base mb-2 font-semibold border-b border-[#232629] pb-1">Latest Updates</h3>
            <ul className="space-y-2 text-sm">
              <li className="border-b border-[#232629] pb-1">Dune: Part Two (2024) [Hindi & Eng]</li>
              <li className="border-b border-[#232629] pb-1">Marco (2024) [Hindi & Malayalam]</li>
              <li className="border-b border-[#232629] pb-1">Pushpa 2 (2024) [Hindi & Telugu]</li>
              <li className="border-b border-[#232629] pb-1">Kalki 2898 AD (2024) [Hindi]</li>
              <li>Godzilla Minus One (2023) [Hindi & Japanese]</li>
            </ul>
          </div>
          {/* Categories */}
          <div className="bg-[#15181b] rounded-lg p-4">
            <h3 className="text-base mb-2 font-semibold border-b border-[#232629] pb-1">Categories</h3>
            <ul className="flex flex-col flex-wrap gap-1">
              {sidebarCategories.map((cat) => (
                <li key={cat} className="text-gray-400 hover:text-[#b82425] cursor-pointer py-0.5">{cat}</li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
      {/* Footer */}
      <footer className="mt-10 px-6 py-5 bg-[#15181b] text-xs text-[#c7b098] border-t border-[#232629]">
        <div>
          Contact or Report Anything Here: <span className="text-[#b82425]">Email: contact@fojik.site</span>
        </div>
        <div className="text-[12px] mt-2 text-gray-400">
          <b>NOTE:</b> Links are only listed here for information. Fojik is not connected/hosted from third-party websites. Fojik doesn’t assume responsibility for content hosted on third-party websites. Fojik doesn’t provide any file or upload content from or to other websites, hosting, or ftp.
        </div>
        <button className="float-right bg-[#232629] p-1 rounded hover:bg-[#2a3857] mt-2" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
          <svg width="20" height="20" fill="none" stroke="#c7b098" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19V6M5 12l7-7 7 7"/></svg>
        </button>
      </footer>
    </div>
  );
}

export default App;
