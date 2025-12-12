"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function CalendarPage() {
	const [selectedMonth, setSelectedMonth] = useState("December");

	const months = [
		"December 2025",
		"January 2026",
		"February 2026",
		"March 2026",
	];

	const events = [
		{
			date: "December 15, 2025",
			title: "Holiday Concert",
			time: "10:00 AM - 11:30 AM",
			type: "Performance",
			description:
				"Annual holiday performance featuring all our students. Parents and family welcome!",
			location: "Main Hall",
			color: "bg-red-100 border-red-500 text-red-900",
		},
		{
			date: "December 18, 2025",
			title: "Pajama Day",
			time: "All Day",
			type: "Fun Activity",
			description:
				"Come to school in your favorite pajamas for a cozy day of stories and hot chocolate.",
			location: "All Classrooms",
			color: "bg-purple-100 border-purple-500 text-purple-900",
		},
		{
			date: "December 20, 2025",
			title: "Winter Break Begins",
			time: "Last day of term",
			type: "Holiday",
			description: "School closes for winter break. We reopen January 6, 2026.",
			location: "N/A",
			color: "bg-blue-100 border-blue-500 text-blue-900",
		},
		{
			date: "January 6, 2026",
			title: "School Reopens",
			time: "7:00 AM",
			type: "School Day",
			description: "Welcome back! New term begins.",
			location: "All Campus",
			color: "bg-green-100 border-green-500 text-green-900",
		},
		{
			date: "January 10, 2026",
			title: "Parent Workshop: Positive Discipline",
			time: "6:00 PM - 8:00 PM",
			type: "Workshop",
			description:
				"Learn effective strategies for managing challenging behaviors with love and respect.",
			location: "Conference Room",
			color: "bg-orange-100 border-orange-500 text-orange-900",
		},
		{
			date: "January 17, 2026",
			title: "Science Fair",
			time: "2:00 PM - 4:00 PM",
			type: "Event",
			description:
				"Students showcase their science experiments. Family viewing encouraged!",
			location: "Outdoor Area",
			color: "bg-teal-100 border-teal-500 text-teal-900",
		},
		{
			date: "January 24, 2026",
			title: "School Photos",
			time: "9:00 AM - 2:00 PM",
			type: "Special",
			description:
				"Professional photographer on campus. Order forms sent home in advance.",
			location: "Photo Studio",
			color: "bg-pink-100 border-pink-500 text-pink-900",
		},
		{
			date: "February 1, 2026",
			title: "Chinese New Year Celebration",
			time: "10:00 AM - 12:00 PM",
			type: "Cultural",
			description:
				"Celebrate with dragon dances, crafts, and traditional foods.",
			location: "Main Hall",
			color: "bg-red-100 border-red-500 text-red-900",
		},
		{
			date: "February 14, 2026",
			title: "Valentine's Day Party",
			time: "2:00 PM - 3:00 PM",
			type: "Fun Activity",
			description:
				"Exchange valentines and enjoy special treats (allergy-friendly options available).",
			location: "All Classrooms",
			color: "bg-pink-100 border-pink-500 text-pink-900",
		},
		{
			date: "February 21, 2026",
			title: "Parent-Teacher Conferences",
			time: "All Day (by appointment)",
			type: "Meeting",
			description:
				"Schedule your 20-minute slot to discuss your child's progress.",
			location: "Individual Classrooms",
			color: "bg-indigo-100 border-indigo-500 text-indigo-900",
		},
		{
			date: "March 7, 2026",
			title: "Dr. Seuss Week Begins",
			time: "All Week",
			type: "Special Week",
			description:
				"Week-long celebration with daily themed activities and costume days.",
			location: "All Campus",
			color: "bg-yellow-100 border-yellow-500 text-yellow-900",
		},
		{
			date: "March 14, 2026",
			title: "Spring Garden Planting",
			time: "10:00 AM - 12:00 PM",
			type: "Activity",
			description:
				"Students plant seeds and learn about growing vegetables. Parent volunteers needed!",
			location: "School Garden",
			color: "bg-green-100 border-green-500 text-green-900",
		},
	];

	const upcomingEvents = events.slice(0, 4);

	return (
		<div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
			{/* Header */}
			<header className="bg-white shadow sticky top-0 z-40">
				<div className="container mx-auto px-4 py-4 flex items-center justify-between">
					<Link href="/" className="flex items-center gap-3">
						<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
							DK
						</div>
						<div>
							<h1 className="font-bold text-lg text-gray-800">DAMAKIDS</h1>
							<p className="text-xs text-gray-600">Early Childhood Centre</p>
						</div>
					</Link>
					<Link href="/">
						<Button variant="outline">Back to Home</Button>
					</Link>
				</div>
			</header>

			<main className="container mx-auto px-4 py-12">
				{/* Hero Section */}
				<div className="text-center mb-12 max-w-3xl mx-auto">
					<div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded mb-4">
						Stay Connected & Informed
					</div>
					<h1 className="text-5xl font-bold text-gray-900 mb-4">
						Events Calendar
					</h1>
					<p className="text-xl text-gray-600">
						View upcoming activities, holidays, and important dates for our
						school community
					</p>
				</div>

				{/* Quick Actions */}
				<div className="max-w-4xl mx-auto mb-12">
					<div className="grid md:grid-cols-3 gap-4">
						<Button className="bg-green-600 hover:bg-green-700 h-auto py-4">
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
								Download Calendar
							</div>
						</Button>
						<Button
							variant="outline"
							className="border-green-500 text-green-600 hover:bg-green-50 h-auto py-4">
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/>
								</svg>
								Email Reminders
							</div>
						</Button>
						<Button
							variant="outline"
							className="border-green-500 text-green-600 hover:bg-green-50 h-auto py-4">
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								Add to Google Calendar
							</div>
						</Button>
					</div>
				</div>

				{/* Upcoming Highlights */}
				<section className="mb-16 max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
						Upcoming Highlights
					</h2>
					<div className="grid md:grid-cols-2 gap-6">
						{upcomingEvents.map((event, idx) => (
							<Card
								key={idx}
								className={`border-l-4 ${event.color} hover:shadow-xl transition-all`}>
								<CardContent className="p-6">
									<div className="flex items-start justify-between mb-4">
										<Badge className="bg-green-600">{event.type}</Badge>
										<span className="text-sm text-gray-600">{event.time}</span>
									</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-2">
										{event.title}
									</h3>
									<p className="text-gray-600 mb-4">{event.description}</p>
									<div className="flex items-center gap-4 text-sm text-gray-500">
										<span className="flex items-center gap-1">
											<svg
												className="w-4 h-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
												/>
											</svg>
											{event.date}
										</span>
										<span className="flex items-center gap-1">
											<svg
												className="w-4 h-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												/>
											</svg>
											{event.location}
										</span>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Full Calendar */}
				<section className="max-w-6xl mx-auto mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
						Complete Calendar
					</h2>

					<div className="mb-6">
						<div className="flex flex-wrap gap-3 justify-center">
							{months.map((month) => (
								<button
									key={month}
									onClick={() => setSelectedMonth(month)}
									className={`px-6 py-2 rounded-full font-medium transition-all ${
										selectedMonth === month
											? "bg-green-600 text-white shadow-lg"
											: "bg-white text-gray-700 hover:bg-green-50 border border-gray-300"
									}`}>
									{month}
								</button>
							))}
						</div>
					</div>

					<Card>
						<CardContent className="p-0">
							<div className="overflow-x-auto">
								<table className="w-full">
									<thead className="bg-green-50">
										<tr>
											<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
												Date
											</th>
											<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
												Event
											</th>
											<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
												Type
											</th>
											<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
												Time
											</th>
											<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
												Location
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200">
										{events.map((event, idx) => (
											<tr key={idx} className="hover:bg-gray-50">
												<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
													{event.date}
												</td>
												<td className="px-6 py-4">
													<div>
														<p className="font-medium text-gray-900">
															{event.title}
														</p>
														<p className="text-sm text-gray-600">
															{event.description}
														</p>
													</div>
												</td>
												<td className="px-6 py-4">
													<Badge className="bg-green-100 text-green-800">
														{event.type}
													</Badge>
												</td>
												<td className="px-6 py-4 text-gray-600 whitespace-nowrap">
													{event.time}
												</td>
												<td className="px-6 py-4 text-gray-600">
													{event.location}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</CardContent>
					</Card>
				</section>

				{/* Event Legend */}
				<section className="max-w-4xl mx-auto mb-16">
					<h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
						Event Types
					</h2>
					<div className="grid md:grid-cols-3 gap-4">
						<Card className="border-l-4 border-l-green-500">
							<CardContent className="p-4">
								<h3 className="font-semibold text-gray-900 mb-2">
									School Days & Holidays
								</h3>
								<p className="text-sm text-gray-600">
									Regular operations and closure dates
								</p>
							</CardContent>
						</Card>
						<Card className="border-l-4 border-l-orange-500">
							<CardContent className="p-4">
								<h3 className="font-semibold text-gray-900 mb-2">
									Parent Events
								</h3>
								<p className="text-sm text-gray-600">
									Workshops, conferences, and meetings
								</p>
							</CardContent>
						</Card>
						<Card className="border-l-4 border-l-purple-500">
							<CardContent className="p-4">
								<h3 className="font-semibold text-gray-900 mb-2">
									Student Activities
								</h3>
								<p className="text-sm text-gray-600">
									Performances, parties, and special days
								</p>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* CTA Section */}
				<div className="text-center">
					<Card className="p-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0">
						<h3 className="text-3xl font-bold mb-4">Never Miss an Event</h3>
						<p className="text-lg mb-6 text-green-50">
							Subscribe to calendar notifications and stay up-to-date with all
							school activities
						</p>
						<div className="flex gap-4 justify-center">
							<Button
								size="lg"
								className="bg-white text-green-700 hover:bg-gray-100">
								Subscribe to Updates
							</Button>
							<Link href="/contact">
								<Button
									size="lg"
									variant="outline"
									className="border-white text-white hover:bg-white/10">
									Contact Us
								</Button>
							</Link>
						</div>
					</Card>
				</div>
			</main>
		</div>
	);
}
