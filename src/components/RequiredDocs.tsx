import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function RequiredDocs() {
	return (
		<section id="documents" className="mb-12">
			<h2 className="text-3xl font-bold mb-6 text-center">
				Required Documents Checklist
			</h2>
			<div className="max-w-4xl mx-auto">
				<Card>
					<CardContent>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<h4 className="font-semibold mb-3">Child Documents</h4>
								<ul className="list-disc ml-5 text-gray-700">
									<li>Birth Certificate (original/certified copy)</li>
									<li>Immunization Records (up-to-date)</li>
									<li>Health Assessment Form (doctor)</li>
									<li>2 Passport-size Photos</li>
								</ul>
							</div>
							<div>
								<h4 className="font-semibold mb-3">
									Parent / Guardian Documents
								</h4>
								<ul className="list-disc ml-5 text-gray-700">
									<li>Valid ID (National ID / Passport)</li>
									<li>Proof of Residence (utility bill / rental agreement)</li>
									<li>Emergency Contact Details (2 people)</li>
									<li>Work Contact Information</li>
								</ul>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
