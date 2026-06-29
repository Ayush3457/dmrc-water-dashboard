import { useEffect, useState } from "react";
import axios from "axios";

export default function Borewells() {
  const [borewells, setBorewells] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/borewells`)
      .then((res) => setBorewells(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredBorewells = borewells.filter((borewell) =>
    borewell.stationName.toLowerCase().includes(search.toLowerCase())
  );

  if (borewells.length === 0) {
  return (
    <div className="text-xl">
      Loading Borewells...
    </div>
  );
}

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Borewells
      </h1>
      <input
        type="text"
        placeholder="Search Station..."
        className="border p-2 mb-4 w-full rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Station</th>
            <th className="p-4 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredBorewells.map((borewell) => (
            <tr key={borewell._id} className="border-b">
              <td className="p-4">
                {borewell.stationName}
              </td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-white ${borewell.status === "Working"
                    ? "bg-green-500"
                    : "bg-yellow-500"
                    }`}
                >
                  {borewell.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}