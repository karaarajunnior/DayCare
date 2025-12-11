import React, { useEffect } from "react";

export default function LiveChat() {
	useEffect(() => {
		// Tawk.to example embed - replace with your property ID
		const script = document.createElement("script");
		script.async = true;
		script.src = "https://embed.tawk.to/YOUR_TAWK_TO_ID/default";
		script.charset = "UTF-8";
		script.setAttribute("crossorigin", "*");
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return null;
}
