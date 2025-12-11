import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function TourSchedule() {
	const [state, setState] = useState({
		parentName: "",
		email: "",
		phone: "",
		tourDate: "",
		tourTime: "",
	});
	const [loading, setLoading] = useState(false);

	const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
		setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	const submit = (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			alert("Tour requested. We will contact you.");
			setState({
				parentName: "",
				email: "",
				phone: "",
				tourDate: "",
				tourTime: "",
			});
		}, 800);
	};

	return (
		<section id="tour" className="mb-12">
			<h2 className="text-3xl font-bold mb-4 text-center">Schedule a Tour</h2>
			<div className="max-w-4xl mx-auto">
				<Card>
					<CardContent>
						<form onSubmit={submit} className="grid md:grid-cols-2 gap-4">
							<input
								name="parentName"
								value={state.parentName}
								onChange={change}
								required
								placeholder="Parent/Guardian name"
								className="p-2 border rounded"
							/>
							<input
								name="email"
								value={state.email}
								onChange={change}
								required
								placeholder="Email"
								className="p-2 border rounded"
							/>
							<input
								name="phone"
								value={state.phone}
								onChange={change}
								required
								placeholder="Phone"
								className="p-2 border rounded"
							/>
							<div className="grid grid-cols-2 gap-2">
								<input
									name="tourDate"
									value={state.tourDate}
									onChange={change}
									type="date"
									className="p-2 border rounded"
								/>
								<select
									name="tourTime"
									value={state.tourTime}
									onChange={change}
									className="p-2 border rounded">
									<option value="">Select time</option>
									<option>9:00 AM</option>
									<option>10:00 AM</option>
									<option>11:00 AM</option>
									<option>1:00 PM</option>
									<option>2:00 PM</option>
								</select>
							</div>
							<Button type="submit" className="col-span-2 bg-green-600">
								{loading ? "Scheduling..." : "Schedule My Tour"}
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
