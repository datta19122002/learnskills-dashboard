export default function ActivityPage() {
  const activityData = [20, 80, 40, 90, 60, 100, 50];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <main className="ml-2 min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Activity Dashboard
          </h1>

          <p className="mt-2 text-slate-600">
            Monitor your learning activity, engagement, and performance.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="bg-emerald-300 md:grid-cols-3 gap-6 mb-10 text-blue-950">

          {/* Total Sessions */}
         
          {/* Weekly Goal */}
          <div className="bg-gradient-to-br from-emerald-700 to-green-900 rounded-3xl p-7 shadow-xl text-white">
            <p className="text-white/80 text-sm font-medium">
              Weekly Goal
            </p>

            <h2 className="text-5xl font-bold mt-3">
              85%
            </h2>

            <div className="mt-5 border-t border-white/20 pt-4">
              <span className="text-sm font-medium text-white">
                Goal Almost Achieved
              </span>
            </div>
          </div>

        </div>

        {/* Activity Chart */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 mb-10 pb-10">

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Weekly Activity
            </h2>

            <p className="text-black-500 mt-2">
              Activity recorded over the last 7 days.
            </p>
          </div>

          <div className="h-80 flex items-end gap-70 pt-4">

            {activityData.map((value, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center"
              >
                <div
                  className="
                    w-full
                    rounded-t-2xl
                    bg-gradient-to-t
                    from-indigo-700
                    to-indigo-500
                    hover:opacity-90
                    transition
                  "
                  style={{
                    height: `${value}%`,
                  }}
                />

                <span className="mt-3 text-sm font-medium text-slate-500">
                  {days[index]}
                </span>
              </div>
            ))}

          </div>
        </div>
        <br></br>
        {/* Recent Activity */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 ">

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Recent Activity
            </h2>

            <p className="text-slate-500 mt-2">
              Latest updates from your learning journey.
            </p>
          </div>
            <br></br>
          <div className="space-y-4">

            <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 hover:bg-slate-50 transition">
              <div>
                <h3 className="font-semibold text-slate-900">
                  Completed React Fundamentals
                </h3>

                <p className="text-sm text-slate-500">
                  Course progress updated successfully.
                </p>
              </div>

              <span className="text-sm text-slate-400">
                Today
              </span>
            </div>

            <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 hover:bg-slate-50 transition">
              <div>
                <h3 className="font-semibold text-slate-900">
                  Finished Assessment Quiz
                </h3>

                <p className="text-sm text-slate-500">
                  Quiz score saved to dashboard.
                </p>
              </div>

              <span className="text-sm text-slate-400">
                Yesterday
              </span>
            </div>

            <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 hover:bg-slate-50 transition">
              <div>
                <h3 className="font-semibold text-slate-900">
                  Started JavaScript Advanced Concepts
                </h3>

                <p className="text-sm text-slate-500">
                  New course added to learning path.
                </p>
              </div>

              <span className="text-sm text-slate-400">
                3 Days Ago
              </span>
            </div>

            <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 hover:bg-slate-50 transition">
              <div>
                <h3 className="font-semibold text-slate-900">
                  Weekly Learning Goal Updated
                </h3>

                <p className="text-sm text-slate-500">
                  Target increased to 85%.
                </p>
              </div>

              <span className="text-sm text-slate-400">
                Last Week
              </span>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}