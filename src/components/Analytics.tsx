import React, { useEffect } from "react";

// Get the Hotjar ID from the environment variables
// It must be prefixed with NEXT_PUBLIC_ for client-side use
const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID;
// Define the Google Analytics ID (use a similar approach)
const GA_MEASUREMENT_ID =
	process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-MEASUREMENT_ID";

export default function Analytics() {
	useEffect(() => {
		// --- 1. Google Analytics 4 Setup ---
		const gaScript = document.createElement("script");
		gaScript.async = true;
		// Use the defined variable
		gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
		document.head.appendChild(gaScript);

		const inline = document.createElement("script");
		// Use the defined variable in the script content
		inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}');`;
		document.head.appendChild(inline);

		// --- 2. Hotjar Setup ---
		// Only run if the ID is actually defined
		if (HOTJAR_ID) {
			const hotjar = document.createElement("script");
			// 🛑 CRITICAL FIX: Use template literals (backticks) and ${}
			// to correctly inject the HOTJAR_ID value into the script string.
			hotjar.innerHTML = ` 
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');
                    r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv='); 
            `;
			document.head.appendChild(hotjar);
		}

		// Call tracking / form tracking can be instrumented via GTM or custom events

		return () => {
			// cleanup: in SSR this will not run; ok for client only
		};
	}, []);

	return null;
}
