"use client";

import Link from "next/link";

import { authClient } from "@/lib/auth-client";
import {
  Users,
  Dumbbell,
  Calendar,
  DollarSign,
  ShieldCheck,
  UserPlus,
  ClipboardList,
  Clock,
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "1,248",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Total Trainers",
    value: "84",
    icon: Dumbbell,
    color: "bg-green-500",
  },
  {
    title: "Total Classes",
    value: "137",
    icon: Calendar,
    color: "bg-purple-500",
  },
  {
    title: "Booked Classes",
    value: "5,241",
    icon: DollarSign,
    color: "bg-orange-500",
  },
];

const recentUsers = [
  {
    name: "Sarah Johnson",
    email: "sarah@gmail.com",
    role: "User",
    joined: "Today",
  },
  {
    name: "Michael Lee",
    email: "michael@gmail.com",
    role: "Trainer",
    joined: "Yesterday",
  },
  {
    name: "Emma Wilson",
    email: "emma@gmail.com",
    role: "User",
    joined: "2 Days Ago",
  },
  {
    name: "David Smith",
    email: "david@gmail.com",
    role: "User",
    joined: "3 Days Ago",
  },
];

const trainerApplications = [
  {
    name: "Hasan",
    specialty: "Strength Training",
    status: "Pending",
  },
  {
    name: "Karim",
    specialty: "Yoga",
    status: "Pending",
  },
  {
    name: "Rahim",
    specialty: "CrossFit",
    status: "Pending",
  },
  {
    name: "John",
    specialty: "Cardio",
    status: "Pending",
  },
];

export default function AdminOverviewPage() {
  const { data: session } = authClient.useSession();

  const user = session?.user;

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
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={user?.image || "https://i.pravatar.cc/200"}
                    alt={user?.name}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  {user?.name}
                </h2>

                <p className="text-gray-500">
                  {user?.email}
                </p>

                <div className="badge badge-error badge-lg mt-3 gap-2">
                  <ShieldCheck size={16} />
                  ADMIN
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
                <Link href="/dashboard/admin/manage-users">
                    <button className="btn btn-primary">
                        <Users size={18} />
                        Manage Users
                    </button>
                </Link>
                <Link href="/dashboard/admin/manage-classes">
                <button className="btn btn-secondary">
                    <ClipboardList size={18} />
                    Manage Classes
                </button>
                </Link>
                <Link href="/dashboard/admin/applied-trainers">
                <button className="btn btn-accent">
                    <UserPlus size={18} />
                    Applied Trainers
                </button>
                </Link>
                <Link href="/dashboard/admin/transactions">
                <button className="btn btn-outline">
                    <DollarSign size={18} />
                    Transactions
                </button>
                </Link>
            </div>

          </div>

        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Recent Users */}

        <div className="card bg-base-200 shadow-lg border border-base-300">
          <div className="card-body">

            <h2 className="card-title text-2xl mb-4">
              Recent User Registrations
            </h2>

            <div className="overflow-x-auto">

              <table className="table">

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Joined</th>
                  </tr>
                </thead>

                <tbody>

                  {recentUsers.map((item, index) => (
                    <tr key={index}>
                      <td className="flex items-center gap-2">
                        <Clock size={18} className="text-primary" />
                        {item.name}
                      </td>

                      <td>
                        <div className="badge badge-info">
                          {item.role}
                        </div>
                      </td>

                      <td>{item.joined}</td>
                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>
        </div>

        {/* Pending Trainers */}

        <div className="card bg-base-200 shadow-lg border border-base-300">
          <div className="card-body">

            <h2 className="card-title text-2xl mb-4">
              Pending Trainer Applications
            </h2>

            <div className="space-y-4">

              {trainerApplications.map((item, index) => (

                <div
                  key={index}
                  className="flex justify-between items-center bg-base-100 rounded-xl p-4"
                >

                  <div>

                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.specialty}
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <div className="badge badge-warning">
                      {item.status}
                    </div>

                    <button className="btn btn-primary btn-sm">
                      Details
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}