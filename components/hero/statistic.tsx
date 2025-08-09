"use client";

import CountUp from "react-countup";
const stats = [
  { value: "2", label: "Years Experience" },
  { value: "8", label: "Projects Completed" },
  { value: "2", label: "Happy Clients" },
];
const Statictic = () => {
  return (
    <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center justify-center place-content-center">
      {stats.map((stat, i) => (
        <div key={i}>
          <p className="text-3xl md:text-4xl font-bold text-sky-600">
            <CountUp end={Number(stat.value)} />+
          </p>
          <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Statictic;
