"use client";

const posts = [
  {
    id: 1,
    title: "Benefits of Daily Exercise",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    date: "August 2, 2026",
  },
  {
    id: 2,
    title: "Best Workout Routine",
    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    date: "August 1, 2026",
  },
];

const MyForumPostsPage = () => {
  return (
    <div className="p-6">

      <h2 className="text-3xl font-bold mb-6">
        My Forum Posts
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {posts.map((post) => (
          <div
            key={post.id}
            className="card bg-base-200 shadow-lg"
          >
            <figure>
              <img
                src={post.image}
                alt={post.title}
                className="h-52 w-full object-cover"
              />
            </figure>

            <div className="card-body">

              <h2 className="card-title">
                {post.title}
              </h2>

              <p>{post.date}</p>

              <button className="btn btn-error">
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default MyForumPostsPage;