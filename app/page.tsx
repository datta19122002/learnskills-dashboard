import { prisma } from "./lib/prisma";
import BentoCard from "./components/BentoCard";

export default async function Home() {
  const courses = await prisma.course.findMany();

  return (
    <main className="min-h-screen bg-slate-100 p-6 ml-72">
      <div className="grid grid-cols-12 gap-4">

        {/* Hero Tile */}
        <BentoCard
          delay={0}
          className="col-span-12 lg:col-span-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6"
        >
          <h1 className="text-3xl font-bold">
            Welcome back, Hi Datta 
          </h1>

          <p className="mt-2 text-indigo-100">
            Keep learning every day.
          </p>

          <div className="mt-6">
            <p className="text-sm">
              Learning Streak
            </p>

            <h2 className="text-4xl font-bold">
              12 Days 🔥
            </h2>
          </div>
        </BentoCard>

        {/* Activity Tile */}
        <BentoCard
          delay={0.1}
          className="col-span-12 lg:col-span-4 p-5"
        >
          <h2 className="font-semibold mb-4">
            Weekly Activity
          </h2>

          <div className="flex items-end gap-2 h-28">
            {[40, 80, 30, 90, 50, 70, 100].map((h, i) => (
              <div
                key={i}
                className="bg-indigo-500 rounded flex-1"
                style={{
                  height: `${h}%`,
                }}
              />
            ))}
          </div>

          <p className="text-sm text-slate-500 mt-4">
            18 learning sessions completed
          </p>
        </BentoCard>

        {/* Course Tiles */}
        {courses.map((course, index) => (
          <BentoCard
            key={course.id}
            delay={0.2 + index * 0.1}
            className="col-span-12 md:col-span-6 lg:col-span-4 p-5"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">
                {course.title}
              </h2>

              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                Active
              </span>
            </div>

            <p className="text-sm text-slate-500 mt-2">
              Continue where you left off
            </p>

            <div className="mt-5">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>

              <div className="w-full h-2 bg-slate-200 rounded-full">
                <div
                  className="h-2 bg-indigo-600 rounded-full"
                  style={{
                    width: `${course.progress}%`,
                  }}
                />
              </div>
            </div>

            <div className="mt-4 text-sm text-slate-500">
              {course.icon_name}
            </div>
          </BentoCard>
        ))}
      </div>
    </main>
  );
}