import React from "react";

export default function TransportGallery() {
	return (
		<div className="p-4 border rounded">
			<h4 className="font-semibold mb-2">Transport & Pick-up</h4>
			<div className="grid grid-cols-2 gap-2">
				<div className="aspect-video bg-gray-100 rounded" />
				<div className="aspect-video bg-gray-100 rounded" />
			</div>
			<p className="text-sm text-gray-600 mt-2">
				We provide a standby shuttle/van for pick & drop (routes available on
				request).
			</p>
		</div>
	);
}
