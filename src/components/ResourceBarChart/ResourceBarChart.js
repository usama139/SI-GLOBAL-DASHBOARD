import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "../../App";
import "./ResourceBarChart.css";

const data = [
  { name: "Hosts", value: 15 },
  { name: "VMs", value: 50 },
  { name: "Datacenters", value: 5 },
  { name: "Datastores", value: 15 },
];

const ResourceBarChart = () => {
  const { theme } = useTheme();
  const chartBg = theme === 'dark' ? '#003238' : '#f7fafd';
  return (
    <div
      className="chart"
      style={{ background: chartBg, borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)',padding: '0px 1px 10px 1px', marginBottom: 18 }}
    >
      <h2 style={{fontSize:'0.9rem',}}>vCenter Resources</h2>
      <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', paddingRight:'30px'}}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#FF5733" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResourceBarChart;
