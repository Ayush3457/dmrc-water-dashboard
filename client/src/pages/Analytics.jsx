import { useEffect, useState } from "react";
import axios from "axios";

import {
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Analytics() {
  const [data, setData] = useState([]);
  const [statusData, setStatusData] = useState([]);
  const [rwhData, setRwhData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/api/analytics/line-distribution`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/analytics/borewell-status`)
      .then((res) => setStatusData(res.data));
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/analytics/rwh-distribution`)
      .then((res) => setRwhData(res.data))
      .catch((err) => console.log(err));
  },
    []);


  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Analytics
      </h1>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h3>Total Stations</h3>
          <p className="text-3xl font-bold">
            {data.reduce(
              (sum, item) => sum + item.count,
              0
            )}
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3>Working Borewells</h3>
          <p className="text-3xl font-bold">
            {
              statusData.find(
                item => item._id === "Working"
              )?.count || 0
            }
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3>Maintenance</h3>
          <p className="text-3xl font-bold">
            {
              statusData.find(
                item => item._id === "Maintenance"
              )?.count || 0
            }
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">
          Stations by Metro Line
        </h2>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded shadow mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Borewell Status Distribution
        </h2>

        <PieChart width={500} height={300}>
          <Pie
            data={statusData}
            dataKey="count"
            nameKey="_id"
            outerRadius={100}
            label
          >
            {statusData.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  entry._id === "Working"
                    ? "#22c55e"
                    : "#facc15"
                }
              />
            ))}
          </Pie>

          <Legend />
        </PieChart>
      </div>

      <div className="bg-white p-4 rounded shadow mt-8">
        <h2 className="text-xl font-semibold mb-4">
          RWH Structure Distribution
        </h2>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={rwhData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}