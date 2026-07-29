import Link from "next/link";


import { AddProductModal } from "@/components/dashboard/seller/AddProductModal";
import {
  Users,
  Dumbbell,
  Star,
  DollarSign,
  Calendar,
  Plus,
  Clock,
} from "lucide-react";

const stats = [
  {
    title: "Total Trainers",
    value: "12",
    icon: Dumbbell,
    color: "bg-cyan-500",
  },
  {
    title: "Members Assigned",
    value: "248",
    icon: Users,
    color: "bg-red-500",
  },
  {
    title: "Reviews",
    value: "4.9 ★",
    icon: Star,
    color: "bg-yellow-500",
  },
  {
    title: "Earnings",
    value: "$2,450",
    icon: DollarSign,
    color: "bg-green-500",
  },
];

const classes = [
  {
    name: "HIIT Strength Training",
    status: "Active",
    price: "$35",
  },
  {
    name: "Muscle Building",
    status: "Active",
    price: "$50",
  },
  {
    name: "Yoga Flex",
    status: "Pending",
    price: "$25",
  },
  {
    name: "Cardio Blast",
    status: "Active",
    price: "$20",
  },
];

const members = [
  {
    name: "Sarah Johnson",
    membership: "Premium",
    status: "Active",
  },
  {
    name: "Michael Lee",
    membership: "Gold",
    status: "Active",
  },
  {
    name: "Emma Wilson",
    membership: "Silver",
    status: "Pending",
  },
  {
    name: "David Smith",
    membership: "Premium",
    status: "Active",
  },
];

const buyerOverviewPage = () => {
  return (
    <div className="min-h-screen bg-base-100 p-6 space-y-8">

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="card bg-base-200 shadow-lg border border-base-300"
            >
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500">{item.title}</p>
                    <h2 className="text-3xl font-bold mt-2">
                      {item.value}
                    </h2>
                  </div>

                  <div
                    className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center text-white`}
                  >
                    <Icon size={28} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Profile */}
      <div className="card bg-base-200 shadow-lg border border-base-300">
        <div className="card-body">

          <div className="flex flex-col lg:flex-row justify-between gap-8">

            <div className="flex gap-5 items-center">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-cyan-400 ring-offset-base-100 ring-offset-2">
                  <img src="https://i.pravatar.cc/200?img=12" alt="" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  John Carter
                </h2>

                <p className="text-cyan-500 font-semibold">
                  Certified Fitness Trainer
                </p>

                <p className="text-gray-500">
                  john@example.com 
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <AddProductModal />

              <button className="btn btn-outline">
                <Dumbbell size={18} />
                My Classes
              </button>

              <button className="btn btn-outline">
                <Dumbbell size={18} />
                My Post
              </button>

              <button className="btn btn-outline">
                <Dumbbell size={18} />
                add Forum Post
              </button>
            </div>

          </div>

        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Recent Classes */}

        <div className="card bg-base-200 shadow-lg border border-base-300">
          <div className="card-body">

            <h2 className="card-title text-2xl mb-4">
              Recent Classes
            </h2>

            <div className="overflow-x-auto">
              <table className="table">

                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Status</th>
                    <th>Price</th>
                  </tr>
                </thead>

                <tbody>

                  {classes.map((item, index) => (
                    <tr key={index}>
                      <td className="font-medium flex items-center gap-2">
                        <Clock size={18} className="text-cyan-500" />
                        {item.name}
                      </td>

                      <td>
                        <div
                          className={`badge ${
                            item.status === "Active"
                              ? "badge-success"
                              : "badge-warning"
                          }`}
                        >
                          {item.status}
                        </div>
                      </td>

                      <td>{item.price}</td>
                    </tr>
                  ))}

                </tbody>

              </table>
            </div>

          </div>
        </div>

        {/* Members */}

        <div className="card bg-base-200 shadow-lg border border-base-300">
          <div className="card-body">

            <h2 className="card-title text-2xl mb-4">
              Recent Members
            </h2>

            <div className="space-y-4">

              {members.map((member, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-base-100 rounded-xl p-4"
                >
                  <div className="flex gap-4 items-center">

                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img
                          src={`https://i.pravatar.cc/150?img=${index + 20}`}
                          alt=""
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {member.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {member.membership}
                      </p>
                    </div>

                  </div>

                  <div
                    className={`badge ${
                      member.status === "Active"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {member.status}
                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default buyerOverviewPage;