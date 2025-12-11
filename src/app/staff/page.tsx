"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const staffData = {
	leadership: [
		{
			name: "Dr. Sarah Nakato",
			position: "Director",
			qualification: "PhD in Early Childhood Education",
			experience: "15+ years",
			image:
				"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=80",
			bio: "Passionate about creating nurturing learning environments for young children",
		},
		{
			name: "Mary Achieng",
			position: "Assistant Director",
			qualification: "Master's in Child Development",
			experience: "12+ years",
			image:
				"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop&q=80",
			bio: "Dedicated to ensuring quality education and care for every child",
		},
	],
	teachers: [
		{
			name: "Jane Namukasa",
			position: "Lead Teacher - Nursery",
			qualification: "Bachelor's in Early Childhood Education",
			experience: "8 years",
			image:
				"https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=800&h=800&fit=crop&q=80",
			specialization: "Montessori Methods",
			bio: "Experienced school leader.",
		},
		{
			name: "Grace Nabirye",
			position: "Lead Teacher - Baby Class",
			qualification: "Diploma in Early Years Education",
			experience: "6 years",
			image:
				"https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=800&fit=crop&q=80",
			specialization: "Infant Care & Development",
			bio: "Experienced school leader.",
		},
		{
			name: "Ruth Akello",
			position: "Teacher - Pre-Primary",
			qualification: "Bachelor's in Education",
			experience: "7 years",
			image:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop&q=80",
			specialization: "Literacy & Numeracy",
			bio: "Experienced school leader.",
		},
		{
			name: "Patricia Atim",
			position: "Teacher - Middle Class",
			qualification: "Diploma in Child Psychology",
			experience: "5 years",
			image:
				"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop&q=80",
			specialization: "Creative Arts & Play",
			bio: "Experienced school leader.",
		},
		{
			name: "Diana Nassali",
			position: "Teacher - Top Class",
			qualification: "Bachelor's in Early Childhood Education",
			experience: "9 years",
			image:
				"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=800&fit=crop&q=80",
			specialization: "School Readiness",
			bio: "Experienced school leader.",
		},
		{
			name: "Linda Namanya",
			position: "Assistant Teacher",
			qualification: "Certificate in Early Years Care",
			experience: "4 years",
			image:
				"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=800&h=800&fit=crop&q=80",
			specialization: "Music & Movement",
			bio: "Experienced school leader.",
		},
	],
	support: [
		{
			name: "Joyce Namusisi",
			position: "School Nurse",
			qualification: "Registered Nurse, Child Health Specialist",
			experience: "10 years",
			image:
				"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=800&fit=crop&q=80",
		},
		{
			name: "Peter Mukasa",
			position: "Administrative Officer",
			qualification: "Bachelor's in Business Administration",
			experience: "6 years",
			image:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&q=80",
		},
		{
			name: "Agnes Namutebi",
			position: "Kitchen Manager",
			qualification: "Diploma in Nutrition & Food Service",
			experience: "8 years",
			image:
				"https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&h=800&fit=crop&q=80",
		},
		{
			name: "David Opolot",
			position: "Security & Maintenance",
			qualification: "Certificate in Facility Management",
			experience: "7 years",
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80",
		},
	],
};

const allStaff = [
	...staffData.leadership,
	...staffData.teachers,
	...staffData.support,
];

