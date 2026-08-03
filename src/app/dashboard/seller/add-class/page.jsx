"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

const AddClassPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const classData = {
      className: form.className.value,
      image: form.image.value,
      category: form.category.value,
      difficulty: form.difficulty.value,
      duration: form.duration.value,
      schedule: form.schedule.value,
      price: Number(form.price.value),
      description: form.description.value,
      status: "Pending",
    };

    console.log(classData);

    // TODO: Save to database

    toast.success("Class submitted successfully!");

    form.reset();
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold mb-6">
            Add New Class
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">

            <input
              name="className"
              className="input input-bordered w-full"
              placeholder="Class Name"
              required
            />

            <input
              name="image"
              className="input input-bordered w-full"
              placeholder="Image URL"
              required
            />

            <input
              name="category"
              className="input input-bordered"
              placeholder="Category"
              required
            />

            <select
              name="difficulty"
              className="select select-bordered"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <input
              name="duration"
              className="input input-bordered"
              placeholder="Duration (60 Minutes)"
            />

            <input
              name="schedule"
              className="input input-bordered"
              placeholder="Monday & Wednesday 6 PM"
            />

            <input
              name="price"
              type="number"
              className="input input-bordered"
              placeholder="Price"
            />

            <div className="badge badge-warning badge-lg self-center">
              Status : Pending
            </div>

            <textarea
              name="description"
              className="textarea textarea-bordered md:col-span-2"
              rows={5}
              placeholder="Description"
            />

            <button
              className="btn btn-primary md:col-span-2"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Add Class"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClassPage;