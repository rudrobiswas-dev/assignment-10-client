"use client";

export default function ApplyTrainerPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">

      <div className="card bg-base-200 shadow-xl">

        <div className="card-body">

          <h2 className="card-title text-3xl mb-6">
            Apply as Trainer
          </h2>

          <form className="space-y-5">

            <div>
              <label className="label">
                <span className="label-text">
                  Experience (Years)
                </span>
              </label>

              <input
                type="number"
                placeholder="Enter your experience"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">
                  Specialty
                </span>
              </label>

              <select className="select select-bordered w-full">
                <option>Yoga</option>
                <option>Weights</option>
                <option>Cardio</option>
                <option>CrossFit</option>
                <option>Bodybuilding</option>
                <option>Strength Training</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text">
                  About Yourself
                </span>
              </label>

              <textarea
                rows={5}
                className="textarea textarea-bordered w-full"
                placeholder="Tell us about your fitness experience..."
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Apply as Trainer
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}