"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function EatHungerStories() {
  const featuredStory = {
    title: "Home Chef Feeds 50 People in a Week",
    description:
      "Our home chefs prepared and donated 50 meals, helping feed families in need and earning ₹500 in return. Every meal makes a difference and inspires the community to give back more.",
    author: "Chef Rohan",
    date: "Nov 10, 2025",
    authorImage:
      "https://images.unsplash.com/photo-1598514983342-437a1b0c0b8b?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    backgroundImage:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2000&auto=format&fit=crop",
  };

  const donationStories = [
    {
      type: "Restaurant Donation",
      title: "Cancelled Orders from Local Restaurant Donated 100 Meals",
      author: "Restaurant Partner: SpiceHub",
      date: "Nov 8, 2025",
      authorImage:
        "https://images.unsplash.com/photo-1598514983342-437a1b0c0b8b?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      image:
        "https://images.unsplash.com/photo-1600891954255-f61ba0e24092?q=80&w=2000&auto=format&fit=crop",
    },
    {
      type: "Volunteer Story",
      title: "Community Volunteers Helped Distribute 200 Meals",
      author: "Community Partner: FeedLocal",
      date: "Nov 9, 2025",
      authorImage:
        "https://images.unsplash.com/photo-1502378735452-bc7d86632924?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      image:
        "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=2000&auto=format&fit=crop",
    },
    {
      type: "Home Chef",
      title: "Chef Anjali Donated 30 Healthy Meals from Her Kitchen",
    },
  ];

  return (
    <section className="w-full bg-[#8DB600] rounded-2xl py-24 px-6 font-sans">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-10">
        {/* Featured Story */}
        <motion.div
          className="relative flex-1 rounded-3xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Top Image */}
          <div className="h-64 md:h-80 w-full relative">
            <img
              src={featuredStory.backgroundImage}
              alt={featuredStory.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <Menu className="w-6 h-6 text-gray-700" />
              <span className="inline-block bg-green-200 text-green-900 text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              {featuredStory.title}
            </h2>
            <p className="text-sm text-gray-700">{featuredStory.description}</p>

            <div className="flex items-center mt-4 gap-3">
              <img
                src={featuredStory.authorImage}
                alt={featuredStory.author}
                className="w-10 h-10 rounded-full ring-2 ring-green-100"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">{featuredStory.author}</p>
                <p className="text-xs text-gray-700">{featuredStory.date}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Donation Stories */}
        <motion.div className="flex-1 flex flex-col gap-6 max-h-[600px] overflow-y-auto pr-2">
          {donationStories.map((story, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              {story.image && (
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-36 object-cover rounded-t-2xl"
                />
              )}
              <div className="p-5 flex flex-col gap-2">
                <span className="text-xs text-green-700 uppercase font-semibold">{story.type}</span>
                <h4 className="text-lg font-bold text-gray-900">{story.title}</h4>
                {story.author && (
                  <div className="flex items-center mt-2 gap-2">
                    <img src={story.authorImage} alt={story.author} className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="text-xs font-semibold text-gray-900">{story.author}</p>
                      <p className="text-xs text-gray-700">{story.date}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
