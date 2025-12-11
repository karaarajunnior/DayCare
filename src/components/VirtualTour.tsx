import React from "react";

export default function VirtualTour() {
	return (
		<div>
			<div className="aspect-video bg-gray-100 rounded overflow-hidden">
				<iframe
					src="https://www.youtube.com/embed/VIDEO_ID"
					title="Virtual Tour"
					className="w-full h-full"
					allowFullScreen
				/>
			</div>
			<p className="text-sm text-gray-600 mt-2">
				Video walkthrough of classrooms, play areas and facilities.
			</p>
		</div>
	);
}
