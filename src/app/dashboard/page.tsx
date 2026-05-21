export default function Dashboard() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border p-4">
          <h2 className="font-semibold">Applied</h2>
          <p className="text-2xl">0</p>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="font-semibold">Interviews</h2>
          <p className="text-2xl">0</p>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="font-semibold">Offers</h2>
          <p className="text-2xl">0</p>
        </div>
      </div>
    </main>
  );
}