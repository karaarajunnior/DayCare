import React from "react";

export default function SocialLinks() {
	return (
		<div className="flex gap-3 mt-4">
			<a
				href="https://facebook.com"
				target="_blank"
				rel="noreferrer"
				className="text-blue-600">
				Facebook
			</a>
			<a
				href="https://instagram.com"
				target="_blank"
				rel="noreferrer"
				className="text-pink-600">
				Instagram
			</a>
			<a
				href="https://tiktok.com"
				target="_blank"
				rel="noreferrer"
				className="text-black">
				TikTok
			</a>
			<a
				href="https://x.com"
				target="_blank"
				rel="noreferrer"
				className="text-slate-700">
				X
			</a>
		</div>
	);
}
