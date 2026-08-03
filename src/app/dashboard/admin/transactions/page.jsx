"use client";

import { useMemo, useState } from "react";
import {
  CreditCard,
  Search,
  DollarSign,
  Receipt,
  CalendarDays,
} from "lucide-react";

const transactionsData = [
  {
    _id: "1",
    email: "rudro@gmail.com",
    amount: 35,
    className: "HIIT Strength",
    transactionId: "pi_3NdA91A28FKS2",
    date: "2026-08-03",
    status: "Success",
  },
  {
    _id: "2",
    email: "hasan@gmail.com",
    amount: 20,
    className: "Cardio Blast",
    transactionId: "pi_3NdA91AKF913",
    date: "2026-08-02",
    status: "Success",
  },
  {
    _id: "3",
    email: "emma@gmail.com",
    amount: 50,
    className: "Muscle Building",
    transactionId: "pi_3NdA91MMX611",
    date: "2026-08-01",
    status: "Success",
  },
  {
    _id: "4",
    email: "john@gmail.com",
    amount: 25,
    className: "Yoga Flex",
    transactionId: "pi_3NdA91A2X913",
    date: "2026-07-31",
    status: "Refunded",
  },
];

export default function TransactionsPage() {
  const [search, setSearch] = useState("");

  const filteredTransactions = useMemo(() => {
    return transactionsData.filter(
      (item) =>
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.transactionId.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalRevenue = filteredTransactions
    .filter((item) => item.status === "Success")
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="min-h-screen bg-base-100 p-6">

      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Transactions
          </h1>

          <p className="text-gray-500">
            Stripe payment history across the platform.
          </p>
        </div>

        <label className="input input-bordered flex items-center gap-2 lg:w-80">

          <Search size={18} />

          <input
            className="grow"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </label>

      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-3 mb-8">

        <div className="stat bg-base-200 rounded-xl shadow">

          <div className="stat-figure text-primary">
            <DollarSign />
          </div>

          <div className="stat-title">
            Total Revenue
          </div>

          <div className="stat-value text-primary">
            ${totalRevenue}
          </div>

        </div>

        <div className="stat bg-base-200 rounded-xl shadow">

          <div className="stat-figure text-secondary">
            <Receipt />
          </div>

          <div className="stat-title">
            Transactions
          </div>

          <div className="stat-value text-secondary">
            {filteredTransactions.length}
          </div>

        </div>

        <div className="stat bg-base-200 rounded-xl shadow">

          <div className="stat-figure text-success">
            <CreditCard />
          </div>

          <div className="stat-title">
            Successful
          </div>

          <div className="stat-value text-success">
            {
              filteredTransactions.filter(
                (item) => item.status === "Success"
              ).length
            }
          </div>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-xl bg-base-200 shadow-lg">

        <table className="table">

          <thead>

            <tr>
              <th>User Email</th>
              <th>Class</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {filteredTransactions.map((item) => (

              <tr key={item._id}>

                <td>{item.email}</td>

                <td>{item.className}</td>

                <td>

                  <div className="flex items-center gap-1">

                    <DollarSign size={15} />

                    {item.amount}

                  </div>

                </td>

                <td>

                  <div className="flex items-center gap-2">

                    <CalendarDays size={16} />

                    {item.date}

                  </div>

                </td>

                <td>

                  <code className="text-xs bg-base-300 px-2 py-1 rounded">
                    {item.transactionId}
                  </code>

                </td>

                <td>

                  <span
                    className={`badge ${
                      item.status === "Success"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}