"use client";

import { useState } from "react";
import {
  Search,
  CheckCircle,
  XCircle,
  Trash2,
  Calendar,
  DollarSign,
} from "lucide-react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const initialClasses = [
  {
    _id: "1",
    title: "HIIT Strength Training",
    trainer: "Sarah Johnson",
    price: 35,
    bookings: 24,
    status: "Pending",
  },
  {
    _id: "2",
    title: "Yoga Flex",
    trainer: "Michael Lee",
    price: 25,
    bookings: 18,
    status: "Approved",
  },
  {
    _id: "3",
    title: "Cardio Blast",
    trainer: "Emma Wilson",
    price: 20,
    bookings: 30,
    status: "Rejected",
  },
  {
    _id: "4",
    title: "Muscle Building",
    trainer: "David Smith",
    price: 50,
    bookings: 42,
    status: "Pending",
  },
];

export default function ManageClassesPage() {
  const [classes, setClasses] = useState(initialClasses);
  const [search, setSearch] = useState("");

  const filteredClasses = classes.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.trainer.toLowerCase().includes(search.toLowerCase())
  );

  const updateStatus = (id, status) => {
    setClasses((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, status } : item
      )
    );

    toast.success(`Class ${status}`);
  };

  const deleteClass = (id) => {
    Swal.fire({
      title: "Delete Class?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        setClasses((prev) => prev.filter((item) => item._id !== id));
        toast.success("Class deleted");
      }
    });
  };

  return (
    <div className="min-h-screen bg-base-100 p-6">

      <div className="flex flex-col md:flex-row justify-between gap-5 mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Manage Classes
          </h1>

          <p className="text-gray-500">
            Approve, reject or delete trainer classes.
          </p>
        </div>

        <label className="input input-bordered flex items-center gap-2 md:w-80">

          <Search size={18} />

          <input
            className="grow"
            placeholder="Search class..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </label>

      </div>

      <div className="overflow-x-auto rounded-xl bg-base-200 shadow-lg">

        <table className="table">

          <thead>

            <tr>
              <th>Class</th>
              <th>Trainer</th>
              <th>Price</th>
              <th>Bookings</th>
              <th>Status</th>
              <th className="text-center">
                Actions
              </th>
            </tr>

          </thead>

          <tbody>

            {filteredClasses.map((item) => (

              <tr key={item._id}>

                <td>

                  <div className="flex items-center gap-2">

                    <Calendar size={18} className="text-primary" />

                    <span className="font-semibold">
                      {item.title}
                    </span>

                  </div>

                </td>

                <td>{item.trainer}</td>

                <td>

                  <div className="flex items-center gap-1">

                    <DollarSign size={16} />

                    {item.price}

                  </div>

                </td>

                <td>{item.bookings}</td>

                <td>

                  <span
                    className={`badge ${
                      item.status === "Approved"
                        ? "badge-success"
                        : item.status === "Rejected"
                        ? "badge-error"
                        : "badge-warning"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td>

                  <div className="flex gap-2 justify-center flex-wrap">

                    <button
                      className="btn btn-success btn-sm"
                      disabled={item.status === "Approved"}
                      onClick={() =>
                        updateStatus(item._id, "Approved")
                      }
                    >
                      <CheckCircle size={16} />
                      Approve
                    </button>

                    <button
                      className="btn btn-warning btn-sm"
                      disabled={item.status === "Rejected"}
                      onClick={() =>
                        updateStatus(item._id, "Rejected")
                      }
                    >
                      <XCircle size={16} />
                      Reject
                    </button>

                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => deleteClass(item._id)}
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="stats shadow bg-base-200 w-full mt-8">

        <div className="stat">

          <div className="stat-title">
            Total Classes
          </div>

          <div className="stat-value text-primary">
            {classes.length}
          </div>

        </div>

        <div className="stat">

          <div className="stat-title">
            Approved
          </div>

          <div className="stat-value text-success">
            {
              classes.filter(
                (item) => item.status === "Approved"
              ).length
            }
          </div>

        </div>

        <div className="stat">

          <div className="stat-title">
            Pending
          </div>

          <div className="stat-value text-warning">
            {
              classes.filter(
                (item) => item.status === "Pending"
              ).length
            }
          </div>

        </div>

        <div className="stat">

          <div className="stat-title">
            Rejected
          </div>

          <div className="stat-value text-error">
            {
              classes.filter(
                (item) => item.status === "Rejected"
              ).length
            }
          </div>

        </div>

      </div>

    </div>
  );
}