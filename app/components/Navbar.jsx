"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Progress", path: "/progress" },
    { name: "Activity", path: "/activity" },
    { name: "Profile", path: "/profile" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="fixed left-0 top-0 w-72 h-screen bg-white border-r ">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-indigo-600">
          LearnSkill
        </h1>

        <p className="text-sm text-gray-500">
          Student Dashboard
        </p>
      </div>

      <div className="p-4">
        {links.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="relative block px-4 py-3 rounded-lg mb-2"
          >
            {pathname === item.path && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-indigo-100 rounded-lg"
                transition={{
                  duration: 0.25,
                }}
              />
            )}

            <span
              className={`relative z-10 ${
                pathname === item.path
                  ? "text-indigo-600 font-medium"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-5 left-4 right-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="font-semibold">
            Datta Ankushrao
          </h3>

          <p className="text-sm text-gray-500">
            Frontend Intern
          </p>
        </div>
      </div>
    </aside>
  );
}