"use client";

import { useState } from "react";
import { Eye, CheckCircle, XCircle, Search } from "lucide-react";
import toast from "react-hot-toast";

const initialApplications = [
  {
    _id: "1",
    name: "Sarah Johnson",
    email: "sarah@gmail.com",
    specialty: "Yoga Trainer",
    experience: "5 Years",
    availableTime: "8 AM - 2 PM",
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    _id: "2",
    name: "Michael Lee",
    email: "michael@gmail.com",
    specialty: "Strength Training",
    experience: "3 Years",
    availableTime: "10 AM - 6 PM",
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    _id: "3",
    name: "Emma Wilson",
    email: "emma@gmail.com",
    specialty: "Cardio",
    experience: "4 Years",
    availableTime: "7 AM - 1 PM",
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=13",
  },
];

export default function AppliedTrainersPage() {
  const [applications, setApplications] = useState(initialApplications);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [search, setSearch] = useState("");

  const filtered = applications.filter(
    (trainer) =>
      trainer.name.toLowerCase().includes(search.toLowerCase()) ||
      trainer.email.toLowerCase().includes(search.toLowerCase())
  );

  const closeModal = () => {
    setSelectedTrainer(null);
    setFeedback("");
  };

  const handleApprove = () => {
    setApplications((prev) =>
      prev.map((item) =>
        item._id === selectedTrainer._id
          ? { ...item, status: "Approved" }
          : item
      )
    );

    toast.success("Trainer Approved");
    closeModal();
  };

  const handleReject = () => {
    setApplications((prev) =>
      prev.map((item) =>
        item._id === selectedTrainer._id
          ? {
              ...item,
              status: "Rejected",
              feedback,
            }
          : item
      )
    );

    toast.success("Trainer Rejected");
    closeModal();
  };

  return (
    <div className="min-h-screen bg-base-100 p-6">

      <div className="flex flex-col md:flex-row justify-between gap-5 mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Applied Trainers
          </h1>

          <p className="text-gray-500">
            Review all trainer applications.
          </p>
        </div>

        <label className="input input-bordered flex items-center gap-2 md:w-80">

          <Search size={18} />

          <input
            className="grow"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </label>

      </div>

      <div className="overflow-x-auto bg-base-200 rounded-xl shadow-lg">

        <table className="table">

          <thead>
            <tr>
              <th>Trainer</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>

            {filtered.map((trainer) => (

              <tr key={trainer._id}>

                <td>

                  <div className="flex items-center gap-3">

                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={trainer.image} alt="" />
                      </div>
                    </div>

                    <div>
                      <h2 className="font-semibold">
                        {trainer.name}
                      </h2>
                    </div>

                  </div>

                </td>

                <td>{trainer.email}</td>

                <td>{trainer.specialty}</td>

                <td>

                  <span
                    className={`badge ${
                      trainer.status === "Pending"
                        ? "badge-warning"
                        : trainer.status === "Approved"
                        ? "badge-success"
                        : "badge-error"
                    }`}
                  >
                    {trainer.status}
                  </span>

                </td>

                <td className="text-center">

                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setSelectedTrainer(trainer)}
                  >
                    <Eye size={16} />
                    Details
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {selectedTrainer && (

        <dialog className="modal modal-open">

          <div className="modal-box max-w-2xl">

            <h3 className="font-bold text-2xl mb-5">
              Trainer Details
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-5">

                <img
                  src={selectedTrainer.image}
                  className="w-24 h-24 rounded-full"
                  alt=""
                />

                <div>

                  <h2 className="text-xl font-bold">
                    {selectedTrainer.name}
                  </h2>

                  <p>{selectedTrainer.email}</p>

                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <div className="bg-base-200 rounded-lg p-4">

                  <h3 className="font-bold">
                    Experience
                  </h3>

                  <p>{selectedTrainer.experience}</p>

                </div>

                <div className="bg-base-200 rounded-lg p-4">

                  <h3 className="font-bold">
                    Specialty
                  </h3>

                  <p>{selectedTrainer.specialty}</p>

                </div>

                <div className="bg-base-200 rounded-lg p-4">

                  <h3 className="font-bold">
                    Available Time
                  </h3>

                  <p>{selectedTrainer.availableTime}</p>

                </div>

              </div>

              <textarea
                className="textarea textarea-bordered w-full"
                rows={5}
                placeholder="Write Feedback..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />

            </div>

            <div className="modal-action">

              <button
                onClick={handleApprove}
                className="btn btn-success"
              >
                <CheckCircle size={18} />
                Approve
              </button>

              <button
                onClick={handleReject}
                className="btn btn-error"
              >
                <XCircle size={18} />
                Reject
              </button>

              <button
                className="btn"
                onClick={closeModal}
              >
                Close
              </button>

            </div>

          </div>

        </dialog>

      )}

    </div>
  );
}