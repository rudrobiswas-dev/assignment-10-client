"use client";

import { useState } from "react";
import {
  Search,
  Trash2,
  Calendar,
  User,
  MessageSquare,
} from "lucide-react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const initialPosts = [
  {
    _id: "1",
    title: "Best Workout For Beginners",
    author: "Sarah Johnson",
    email: "sarah@gmail.com",
    category: "Workout",
    date: "2026-08-03",
    comments: 18,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300",
  },
  {
    _id: "2",
    title: "Healthy Diet Tips",
    author: "Michael Lee",
    email: "michael@gmail.com",
    category: "Nutrition",
    date: "2026-08-02",
    comments: 10,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300",
  },
  {
    _id: "3",
    title: "Yoga Everyday Benefits",
    author: "Emma Wilson",
    email: "emma@gmail.com",
    category: "Yoga",
    date: "2026-08-01",
    comments: 23,
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300",
  },
  {
    _id: "4",
    title: "Cardio vs Weight Training",
    author: "David Smith",
    email: "david@gmail.com",
    category: "Fitness",
    date: "2026-07-31",
    comments: 12,
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300",
  },
];

export default function ForumPostManagePage() {
  const [posts, setPosts] = useState(initialPosts);
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.author.toLowerCase().includes(search.toLowerCase()) ||
      post.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Post?",
      text: "This post will be permanently removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        setPosts((prev) =>
          prev.filter((item) => item._id !== id)
        );

        toast.success("Forum post deleted");
      }
    });
  };

  return (
    <div className="min-h-screen bg-base-100 p-6">

      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            Forum Post Management
          </h1>

          <p className="text-gray-500">
            Moderate community posts.
          </p>

        </div>

        <label className="input input-bordered flex items-center gap-2 lg:w-80">

          <Search size={18} />

          <input
            className="grow"
            placeholder="Search post..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </label>

      </div>

      <div className="overflow-x-auto rounded-xl bg-base-200 shadow-lg">

        <table className="table">

          <thead>

            <tr>
              <th>Post</th>
              <th>Author</th>
              <th>Category</th>
              <th>Date</th>
              <th>Comments</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredPosts.map((post) => (

              <tr key={post._id}>

                <td>

                  <div className="flex items-center gap-4">

                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />

                    <div>

                      <h2 className="font-bold">
                        {post.title}
                      </h2>

                      <p className="text-sm text-gray-500">
                        {post.email}
                      </p>

                    </div>

                  </div>

                </td>

                <td>

                  <div className="flex items-center gap-2">

                    <User size={16} />

                    {post.author}

                  </div>

                </td>

                <td>

                  <div className="badge badge-primary">
                    {post.category}
                  </div>

                </td>

                <td>

                  <div className="flex items-center gap-2">

                    <Calendar size={16} />

                    {post.date}

                  </div>

                </td>

                <td>

                  <div className="flex items-center gap-2">

                    <MessageSquare size={16} />

                    {post.comments}

                  </div>

                </td>

                <td>

                  <button
                    className="btn btn-error btn-sm"
                    onClick={() =>
                      handleDelete(post._id)
                    }
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="stats bg-base-200 shadow w-full mt-8">

        <div className="stat">

          <div className="stat-title">
            Total Posts
          </div>

          <div className="stat-value text-primary">
            {posts.length}
          </div>

        </div>

        <div className="stat">

          <div className="stat-title">
            Total Comments
          </div>

          <div className="stat-value text-secondary">
            {posts.reduce(
              (sum, post) => sum + post.comments,
              0
            )}
          </div>

        </div>

        <div className="stat">

          <div className="stat-title">
            Categories
          </div>

          <div className="stat-value text-accent">
            {
              new Set(
                posts.map((post) => post.category)
              ).size
            }
          </div>

        </div>

      </div>

    </div>
  );
}