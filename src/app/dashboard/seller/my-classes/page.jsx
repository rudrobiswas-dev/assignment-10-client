"use client";

const classes = [
  {
    id: 1,
    className: "HIIT Training",
    category: "Strength",
    price: 35,
    students: 25,
    status: "Approved",
  },
  {
    id: 2,
    className: "Yoga Flow",
    category: "Yoga",
    price: 20,
    students: 15,
    status: "Pending",
  },
];

const MyClassesPage = () => {
  return (
    <div className="p-6">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">

          <h2 className="text-3xl font-bold mb-5">
            My Classes
          </h2>

          <div className="overflow-x-auto">

            <table className="table">

              <thead>
                <tr>
                  <th>Class</th>
                  <th>Category</th>
                  <th>Students</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {classes.map((item) => (
                  <tr key={item.id}>
                    <td>{item.className}</td>
                    <td>{item.category}</td>
                    <td>{item.students}</td>
                    <td>${item.price}</td>

                    <td>
                      <span className="badge badge-info">
                        {item.status}
                      </span>
                    </td>

                    <td className="space-x-2">
                      <button className="btn btn-sm btn-primary">
                        Update
                      </button>

                      <button className="btn btn-sm btn-error">
                        Delete
                      </button>

                      <button className="btn btn-sm btn-success">
                        View Students
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
};

export default MyClassesPage;