// "use client";

// import { useState } from "react";
// import { ImagePlus, SendHorizonal } from "lucide-react";
// import toast from "react-hot-toast";
// // import imageUploader from "@/lib/imageUploader";

// export default function AddForumPostPage() {
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     title: "",
//     category: "Fitness",
//     description: "",
//     image: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   // Upload to ImgBB
//   const handleImage = async (e) => {
//     const image = e.target.files[0];

//     if (!image) return;

//     try {
//       setLoading(true);

//       // Uncomment when using your helper
//       // const url = await imageUploader(image);

//       // Demo Preview
//       const url = URL.createObjectURL(image);

//       setFormData((prev) => ({
//         ...prev,
//         image: url,
//       }));

//       toast.success("Image Uploaded");
//     } catch (err) {
//       toast.error("Upload Failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !formData.title ||
//       !formData.image ||
//       !formData.description
//     ) {
//       return toast.error("Please fill all fields");
//     }

//     try {
//       setLoading(true);

//       // await axios.post(`${SERVER_URL}/forum-posts`, formData);

//       console.log(formData);

//       toast.success("Forum Post Added");

//       setFormData({
//         title: "",
//         category: "Fitness",
//         description: "",
//         image: "",
//       });
//     } catch (err) {
//       toast.error("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-base-100 p-6">

//       <div className="max-w-4xl mx-auto">

//         <div className="mb-8">

//           <h1 className="text-3xl font-bold">
//             Add Forum Post
//           </h1>

//           <p className="text-gray-500">
//             Share useful fitness tips with the community.
//           </p>

//         </div>

//         <div className="card bg-base-200 shadow-xl">

//           <div className="card-body">

//             <form
//               onSubmit={handleSubmit}
//               className="space-y-6"
//             >

//               {/* Title */}

//               <div>

//                 <label className="label">
//                   <span className="label-text font-semibold">
//                     Title
//                   </span>
//                 </label>

//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   placeholder="Enter forum title..."
//                   className="input input-bordered w-full"
//                 />

//               </div>

//               {/* Category */}

//               <div>

//                 <label className="label">
//                   <span className="label-text font-semibold">
//                     Category
//                   </span>
//                 </label>

//                 <select
//                   className="select select-bordered w-full"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                 >
//                   <option>Fitness</option>
//                   <option>Nutrition</option>
//                   <option>Workout</option>
//                   <option>Yoga</option>
//                   <option>Cardio</option>
//                   <option>Weight Loss</option>
//                 </select>

//               </div>

//               {/* Image */}

//               <div>

//                 <label className="label">
//                   <span className="label-text font-semibold">
//                     Upload Image
//                   </span>
//                 </label>

//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="file-input file-input-bordered w-full"
//                   onChange={handleImage}
//                 />

//               </div>

//               {/* Preview */}

//               {formData.image && (

//                 <div>

//                   <img
//                     src={formData.image}
//                     className="rounded-xl w-full h-72 object-cover"
//                     alt=""
//                   />

//                 </div>

//               )}

//               {/* Description */}

//               <div>

//                 <label className="label">
//                   <span className="label-text font-semibold">
//                     Description
//                   </span>
//                 </label>

//                 <textarea
//                   rows={8}
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   className="textarea textarea-bordered w-full"
//                   placeholder="Write your forum post..."
//                 />

//               </div>

//               <button
//                 disabled={loading}
//                 className="btn btn-primary w-full"
//               >

//                 {loading ? (
//                   <>
//                     <span className="loading loading-spinner"></span>
//                     Processing...
//                   </>
//                 ) : (
//                   <>
//                     <SendHorizonal size={18} />
//                     Publish Forum Post
//                   </>
//                 )}

//               </button>

//             </form>

//           </div>

//         </div>

//         <div className="grid md:grid-cols-3 gap-5 mt-8">

//           <div className="stat bg-base-200 rounded-xl shadow">

//             <div className="stat-figure text-primary">
//               <ImagePlus size={28} />
//             </div>

//             <div className="stat-title">
//               Images
//             </div>

//             <div className="stat-value text-primary">
//               ImgBB
//             </div>

//           </div>

//           <div className="stat bg-base-200 rounded-xl shadow">

//             <div className="stat-title">
//               Visibility
//             </div>

//             <div className="stat-value text-success">
//               Public
//             </div>

//           </div>

//           <div className="stat bg-base-200 rounded-xl shadow">

//             <div className="stat-title">
//               Author
//             </div>

