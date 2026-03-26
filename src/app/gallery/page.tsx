"use client";
import { useState } from "react";
import Link from "next/link";

const HERO_IMG = "/ab (1).webp";

const categories = [
  "All",
  "Property",
  "Nature",
  "Amenities",
  "Activities",
  "Rooms",
  "Dining",
  "Views",
];

const photos = [
  { src: "/ab (1).webp", cat: "Activities", title: "Image 1" },
  { src: "/ab (3).webp", cat: "Activities", title: "Image 3" },
  { src: "/ab (4).webp", cat: "Amenities", title: "Image 4" },
  { src: "/ab (5).webp", cat: "Rooms", title: "Image 5" },
  { src: "/ab (6).webp", cat: "Rooms", title: "Image 6" },
  { src: "/ab (7).webp", cat: "Rooms", title: "Image 7" },
  { src: "/ma.webp", cat: "Property", title: "Image 59" },
  { src: "/ab (11).jpg", cat: "Property", title: "Image 11" },
  { src: "/ab (12).jpg", cat: "Property", title: "Image 12" },
  { src: "/ab (13).jpg", cat: "Property", title: "Image 13" },
  { src: "/ab (14).jpg", cat: "Dining", title: "Image 14" },
  { src: "ct.webp", cat: "Rooms", title: "Image 16" },

  { src: "/ab (16).webp", cat: "Rooms", title: "Image 16" },
  { src: "/ab (19).webp", cat: "Rooms", title: "Image 19" },
  { src: "/ab (24).webp", cat: "Dining", title: "Image 24" },
  { src: "/ab (25).webp", cat: "Nature", title: "Image 25" },

  { src: "/ab (35).webp", cat: "Rooms", title: "Image 35" },
  { src: "/ab (36).webp", cat: "Amenities", title: "Image 36" },
  { src: "/ab (41).webp", cat: "Nature", title: "Image 41" },
  { src: "/ab (45).webp", cat: "Dining", title: "Image 45" },

  { src: "/ab (51).webp", cat: "Rooms", title: "Image 51" },
  { src: "/ab (52).webp", cat: "Rooms", title: "Image 52" },
  { src: "/ab (53).webp", cat: "Dining", title: "Image 53" },
  { src: "/ab (55).webp", cat: "Rooms", title: "Image 55" },
  { src: "/ab (56).webp", cat: "Rooms", title: "Image 56" },
  { src: "/ab (57).webp", cat: "Nature", title: "Image 57" },
  { src: "/ab (59).webp", cat: "Property", title: "Image 59" },
  { src: "/ab.webp", cat: "Property", title: "Image 59" },
  { src: "/ac.webp", cat: "Property", title: "Image 59" },
  { src: "/opensky.webp", cat: "Property", title: "Image 59" },
  { src: "/modern.webp", cat: "Property", title: "Image 59" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "All" ? photos : photos.filter((p) => p.cat === active);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ height: "52vh", minHeight: "320px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMG}')` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl text-white mb-4 font-bold">
            Gallery
          </h1>
          <p className="text-xl text-[#DCD7CD]">
            Glimpses of serenity and natural beauty
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="bg-white border-b border-[#DCD7CD] sticky top-[60px] z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-sm ${
                active === cat
                  ? "bg-[#354E41] text-white"
                  : "bg-[#DCD7CD]/40 text-[#354E41]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="py-16 bg-[#DCD7CD]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((photo, i) => (
              <button
                key={i}
                onClick={() => setLightbox(photo.src)}
                className="relative overflow-hidden aspect-[4/3] rounded-xl"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#354E41] text-center text-white">
        <h2 className="text-3xl mb-4">Experience It In Person</h2>
        <Link
          href="/booking"
          className="bg-[#D9B59D] text-[#354E41] px-8 py-3 rounded-lg"
        >
          Book Now
        </Link>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            className="max-h-[90vh] max-w-full"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
