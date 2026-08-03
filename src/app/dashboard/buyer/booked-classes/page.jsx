"use client";

import { Eye } from "lucide-react";

const bookedClasses = [
  {
    id: 1,
    className: "HIIT Strength Training",
    trainer: "John Smith",
    schedule: "Monday • 8:00 AM",
  },
  {
    id: 2,
    className: "Yoga Flow",
    trainer: "Emma Wilson",
    schedule: "Tuesday • 6:30 PM",
  },
  {
    id: 3,
    className: "Cardio Blast",
    trainer: "David Brown",
    schedule: "Friday • 5:00 PM",
  },
];

export default function BookedClassesPage() {
  return (
    <div className="p-6">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl mb-6">
            My Booked Classes
          </h2>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Class Name</th>
                  <th>Trainer</th>
                  <th>Schedule</th>
                  <th>Details</th>
                </tr>
              </thead>

              <tbody>
                {bookedClasses.map((item) => (
                  <tr key={item.id}>
                    <td>{item.className}</td>

                    <td>{item.trainer}</td>

                    <td>{item.schedule}</td>

                    <td>
                      <button className="btn btn-primary btn-sm">
                        <Eye size={16} />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}