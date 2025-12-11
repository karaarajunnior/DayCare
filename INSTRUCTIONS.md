DAMAKIDS Early Childhood Centre Website
How to Use Your Uploaded Image
To use your own "School Creed" image instead of the placeholder:

Save your image file to: public/images/school-creed.jpg (or .png)
Update the image source in src/app/page.tsx (around line 67):
<img

  src="/images/school-creed.jpg"

  alt="School Creed - Nurturing Growth"

  className="w-full h-auto"

/>
Customization Guide
Contact Information
Update the contact details in src/app/page.tsx:

Phone: Line ~280 - Change +1 (555) 123-4567
Email: Line ~295 - Change info@damakids.edu
Location: Line ~310 - Add your physical address
Colors
The website uses a green theme. To change colors, edit src/app/globals.css:

Primary green: Search for 142.1 76.2% 36.3% (HSL color)
Opening Hours
Update the footer section (around line 340) with your actual operating hours.

Logo
The DK logo circle can be replaced with your own logo in the navigation section.

Running the Website
bun run dev
Then open http://localhost:3000 in your browser.

Building for Production
bun run build
Need Help?
All content is in a single file: src/app/page.tsx This makes it easy to find and update any text or section!