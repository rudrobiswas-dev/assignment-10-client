import Image from "next/image";
import Link from "next/link";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const CommunityForumPage = async ({ limit }) => {
  let posts = [];

  try {
    const res = await fetch(`${SERVER_URL}/forum-posts`, {
      cache: "no-store",
    });

    const data = await res.json();
    posts = limit ? data.slice(0, limit) : data;
  } catch (error) {
    console.log("Forum fetch error:", error);
  }

  return (
    <div className="min-h-screen bg-base-200 py-12 px-5">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Community Forum
        </h1>

        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Explore fitness tips, training advice, and health discussions
          shared by our trainers and admins.
        </p>
      </div>


      {/* Posts Grid */}
      <div className="
        max-w-7xl mx-auto
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      ">

        {
          posts.length === 0 ? (
            <div className="col-span-full text-center">
              <h2 className="text-2xl font-semibold">
                No forum posts available
              </h2>
            </div>
          ) : (

            posts.map((post)=>(
              <div
                key={post._id}
                className="
                card
                bg-base-100
                shadow-xl
                hover:shadow-2xl
                transition
                duration-300
                "
              >

                {/* Image */}
                <figure className="relative h-56 w-full">

                  <Image
                    src={
                      post.image ||
                      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
                    }
                    alt={post.title}
                    fill
                    className="object-cover"
                  />

                </figure>


                {/* Content */}
                <div className="card-body">

                  <h2 className="card-title">
                    {post.title}
                  </h2>


                  {/* Author */}
                  <p className="text-sm text-primary font-semibold">
                    By: {post.authorName || "Admin"}
                  </p>


                  {/* Description */}
                  <p className="text-gray-500">
                    {
                      post.description?.length > 120
                      ? post.description.slice(0,120)+"..."
                      : post.description
                    }
                  </p>


                  {/* Button */}
                  <div className="card-actions justify-end mt-4">

                    <Link
                      href={`/community-forum/${post._id}`}
                    >
                      <button className="btn btn-primary">
                        Read More
                      </button>
                    </Link>

                  </div>


                </div>


              </div>
            ))

          )
        }

      </div>

    </div>
  );
};


export default CommunityForumPage;