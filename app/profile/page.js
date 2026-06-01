export default function ProfilePage() {
  return (
    <main className="ml-72 p-6 bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Profile
      </h1>

      <div className="bg-white rounded-2xl p-6 shadow">
        <h2 className="font-semibold text-xl">
          Datta Ankushrao
        </h2>

        <p className="text-slate-500 mt-2">
          Frontend Intern
        </p>

        <p className="mt-4">
          Learning Streak: 12 Days 🔥
        </p>
      </div>
    </main>
  );
}