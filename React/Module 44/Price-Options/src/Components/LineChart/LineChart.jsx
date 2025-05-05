import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const marksData = [
    { name: "Student 1", math: 78, physics: 82, chemistry: 74, biology: 80 },
    { name: "Student 2", math: 85, physics: 79, chemistry: 88, biology: 90 },
    { name: "Student 3", math: 62, physics: 70, chemistry: 65, biology: 68 },
    { name: "Student 4", math: 90, physics: 88, chemistry: 92, biology: 94 },
    { name: "Student 5", math: 73, physics: 76, chemistry: 70, biology: 75 },
    { name: "Student 6", math: 88, physics: 85, chemistry: 80, biology: 82 },
    { name: "Student 7", math: 69, physics: 65, chemistry: 72, biology: 70 },
    { name: "Student 8", math: 95, physics: 90, chemistry: 96, biology: 93 },
    { name: "Student 9", math: 80, physics: 78, chemistry: 85, biology: 79 },
    { name: "Student 10", math: 76, physics: 74, chemistry: 69, biology: 72 },
  ];

  return (
    <div>
      <LChart width={500} height={400} data={marksData}>
        <XAxis></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey="physics" stroke="red"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
