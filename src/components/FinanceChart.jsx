"use client";

import Image from "next/image";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 2500,
    expense: 2500,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1234,
  },
  {
    name: "Mar",
    income: 1999,
    expense: 9876,
  },
  {
    name: "Apr",
    income: 2772,
    expense: 4040,
  },
  {
    name: "May",
    income: 1890,
    expense: 2810,
  },
  {
    name: "Jun",
    income: 2309,
    expense: 3008,
  },
  {
    name: "Jul",
    income: 3409,
    expense: 3040,
  },
  {
    name: "Aug",
    income: 3409,
    expense: 4334,
  },
  {
    name: "Sep",
    income: 9024,
    expense: 4334,
  },
  {
    name: "Oct",
    income: 3500,
    expense: 4500,
  },
  {
    name: "Nov",
    income: 3553,
    expense: 5500,
  },
  {
    name: "Dec",
    income: 3000,
    expense: 3333,
  },
];

export default function FinanceChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/icons/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
            dataKey="name"
            axisLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line ype="monotone" stroke="#C3EBFA" strokeWidth={5} dataKey="income"/>
          <Line ype="monotone" stroke="#CFCEFF" strokeWidth={5} dataKey="expense"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
