import { prisma } from "../lib/prisma";

export default async function CoursesPage() {
  const courses = await prisma.course.findMany();

  return (
    <main className="ml-72 min-h-screen bg-[#f8fafc]">
      <div className="px-8 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Courses
            </h1>

            <p className="mt-2 text-slate-500">
              Explore your learning library and continue your journey.
            </p>
          </div>

          <button
            className="
              px-5
              py-3
              rounded-xl
              bg-slate-900
              text-white
              font-medium
              hover:bg-slate-800
              transition
            "
          >
            Browse Courses
          </button>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {courses.map((course, index) => (
            <div
              key={course.id}
              className="
                group
                bg-white
                rounded-3xl
                p-6
                border
                border-slate-200
                hover:border-indigo-300
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              {/* Number Badge */}
              <div className="flex items-center justify-between">
                <div
                  className="
                    h-12
                    w-12
                    rounded-2xl
                    bg-indigo-50
                    text-indigo-600
                    font-bold
                    flex
                    items-center
                    justify-center
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span className="text-2xl">
                  🚀
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-8 text-2xl font-bold text-slate-900 leading-tight">
                {course.title}
              </h2>

              {/* Description */}
              <p className="mt-3 text-slate-500">
                Interactive learning module with lessons, exercises, and practical examples.
              </p>

              {/* Divider */}
              <div className="my-6 border-t border-slate-100" />

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">
                  Ready to learn
                </span>

                <button
                  className="
                    rounded-xl
                    px-4
                    py-2
                    bg-indigo-600
                    text-white
                    font-medium
                    hover:bg-indigo-700
                    transition
                  "
                >
                  Open →
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}