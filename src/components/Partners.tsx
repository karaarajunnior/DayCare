import React from "react";

export default function Partners() {
	const partners = [
		"Local Clinic",
		"Supermarket Partner",
		"Transport Provider",
		"Nutritionist",
	];
	return (
		<div className="grid grid-cols-2 gap-2 mt-2">
			{partners.map((p, i) => (
				<div key={i} className="p-2 border rounded text-sm">
					{p}
				</div>
			))}
		</div>
	);
}
