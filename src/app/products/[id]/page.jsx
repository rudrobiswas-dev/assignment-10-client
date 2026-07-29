import Image from "next/image";
import Link from "next/link";



const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const ProductDetailsPage = async ({ params }) => {
  let product;

  try {
    const { id } = await params;

    const res = await fetch(`${SERVER_URL}/product/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch product details");

    product = await res.json();
  } catch (error) {
    console.error("Error fetching product details:", error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The product you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    // <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-7xl mx-auto">
    //     {/* Back Button */}
    //     <Link
    //       href="/products"
    //       className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
    //     >
    //       <svg
    //         className="w-5 h-5 mr-2"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="M10 19l-7-7m0 0l7-7m-7 7h18"
    //         />
    //       </svg>
    //       Back to Products
    //     </Link>

    //     {/* Product Details Card */}
    //     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
    //         {/* Product Image */}
    //         <div className="relative h-80 md:h-96 bg-gray-100 rounded-lg overflow-hidden">
    //           {product.image ? (
    //             <Image
    //               src={product.image}
    //               alt={product.title}
    //               fill
    //               className="object-cover"
    //             />
    //           ) : (
    //             <div className="flex items-center justify-center h-full bg-gray-200">
    //               <span className="text-gray-400 text-lg">
    //                 No image available
    //               </span>
    //             </div>
    //           )}
    //         </div>

    //         {/* Product Info */}
    //         <div className="flex flex-col">
    //           <h1 className="text-3xl font-bold text-gray-900 mb-2">
    //             {product.title}
    //           </h1>

    //           <div className="flex items-center gap-4 mb-4">
    //             <span className="text-3xl font-bold text-blue-600">
    //               ${product.price}
    //             </span>
    //             <span
    //               className={`px-3 py-1 rounded-full text-sm font-medium ${
    //                 product.quantity > 0
    //                   ? "bg-green-100 text-green-800"
    //                   : "bg-red-100 text-red-800"
    //               }`}
    //             >
    //               {product.quantity > 0 ? "In Stock" : "Out of Stock"}
    //             </span>
    //           </div>

    //           <div className="mb-6">
    //             <h2 className="text-sm font-semibold text-gray-700 mb-2">
    //               Description
    //             </h2>
    //             <p className="text-gray-600 leading-relaxed">
    //               {product.description}
    //             </p>
    //           </div>

    //           <div className="grid grid-cols-2 gap-4 mb-6">
    //             <div className="bg-gray-50 p-3 rounded-lg">
    //               <p className="text-xs text-gray-500">Quantity Available</p>
    //               <p className="text-lg font-semibold text-gray-900">
    //                 {product.quantity} units
    //               </p>
    //             </div>
    //             <div className="bg-gray-50 p-3 rounded-lg">
    //               <p className="text-xs text-gray-500">Product ID</p>
    //               <p className="text-sm font-medium text-gray-900 truncate">
    //                 {product._id}
    //               </p>
    //             </div>
    //           </div>

    //           {/* Action Buttons */}
    //           <div className="flex flex-col sm:flex-row gap-3 mt-auto">
    //             <button
    //               className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
    //                 product.quantity > 0
    //                   ? "bg-blue-600 text-white hover:bg-blue-700"
    //                   : "bg-gray-300 text-gray-500 cursor-not-allowed"
    //               }`}
    //               disabled={product.quantity === 0}
    //             >
    //               {product.quantity > 0 ? "Add to Cart" : "Out of Stock"}
    //             </button>

    //             <form action={'/api/payment'} method="POST">
    //               <input type="hidden" value={product.price} name="price" />
    //               <input type="hidden" value={product.title} name="title" />
    //               <input type="hidden" value={product._id} name="productId" />

    //               <button
    //                 type="submit"
    //                 className="flex-1 py-3 px-6 rounded-lg font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
    //               >
    //                 Buy Now
    //               </button>
    //             </form>
    //           </div>

    //           {/* Additional Info */}
    //           <div className="mt-6 pt-6 border-t border-gray-200">
    //             <div className="flex items-center text-sm text-gray-500">
    //               <svg
    //                 className="w-5 h-5 mr-2 text-green-500"
    //                 fill="currentColor"
    //                 viewBox="0 0 20 20"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //               <span>Free shipping on orders over $50</span>
    //             </div>
    //             <div className="flex items-center text-sm text-gray-500 mt-2">
    //               <svg
    //                 className="w-5 h-5 mr-2 text-green-500"
    //                 fill="currentColor"
    //                 viewBox="0 0 20 20"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //               <span>30-day money-back guarantee</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Related Products Section (Optional) */}
    //     <div className="mt-12">
    //       <h2 className="text-2xl font-bold text-gray-900 mb-6">
    //         You Might Also Like
    //       </h2>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //         {[1, 2, 3, 4].map((i) => (
    //           <div
    //             key={i}
    //             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    //           >
    //             <div className="h-40 bg-gray-200 animate-pulse"></div>
    //             <div className="p-4">
    //               <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
    //               <div className="h-3 bg-gray-200 rounded animate-pulse mb-2"></div>
    //               <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen bg-white">
  <div className="max-w-7xl mx-auto px-6 py-12">

    {/* Back */}
    <Link
      href="/products"
      className="inline-flex items-center gap-2 text-[#00E6F6] hover:underline mb-8"
    >
      ← Back to Products
    </Link>

    <div className="grid lg:grid-cols-2 gap-14">

      {/* Image */}
      <div className="rounded-3xl overflow-hidden border bg-white shadow-sm">
        <div className="relative h-[600px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover hover:scale-105 duration-500"
          />
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col">

        <span className="w-fit px-4 py-1 rounded-full bg-[#00E6F6]/10 text-[#00E6F6] text-sm font-semibold">
          Premium Equipment
        </span>

        <h1 className="text-5xl font-black mt-5">
          {product.title}
        </h1>

        <p className="mt-6 text-gray-600 leading-8">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-8 flex items-center gap-5">

          <h2 className="text-5xl font-black text-[#FF013C]">
            ${product.price}
          </h2>

          <span
            className={`px-4 py-2 rounded-full text-sm font-bold ${
              product.quantity > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {product.quantity > 0
              ? "In Stock"
              : "Out of Stock"}
          </span>

        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-5 mt-10">

          <div className="rounded-2xl border p-5">
            <p className="text-gray-500 text-sm">
              Available
            </p>

            <h3 className="text-2xl font-bold mt-2">
              {product.quantity}
            </h3>
          </div>

          <div className="rounded-2xl border p-5">
            <p className="text-gray-500 text-sm">
              Product ID
            </p>

            <h3 className="truncate mt-2 font-semibold">
              {product._id}
            </h3>
          </div>

        </div>

        {/* Features */}
        <div className="mt-10 space-y-3">

          <div className="flex items-center gap-3">
            ✅ Free Shipping
          </div>

          <div className="flex items-center gap-3">
            ✅ Secure Payment
          </div>

          <div className="flex items-center gap-3">
            ✅ Premium Quality
          </div>

          <div className="flex items-center gap-3">
            ✅ 30-Day Warranty
          </div>

        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">

          <button
            disabled={product.quantity === 0}
            className="flex-1 h-14 rounded-xl bg-[#00E6F6] hover:bg-cyan-400 text-black font-bold duration-300 disabled:bg-gray-300"
          >
            Add to Cart
          </button>

          <form
            action="/api/payment"
            method="POST"
            className="flex-1"
          >
            <input
              type="hidden"
              name="price"
              value={product.price}
            />

            <input
              type="hidden"
              name="title"
              value={product.title}
            />

            <input
              type="hidden"
              name="productId"
              value={product._id}
            />

            <button
              className="w-full h-14 rounded-xl bg-[#FF013C] hover:bg-red-600 text-white font-bold duration-300"
            >
              Buy Now
            </button>
          </form>

        </div>

      </div>

    </div>

  </div>
</div>
  );
};

export default ProductDetailsPage;
