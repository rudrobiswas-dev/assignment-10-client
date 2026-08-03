"use client";

import { useState } from "react";
import { Search, Dumbbell, Trash2, Mail, Users } from "lucide-react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const initialTrainers = [
  {
    _id: "1",
    name: "Sarah Johnson",
    email: "sarah@gmail.com",
    specialty: "Yoga",
    experience: "5 Years",
    totalClasses: 18,
    totalMembers: 120,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    _id: "2",
    name: "Michael Lee",
    email: "michael@gmail.com",
    specialty: "Strength Training",
    experience: "3 Years",
    totalClasses: 12,
    totalMembers: 80,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    _id: "3",
    name: "Emma Wilson",
    email: "emma@gmail.com",
    specialty: "Cardio",
    experience: "4 Years",
    totalClasses: 15,
    totalMembers: 97,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    _id: "4",
    name: "David Smith",
    email: "david@gmail.com",
    specialty: "CrossFit",
    experience: "6 Years",
    totalClasses: 21,
    totalMembers: 156,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=14",
  },
];

export default function ManageTrainersPage() {
  const [trainers, setTrainers] = useState(initialTrainers);
  const [search, setSearch] = useState("");

  const filtered = trainers.filter(
    (trainer) =>
      trainer.name.toLowerCase().includes(search.toLowerCase()) ||
      trainer.email.toLowerCase().includes(search.toLowerCase()) ||
      trainer.specialty.toLowerCase().includes(search.toLowerCase())
  );

  const handleDemote = (id) => {
    Swal.fire({
      title: "Remove Trainer Role?",
      text: "This trainer will become a normal user.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, Demote",
    }).then((result) => {
      if (result.isConfirmed) {
        setTrainers((prev) => prev.filter((item) => item._id !== id));

        toast.success("Trainer role removed.");
      }
    });
  };

  return (
    <div className="min-h-screen bg-base-100 p-6">

      <div className="flex flex-col md:flex-row justify-between gap-5 mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Manage Trainers
          </h1>

          <p className="text-gray-500">
            View all active trainers and manage their roles.
          </p>
        </div>

        <label className="input input-bordered flex items-center gap-2 md:w-80">

          <Search size={18} />

          <input
            type="text"
            className="grow"
            placeholder="Search trainer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </label>

      </div>

      <div className="overflow-x-auto rounded-xl bg-base-200 shadow-lg">

        <table className="table">

          <thead>
            <tr>
              <th>Trainer</th>
              <th>Specialty</th>
              <th>Experience</th>
              <th>Classes</th>
              <th>Members</th>
              <th>Status</th>
              <th className="text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>

            {filtered.map((trainer) => (

              <tr key={trainer._id}>

                <td>

                  <div className="flex items-center gap-3">

                    <div className="avatar">

                      <div className="w-12 rounded-full">

                        <img
                          src={trainer.image}
                          alt={trainer.name}
                        />

                      </div>

                    </div>

                    <div>

                      <h2 className="font-semibold">
                        {trainer.name}
                      </h2>

                      <div className="flex items-center gap-1 text-sm text-gray-500">

                        <Mail size={14} />

                        {trainer.email}

                      </div>

                    </div>

                  </div>

                </td>

                <td>

                  <div className="badge badge-primary">
                    {trainer.specialty}
                  </div>

                </td>

                <td>{trainer.experience}</td>

                <td>

                  <div className="flex items-center gap-2">

                    <Dumbbell size={16} />

                    {trainer.totalClasses}

                  </div>

                </td>

                <td>

                  <div className="flex items-center gap-2">

                    <Users size={16} />

                    {trainer.totalMembers}

                  </div>

                </td>

                <td>

                  <div className="badge badge-success">
                    {trainer.status}
                  </div>

                </td>

                <td>

                  <div className="flex justify-center">

                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => handleDemote(trainer._id)}
                    >
                      <Trash2 size={16} />
                      Demote to User
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="stats shadow w-full mt-8 bg-base-200">

        <div className="stat">

          <div className="stat-title">
            Total Trainers
          </div>

          <div className="stat-value text-primary">
            {trainers.length}
          </div>

        </div>

        <div className="stat">

          <div className="stat-title">
            Total Classes
          </div>

          <div className="stat-value text-secondary">

            {trainers.reduce(
              (sum, trainer) => sum + trainer.totalClasses,
              0
            )}

          </div>

        </div>

        <div className="stat">

          <div className="stat-title">
            Total Members
          </div>

          <div className="stat-value text-accent">

            {trainers.reduce(
              (sum, trainer) => sum + trainer.totalMembers,
              0
            )}

          </div>

        </div>

      </div>

    </div>
  );
}