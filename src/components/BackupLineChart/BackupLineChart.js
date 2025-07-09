import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import "./BackupLineChart.css"; // 👈 Import CSS

const data = [
  { date: "Mar 1", backups: 4 },
  { date: "Mar 8", backups: 6 },
  { date: "Mar 15", backups: 3 },
  { date: "Mar 22", backups: 7 },
  { date: "Mar 29", backups: 2 },
];

const BackupLineChart = () => {
  return (
    <div className="chart">
      <h2>VM Backup Counts Over the Last 30 Days</h2>
      <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', paddingRight:'45px'}}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="backups" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BackupLineChart;
