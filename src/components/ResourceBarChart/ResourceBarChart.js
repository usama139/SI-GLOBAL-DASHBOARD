import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./ResourceBarChart.css"; 

const data = [
  { name: "Hosts", value: 15 },
  { name: "VMs", value: 50 },
  { name: "Datacenters", value: 5 },
  { name: "Datastores", value: 15 },
];

const ResourceBarChart = () => {
  return (
    <div className="chart">
      <h2>vCenter Resources</h2>
      <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', paddingRight:'30px'}}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#FF5733" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResourceBarChart;