export default function StaffPage() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	useEffect(() => {
		if (!isAutoPlaying) return;

		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === allStaff.length - 1 ? 0 : prevIndex + 1,
			);
		}, 4000);

		return () => clearInterval(interval);
	}, [isAutoPlaying]);

	const nextStaff = () => {
		setIsAutoPlaying(false);
		setCurrentIndex((prevIndex) =>
			prevIndex === allStaff.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const prevStaff = () => {
		setIsAutoPlaying(false);
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? allStaff.length - 1 : prevIndex - 1,
		);
	};

	const goToStaff = (index: number) => {
		setIsAutoPlaying(false);
		setCurrentIndex(index);
	};

	const currentStaff = allStaff[currentIndex];
	const isLeadership = staffData.leadership.includes(currentStaff);
	const isTeacher = staffData.teachers.includes(currentStaff);

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
			{/* Header */}
			<header className="bg-white shadow-md sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center justify-between">
						<Link href="/" className="flex items-center space-x-3">
							<div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-xl">DK</span>
							</div>
							<div>
								<h1 className="text-2xl font-bold text-gray-900">DAMAKIDS</h1>
								<p className="text-sm text-gray-600">Early Childhood Centre</p>
							</div>
						</Link>
						<Link href="/">
							<Button
								variant="outline"
								className="border-green-500 text-green-600 hover:bg-green-50">
								Back to Home
							</Button>
						</Link>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Page Header */}
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Meet Our Team
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Our dedicated team of qualified professionals is committed to
						providing the highest quality care and education for your child
					</p>
				</div>

				{/* Featured Staff Carousel */}
				<Card className="mb-16 overflow-hidden shadow-2xl">
					<div className="relative bg-gradient-to-br from-blue-100 to-green-100 p-8 md:p-12">
						{/* Navigation Arrows */}
						<button
							onClick={prevStaff}
							className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
							aria-label="Previous staff">
							<svg
								className="w-6 h-6 text-gray-800"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</button>
						<button
							onClick={nextStaff}
							className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
							aria-label="Next staff">
							<svg
								className="w-6 h-6 text-gray-800"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</button>

						{/* Staff Display */}
						<div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
							{/* Staff Image */}
							<div className="flex-shrink-0">
								<div className="relative">
									<img
										src={currentStaff.image}
										alt={currentStaff.name}
										className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl"
									/>
									<div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl shadow-lg">
										<p className="text-sm font-semibold">
											{currentIndex + 1} / {allStaff.length}
										</p>
									</div>
								</div>
							</div>

							{/* Staff Info */}
							<div className="flex-1 text-center md:text-left">
								<div className="inline-block mb-4">
									<span
										className={`px-4 py-2 rounded-full text-sm font-semibold ${
											isLeadership
												? "bg-purple-500 text-white"
												: isTeacher
												? "bg-blue-500 text-white"
												: "bg-green-500 text-white"
										}`}>
										{isLeadership
											? "Leadership"
											: isTeacher
											? "Teaching Staff"
											: "Support Staff"}
									</span>
								</div>
								<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
									{currentStaff.name}
								</h3>
								<p className="text-xl text-gray-700 mb-4">
									{currentStaff.position}
								</p>
								<div className="space-y-2 mb-6">
									<div className="flex items-center justify-center md:justify-start gap-2">
										<svg
											className="w-5 h-5 text-green-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<span className="text-gray-700">
											{currentStaff.qualification}
										</span>
									</div>
									<div className="flex items-center justify-center md:justify-start gap-2">
										<svg
											className="w-5 h-5 text-blue-600"
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
										<span className="text-gray-700">
											{currentStaff.experience} experience
										</span>
									</div>
									{currentStaff.specialization && (
										<div className="flex items-center justify-center md:justify-start gap-2">
											<svg
												className="w-5 h-5 text-purple-600"
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
											<span className="text-gray-700">
												{currentStaff.specialization}
											</span>
										</div>
									)}
								</div>
								{currentStaff.bio && (
									<p className="text-gray-600 italic">{currentStaff.bio}</p>
								)}
							</div>
						</div>

						{/* Auto-play indicator */}
						<div className="text-center mt-6">
							<button
								onClick={() => setIsAutoPlaying(!isAutoPlaying)}
								className="text-sm text-gray-600 hover:text-gray-800 flex items-center justify-center gap-2 mx-auto">
								{isAutoPlaying ? (
									<>
										<svg
											className="w-4 h-4"
											fill="currentColor"
											viewBox="0 0 24 24">
											<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
										</svg>
										Pause Auto-play
									</>
								) : (
									<>
										<svg
											className="w-4 h-4"
											fill="currentColor"
											viewBox="0 0 24 24">
											<path d="M8 5v14l11-7z" />
										</svg>
										Resume Auto-play
									</>
								)}
							</button>
						</div>
					</div>

					{/* Thumbnail Navigation */}
					<div className="bg-white p-6 overflow-x-auto">
						<div className="flex gap-4 justify-center min-w-max mx-auto">
							{allStaff.map((staff, index) => (
								<button
									key={index}
									onClick={() => goToStaff(index)}
									className={`flex-shrink-0 transition-all ${
										index === currentIndex
											? "scale-110"
											: "opacity-60 hover:opacity-100"
									}`}>
									<img
										src={staff.image}
										alt={staff.name}
										className={`w-16 h-16 object-cover rounded-lg border-4 ${
											index === currentIndex
												? "border-green-500"
												: "border-gray-200 hover:border-green-300"
										}`}
									/>
								</button>
							))}
						</div>
					</div>
				</Card>

				{/* Staff by Category */}
				<div className="space-y-16">
					{/* Leadership */}
					<section>
						<h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
							Leadership Team
						</h3>
						<div className="grid md:grid-cols-2 gap-8">
							{staffData.leadership.map((staff, index) => (
								<Card
									key={index}
									className="overflow-hidden hover:shadow-xl transition-shadow">
									<div className="flex flex-col sm:flex-row">
										<img
											src={staff.image}
											alt={staff.name}
											className="w-full sm:w-48 h-64 object-cover"
										/>
										<div className="p-6 flex-1">
											<div className="mb-3">
												<span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
													Leadership
												</span>
											</div>
											<h4 className="text-2xl font-bold text-gray-900 mb-2">
												{staff.name}
											</h4>
											<p className="text-lg text-gray-700 mb-4">
												{staff.position}
											</p>
											<div className="space-y-2 text-sm text-gray-600">
												<p>✓ {staff.qualification}</p>
												<p>✓ {staff.experience} experience</p>
												{staff.bio && (
													<p className="italic mt-3">{staff.bio}</p>
												)}
											</div>
										</div>
									</div>
								</Card>
							))}
						</div>
					</section>

					{/* Teaching Staff */}
					<section>
						<h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
							Teaching Staff
						</h3>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{staffData.teachers.map((staff, index) => (
								<Card
									key={index}
									className="overflow-hidden hover:shadow-xl transition-shadow">
									<img
										src={staff.image}
										alt={staff.name}
										className="w-full h-64 object-cover"
									/>
									<div className="p-6">
										<div className="mb-3">
											<span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
												Teacher
											</span>
										</div>
										<h4 className="text-xl font-bold text-gray-900 mb-2">
											{staff.name}
										</h4>
										<p className="text-gray-700 mb-4">{staff.position}</p>
										<div className="space-y-2 text-sm text-gray-600">
											<p>✓ {staff.qualification}</p>
											<p>✓ {staff.experience} experience</p>
											{staff.specialization && <p>✓ {staff.specialization}</p>}
										</div>
									</div>
								</Card>
							))}
						</div>
					</section>

					{/* Support Staff */}
					<section>
						<h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
							Support Staff
						</h3>
						<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{staffData.support.map((staff, index) => (
								<Card
									key={index}
									className="overflow-hidden hover:shadow-xl transition-shadow">
									<img
										src={staff.image}
										alt={staff.name}
										className="w-full h-56 object-cover"
									/>
									<div className="p-5">
										<div className="mb-3">
											<span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
												Support
											</span>
										</div>
										<h4 className="text-lg font-bold text-gray-900 mb-2">
											{staff.name}
										</h4>
										<p className="text-sm text-gray-700 mb-3">
											{staff.position}
										</p>
										<div className="space-y-1 text-xs text-gray-600">
											<p>✓ {staff.qualification}</p>
											<p>✓ {staff.experience} experience</p>
										</div>
									</div>
								</Card>
							))}
						</div>
					</section>
				</div>

				{/* Why Our Team */}
				<div className="mt-16 grid md:grid-cols-3 gap-8">
					<Card className="p-6 text-center">
						<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg
								className="w-8 h-8 text-purple-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
								/>
							</svg>
						</div>
						<h4 className="text-xl font-bold text-gray-900 mb-2">
							Qualified Professionals
						</h4>
						<p className="text-gray-600">
							All staff are certified and experienced in early childhood
							education and care
						</p>
					</Card>
					<Card className="p-6 text-center">
						<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg
								className="w-8 h-8 text-blue-600"
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
						<h4 className="text-xl font-bold text-gray-900 mb-2">
							Passionate About Children
						</h4>
						<p className="text-gray-600">
							Our team genuinely cares about each child's wellbeing and
							development
						</p>
					</Card>
					<Card className="p-6 text-center">
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
									d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
								/>
							</svg>
						</div>
						<h4 className="text-xl font-bold text-gray-900 mb-2">
							Continuous Training
						</h4>
						<p className="text-gray-600">
							Regular professional development ensures our team stays current
							with best practices
						</p>
					</Card>
				</div>

				{/* CTA Section */}
				<div className="mt-16 text-center">
					<Card className="p-8 bg-gradient-to-r from-green-500 to-blue-500 text-white">
						<h3 className="text-3xl font-bold mb-4">
							Ready to Join Our School Family?
						</h3>
						<p className="text-xl mb-6">
							Schedule a visit to meet our wonderful team in person
						</p>
						<div className="flex flex-wrap gap-4 justify-center">
							<Link href="/school-structure">
								<Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
									View Our Facilities
								</Button>
							</Link>
							<Link href="/">
								<Button
									variant="outline"
									className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
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
