"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ParentResourcesPage() {
	const [selectedMonth, setSelectedMonth] = useState("January");
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const events = {
		January: [
			{ date: "15", title: "New Term Begins", type: "academic" },
			{ date: "20", title: "Parent Orientation", type: "meeting" },
		],
		February: [
			{ date: "14", title: "Valentine's Day Celebration", type: "event" },
			{ date: "28", title: "Parent-Teacher Conferences", type: "meeting" },
		],
		March: [
			{ date: "8", title: "International Women's Day", type: "event" },
			{ date: "21", title: "Spring Field Trip", type: "event" },
		],
	};

	const faqs = [
		{
			question: "What are your operating hours?",
			answer:
				"We're open Monday to Friday from 7:00 AM to 6:00 PM, and Saturday from 8:00 AM to 1:00 PM. We're closed on Sundays and public holidays.",
		},
		{
			question: "What should my child bring to school?",
			answer:
				"Please bring: a change of clothes, water bottle (labeled), comfort item (optional), any required medications, and a packed lunch if not using our meal service. All items should be clearly labeled with your child's name.",
		},
		{
			question: "What is your sick child policy?",
			answer:
				"Children must be fever-free for 24 hours without medication before returning. We cannot accept children with contagious illnesses, severe colds, or diarrhea. Please notify us immediately if your child contracts a communicable disease.",
		},
		{
			question: "How do you handle food allergies?",
			answer:
				"We take allergies very seriously. Please inform us of any allergies during enrollment and provide detailed information. We maintain an allergy alert system and ensure all staff are aware of each child's restrictions.",
		},
		{
			question: "What is your staff-to-child ratio?",
			answer:
				"Baby Class (6-18 months): 1:4 ratio. Toddler Class (18 months-3 years): 1:6 ratio. Pre-Primary (3-5 years): 1:10 ratio. We exceed minimum requirements to ensure quality care.",
		},
		{
			question: "Do you provide meals?",
			answer:
				"Yes! We provide nutritious breakfast, lunch, and two snacks daily. Our menu is designed by a nutritionist and rotates weekly. We accommodate dietary restrictions and allergies with advance notice.",
		},
		{
			question: "How do you communicate with parents?",
			answer:
				"We use multiple channels: daily reports (for babies and toddlers), weekly newsletters, a parent app with real-time updates, monthly parent meetings, and are always available by phone or email.",
		},
		{
			question: "What is your discipline policy?",
			answer:
				"We use positive reinforcement and redirection. We never use physical punishment. Our approach focuses on teaching appropriate behavior, setting clear boundaries, and helping children understand consequences in age-appropriate ways.",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
			{/* Header */}
			<header className="bg-white shadow-sm sticky top-0 z-50">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<Link href="/" className="flex items-center gap-2">
							<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
								<img src="/images/logo.jpg" alt="DK" />
							</div>
							<div>
								<h1 className="font-heading font-bold text-xl text-gray-800">
									DAMAKIDS
								</h1>
								<p className="text-xs text-gray-600">Early Childhood Centre</p>
							</div>
						</Link>
						<Link href="/">
							<Button variant="outline">Back to Home</Button>
						</Link>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="container mx-auto px-4 py-12">
				{/* Hero Section */}
				<div className="text-center mb-12 max-w-3xl mx-auto">
					<Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
						Everything You Need
					</Badge>
					<h1 className="text-5xl font-heading font-bold text-gray-900 mb-4">
						Parent Resources
					</h1>
					<p className="text-xl text-gray-600">
						Important information, helpful guides, and essential documents for
						DAMAKIDS families
					</p>
				</div>

				{/* Quick Links Navigation */}
				<div className="mb-12 flex flex-wrap gap-4 justify-center">
					<a href="#handbook">
						<Button
							variant="outline"
							className="border-blue-500 text-blue-600 hover:bg-blue-50">
							Parent Handbook
						</Button>
					</a>
					<a href="#calendar">
						<Button
							variant="outline"
							className="border-blue-500 text-blue-600 hover:bg-blue-50">
							Calendar
						</Button>
					</a>
					<a href="#schedules">
						<Button
							variant="outline"
							className="border-blue-500 text-blue-600 hover:bg-blue-50">
							Daily Schedules
						</Button>
					</a>
					<a href="#pack">
						<Button
							variant="outline"
							className="border-blue-500 text-blue-600 hover:bg-blue-50">
							What to Pack
						</Button>
					</a>
					<a href="#policies">
						<Button
							variant="outline"
							className="border-blue-500 text-blue-600 hover:bg-blue-50">
							Policies
						</Button>
					</a>
					<a href="#faq">
						<Button
							variant="outline"
							className="border-blue-500 text-blue-600 hover:bg-blue-50">
							FAQs
						</Button>
					</a>
				</div>

				{/* Parent Handbook Section */}
				<section id="handbook" className="mb-16">
					<h2 className="text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
						Parent Handbook
					</h2>
					<div className="max-w-4xl mx-auto">
						<Card className="border-2 border-blue-200">
							<CardContent className="p-8">
								<div className="flex flex-col md:flex-row items-center gap-8">
									<div className="flex-shrink-0">
										<div className="w-32 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-2xl flex items-center justify-center">
											<svg
												className="w-16 h-16 text-white"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
												/>
											</svg>
										</div>
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-bold text-gray-900 mb-4">
											Complete Parent Handbook 2025
										</h3>
										<p className="text-gray-600 mb-6">
											Our comprehensive handbook covers everything from daily
											routines and curriculum details to emergency procedures
											and parent involvement opportunities. Essential reading
											for all DAMAKIDS families.
										</p>
										<div className="space-y-3 mb-6">
											<div className="flex items-center gap-2 text-gray-700">
												<svg
													className="w-5 h-5 text-blue-600"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M5 13l4 4L19 7"
													/>
												</svg>
												School policies and procedures
											</div>
											<div className="flex items-center gap-2 text-gray-700">
												<svg
													className="w-5 h-5 text-blue-600"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M5 13l4 4L19 7"
													/>
												</svg>
												Curriculum overview and learning objectives
											</div>
											<div className="flex items-center gap-2 text-gray-700">
												<svg
													className="w-5 h-5 text-blue-600"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M5 13l4 4L19 7"
													/>
												</svg>
												Health and safety guidelines
											</div>
											<div className="flex items-center gap-2 text-gray-700">
												<svg
													className="w-5 h-5 text-blue-600"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M5 13l4 4L19 7"
													/>
												</svg>
												Communication and parent involvement
											</div>
										</div>
										<Button className="bg-blue-600 hover:bg-blue-700">
											<svg
												className="w-5 h-5 mr-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
												/>
											</svg>
											Download Handbook (PDF - 2.4 MB)
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Calendar of Events Section */}
				<section id="calendar" className="mb-16">
					<h2 className="text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
						Calendar of Events
					</h2>
					<div className="max-w-5xl mx-auto">
						<Card>
							<CardHeader>
								<div className="flex flex-wrap gap-2 justify-center">
									{months.map((month) => (
										<button
											key={month}
											onClick={() => setSelectedMonth(month)}
											className={`px-4 py-2 rounded-lg transition-all ${
												selectedMonth === month
													? "bg-blue-600 text-white shadow-lg"
													: "bg-gray-100 text-gray-700 hover:bg-gray-200"
											}`}>
											{month}
										</button>
									))}
								</div>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{(events[selectedMonth as keyof typeof events] || []).map(
										(event, index) => (
											<div
												key={index}
												className="flex items-center gap-4 p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
												<div className="w-16 h-16 bg-blue-600 text-white rounded-lg flex flex-col items-center justify-center flex-shrink-0">
													<span className="text-2xl font-bold">
														{event.date}
													</span>
													<span className="text-xs">
														{selectedMonth.slice(0, 3)}
													</span>
												</div>
												<div className="flex-1">
													<h4 className="font-semibold text-gray-900 text-lg">
														{event.title}
													</h4>
													<Badge
														className={
															event.type === "academic"
																? "bg-purple-100 text-purple-800"
																: event.type === "meeting"
																? "bg-green-100 text-green-800"
																: "bg-blue-100 text-blue-800"
														}>
														{event.type.charAt(0).toUpperCase() +
															event.type.slice(1)}
													</Badge>
												</div>
											</div>
										),
									)}
									{(!events[selectedMonth as keyof typeof events] ||
										events[selectedMonth as keyof typeof events].length ===
											0) && (
										<p className="text-center text-gray-500 py-8">
											No events scheduled for {selectedMonth} yet. Check back
											soon!
										</p>
									)}
								</div>

								<div className="mt-8 text-center">
									<Button
										variant="outline"
										className="border-blue-500 text-blue-600">
										<svg
											className="w-5 h-5 mr-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
											/>
										</svg>
										Download Full Year Calendar
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Daily Schedules Section */}
				<section id="schedules" className="mb-16">
					<h2 className="text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
						Daily Schedules
					</h2>
					<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
						{/* Baby Class Schedule */}
						<Card className="border-t-4 border-t-pink-500">
							<CardHeader className="bg-pink-50">
								<div className="flex items-center gap-3 mb-2">
									<div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
										<svg
											className="w-6 h-6 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<CardTitle className="text-xl">Baby Class</CardTitle>
								</div>
								<p className="text-sm text-gray-600">6 months - 18 months</p>
							</CardHeader>
							<CardContent className="pt-6">
								<div className="space-y-3 text-sm">
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-pink-700">
											7:00 - 8:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Arrival & Free Play
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-pink-700">
											8:00 - 8:30
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Breakfast
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-pink-700">
											8:30 - 9:30
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Morning Nap
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-pink-700">
											9:30 - 10:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Sensory Activities
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-pink-700">
											10:00 - 10:30
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Snack Time
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-pink-700">
											10:30 - 11:30
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Outdoor Time
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-pink-700">
											11:30 - 12:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Lunch
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-pink-700">
											12:00 - 2:30
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Afternoon Nap
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-pink-700">
											2:30 - 3:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Snack & Play
										</span>
									</div>
									<div className="flex justify-between items-start">
										<span className="font-semibold text-pink-700">
											3:00 - 6:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Free Play & Pickup
										</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Toddler Class Schedule */}
						<Card className="border-t-4 border-t-blue-500">
							<CardHeader className="bg-blue-50">
								<div className="flex items-center gap-3 mb-2">
									<div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
										<svg
											className="w-6 h-6 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
											/>
										</svg>
									</div>
									<CardTitle className="text-xl">Toddler Class</CardTitle>
								</div>
								<p className="text-sm text-gray-600">18 months - 3 years</p>
							</CardHeader>
							<CardContent className="pt-6">
								<div className="space-y-3 text-sm">
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-blue-700">
											7:00 - 8:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Arrival & Free Play
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-blue-700">
											8:00 - 8:30
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Breakfast & Circle Time
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-blue-700">
											8:30 - 9:30
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Learning Activities
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-blue-700">
											9:30 - 10:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Snack Time
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-blue-700">
											10:00 - 11:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Outdoor Play
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-blue-700">
											11:00 - 11:30
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Music & Movement
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-blue-700">
											11:30 - 12:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Lunch
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-blue-700">
											12:00 - 2:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Nap Time
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-blue-700">
											2:00 - 3:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Snack & Story Time
										</span>
									</div>
									<div className="flex justify-between items-start">
										<span className="font-semibold text-blue-700">
											3:00 - 6:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Creative Play & Pickup
										</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Pre-Primary Schedule */}
						<Card className="border-t-4 border-t-green-500">
							<CardHeader className="bg-green-50">
								<div className="flex items-center gap-3 mb-2">
									<div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
										<svg
											className="w-6 h-6 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
											/>
										</svg>
									</div>
									<CardTitle className="text-xl">Pre-Primary</CardTitle>
								</div>
								<p className="text-sm text-gray-600">3 - 5 years</p>
							</CardHeader>
							<CardContent className="pt-6">
								<div className="space-y-3 text-sm">
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-green-700">
											7:00 - 8:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Arrival & Free Choice
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-green-700">
											8:00 - 8:30
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Breakfast & Morning Circle
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-green-700">
											8:30 - 9:30
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Literacy & Numeracy
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-green-700">
											9:30 - 10:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Snack Break
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-green-700">
											10:00 - 11:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Outdoor Activities
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-green-700">
											11:00 - 11:45
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Arts & Science
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-green-700">
											11:45 - 12:30
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Lunch
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-green-700">
											12:30 - 2:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Quiet Time/Rest
										</span>
									</div>
									<div className="flex justify-between items-start border-b pb-2">
										<span className="font-semibold text-green-700">
											2:00 - 3:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Snack & Group Activities
										</span>
									</div>
									<div className="flex justify-between items-start">
										<span className="font-semibold text-green-700">
											3:00 - 6:00
										</span>
										<span className="text-gray-700 text-right flex-1 ml-4">
											Centers & Pickup
										</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* What to Pack Section */}
				<section id="pack" className="mb-16">
					<h2 className="text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
						What to Bring/Pack
					</h2>
					<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
						<Card className="border-l-4 border-l-green-500">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<svg
										className="w-6 h-6 text-green-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									Daily Essentials
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3">
									<li className="flex items-start gap-3">
										<span className="text-green-600 font-bold">✓</span>
										<div>
											<p className="font-semibold text-gray-900">
												Labeled Water Bottle
											</p>
											<p className="text-sm text-gray-600">
												Refillable, spill-proof preferred
											</p>
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-green-600 font-bold">✓</span>
										<div>
											<p className="font-semibold text-gray-900">
												Extra Clothes (2 sets)
											</p>
											<p className="text-sm text-gray-600">
												Including underwear and socks
											</p>
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-green-600 font-bold">✓</span>
										<div>
											<p className="font-semibold text-gray-900">
												Diapers/Pull-ups
											</p>
											<p className="text-sm text-gray-600">
												Adequate supply for the day (if applicable)
											</p>
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-green-600 font-bold">✓</span>
										<div>
											<p className="font-semibold text-gray-900">
												Comfort Item
											</p>
											<p className="text-sm text-gray-600">
												Blanket, stuffed toy (for nap time)
											</p>
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-green-600 font-bold">✓</span>
										<div>
											<p className="font-semibold text-gray-900">
												Sun Protection
											</p>
											<p className="text-sm text-gray-600">
												Hat and sunscreen (labeled)
											</p>
										</div>
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="border-l-4 border-l-blue-500">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<svg
										className="w-6 h-6 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									Optional Items
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3">
									<li className="flex items-start gap-3">
										<span className="text-blue-600 font-bold">○</span>
										<div>
											<p className="font-semibold text-gray-900">Lunch Box</p>
											<p className="text-sm text-gray-600">
												If not using our meal service
											</p>
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-blue-600 font-bold">○</span>
										<div>
											<p className="font-semibold text-gray-900">
												Special Snacks
											</p>
											<p className="text-sm text-gray-600">
												Healthy options only, nut-free
											</p>
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-blue-600 font-bold">○</span>
										<div>
											<p className="font-semibold text-gray-900">Pacifier</p>
											<p className="text-sm text-gray-600">
												For babies, labeled with name
											</p>
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-blue-600 font-bold">○</span>
										<div>
											<p className="font-semibold text-gray-900">Medications</p>
											<p className="text-sm text-gray-600">
												With signed authorization form
											</p>
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-blue-600 font-bold">○</span>
										<div>
											<p className="font-semibold text-gray-900">
												Family Photos
											</p>
											<p className="text-sm text-gray-600">
												For comfort and connection
											</p>
										</div>
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="border-l-4 border-l-red-500">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<svg
										className="w-6 h-6 text-red-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
									Please DO NOT Bring
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3">
									<li className="flex items-start gap-3">
										<span className="text-red-600 font-bold">✗</span>
										<div>
											<p className="font-semibold text-gray-900">
												Toys from Home
											</p>
											<p className="text-sm text-gray-600">
												Except show-and-tell days
											</p>
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-red-600 font-bold">✗</span>
										<div>
											<p className="font-semibold text-gray-900">
												Candy or Sugary Snacks
											</p>
											<p className="text-sm text-gray-600">
												We promote healthy eating
											</p>
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-red-600 font-bold">✗</span>
										<div>
											<p className="font-semibold text-gray-900">
												Nuts or Nut Products
											</p>
											<p className="text-sm text-gray-600">
												Severe allergy precaution
											</p>
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-red-600 font-bold">✗</span>
										<div>
											<p className="font-semibold text-gray-900">
												Valuables or Jewelry
											</p>
											<p className="text-sm text-gray-600">
												We cannot be responsible for loss
											</p>
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-red-600 font-bold">✗</span>
										<div>
											<p className="font-semibold text-gray-900">
												Electronic Devices
											</p>
											<p className="text-sm text-gray-600">
												Tablets, phones, gaming devices
											</p>
										</div>
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="border-l-4 border-l-amber-500">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<svg
										className="w-6 h-6 text-amber-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									Important Reminders
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3 text-sm text-gray-700">
									<li className="flex items-start gap-2">
										<span className="text-amber-600">•</span>
										<span>Label EVERYTHING with your child's full name</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-amber-600">•</span>
										<span>
											Check your child's bag daily for notes or items to
											replenish
										</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-amber-600">•</span>
										<span>
											Keep an extra set of clothes in your child's cubby
										</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-amber-600">•</span>
										<span>
											Update seasonal items (jackets, boots) as needed
										</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-amber-600">•</span>
										<span>
											Dress children in comfortable, play-friendly clothes
										</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>

					<div className="mt-6 max-w-4xl mx-auto text-center">
						<Button className="bg-green-600 hover:bg-green-700">
							<svg
								className="w-5 h-5 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
								/>
							</svg>
							Download Packing Checklist (PDF)
						</Button>
					</div>
				</section>

				{/* Policies Section */}
				<section id="policies" className="mb-16">
					<h2 className="text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
						Key Policies & Procedures
					</h2>
					<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
						<Card className="hover:shadow-xl transition-shadow">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-xl">
									<svg
										className="w-6 h-6 text-red-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
										/>
									</svg>
									Health & Illness
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-3 text-sm text-gray-700">
								<p>
									• Children must be fever-free for 24 hours without medication
								</p>
								<p>• No diarrhea, vomiting, or contagious illnesses</p>
								<p>• Notify us immediately of any communicable diseases</p>
								<p>
									• Sick children will be isolated and parents called for pickup
								</p>
								<p>
									• Medication must be in original container with authorization
									form
								</p>
							</CardContent>
						</Card>

						<Card className="hover:shadow-xl transition-shadow">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-xl">
									<svg
										className="w-6 h-6 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									Drop-off & Pick-up
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-3 text-sm text-gray-700">
								<p>• Sign in/out required for all children every day</p>
								<p>• Only authorized individuals may pick up your child</p>
								<p>• Valid ID required for anyone not on authorized list</p>
								<p>• Late pickup fee: $1 per minute after closing</p>
								<p>• Please inform us of schedule changes in advance</p>
							</CardContent>
						</Card>

						<Card className="hover:shadow-xl transition-shadow">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-xl">
									<svg
										className="w-6 h-6 text-green-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									Payment & Fees
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-3 text-sm text-gray-700">
								<p>• Tuition due by the 1st of each month</p>
								<p>• $25 late fee after the 5th of the month</p>
								<p>• Two-week notice required for withdrawal</p>
								<p>• Registration fee is non-refundable</p>
								<p>• Payment plans available upon request</p>
							</CardContent>
						</Card>

						<Card className="hover:shadow-xl transition-shadow">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-xl">
									<svg
										className="w-6 h-6 text-purple-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
										/>
									</svg>
									Safety & Security
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-3 text-sm text-gray-700">
								<p>• All visitors must sign in at the front desk</p>
								<p>• Facility monitored by security cameras</p>
								<p>• Fire and emergency drills conducted monthly</p>
								<p>• All staff trained in CPR and first aid</p>
								<p>• Secure entry/exit system for all buildings</p>
							</CardContent>
						</Card>
					</div>

					<div className="mt-8 text-center max-w-4xl mx-auto">
						<Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
							<CardContent className="p-6">
								<p className="text-gray-700 mb-4">
									For complete details on all policies, please refer to the
									Parent Handbook
								</p>
								<Button
									variant="outline"
									className="border-blue-500 text-blue-600">
									<svg
										className="w-5 h-5 mr-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
										/>
									</svg>
									Download Full Policy Manual
								</Button>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* FAQs Section */}
				<section id="faq" className="mb-16">
					<h2 className="text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
						Frequently Asked Questions
					</h2>
					<div className="max-w-4xl mx-auto space-y-4">
						{faqs.map((faq, index) => (
							<Card
								key={index}
								className="cursor-pointer hover:shadow-lg transition-all"
								onClick={() => setOpenFaq(openFaq === index ? null : index)}>
								<CardHeader className="pb-3">
									<div className="flex items-center justify-between">
										<h3 className="font-semibold text-lg text-gray-900 pr-4">
											{faq.question}
										</h3>
										<svg
											className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform ${
												openFaq === index ? "rotate-180" : ""
											}`}
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</div>
								</CardHeader>
								{openFaq === index && (
									<CardContent className="pt-0">
										<p className="text-gray-700 leading-relaxed">
											{faq.answer}
										</p>
									</CardContent>
								)}
							</Card>
						))}
					</div>

					<div className="mt-8 text-center">
						<p className="text-gray-600 mb-4">Still have questions?</p>
						<Link href="/enrollment#tour">
							<Button className="bg-blue-600 hover:bg-blue-700">
								Contact Us
							</Button>
						</Link>
					</div>
				</section>

				{/* CTA Section */}
				<div className="text-center">
					<Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
						<h3 className="text-3xl font-bold mb-4">
							Ready to Join Our Community?
						</h3>
						<p className="text-xl mb-6 text-blue-50">
							Explore enrollment options and schedule your visit today
						</p>
						<div className="flex flex-wrap gap-4 justify-center">
							<Link href="/enrollment">
								<Button
									className="bg-white text-blue-600 hover:bg-gray-100"
									size="lg">
									Enroll Now
								</Button>
							</Link>
							<Link href="/">
								<Button
									variant="outline"
									className="border-white text-white hover:bg-white/10"
									size="lg">
									Back to Home
								</Button>
							</Link>
						</div>
					</Card>
				</div>
			</main>
		</div>
	);
}
