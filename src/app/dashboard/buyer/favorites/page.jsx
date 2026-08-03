"use client";

import { Trash2 } from "lucide-react";

const favoriteClasses = [
  {
    id: 1,
    className: "Muscle Building",
    trainer: "Sarah Johnson",
  },
  {
    id: 2,
    className: "CrossFit Pro",
    trainer: "Michael Lee",
  },
  {
    id: 3,
    className: "Power Yoga",
    trainer: "Emma Wilson",
  },
];

export default function FavoriteClassesPage() {
  return (
    <div className="p-6">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">

          <h2 className="card-title text-3xl mb-6">
            Favorite Classes
          </h2>

          <div className="space-y-4">

            {favoriteClasses.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-base-100 rounded-xl p-5"
              >
                <div>
                  <h3 className="font-bold text-lg">
                    {item.className}
                  </h3>

                  <p className="text-gray-500">
                    Trainer : {item.trainer}
                  </p>
                </div>

                <button className="btn btn-error btn-sm">
                  <Trash2 size={16} />
                  Remove
                </button>

              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}