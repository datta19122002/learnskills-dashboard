export default function Loading() {
  return (
    <main className="ml-72 p-6 bg-slate-100 min-h-screen">

      <div className="grid grid-cols-12 gap-4">

        <div className="col-span-12 lg:col-span-8 h-48 bg-slate-200 rounded-3xl animate-pulse" />

        <div className="col-span-12 lg:col-span-4 h-48 bg-slate-200 rounded-3xl animate-pulse" />

        {[1,2,3,4,5,6].map((item) => (
          <div
            key={item}
            className="
              col-span-12
              md:col-span-6
              lg:col-span-4
              h-56
              bg-slate-200
              rounded-3xl
              animate-pulse
            "
          />
        ))}
      </div>
    </main>
  );
}