import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WaitingList() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [loading, setLoading] = useState(false);

	const join = (e?: React.FormEvent) => {
		e?.preventDefault();
		if (!name || !phone) return alert("Please enter name & phone");
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			alert(`${name} added to waiting list`);
			setName("");
			setPhone("");
		}, 700);
	};

	return (
		<section id="waitlist" className="mb-12">
			<div className="max-w-4xl mx-auto">
				<Card>
					<CardContent>
						<h3 className="text-xl font-bold mb-3">Join Our Waiting List</h3>
						<form onSubmit={join} className="grid md:grid-cols-3 gap-3">
							<input
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Full name"
								className="p-2 border rounded"
								required
							/>
							<input
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								placeholder="Phone"
								className="p-2 border rounded"
								required
							/>
							<Button type="submit" className="bg-amber-600">
								{loading ? "Joining..." : "Add Me"}
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
