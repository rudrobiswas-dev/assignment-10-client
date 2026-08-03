"use client";

import { toast } from "react-hot-toast";

const AddForumPostPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Forum post created!");

    e.target.reset();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">

      <div className="card bg-base-200 shadow-xl">

        <div className="card-body">

          <h2 className="text-3xl font-bold mb-5">
            Add Forum Post
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              className="input input-bordered w-full"
              placeholder="Post Title"
              required
            />

            <input
              className="input input-bordered w-full"
              placeholder="Image URL (ImgBB)"
              required
            />

            <textarea
              className="textarea textarea-bordered w-full"
              rows={6}
              placeholder="Description"
              required
            />

            <button className="btn btn-primary">
              Publish Post
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default AddForumPostPage;