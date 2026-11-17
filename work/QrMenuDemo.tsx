"use client";

import React, { useState } from "react";
import { Plus, Trash2, Edit3, Sparkles, QrCode, Smartphone, Sliders, Check, Tag } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  hasOffer?: boolean;
}

const INITIAL_ITEMS: MenuItem[] = [
  { id: "1", name: "Avocado toast", price: "$14.00", category: "Brunch", description: "Sourdough, whipped goat cheese, poached egg, chili crunch.", hasOffer: true },
  { id: "2", name: "Salmon garden salad", price: "$18.50", category: "Brunch", description: "Seared wild salmon, heirloom greens, dill vinaigrette." },
  { id: "3", name: "Ember skillet", price: "$16.00", category: "Mains", description: "Wood-fired hash, spiced chorizo, braised leeks, smoked paprika oil.", hasOffer: true },
  { id: "4", name: "Linguine with clams", price: "$22.00", category: "Mains", description: "Littlenecks, dry white wine, garlic confit, toasted breadcrumbs." },
  { id: "5", name: "Chocolate & raspberry mousse", price: "$11.00", category: "Desserts", description: "Dark Valrhona cacao, raspberry reduction, sea salt flake." },
  { id: "6", name: "Raspberry layer cake", price: "$10.50", category: "Desserts", description: "Vanilla sponge, fresh berry coulis, mascarpone frosting." },
  { id: "7", name: "Iced latte", price: "$6.00", category: "Drinks", description: "Single-origin espresso, cold oat milk, Madagascar vanilla." },
  { id: "8", name: "Cherry lemonade", price: "$6.50", category: "Drinks", description: "Freshly squeezed Meyer lemons, crushed sour cherries, mint sprig.", hasOffer: true },
];

