import Image from "next/image";
import Link from "next/link";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;


const CommunityForumDetailsPage = async ({ params }) => {

  const { id } = await params;

  let post = null;


  try {

    const res = await fetch(
      `${SERVER_URL}/forum-posts/${id}`,
      {
        cache: "no-store",
      }
    );


    if(res.ok){
      post = await res.json();
    }


  } catch(error){

    console.log("Forum details error:", error);

  }



  if(!post){

    return (
      <div className="min-h-screen flex items-center justify-center">

        <h1 className="text-3xl font-bold">
          Post Not Found
        </h1>

      </div>
    );

  }



  return (

    <main className="min-h-screen bg-base-200 pt-28 pb-12 px-5">


      <div className="max-w-5xl mx-auto">


        {/* Back Button */}
        <Link
          href="/community-forum"
          className="btn btn-outline mb-8"
        >
          ← Back To Forum
        </Link>



        <div className="card bg-base-100 shadow-xl overflow-hidden">


          {/* Image */}

          <figure className="relative h-[400px] w-full">

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


            <h1 className="text-4xl font-bold">
              {post.title}
            </h1>



            <div className="flex gap-3 items-center mt-3">


              <div>

                <p className="font-semibold text-primary">
                  {post.authorName}
                </p>


                <p className="text-sm text-gray-500">
                  {post.authorRole || "Trainer"}
                </p>


              </div>


            </div>




            <div className="divider"></div>



            <p className="text-lg leading-8 text-gray-600">

              {post.description}

            </p>




            <div className="mt-8 text-sm text-gray-500">

              Published:
              {" "}
              {
                post.createdAt
                ? new Date(post.createdAt).toLocaleDateString()
                : "Recently"
              }

            </div>



          </div>


        </div>


      </div>


    </main>

  );

};


export default CommunityForumDetailsPage;