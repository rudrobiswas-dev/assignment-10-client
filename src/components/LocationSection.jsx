"use client";

import Link from "next/link";


export default function LocationSection() {
  return (
    <section className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="uppercase text-error font-semibold tracking-widest">
            Location
          </p>

          <h2 className="text-5xl font-black uppercase">
            Visit Our Gym
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Map */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7298.528737769973!2d90.41048799540664!3d23.844744327517756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c663490668ef%3A0xe0f573be3316163a!2sCAAB%20Colony%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1781840152740!5m2!1sen!2sbd"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gym Location Map"
            />
          </div>

          {/* Info Card */}
          <div className="bg-base-200 rounded-3xl p-8">
            <h3 className="text-3xl font-black">
              Blacksmith Athletics
            </h3>

            <p className="mt-6">📍 Dhaka, Bangladesh</p>
            <p className="mt-3">📞 +880 123456789</p>
            <p className="mt-3">✉️ info@blacksmith.com</p>

            <button
  className="btn glitch-btn mt-8 w-full"
  onClick={() =>
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=CAAB+Colony,+Dhaka+1230",
      "_blank"
    )
  }
>
  Get Directions
</button>
          </div>

        </div>
      </div>
    </section>
  );
} 