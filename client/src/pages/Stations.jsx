import { useEffect, useState } from "react";
import axios from "axios";


export default function Stations() {
  const [stations, setStations] = useState([]);
  const [search, setSearch] = useState("");
  const [lineFilter, setLineFilter] = useState("All");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/stations`)
      .then((res) => setStations(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredStations = stations.filter((station) => {
    const matchesSearch = station.stationName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLine =
      lineFilter === "All" ||
      station.line === lineFilter;

    return matchesSearch && matchesLine;
  });
  

  if (stations.length === 0) {
  return (
    <div className="text-xl">
      Loading Stations...
    </div>
  );
}

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Stations
      </h1>
      <a
        href={`${import.meta.env.VITE_API_URL}/api/export/stations`}
        className=" bg-blue-500
       text-white
       px-4
       py-2
       rounded
       inline-block
       mb-4
  "
      >
        Export CSV
      </a>
      <input
        type="text"
        placeholder="Search Station..."
        className="border p-2 mb-4 w-full rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="border p-2 mb-4 ml-4 rounded"
        value={lineFilter}
        onChange={(e) => setLineFilter(e.target.value)}
      >
        <option value="All">All Lines</option>
        <option value="Blue">Blue</option>
        <option value="Red">Red</option>
        <option value="Yellow">Yellow</option>
        <option value="Magenta">Magenta</option>
        <option value="Pink">Pink</option>
      </select>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Station Name</th>
            <th className="p-4 text-left">Line</th>
          </tr>
        </thead>

        <tbody>
          {filteredStations.map((station) => (
            <tr key={station._id} className="border-b">
              <td className="p-4">
                {station.stationName}
              </td>

              <td className="p-4">
                {station.line}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}