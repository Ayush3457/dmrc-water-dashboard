import { useEffect, useState } from "react";
import axios from "axios";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const [data, setData] = useState({
    stations: 0,
    borewells: 0,
    rwhs: 0,
    working: 0,
    maintenance: 0,
  });

  const [insights, setInsights] = useState({
    topLine: "",
    maintenance: 0,
    rwhCount: 0,
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/dashboard`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/insights`)
      .then((res) => setInsights(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        DMRC Water Asset Management Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          title="Stations"
          value={data.stations}
        />

        <StatCard
          title="Borewells"
          value={data.borewells}
        />

        <StatCard
          title="RWH Structures"
          value={data.rwhs}
        />
        <StatCard
          title="Working Borewells"
          value={data.working}
        />

        <StatCard
          title="Maintenance"
          value={data.maintenance}
        />
      </div>
      <div className="bg-white p-6 rounded-xl shadow mt-8">
        <h2 className="text-xl font-bold mb-4">
          Insights
        </h2>

        <ul className="space-y-2">
          <li>
            • {insights.topLine} Line has the highest number of stations.
          </li>

          <li>
            • {insights.maintenance} borewells require maintenance.
          </li>

          <li>
            • Total RWH structures: {insights.rwhCount}.
          </li>
        </ul>
      </div>
    </div>
  );
}