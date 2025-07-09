import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import "./BackupPieChart.css"; // 👈 Import custom CSS

const data = [
  { name: "Success", value: 12 },
  { name: "Failed", value: 3 },
  { name: "Skipped", value: 2 },
];

const COLORS = ["#28a745", "#dc3545", "#ffc107"]; // green, red, yellow

const BackupPieChart = () => {
  return (
    <div className="chart">
      <h2>Backup Results</h2>
      <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius="80%"
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BackupPieChart;
