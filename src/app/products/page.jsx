import { Button, Input } from '@heroui/react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const Products = async ({searchParams}) => {
  let products = [];

  const searchQuery = await searchParams;
  const searchText = searchQuery.search || ""

  try {
    const res = await fetch(`${SERVER_URL}/products?search=${searchText}`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch products');

    products = await res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            Failed to load products
          </h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 mt-25">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h1>
            <p className="text-lg text-gray-600">
              Personalized programs, certified coaches,
              and a supportive community focused on helping you perform at your highest level.
            </p>
            <div className="mt-2 text-sm text-gray-500">
              {products.length} products available
            </div>
          </div>

      <div className='mb-10 flex justify-center'>
            <form className='flex gap-2 items-center' action={'/products'}>
            <Input name='search' placeholder='Search products' className={"bg-amber-200"}/>
            <Button type='submit' className={"glitch-btn rounded-none"}><Search/> Search</Button>
          </form>
      </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5">
            {products.map((product) => (
              <div
                key={product._id}
                className=" rounded-lg shadow-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative h-48 w-full">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-200">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4 flex-1 flex flex-col">
                  <h2 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">
                        ${product.price}
                      </span>
                      <div className={`text-xs ${product.quantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {product.quantity > 0 ? `${product.quantity} in stock` : 'Out of stock'}
                      </div>
                    </div>
                    <Link
                      href={`/products/${product._id}`}
                      className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-400 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>

                 
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {products.length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                No products found
              </h2>
              <p className="text-gray-500">
                Check back later for new arrivals!
              </p>
            </div>
          )}
        </div>
      </div>
  );
};

export default Products;