"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="min-h-screen">
			{/* Navigation */}
			<nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
								<img src="/images/logo.jpg" alt="DK" />
							</div>
							<div>
								<h1 className="font-heading font-bold text-xl text-gray-800">
									DAMAKIDS
								</h1>
								<p className="text-xs text-gray-600">Early Childhood Centre</p>
							</div>
						</div>
						<div className="hidden md:flex gap-6 items-center">
							<a
								href="#home"
								className="text-gray-700 hover:text-green-600 transition-colors">
								Home
							</a>
							<a
								href="#about"
								className="text-gray-700 hover:text-green-600 transition-colors">
								About
							</a>
							<a
								href="#services"
								className="text-gray-700 hover:text-green-600 transition-colors">
								Services
							</a>
							<Link
								href="/nutrition"
								className="text-gray-700 hover:text-green-600 transition-colors">
								Nutrition
							</Link>
							<Link
								href="/resources"
								className="text-gray-700 hover:text-green-600 transition-colors">
								Resources
							</Link>
							<Link
								href="/parentblog"
								className="text-gray-700 hover:text-green-600 transition-colors">
								Blog
							</Link>
							<Link
								href="/events"
								className="text-gray-700 hover:text-green-600 transition-colors">
								Calendar
							</Link>
							<Link href="/enrollment">
								<Button>Enroll Now</Button>
							</Link>
						</div>
						<div className="flex items-center gap-4">
							<button
								className="md:hidden p-2"
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
								aria-label="Toggle menu">
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									{mobileMenuOpen ? (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									) : (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									)}
								</svg>
							</button>
						</div>
					</div>

					{/* Mobile Menu */}
					{mobileMenuOpen && (
						<div className="md:hidden py-4 border-t">
							<div className="flex flex-col space-y-3">
								<a
									href="#home"
									className="text-gray-700 hover:text-green-600 transition-colors px-4 py-2"
									onClick={() => setMobileMenuOpen(false)}>
									Home
								</a>
								<a
									href="#about"
									className="text-gray-700 hover:text-green-600 transition-colors px-4 py-2"
									onClick={() => setMobileMenuOpen(false)}>
									About
								</a>
								<a
									href="#services"
									className="text-gray-700 hover:text-green-600 transition-colors px-4 py-2"
									onClick={() => setMobileMenuOpen(false)}>
									Services
								</a>
								<Link
									href="/nutrition"
									className="text-gray-700 hover:text-green-600 transition-colors px-4 py-2"
									onClick={() => setMobileMenuOpen(false)}>
									Nutrition
								</Link>
								<Link
									href="/parent-resources"
									className="text-gray-700 hover:text-green-600 transition-colors px-4 py-2"
									onClick={() => setMobileMenuOpen(false)}>
									Resources
								</Link>
								<Link
									href="/blog"
									className="text-gray-700 hover:text-green-600 transition-colors px-4 py-2"
									onClick={() => setMobileMenuOpen(false)}>
									Blog
								</Link>
								<Link
									href="/calendar"
									className="text-gray-700 hover:text-green-600 transition-colors px-4 py-2"
									onClick={() => setMobileMenuOpen(false)}>
									Calendar
								</Link>
								<div className="px-4 pt-2">
									<Link
										href="/enrollment"
										onClick={() => setMobileMenuOpen(false)}>
										<Button className="w-full">Enroll Now</Button>
									</Link>
								</div>
							</div>
						</div>
					)}
				</div>
			</nav>

			{/* Hero Section with School Creed */}
			<section
				id="home"
				className="pt-20 pb-16 bg-gradient-to-b from-green-50 to-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center mb-12">
						<Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
							Nurturing Great Beginnings
						</Badge>
						<h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
							DAMAKIDS Early Childhood Centre
						</h1>
						<p className="text-xl text-gray-600 mb-8">
							Providing a safe, caring & stimulating environment for early
							childhood development
						</p>
					</div>

					{/* School Creed Image with Curved Text */}
					<div className="max-w-3xl mx-auto relative">
						<div className="relative rounded-2xl overflow-hidden shadow-2xl">
							<div className="absolute top-0 left-0 right-0 z-10 pt-4">
								<svg
									viewBox="0 0 800 120"
									className="w-full h-32"
									preserveAspectRatio="xMidYMid meet">
									<defs>
										<path
											id="curve"
											d="M 80,90 Q 400,25 720,90"
											fill="transparent"
										/>
										<filter
											id="shadow"
											x="-50%"
											y="-50%"
											width="200%"
											height="200%">
											<feDropShadow
												dx="2"
												dy="2"
												stdDeviation="3"
												floodOpacity="0.9"
											/>
										</filter>
									</defs>
									<text
										className="font-bold fill-white"
										fontSize="22"
										fontFamily="Poppins, sans-serif"
										filter="url(#shadow)">
										<textPath
											href="#curve"
											startOffset="50%"
											textAnchor="middle">
											" Every child is a seed of greatness — water their
											potential. "
										</textPath>
									</text>
								</svg>
							</div>

							<img
								src="/images/desire_img.png"
								alt="School Creed - Nurturing Growth"
								className="w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Explore Our School Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
							Explore Our School
						</h2>
						<p className="text-gray-600 mb-8">
							Take a virtual tour of our facilities and meet our dedicated team
						</p>

						<div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
							<Link href="/school-structure">
								<Card className="cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-green-100 hover:border-green-400">
									<CardHeader className="pb-4">
										<div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 mx-auto">
											<svg
												className="w-8 h-8 text-white"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
												/>
											</svg>
										</div>
										<CardTitle className="text-2xl font-heading text-center mb-2">
											School Structure
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-gray-600 text-center mb-4">
											Explore our modern classrooms, play areas, outdoor
											facilities, and more
										</p>
										<Button className="w-full">View Facilities</Button>
									</CardContent>
								</Card>
							</Link>

							<Link href="/staff">
								<Card className="cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-green-100 hover:border-green-400">
									<CardHeader className="pb-4">
										<div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
											<svg
												className="w-8 h-8 text-white"
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
										<CardTitle className="text-2xl font-heading text-center mb-2">
											Meet Our Staff
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-gray-600 text-center mb-4">
											Get to know our experienced educators and support team
										</p>
										<Button className="w-full">Meet the Team</Button>
									</CardContent>
								</Card>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Vision & Mission */}
			<section id="about" className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
						<Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow">
							<CardHeader>
								<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-6 h-6 text-green-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										/>
									</svg>
								</div>
								<CardTitle className="text-2xl font-heading text-green-700">
									Our Vision
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-700 leading-relaxed">
									To provide a safe, caring & stimulating environment for early
									childhood development
								</p>
							</CardContent>
						</Card>

						<Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow">
							<CardHeader>
								<div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-6 h-6 text-emerald-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<CardTitle className="text-2xl font-heading text-emerald-700">
									Our Mission
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-700 leading-relaxed">
									To nurture each child's social, emotional & intellectual
									growth in their formative years
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Services */}
			<section
				id="services"
				className="py-16 bg-gradient-to-b from-green-50 to-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
							Our Services
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Comprehensive care and education programs designed for your
							child's development
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						<Card className="border-t-4 border-t-green-500 hover:shadow-xl transition-shadow">
							<CardHeader>
								<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
									<svg
										className="w-8 h-8 text-green-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
								</div>
								<CardTitle className="text-center text-xl">Daycare</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 text-center">
									Full-day care programs providing a safe and nurturing
									environment for your little ones while you work
								</p>
							</CardContent>
						</Card>

						<Card className="border-t-4 border-t-emerald-500 hover:shadow-xl transition-shadow">
							<CardHeader>
								<div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
									<svg
										className="w-8 h-8 text-emerald-600"
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
								</div>
								<CardTitle className="text-center text-xl">
									After-care
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 text-center">
									Extended care services after school hours with supervised
									activities and homework support
								</p>
							</CardContent>
						</Card>

						<Card className="border-t-4 border-t-green-600 hover:shadow-xl transition-shadow">
							<CardHeader>
								<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
									<svg
										className="w-8 h-8 text-green-600"
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
								<CardTitle className="text-center text-xl">
									Pre-Primary/Nursery
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 text-center">
									Comprehensive early learning programs preparing children for
									primary school success
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Core Values */}
			<section id="values" className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
							Our Core Values
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							The principles that guide everything we do at DAMAKIDS
						</p>
					</div>

					<div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
						<div className="text-center group">
							<div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
								<svg
									className="w-10 h-10 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
									/>
								</svg>
							</div>
							<h3 className="font-heading font-semibold text-lg text-gray-800 mb-2">
								God-fearing
							</h3>
							<p className="text-sm text-gray-600">
								Faith-based values and character building
							</p>
						</div>

						<div className="text-center group">
							<div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
								<svg
									className="w-10 h-10 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
									/>
								</svg>
							</div>
							<h3 className="font-heading font-semibold text-lg text-gray-800 mb-2">
								Respect
							</h3>
							<p className="text-sm text-gray-600">
								Honoring each child and family
							</p>
						</div>

						<div className="text-center group">
							<div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
								<svg
									className="w-10 h-10 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h3 className="font-heading font-semibold text-lg text-gray-800 mb-2">
								Teamwork
							</h3>
							<p className="text-sm text-gray-600">Collaboration and unity</p>
						</div>

						<div className="text-center group">
							<div className="w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
								<svg
									className="w-10 h-10 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
							</div>
							<h3 className="font-heading font-semibold text-lg text-gray-800 mb-2">
								Love & Care
							</h3>
							<p className="text-sm text-gray-600">
								Compassionate nurturing environment
							</p>
						</div>

						<div className="text-center group">
							<div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
								<svg
									className="w-10 h-10 text-white"
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
							</div>
							<h3 className="font-heading font-semibold text-lg text-gray-800 mb-2">
								Protection & Safety
							</h3>
							<p className="text-sm text-gray-600">
								Secure and supervised care
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-heading font-bold mb-4">
						Ready to Give Your Child the Best Start?
					</h2>
					<p className="text-xl mb-8 text-green-50">
						Join our nurturing community and watch your child flourish
					</p>
					<div className="flex gap-4 justify-center flex-wrap">
						<Link href="/enrollment">
							<Button
								size="lg"
								className="bg-white text-green-700 hover:bg-gray-100">
								Schedule a Visit
							</Button>
						</Link>
						<Button
							size="lg"
							variant="outline"
							className="border-white text-white hover:bg-white/10">
							Download Brochure
						</Button>
					</div>
				</div>
			</section>
			{/* Contact Section */}
			<section
				id="contact"
				className="py-16 bg-gradient-to-b from-white to-green-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-10">
						<h2 className="text-4xl font-heading font-bold text-gray-900 mb-3">
							Get In Touch
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							We’d love to hear from you! Reach out using the contact details
							below.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{/* Phone */}
						<Card className="shadow-lg border-green-200 hover:shadow-xl transition">
							<CardHeader className="text-center">
								<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<svg
										className="w-8 h-8 text-green-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 5a2 2 0 012-2h2l3 6-2 2a16 16 0 006 6l2-2 6 3v2a2 2 0 01-2 2h-1C7.82 22 3 17.18 3 11V5z"
										/>
									</svg>
								</div>
								<CardTitle className="text-xl font-heading">Phone</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-gray-700">Call us anytime:</p>
								<p className="font-semibold text-green-700 mt-1">
									+256 700 123456
								</p>
							</CardContent>
						</Card>

						{/* Email */}
						<Card className="shadow-lg border-green-200 hover:shadow-xl transition">
							<CardHeader className="text-center">
								<div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<svg
										className="w-8 h-8 text-emerald-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M16 12H8m8 0l-8 5m8-5l-8-5m16 4v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h12a2 2 0 012 2z"
										/>
									</svg>
								</div>
								<CardTitle className="text-xl font-heading">Email</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-gray-700">Send us a message:</p>
								<p className="font-semibold text-green-700 mt-1">
									contact@damakids.org
								</p>
							</CardContent>
						</Card>

						{/* Location */}
						<Card className="shadow-lg border-green-200 hover:shadow-xl transition">
							<CardHeader className="text-center">
								<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<svg
										className="w-8 h-8 text-green-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 22s7-5.373 7-12a7 7 0 10-14 0c0 6.627 7 12 7 12z"
										/>
									</svg>
								</div>
								<CardTitle className="text-xl font-heading">Location</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-gray-700">Find us at:</p>
								<p className="font-semibold text-green-700 mt-1">
									Kampala, Uganda
								</p>
							</CardContent>
						</Card>
					</div>

					{/* Social Media */}
					<div className="text-center mt-10">
						<h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
							Connect With Us
						</h3>

						<div className="flex justify-center gap-6 mt-4">
							{/* Facebook */}
							<a
								href="https://facebook.com"
								target="_blank"
								className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
								<svg
									className="w-6 h-6 text-white"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0022 12" />
								</svg>
							</a>

							{/* WhatsApp */}
							<a
								href="https://wa.me/256700123456"
								target="_blank"
								className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
								<svg
									className="w-6 h-6 text-white"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M20.5 3.5A11.8 11.8 0 0012 0a11.8 11.8 0 00-8.5 3.5A11.8 11.8 0 000 12c0 2 .5 4 1.5 5.5L0 24l6.7-1.7c1.5.7 3.2 1 5.3 1a11.8 11.8 0 008.5-3.5A11.8 11.8 0 0024 12a11.8 11.8 0 00-3.5-8.5zM12 22c-1.7 0-3.2-.3-4.5-1l-.3-.1-4 1 1.1-4-.1-.3A9.7 9.7 0 012 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10zm5.2-7.5c-.3-.2-1.7-.8-2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.1-.3.2-.6.1a8 8 0 01-3.5-2.2c-1-1.1-1.2-2-1.3-2.3-.1-.3 0-.5.1-.6l.4-.5c.2-.2.3-.3.4-.5.1-.2 0-.4 0-.5 0-.2-.7-1.8-1-2.4-.3-.6-.6-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.6 1.1 2.8c.2.3 1.7 2.7 4.2 3.8 2.5 1.2 2.5.8 2.9.7.4 0 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.2z" />
								</svg>
							</a>

							{/* Instagram */}
							<a
								href="https://instagram.com"
								target="_blank"
								className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
								<svg
									className="w-6 h-6 text-white"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm0 7.3A2.8 2.8 0 1114.8 12 2.8 2.8 0 0112 14.8zM17 6.5a1.1 1.1 0 11-1.1-1.1A1.1 1.1 0 0117 6.5z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>
			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<div className="flex items-center gap-2 mb-4">
								<div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
									DK
								</div>
								<div>
									<h3 className="font-bold text-xl">DAMAKIDS</h3>
									<p className="text-sm text-gray-400">
										Early Childhood Centre
									</p>
								</div>
							</div>
							<p className="text-gray-400 text-sm">
								Nurturing the next generation through love, care, and quality
								education.
							</p>
						</div>

						<div>
							<h4 className="font-heading font-bold text-lg mb-4">
								Quick Links
							</h4>
							<ul className="space-y-2">
								<li>
									<a
										href="#home"
										className="text-gray-400 hover:text-green-400 transition-colors">
										Home
									</a>
								</li>
								<li>
									<a
										href="#about"
										className="text-gray-400 hover:text-green-400 transition-colors">
										About
									</a>
								</li>
								<li>
									<a
										href="#services"
										className="text-gray-400 hover:text-green-400 transition-colors">
										Services
									</a>
								</li>
								<li>
									<Link
										href="/enrollment"
										className="text-gray-400 hover:text-green-400 transition-colors">
										Enrollment
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-heading font-bold text-lg mb-4">Resources</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="/nutrition"
										className="text-gray-400 hover:text-green-400 transition-colors">
										Nutrition Guide
									</Link>
								</li>
								<li>
									<Link
										href="/parent-resources"
										className="text-gray-400 hover:text-green-400 transition-colors">
										Parent Resources
									</Link>
								</li>
								<li>
									<Link
										href="/blog"
										className="text-gray-400 hover:text-green-400 transition-colors">
										Blog
									</Link>
								</li>
								<li>
									<Link
										href="/calendar"
										className="text-gray-400 hover:text-green-400 transition-colors">
										School Calendar
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-heading font-bold text-lg mb-4">
								Contact Info
							</h4>
							<ul className="space-y-2 text-gray-400">
								<li className="flex items-center gap-2">
									<svg
										className="w-4 h-4 text-green-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									<span>Kampala, Uganda</span>
								</li>
								<li className="flex items-center gap-2">
									<svg
										className="w-4 h-4 text-green-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									<span>+256 700 123456</span>
								</li>
								<li className="flex items-center gap-2">
									<svg
										className="w-4 h-4 text-green-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									<span>contact@damakids.org</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
						<p>
							&copy; {new Date().getFullYear()} DAMAKIDS Early Childhood Centre.
							All rights reserved.
						</p>
						<p className="mt-2">Designed with ❤️ for the future generation</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
