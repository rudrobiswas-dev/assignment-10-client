import { AddProductModal } from "@/components/dashboard/seller/AddProductModal";
import { ProductTable } from "./productTable";
import { getTokenServer } from "@/lib/getTokenServer";
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;


const SellerProductsPage = async ({searchParams}) => {

    const searchQuery = await searchParams;

    const token = await getTokenServer()
    const page = searchQuery.page || 1
    const limit = searchQuery.limit || 10

    const res = await fetch(`${SERVER_URL}/seller/products?page=${page}&limit=${limit}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const products = await res.json()

   


    
    return (
        <div className="space-y-6">
  {/* Header */}
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-3xl font-bold">Our Trainers</h1>
      <p className="text-gray-500">
        Manage certified fitness trainers and their profiles.
      </p>
    </div>

    <AddProductModal />
  </div>

  {/* Stats */}
  <div className="bg-base-100 rounded-xl shadow p-5 border">
    <p className="text-sm text-gray-500">Total Trainers</p>
    <h2 className="text-4xl font-bold text-primary">
      {products.data.length}
    </h2>
  </div>

  {/* Trainer Table */}
  <div className="bg-base-100 rounded-xl shadow border overflow-hidden">
    <ProductTable products={products} />
  </div>
</div>
    );
};

export default SellerProductsPage;