import { prisma } from "../lib/prisma";

export default async function ProgressPage() {
  const courses = await prisma.course.findMany();

  const averageProgress =
    courses.length > 0
      ? Math.round(
          courses.reduce(
            (sum, course) => sum + course.progress,
            0
          ) / courses.length
        )
      : 0;

  const completedCourses = courses.filter(
    (course) => course.progress === 100
  ).length;

  const activeCourses = courses.filter(
    (course) => course.progress < 100
  ).length;

  return (
    <main className="ml-72 min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto px-8 py-8">

        {/* Header */}
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            Learning Progress
          </h1>

          <p className="text-slate-500 mt-2">
            Track your performance and course completion.
          </p>
        </section>
<br></br>
        {/* Stats Cards */}
        <section className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">
              Average Progress
            </p>

            <h2 className="text-5xl font-bold mt-3 text-indigo-600">
              {averageProgress}%
            </h2>
          </div>
<br></br>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">
              Completed Courses
            </p>

            <h2 className="text-5xl font-bold mt-3 text-green-600">
              {completedCourses}
            </h2>
          </div>
<br></br>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">
              Active Courses
            </p>

            <h2 className="text-5xl font-bold mt-3 text-orange-500">
              {activeCourses}
            </h2>
          </div>

        </section>
<br></br>
        {/* Course Progress List */}
        <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

          <h2 className="text-2xl font-semibold mb-6">
            Course Progress
          </h2>

          <div className="space-y-6">

            {courses.map((course) => (
              <div key={course.id}>

                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">
                    {course.title}
                  </h3>

                  <span className="text-sm font-semibold">
                    {course.progress}%
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    style={{
                      width: `${course.progress}%`,
                    }}
                  />

                </div>

              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}