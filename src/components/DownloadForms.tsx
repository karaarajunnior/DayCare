import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DownloadForms() {
	return (
		<section id="forms" className="mb-12">
			<h2 className="text-3xl font-bold mb-6 text-center">Enrollment Forms</h2>
			<div className="max-w-4xl mx-auto">
				<Card>
					<CardContent>
						<div className="grid md:grid-cols-2 gap-4">
							<a
								href="/forms/enrollment-application.pdf"
								target="_blank"
								rel="noreferrer"
								className="p-4 border rounded">
								Enrollment Application
							</a>
							<a
								href="/forms/medical-form.pdf"
								target="_blank"
								rel="noreferrer"
								className="p-4 border rounded">
								Medical Information Form
							</a>
							<a
								href="/forms/emergency-contact.pdf"
								target="_blank"
								rel="noreferrer"
								className="p-4 border rounded">
								Emergency Contact Form
							</a>
							<a
								href="/forms/authorization-release.pdf"
								target="_blank"
								rel="noreferrer"
								className="p-4 border rounded">
								Authorization & Release Form
							</a>
						</div>

						<div className="mt-6 text-center">
							<Button
								onClick={() => (window.location.href = "/forms/forms.zip")}
								className="bg-green-600">
								Download All (ZIP)
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
