"use client";

import Link from "next/link";


export default function Features() {
  return (
    <section className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase">
              Why Choose
              <span className="text-error">
                {" "}
                Blacksmith Athletics
              </span>
            </h2>

            <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
              Everything you need to achieve your fitness and athletic goals
              under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Elite Coaching</h3>

                <p>
                  Expert trainers dedicated to helping you maximize results
                  safely and efficiently.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Strength Training</h3>

                <p>
                  Professional equipment designed for powerlifting,
                  bodybuilding, and athletic performance.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Nutrition Plans</h3>

                <p>
                  Personalized meal guidance to support fat loss, muscle gain,
                  and recovery.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Community Support</h3>

                <p>
                  Train alongside motivated athletes and become part of a strong
                  fitness culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
} 