'use client';
import React from "react";
import { Link } from "react-router-dom";


const IMAGE_BASE = __IMAGE_BASE_PATH__; 

const press = {
  items: [
    {
      title: "TIL Limited Reports Record Q4 2024 Performance",
      description:
        "Official press release detailing financial results and growth milestones.",
      image: `${IMAGE_BASE}/press1.jpg`,
      link: "/press/q4-2024-performance",
      type: "press",
      date: "2024-12-22",
    },
    {
      title: "New CEO Appointment Announcement",
      description:
        "Leadership transition and strategic vision for the company's future.",
      image: `${IMAGE_BASE}/press2.jpg`,
      link: "/press/new-ceo-appointment",
      type: "press",
      date: "2024-12-20",
    },
    {
      title: "Environmental Sustainability Initiative Launch",
      description:
        "Commitment to carbon neutrality and sustainable manufacturing practices.",
      image: `${IMAGE_BASE}/press3.jpg`,
      link: "/press/sustainability-initiative",
      type: "press",
      date: "2024-12-18",
    },
    {
      title: "International Expansion Plans Revealed",
      description:
        "Strategic expansion into new markets and establishment of regional offices.",
      image: `${IMAGE_BASE}/press4.jpg`,
      link: "/press/international-expansion",
      type: "press",
      date: "2024-12-15",
    },
  ],
  media: {
    image: `${IMAGE_BASE}/media.jpg`,
    title: "Press Releases",
    description:
      "Official company announcements, press statements, and media resources.",
    cta: "View All Press",
    features: ["Official News", "Media Kit", "Contact Info"],
  },
};

const PressReleasesPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{press.media.title}</h1>
        <p className="text-gray-600">{press.media.description}</p>
      </div>

      {/* Grid for press items */}
      <div className="grid md:grid-cols-2 gap-8">
        {press.items.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">
                {new Date(item.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h2 className="text-lg font-semibold group-hover:text-blue-600 transition">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Media section footer (optional) */}
      <div className="mt-16 bg-gray-100 p-6 rounded-xl flex flex-col md:flex-row gap-6 items-center">
        <img
          src={press.media.image}
          alt="Press Media"
          className="w-full md:w-1/3 h-48 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2">
            {press.media.title}
          </h3>
          <p className="text-gray-700 mb-4">{press.media.description}</p>
          <ul className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            {press.media.features.map((feature, idx) => (
              <li
                key={idx}
                className="bg-white border px-3 py-1 rounded-full shadow-sm"
              >
                {feature}
              </li>
            ))}
          </ul>
          <Link
            to="/press"
            className="inline-block mt-2 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            {press.media.cta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PressReleasesPage;