//             <div className="stat-value text-secondary">
//               Admin
//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { ImagePlus, SendHorizonal } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { authClient } from "@/lib/auth-client";
import { imageUploader } from "@/lib/imageUpload";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export default function AddForumPostPage() {

  const [loading, setLoading] = useState(false);


  const { data: session } = authClient.useSession();

  const user = session?.user;



  const [formData, setFormData] = useState({

    title: "",
    category: "Fitness",
    description: "",
    image: "",

  });



  const handleChange = (e) => {

    setFormData((prev) => ({

      ...prev,

      [e.target.name]: e.target.value,

    }));

  };




  // Image Upload
  const handleImage = async (e) => {

  const image = e.target.files[0];


  if(!image) return;


  try {

    setLoading(true);


    const imageUrl = await imageUploader(image);


    setFormData((prev)=>({

      ...prev,

      image:imageUrl,

    }));


    toast.success("Image Uploaded");


  } catch(error){

    console.log(error);

    toast.error("Image upload failed");


  } finally{

    setLoading(false);

  }

};





  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.title ||
    !formData.image ||
    !formData.description
  ) {
    return toast.error("Please fill all fields");
  }


  try {
    setLoading(true);


    const postData = {
      ...formData,
      authorName: user?.name || "Admin",
      authorEmail: user?.email || "",
      authorRole: "Admin",
    };


    const res = await axios.post(
      `${SERVER_URL}/forum-posts`,
      postData
    );


    if(res.data.insertedId){

      toast.success("Forum Post Published");


      setFormData({
        title:"",
        category:"Fitness",
        description:"",
        image:"",
      });

    }


  } catch(error){

    console.log(error);

    toast.error(
      error?.response?.data?.message ||
      "Something went wrong"
    );


  } finally {

    setLoading(false);

  }

};





  return (

    <div className="min-h-screen bg-base-100 p-6">


      <div className="max-w-4xl mx-auto">


        <div className="mb-8">

          <h1 className="text-3xl font-bold">

            Add Forum Post

          </h1>


          <p className="text-gray-500">

            Share useful fitness tips with the community.

          </p>

        </div>





        <div className="card bg-base-200 shadow-xl">


          <div className="card-body">


            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >



              {/* Title */}

              <div>

                <label className="label">

                  <span className="label-text font-semibold">

                    Title

                  </span>

                </label>


                <input

                  type="text"

                  name="title"

                  value={formData.title}

                  onChange={handleChange}

                  placeholder="Enter forum title..."

                  className="input input-bordered w-full"

                />

              </div>





              {/* Category */}

              <div>

                <label className="label">

                  <span className="label-text font-semibold">

                    Category

                  </span>

                </label>


                <select

                  className="select select-bordered w-full"

                  name="category"

                  value={formData.category}

                  onChange={handleChange}

                >

                  <option>Fitness</option>

                  <option>Nutrition</option>

                  <option>Workout</option>

                  <option>Yoga</option>

                  <option>Cardio</option>

                  <option>Weight Loss</option>


                </select>


              </div>





              {/* Image */}

              <div>


                <label className="label">

                  <span className="label-text font-semibold">

                    Upload Image

                  </span>

                </label>



                <input

                  type="file"

                  accept="image/*"

                  className="file-input file-input-bordered w-full"

                  onChange={handleImage}

                />


              </div>





              {/* Preview */}


              {
                formData.image && (

                  <img

                    src={formData.image}

                    className="rounded-xl w-full h-72 object-cover"

                    alt="preview"

                  />

                )
              }





              {/* Description */}


              <div>


                <label className="label">

                  <span className="label-text font-semibold">

                    Description

                  </span>

                </label>



                <textarea

                  rows={8}

                  name="description"

                  value={formData.description}

                  onChange={handleChange}

                  className="textarea textarea-bordered w-full"

                  placeholder="Write your forum post..."

                />

              </div>






              <button

                disabled={loading}

                className="btn btn-primary w-full"

              >


                {
                  loading ? (

                    <>

                    <span className="loading loading-spinner"></span>

                    Processing...

                    </>


                  ) : (

                    <>

                    <SendHorizonal size={18}/>

                    Publish Forum Post

                    </>

                  )
                }


              </button>




            </form>


          </div>


        </div>





        <div className="grid md:grid-cols-3 gap-5 mt-8">



          <div className="stat bg-base-200 rounded-xl shadow">

            <div className="stat-figure text-primary">

              <ImagePlus size={28}/>

            </div>


            <div className="stat-title">

              Images

            </div>


            <div className="stat-value text-primary">

              ImgBB

            </div>


          </div>





          <div className="stat bg-base-200 rounded-xl shadow">


            <div className="stat-title">

              Visibility

            </div>


            <div className="stat-value text-success">

              Public

            </div>


          </div>






          <div className="stat bg-base-200 rounded-xl shadow">


            <div className="stat-title">

              Author

            </div>


            <div className="stat-value text-secondary">

              Admin

            </div>


          </div>



        </div>





      </div>


    </div>

  );

}