export default function QrMenuDemo() {
  // Brand Configuration State
  const [venueName, setVenueName] = useState("Olive & Ember");
  const [venueSubtitle, setVenueSubtitle] = useState("Café · Kitchen");
  const [accentColor, setAccentColor] = useState<string>("#B69A69"); // Antique gold default
  const [themeMode, setThemeMode] = useState<"dark" | "light">("dark");
  const [fontStyle, setFontStyle] = useState<"serif" | "sans">("serif");

  // Tabs
  const [activeTab, setActiveTab] = useState<"brand" | "menu" | "offers" | "qr">("brand");

  // Menu State
  const [categories, setCategories] = useState(["Brunch", "Mains", "Desserts", "Drinks"]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(INITIAL_ITEMS);
  const [selectedCategory, setSelectedCategory] = useState("Brunch");
  const [offerText, setOfferText] = useState("-15% Weekday brunch: selected dishes on offer before 11:00");
  const [offersEnabled, setOffersEnabled] = useState(true);

  // New Item Temporary Form
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [newItemDesc, setNewItemDesc] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName || !newItemPrice) return;
    const item: MenuItem = {
      id: Date.now().toString(),
      name: newItemName,
      price: newItemPrice.startsWith("$") ? newItemPrice : `$${newItemPrice}`,
      category: selectedCategory,
      description: newItemDesc || "Freshly curated specialty dish.",
      hasOffer: false,
    };
    setMenuItems([...menuItems, item]);
    setNewItemName("");
    setNewItemPrice("");
    setNewItemDesc("");
    setShowAddModal(false);
  };

  const handleDeleteItem = (id: string) => {
    setMenuItems(menuItems.filter((i) => i.id !== id));
  };

  const handleToggleOffer = (id: string) => {
    setMenuItems(
      menuItems.map((i) => (i.id === id ? { ...i, hasOffer: !i.hasOffer } : i))
    );
  };

  const filteredItems = menuItems.filter((i) => i.category === selectedCategory);

  return (
    <div className="border border-ivory/15 bg-ink-card shadow-2xl overflow-hidden rounded-lg">
      {/* Editor & Demonstration Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-ivory/10 bg-ink-deep px-6 py-4 gap-4">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
          <span className="font-mono text-xs text-gold uppercase tracking-widest font-semibold">
            Interactive Venue Engine
          </span>
          <span className="text-xs text-ivory/30 font-mono hidden sm:inline">|</span>
          <span className="font-mono text-xs text-sage hidden sm:inline">
            Menu / Changes apply live
          </span>
        </div>

        {/* Top Control Tabs */}
        <div className="flex items-center gap-1 bg-ink/70 p-1 rounded border border-ivory/10">
          <button
            onClick={() => setActiveTab("brand")}
            className={`px-3 py-1 font-mono text-xs transition-colors rounded ${
              activeTab === "brand" ? "bg-gold text-ink font-semibold" : "text-ivory/60 hover:text-ivory"
            }`}
          >
            Brand
          </button>
          <button
            onClick={() => setActiveTab("menu")}
            className={`px-3 py-1 font-mono text-xs transition-colors rounded ${
              activeTab === "menu" ? "bg-gold text-ink font-semibold" : "text-ivory/60 hover:text-ivory"
            }`}
          >
            Menu
          </button>
          <button
            onClick={() => setActiveTab("offers")}
            className={`px-3 py-1 font-mono text-xs transition-colors rounded ${
              activeTab === "offers" ? "bg-gold text-ink font-semibold" : "text-ivory/60 hover:text-ivory"
            }`}
          >
            Offers
          </button>
          <button
            onClick={() => setActiveTab("qr")}
            className={`px-3 py-1 font-mono text-xs transition-colors rounded ${
              activeTab === "qr" ? "bg-gold text-ink font-semibold" : "text-ivory/60 hover:text-ivory"
            }`}
          >
            QR Code
          </button>
        </div>
      </div>

      {/* Main Grid: Management Workspace & Live Phone View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-ivory/10">
        {/* Left: Venue Admin Workspace (6 cols) */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-ink-deep/40">
          {/* TAB 1: BRAND EDITOR */}
          {activeTab === "brand" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h4 className="font-serif text-xl font-light text-ivory">Brand Configuration</h4>
                <p className="font-mono text-xs text-ivory/50 mt-1">
                  Adjust venue visual tokens. Watch the mobile preview update instantly.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="font-mono text-xs text-ivory/70 block mb-1">Venue Name</label>
                  <input
                    type="text"
                    value={venueName}
                    onChange={(e) => setVenueName(e.target.value)}
                    className="w-full bg-ink-card border border-ivory/20 px-4 py-2 font-serif text-ivory text-base focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-ivory/70 block mb-1">Tagline / Subtitle</label>
                  <input
                    type="text"
                    value={venueSubtitle}
                    onChange={(e) => setVenueSubtitle(e.target.value)}
                    className="w-full bg-ink-card border border-ivory/20 px-4 py-2 font-mono text-xs text-ivory focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-ivory/70 block mb-2">Accent Palette</label>
                  <div className="flex gap-3">
                    {[
                      { name: "Gold", color: "#B69A69" },
                      { name: "Sage", color: "#9BAF9A" },
                      { name: "Rose", color: "#B98F91" },
                      { name: "Ember", color: "#C86D51" },
                    ].map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setAccentColor(c.color)}
                        className={`flex items-center gap-2 px-3 py-1.5 border font-mono text-xs transition-all ${
                          accentColor === c.color ? "border-ivory ring-1 ring-ivory" : "border-ivory/10 hover:border-ivory/40"
                        }`}
                      >
                        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: c.color }} />
                        <span className="text-ivory">{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="font-mono text-xs text-ivory/70 block mb-1">Theme Surface</label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setThemeMode("dark")}
                        className={`flex-1 py-1.5 font-mono text-xs border ${
                          themeMode === "dark" ? "border-gold bg-gold/15 text-gold" : "border-ivory/15 text-ivory/60"
                        }`}
                      >
                        Midnight
                      </button>
                      <button
                        onClick={() => setThemeMode("light")}
                        className={`flex-1 py-1.5 font-mono text-xs border ${
                          themeMode === "light" ? "border-gold bg-gold/15 text-gold" : "border-ivory/15 text-ivory/60"
                        }`}
                      >
                        Warm Ivory
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-ivory/70 block mb-1">Typography</label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setFontStyle("serif")}
                        className={`flex-1 py-1.5 font-serif text-xs border ${
                          fontStyle === "serif" ? "border-gold bg-gold/15 text-gold" : "border-ivory/15 text-ivory/60"
                        }`}
                      >
                        Editorial
                      </button>
                      <button
                        onClick={() => setFontStyle("sans")}
                        className={`flex-1 py-1.5 font-mono text-xs border ${
                          fontStyle === "sans" ? "border-gold bg-gold/15 text-gold" : "border-ivory/15 text-ivory/60"
                        }`}
                      >
                        Modern
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MENU EDITOR */}
          {activeTab === "menu" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-xl font-light text-ivory">Menu Items & Categories</h4>
                  <p className="font-mono text-xs text-ivory/50 mt-1">
                    Manage categories and live pricing.
                  </p>
                </div>
                <button
                  onClick={() => setShowAddModal(!showAddModal)}
                  className="flex items-center gap-1.5 bg-gold px-3 py-1.5 font-mono text-xs text-ink font-semibold rounded hover:bg-gold-light transition-colors"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>ADD DISH</span>
                </button>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat, idx) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 font-mono text-xs rounded border transition-colors ${
                      selectedCategory === cat
                        ? "border-gold bg-gold/20 text-gold font-semibold"
                        : "border-ivory/15 text-ivory/60 hover:border-ivory/30"
                    }`}
                  >
                    0{idx + 1} {cat}
                  </button>
                ))}
              </div>

              {/* Add Item Form */}
              {showAddModal && (
                <form onSubmit={handleAddItem} className="p-4 border border-gold/40 bg-ink-card space-y-3">
                  <span className="font-mono text-xs text-gold uppercase tracking-wider block">
                    New Dish in {selectedCategory}
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder="Dish name"
                      value={newItemName}
                      onChange={(e) => setNewItemName(e.target.value)}
                      className="col-span-2 bg-ink border border-ivory/20 px-3 py-1.5 text-xs text-ivory font-mono focus:border-gold focus:outline-none"
                      required
                    />
                    <input
                      type="text"
                      placeholder="$12.00"
                      value={newItemPrice}
                      onChange={(e) => setNewItemPrice(e.target.value)}
                      className="bg-ink border border-ivory/20 px-3 py-1.5 text-xs text-ivory font-mono focus:border-gold focus:outline-none"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Short description / ingredients"
                    value={newItemDesc}
                    onChange={(e) => setNewItemDesc(e.target.value)}
                    className="w-full bg-ink border border-ivory/20 px-3 py-1.5 text-xs text-ivory font-mono focus:border-gold focus:outline-none"
                  />
                  <div className="flex justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setShowAddModal(false)}
                      className="px-3 py-1 font-mono text-xs text-ivory/60 hover:text-ivory"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-3 py-1 font-mono text-xs bg-gold text-ink font-semibold rounded"
                    >
                      Save Item
                    </button>
                  </div>
                </form>
              )}

              {/* Items List for Selected Category */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 border border-ivory/10 bg-ink-card hover:border-ivory/20 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-sm text-ivory">{item.name}</span>
                        {item.hasOffer && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose/20 text-rose border border-rose/30">
                            Offer
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-xs text-gold/80">{item.price}</span>
                      <p className="font-sans text-[11px] text-ivory/50 line-clamp-1">{item.description}</p>
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => handleToggleOffer(item.id)}
                        title="Toggle offer badge"
                        className={`p-1.5 rounded text-xs border ${
                          item.hasOffer ? "border-rose text-rose bg-rose/10" : "border-ivory/10 text-ivory/40 hover:text-ivory"
                        }`}
                      >
                        <Tag className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        title="Delete item"
                        className="p-1.5 rounded text-xs border border-ivory/10 text-ivory/40 hover:text-rose hover:border-rose transition-colors"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: OFFERS EDITOR */}
          {activeTab === "offers" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h4 className="font-serif text-xl font-light text-ivory">Promotions & Notice Banner</h4>
                <p className="font-mono text-xs text-ivory/50 mt-1">
                  Control the hero callout displayed to visitors when they scan table QR.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-ivory/10 bg-ink-card">
                  <span className="font-mono text-xs text-ivory">Display Banner</span>
                  <button
                    onClick={() => setOffersEnabled(!offersEnabled)}
                    className={`px-3 py-1 font-mono text-xs rounded border transition-colors ${
                      offersEnabled ? "border-sage bg-sage/20 text-sage" : "border-ivory/20 text-ivory/40"
                    }`}
                  >
                    {offersEnabled ? "ACTIVE" : "HIDDEN"}
                  </button>
                </div>

                <div>
                  <label className="font-mono text-xs text-ivory/70 block mb-1">Banner Announcement</label>
                  <textarea
                    rows={3}
                    value={offerText}
                    onChange={(e) => setOfferText(e.target.value)}
                    className="w-full bg-ink-card border border-ivory/20 p-3 font-mono text-xs text-ivory focus:border-gold focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: QR CODE ARTIFACT */}
          {activeTab === "qr" && (
            <div className="space-y-6 animate-in fade-in duration-200 text-center py-4">
              <div>
                <h4 className="font-serif text-xl font-light text-ivory">Table QR Deployment</h4>
                <p className="font-mono text-xs text-ivory/50 mt-1">
                  Instant table-side routing token.
                </p>
              </div>

              {/* Generative QR Graphic */}
              <div className="mx-auto w-48 h-48 bg-ivory p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-ink">
                  {/* Outer corner boxes */}
                  <rect x="5" y="5" width="28" height="28" fill="currentColor" rx="2" />
                  <rect x="9" y="9" width="20" height="20" fill="#EAE5D9" />
                  <rect x="13" y="13" width="12" height="12" fill="currentColor" />

                  <rect x="67" y="5" width="28" height="28" fill="currentColor" rx="2" />
                  <rect x="71" y="9" width="20" height="20" fill="#EAE5D9" />
                  <rect x="75" y="13" width="12" height="12" fill="currentColor" />

                  <rect x="5" y="67" width="28" height="28" fill="currentColor" rx="2" />
                  <rect x="9" y="71" width="20" height="20" fill="#EAE5D9" />
                  <rect x="13" y="75" width="12" height="12" fill="currentColor" />

                  {/* Grid matrix dots */}
                  <rect x="40" y="8" width="6" height="6" fill="currentColor" />
                  <rect x="50" y="8" width="6" height="6" fill="currentColor" />
                  <rect x="40" y="20" width="8" height="8" fill="currentColor" />
                  <rect x="52" y="22" width="6" height="6" fill="currentColor" />

                  <rect x="8" y="42" width="8" height="6" fill="currentColor" />
                  <rect x="22" y="44" width="8" height="8" fill="currentColor" />
                  <rect x="40" y="40" width="20" height="20" fill="#B69A69" />
                  <rect x="45" y="45" width="10" height="10" fill="#17232D" />

                  <rect x="68" y="42" width="8" height="6" fill="currentColor" />
                  <rect x="80" y="46" width="12" height="8" fill="currentColor" />
                  <rect x="44" y="68" width="8" height="8" fill="currentColor" />
                  <rect x="58" y="74" width="10" height="6" fill="currentColor" />
                  <rect x="75" y="68" width="18" height="8" fill="currentColor" />
                  <rect x="70" y="82" width="10" height="10" fill="currentColor" />
                </svg>
              </div>

              <div className="font-mono text-xs text-gold tracking-widest uppercase">
                Demo QR / fictional venue
              </div>
              <p className="text-xs text-ivory/60 max-w-sm mx-auto">
                In production, every venue table receives a signed cryptographic slug mapping directly to session isolation.
              </p>
            </div>
          )}
        </div>

        {/* Right: Customer Mobile Phone Preview (6 cols) */}
        <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col items-center justify-center bg-ink-deep/80">
          <div className="font-mono text-[11px] text-ivory/40 tracking-widest uppercase mb-4 flex items-center gap-2">
            <Smartphone className="h-3.5 w-3.5 text-gold" />
            <span>Customer Mobile Viewport (Live Sync)</span>
          </div>

          {/* Realistic Mobile Frame */}
          <div
            className={`w-full max-w-[340px] rounded-[36px] border-[6px] border-[#2A3E4E] shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden transition-colors duration-300 ${
              themeMode === "light" ? "bg-[#FAF7F2] text-[#17232D]" : "bg-[#131D25] text-ivory"
            }`}
          >
            {/* Phone Notch & Top Status Bar */}
            <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[10px] font-mono opacity-60">
              <span>9:41</span>
              <div className="h-4 w-20 rounded-full bg-black/40" />
              <span>5G 100%</span>
            </div>

            {/* Mobile Header */}
            <div className="p-5 border-b border-ivory/10 text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest opacity-60 block">
                Table 12 · opened by QR
              </span>
              <h5
                className={`text-2xl font-light tracking-wide mt-1 ${
                  fontStyle === "serif" ? "font-serif" : "font-sans font-medium"
                }`}
                style={{ color: accentColor }}
              >
                {venueName}
              </h5>
              <p className="text-[11px] font-mono opacity-70 mt-0.5">{venueSubtitle}</p>
            </div>

            {/* Offer Banner */}
            {offersEnabled && (
              <div
                className="px-4 py-2.5 text-[11px] font-mono text-center border-b transition-colors"
                style={{
                  backgroundColor: `${accentColor}18`,
                  borderColor: `${accentColor}30`,
                  color: accentColor,
                }}
              >
                {offerText}
              </div>
            )}

            {/* Mobile Category Horizontal Slider */}
            <div className="flex overflow-x-auto gap-2 p-3 no-scrollbar border-b border-ivory/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "text-ink font-semibold"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor: selectedCategory === cat ? accentColor : "transparent",
                    color: selectedCategory === cat ? (themeMode === "light" ? "#FAF7F2" : "#131D25") : undefined,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile Dishes Feed */}
            <div className="p-4 space-y-3 max-h-[300px] overflow-y-auto">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`p-3 rounded-lg border transition-all ${
                    themeMode === "light"
                      ? "bg-white border-black/5 shadow-sm"
                      : "bg-[#1A2630] border-white/5"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-serif text-sm font-medium leading-snug">{item.name}</span>
                    <span
                      className="font-mono text-xs font-bold"
                      style={{ color: accentColor }}
                    >
                      {item.price}
                    </span>
                  </div>
                  <p className="text-[11px] opacity-70 mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Safe Area */}
            <div className="h-4 flex items-center justify-center">
              <div className="h-1 w-24 rounded-full bg-ivory/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
