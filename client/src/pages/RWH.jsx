import { useEffect, useState } from "react";
import axios from "axios";

export default function RWH() {
    const [rwhs, setRwhs] = useState([]);
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("All");

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/rwh`)
            .then((res) => setRwhs(res.data))
            .catch((err) => console.log(err));
    }, []);

    const filteredRwhs = rwhs.filter((rwh) => {
        const matchesSearch =
            rwh.stationName
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesType =
            typeFilter === "All" ||
            rwh.structureType === typeFilter;

        return matchesSearch &&
            matchesType;
    });


    if (rwhs.length === 0) {
        return (
            <div className="text-xl">
                Loading RWH Data...
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                RWH Structures
            </h1>

            <input
                type="text"
                placeholder="Search Station..."
                className="border p-2 mb-4 w-full rounded"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <select
                className="border p-2 mb-4 ml-4 rounded"
                value={typeFilter}
                onChange={(e) =>
                    setTypeFilter(e.target.value)
                }
            >
                <option value="All">
                    All Types
                </option>

                <option value="Recharge Pit">
                    Recharge Pit
                </option>

                <option value="Recharge Shaft">
                    Recharge Shaft
                </option>

                <option value="Percolation Pit">
                    Percolation Pit
                </option>
            </select>

            <table className="w-full bg-white shadow rounded-xl overflow-hidden">
                <thead>
                    <tr className="border-b">
                        <th className="p-4 text-left">
                            Station
                        </th>

                        <th className="p-4 text-left">
                            Structure Type
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {filteredRwhs.map((rwh) => (
                        <tr
                            key={rwh._id}
                            className="border-b"
                        >
                            <td className="p-4">
                                {rwh.stationName}
                            </td>

                            <td className="p-4">
                                {rwh.structureType}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}