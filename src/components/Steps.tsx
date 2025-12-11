import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Steps() {
	const steps = [
		{
			title: "Schedule a Visit",
			desc: "Arrange a tour Mon–Fri between 9:00 AM and 4:00 PM",
		},
		{
			title: "Complete Application",
			desc: "Fill online or download and submit the form",
		},
		{
			title: "Submit Documents",
			desc: "Provide birth certificate, immunization and health records",
		},
		{
			title: "Pay Registration Fee",
			desc: "Non-refundable fee to secure the spot",
		},
		{
			title: "Orientation & Start",
			desc: "Orientation then start date confirmation",
		},
	];

	return (
		<section id="process" className="mb-12">
			<h2 className="text-3xl font-bold mb-6 text-center">
				5-Step Enrollment Process
			</h2>
			<div className="max-w-4xl mx-auto space-y-4">
				{steps.map((s, i) => (
					<Card key={i} className="border-l-4 border-green-500 hover:shadow">
						<CardHeader>
							<div className="flex items-start gap-4">
								<div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
									{i + 1}
								</div>
								<div>
									<CardTitle className="text-lg">{s.title}</CardTitle>
									<p className="text-sm text-gray-600">{s.desc}</p>
								</div>
							</div>
						</CardHeader>
					</Card>
				))}
			</div>
		</section>
	);
}
