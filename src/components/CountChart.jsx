"use client";

import Image from "next/image";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const dataChart = [
  { name: "Total", count: 100, fill: "white" },
  { name: "Boys", count: 25, fill: "#FAE27C" },
  { name: "Girls", count: 75, fill: "#C3EBFA" },
];

export default function CountChar() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/icons/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={dataChart}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/avatar/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-yellow rounded-full" />
          <h1 className="font-bold">25</h1>
          <h2 className="text-xs text-gray-300">Boys (25%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-sky rounded-full" />
          <h1 className="font-bold">75</h1>
          <h2 className="text-xs text-gray-300">Girls (75%)</h2>
        </div>
      </div>
    </div>
  );
}
