import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { learningByClass } from "@/lib/data";

export function LearningChart({ height = 280 }: { height?: number }) {
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={learningByClass} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
          <CartesianGrid stroke="#EDE4D4" vertical={false} />
          <XAxis dataKey="classLabel" tick={{ fill: "#5B6A7A", fontSize: 12 }} />
          <YAxis tick={{ fill: "#5B6A7A", fontSize: 12 }} domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="reading" name="Reading %" fill="#1F7A72" radius={[4, 4, 0, 0]} />
          <Bar dataKey="arithmetic" name="Arithmetic %" fill="#1B2A4A" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export const pledgeGap = [
  { name: "Class 5 at grade", now: 61, target: 80 },
  { name: "Teachers trained ('000)", now: 12, target: 40 },
];

export function PledgeGapChart({ height = 240 }: { height?: number }) {
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={pledgeGap} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
          <CartesianGrid stroke="#EDE4D4" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#5B6A7A", fontSize: 12 }} />
          <YAxis tick={{ fill: "#5B6A7A", fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="now" name="Today" fill="#C98412" radius={[4, 4, 0, 0]} />
          <Bar dataKey="target" name="2030 pledge" fill="#1F7A72" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
