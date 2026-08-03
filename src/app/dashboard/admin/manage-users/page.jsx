"use client";

import { useState } from "react";
import { Shield, ShieldCheck, Search, UserX, UserCheck } from "lucide-react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const initialUsers = [
  {
    _id: "1",
    name: "Rudro Biswas",
    email: "rudro@gmail.com",
    role: "admin",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    _id: "2",
    name: "Sarah Johnson",
    email: "sarah@gmail.com",
    role: "user",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    _id: "3",
    name: "Michael Lee",
    email: "michael@gmail.com",
    role: "trainer",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    _id: "4",
    name: "Emma Wilson",
    email: "emma@gmail.com",
    role: "user",
    status: "Blocked",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    _id: "5",
    name: "David Smith",
    email: "david@gmail.com",
    role: "user",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

export default function ManageUsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleBlock = (id) => {
    Swal.fire({
      title: "Block User?",
      text: "The user won't be able to make bookings, apply as trainer or post comments.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Block",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsers((prev) =>
          prev.map((user) =>
            user._id === id ? { ...user, status: "Blocked" } : user
          )
        );

        toast.success("User blocked successfully");
      }
    });
  };

  const handleUnblock = (id) => {
    Swal.fire({
      title: "Unblock User?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsers((prev) =>
          prev.map((user) =>
            user._id === id ? { ...user, status: "Active" } : user
          )
        );

        toast.success("User unblocked");
      }
    });
  };

  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Make Admin?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsers((prev) =>
          prev.map((user) =>
            user._id === id ? { ...user, role: "admin" } : user
          )
        );

        toast.success("Role updated");
      }
    });
  };

  return (
    <div className="p-6 min-h-screen bg-base-100">

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Manage Users
          </h1>

          <p className="text-gray-500">
            View, Block and Promote Users
          </p>
        </div>

        <label className="input input-bordered flex items-center gap-2 w-full md:w-80">
          <Search size={18} />

          <input
            type="text"
            className="grow"
            placeholder="Search user..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

      </div>

      <div className="overflow-x-auto rounded-xl border border-base-300 bg-base-200 shadow-lg">

        <table className="table">

          <thead>

            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th className="text-center">
                Actions
              </th>
            </tr>

          </thead>

          <tbody>

            {filteredUsers.map((user) => (
              <tr key={user._id}>

                <td>

                  <div className="flex items-center gap-3">

                    <div className="avatar">

                      <div className="w-12 rounded-full">

                        <img
                          src={user.image}
                          alt={user.name}
                        />

                      </div>

                    </div>

                    <div>

                      <h2 className="font-semibold">
                        {user.name}
                      </h2>

                    </div>

                  </div>

                </td>

                <td>{user.email}</td>

                <td>

                  {user.role === "admin" && (
                    <span className="badge badge-error gap-1">
                      <ShieldCheck size={14} />
                      Admin
                    </span>
                  )}

                  {user.role === "trainer" && (
                    <span className="badge badge-success">
                      Trainer
                    </span>
                  )}

                  {user.role === "user" && (
                    <span className="badge badge-info">
                      User
                    </span>
                  )}

                </td>

                <td>

                  {user.status === "Active" ? (
                    <span className="badge badge-success">
                      Active
                    </span>
                  ) : (
                    <span className="badge badge-warning">
                      Blocked
                    </span>
                  )}

                </td>

                <td>

                  <div className="flex justify-center gap-2 flex-wrap">

                    {user.role !== "admin" && (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-primary btn-sm"
                      >
                        <Shield size={16} />
                        Make Admin
                      </button>
                    )}

                    {user.status === "Active" ? (
                      <button
                        onClick={() => handleBlock(user._id)}
                        className="btn btn-error btn-sm"
                      >
                        <UserX size={16} />
                        Block
                      </button>
                    ) : (
                      <button
                        onClick={() => handleUnblock(user._id)}
                        className="btn btn-success btn-sm"
                      >
                        <UserCheck size={16} />
                        Unblock
                      </button>
                    )}

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}