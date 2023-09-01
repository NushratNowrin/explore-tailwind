import React, { useEffect, useState } from "react";
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import axios from "axios";

const PhoneBar = () => {
	const [phones, setPhones] = useState([]);
	useEffect(() => {
		axios
			.get("https://openapi.programming-hero.com/api/phones?search=iphone")
			.then((data) => {
				const loadedData = data.data.data;
				console.log(loadedData);
				const phonesData = loadedData.map((phoneData) => {
					const parts = phoneData.slug.split("-");
					const price = parseInt(parts[1]);
					const phoneObject = {
						name: phoneData.phone_name,
						price: price,
					};
					return phoneObject;
				});
				console.log(phonesData);
				setPhones(phonesData);
			});
	}, []);
	return (
		<div className="text-center mx-28 my-12">
            <h2 className="font-bold text-3xl mb-10 mx-80 bg-amber-300 rounded-md m-5 py-5 text-center">Simple Phone Bar
			
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/NushratNowrin/explore-tailwind.git
git push -u origin main
</h2>
			<BarChart width={1000} height={300} data={phones}>
				<XAxis dataKey='name' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey='price' fill='#8884d8' />
			</BarChart>
		</div>
	);
};

export default PhoneBar;


