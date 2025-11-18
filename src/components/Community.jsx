import React from "react";
import { Youtube, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

const Community = () => {
  return (
    <section className="bg-[#0b0c0f] text-white">
      <div className="max-w-screen-md mx-auto px-4 py-12 flex flex-col items-center text-center">
        <h2 className="text-2xl font-extrabold tracking-tight">Join the Community</h2>
        <p className="mt-2 text-sm text-gray-300 max-w-md">
          Stay connected with updates, events, and news across our social channels.
        </p>

        <div className="mt-5 flex items-center gap-3">
          <a href="#" aria-label="Discord" className="w-11 h-11 rounded-full grid place-items-center bg-white/5 border border-white/10 text-white active:scale-95 transition">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href="#" aria-label="YouTube" className="w-11 h-11 rounded-full grid place-items-center bg-white/5 border border-white/10 text-white active:scale-95 transition">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="w-11 h-11 rounded-full grid place-items-center bg-white/5 border border-white/10 text-white active:scale-95 transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Facebook" className="w-11 h-11 rounded-full grid place-items-center bg-white/5 border border-white/10 text-white active:scale-95 transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Twitter" className="w-11 h-11 rounded-full grid place-items-center bg-white/5 border border-white/10 text-white active:scale-95 transition">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
