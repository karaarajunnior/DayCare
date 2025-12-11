import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function TuitionPlans() {
	const plans = [
		{ id: "baby", title: "Baby Class", age: "6m - 18m", price: 450 },
		{ id: "toddler", title: "Toddler Class", age: "18m - 3y", price: 400 },
		{ id: "preschool", title: "Pre-Primary", age: "3 - 5y", price: 350 },
	];

	return (
		<section id="tuition" className="mb-12">
			<h2 className="text-3xl font-bold mb-6 text-center">
				Tuition & Payment Plans
			</h2>
			<div className="max-w-6xl mx-auto">
				<div className="mb-6 text-center">
					<div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded">
						One-Time Registration: $150
					</div>
				</div>

				<div className="grid md:grid-cols-3 gap-6 mb-6">
					{plans.map((p) => (
						<Card key={p.id} className="p-4 hover:shadow-lg cursor-pointer">
							<CardContent>
								<div className="text-center">
									<div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold">
										{p.title[0]}
									</div>
									<h3 className="text-xl font-bold">{p.title}</h3>
									<p className="text-sm text-gray-600 mb-2">{p.age}</p>
									<p className="text-2xl font-bold text-gray-900">
										${p.price}
										<span className="text-sm text-gray-600">/month</span>
									</p>
								</div>
								<ul className="mt-4 text-sm text-gray-700 space-y-1">
									<li>Meals & snacks included</li>
									<li>Age-appropriate learning activities</li>
									<li>Daily reports</li>
								</ul>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="grid md:grid-cols-3 gap-4">
					<div className="p-6 bg-gray-50 rounded-lg text-center">
						Annual - Save 10%
					</div>
					<div className="p-6 bg-green-50 rounded-lg text-center">
						Termly - Save 5% (Most Popular)
					</div>
					<div className="p-6 bg-white rounded-lg text-center">
						Monthly - Pay each month
					</div>
				</div>
			</div>
		</section>
	);
}
