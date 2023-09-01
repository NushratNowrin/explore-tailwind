import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

const Dashboard = () => {
	const students = [
		{
			name: "John",
			id: 1,
			marks: {
				physics: 85,
				chemistry: 78,
				math: 92,
			},
		},
		{
			name: "Jane",
			id: 2,
			marks: {
				physics: 90,
				chemistry: 87,
				math: 89,
			},
		},
		{
			name: "Bob",
			id: 3,
			marks: {
				physics: 79,
				chemistry: 81,
				math: 76,
			},
		},
		{
			name: "Alice",
			id: 4,
			marks: {
				physics: 92,
				chemistry: 88,
				math: 95,
			},
		},
		{
			name: "David",
			id: 5,
			marks: {
				physics: 87,
				chemistry: 92,
				math: 80,
			},
		},
		{
			name: "Sarah",
			id: 6,
			marks: {
				physics: 81,
				chemistry: 85,
				math: 86,
			},
		},
		{
			name: "Peter",
			id: 7,
			marks: {
				physics: 93,
				chemistry: 90,
				math: 94,
			},
		},
		{
			name: "Emily",
			id: 8,
			marks: {
				physics: 84,
				chemistry: 79,
				math: 88,
			},
		},
		{
			name: "Mark",
			id: 9,
			marks: {
				physics: 89,
				chemistry: 84,
				math: 82,
			},
		},
		{
			name: "Olivia",
			id: 10,
			marks: {
				physics: 91,
				chemistry: 93,
				math: 89,
			},
		},
	];
	return (
		<div className="text-center mx-28 my-12">
			<h2 className="font-bold text-3xl mb-10 mx-80 bg-amber-300 rounded-md m-5 py-5 text-center">Simple Marks Line Chart</h2>
			<LineChart width={1000} height={300} data={students}>
                <CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey='name' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey='marks.physics' stroke='#8884d8' activeDot={{ r: 5 }}></Line>
				<Line type="monotone" dataKey='marks.chemistry' stroke='red' activeDot={{ r: 5 }}></Line>
				<Line type="monotone" dataKey='marks.math' stroke='blue' activeDot={{ r: 5 }}></Line>
			</LineChart>
		</div>
	);
};

export default Dashboard;
