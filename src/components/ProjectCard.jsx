import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ y: -8 }}
      className="block p-6 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur shadow-sm hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </motion.a>
  );
}