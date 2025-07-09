import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./BackupBarChart.css"; // 👈 Custom CSS (can reuse same chart class)

const data = [
  { name: "Job 1", value: 10 },
  { name: "Job 2", value: 20 },
  { name: "Job 3", value: 5 },
  { name: "Job 4", value: 15 },
];

const BackupBarChart = () => {
  return (
    <div className="chart">
      <h2>Backup Jobs</h2>
      <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', paddingRight:'25px'}}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BackupBarChart;
