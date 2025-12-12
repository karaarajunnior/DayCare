// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// type FormData = {
// 	parentName: string;
// 	email: string;
// 	phone: string;
// 	childName: string;
// 	childAge: string;
// 	program: string;
// 	startDate: string;
// 	tourDate: string;
// 	tourTime: string;
// 	message: string;
// };

// export default function EnrollmentPage() {
// 	const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
// 	const [formData, setFormData] = useState<FormData>({
// 		parentName: "",
// 		email: "",
// 		phone: "",
// 		childName: "",
// 		childAge: "",
// 		program: "",
// 		startDate: "",
// 		tourDate: "",
// 		tourTime: "",
// 		message: "",
// 	});

// 	const [waitlistName, setWaitlistName] = useState("");
// 	const [waitlistPhone, setWaitlistPhone] = useState("");
// 	const [submittingTour, setSubmittingTour] = useState(false);
// 	const [submittingWaitlist, setSubmittingWaitlist] = useState(false);

// 	const handleInputChange = (
// 		e: React.ChangeEvent<
// 			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
// 		>,
// 	) => {
// 		setFormData({
// 			...formData,
// 			[e.target.name]: e.target.value,
// 		});
// 	};

// 	const handlePlanSelect = (plan: string) => {
// 		setSelectedPlan(plan);
// 		setFormData((prev) => ({ ...prev, program: plan }));
// 	};

// 	const handleSubmit = (e: React.FormEvent) => {
// 		e.preventDefault();
// 		setSubmittingTour(true);
// 		// Basic UI feedback. In a real app you'd call an API here.
// 		setTimeout(() => {
// 			setSubmittingTour(false);
// 			alert(
// 				`Thanks ${formData.parentName || "Parent"}! Your tour on ${
// 					formData.tourDate || "(no date)"
// 				} at ${
// 					formData.tourTime || "(no time)"
// 				} has been requested. We'll contact you at ${
// 					formData.email || formData.phone
// 				}.`,
// 			);
// 			// Optionally reset
// 			setFormData({
// 				parentName: "",
// 				email: "",
// 				phone: "",
// 				childName: "",
// 				childAge: "",
// 				program: "",
// 				startDate: "",
// 				tourDate: "",
// 				tourTime: "",
// 				message: "",
// 			});
// 			setSelectedPlan(null);
// 		}, 700);
// 	};

// 	const handleWaitlist = (e?: React.FormEvent) => {
// 		e?.preventDefault();
// 		if (!waitlistName || !waitlistPhone) {
// 			alert("Please provide name and phone to join the waiting list.");
// 			return;
// 		}
// 		setSubmittingWaitlist(true);
// 		setTimeout(() => {
// 			setSubmittingWaitlist(false);
// 			alert(
// 				`Thanks ${waitlistName}! You've been added to the waiting list. We'll notify ${waitlistPhone} when a spot opens.`,
// 			);
// 			setWaitlistName("");
// 			setWaitlistPhone("");
// 		}, 600);
// 	};

// 	const handleDownloadAll = () => {
// 		// If you have a pre-made zip in /public/forms.zip link to it
// 		// Otherwise we redirect user to a page listing the files
// 		window.location.href = "/forms/forms.zip";
// 	};

// 	return (
// 		<div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
// 			{/* Header */}
// 			<header className="bg-white shadow-sm sticky top-0 z-50">
// 				<div className="container mx-auto px-4 py-4">
// 					<div className="flex items-center justify-between">
// 						<Link href="/" className="flex items-center gap-2">
// 							<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
// 								DK
// 							</div>
// 							<div>
// 								<h1 className="font-heading font-bold text-xl text-gray-800">
// 									DAMAKIDS
// 								</h1>
// 								<p className="text-xs text-gray-600">Early Childhood Centre</p>
// 							</div>
// 						</Link>
// 						<div className="flex items-center gap-3">
// 							<nav className="hidden md:flex gap-2">
// 								<a
// 									href="#process"
// 									className="text-sm text-green-700 hover:underline">
// 									Process
// 								</a>
// 								<a
// 									href="#documents"
// 									className="text-sm text-green-700 hover:underline">
// 									Documents
// 								</a>
// 								<a
// 									href="#tuition"
// 									className="text-sm text-green-700 hover:underline">
// 									Tuition
// 								</a>
// 								<a
// 									href="#forms"
// 									className="text-sm text-green-700 hover:underline">
// 									Forms
// 								</a>
// 								<a
// 									href="#tour"
// 									className="text-sm text-green-700 hover:underline">
// 									Tour
// 								</a>
// 							</nav>
// 							<Link href="/">
// 								<Button variant="outline">Back to Home</Button>
// 							</Link>
// 						</div>
// 					</div>
// 				</div>
// 			</header>

// 			{/* Main Content */}
// 			<main className="container mx-auto px-4 py-12">
// 				{/* Hero Section */}
// 				<div className="text-center mb-12 max-w-3xl mx-auto">
// 					<Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
// 						Start Your Journey With Us
// 					</Badge>
// 					<h1 className="text-5xl font-heading font-bold text-gray-900 mb-4">
// 						Enrollment Information
// 					</h1>
// 					<p className="text-xl text-gray-600">
// 						Join the DAMAKIDS family and give your child the best start in life.
// 					</p>

// 					{/* optional hero image (make sure /kids.png exists in public/) */}
// 					<div className="flex justify-center mt-8">
// 						<Image
// 							src="/kids.png"
// 							alt="Kids at DAMAKIDS"
// 							width={900}
// 							height={360}
// 							className="rounded-2xl shadow-lg"
// 						/>
// 					</div>

// 					{/* Quick Links */}
// 					<div className="mt-6 flex flex-wrap gap-3 justify-center">
// 						<a href="#process">
// 							<Button
// 								variant="outline"
// 								className="border-green-500 text-green-600 hover:bg-green-50">
// 								Enrollment Process
// 							</Button>
// 						</a>
// 						<a href="#documents">
// 							<Button
// 								variant="outline"
// 								className="border-green-500 text-green-600 hover:bg-green-50">
// 								Required Documents
// 							</Button>
// 						</a>
// 						<a href="#tuition">
// 							<Button
// 								variant="outline"
// 								className="border-green-500 text-green-600 hover:bg-green-50">
// 								Tuition & Fees
// 							</Button>
// 						</a>
// 						<a href="#forms">
// 							<Button
// 								variant="outline"
// 								className="border-green-500 text-green-600 hover:bg-green-50">
// 								Enrollment Forms
// 							</Button>
// 						</a>
// 						<a href="#tour">
// 							<Button
// 								variant="outline"
// 								className="border-green-500 text-green-600 hover:bg-green-50">
// 								Schedule Tour
// 							</Button>
// 						</a>
// 					</div>
// 				</div>

// 				{/* Enrollment Process Section */}
// 				<section id="process" className="mb-16">
// 					<h2 className="text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
// 						Simple 5-Step Enrollment Process
// 					</h2>
// 					<div className="max-w-4xl mx-auto space-y-6">
// 						<Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
// 							<CardHeader>
// 								<div className="flex items-start gap-4">
// 									<div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
// 										1
// 									</div>
// 									<div>
// 										<CardTitle className="text-2xl mb-2">
// 											Schedule a Visit
// 										</CardTitle>
// 										<p className="text-gray-600">
// 											Contact us to arrange a tour. Tours available
// 											Monday–Friday, 9:00 AM – 4:00 PM. Use the Schedule Tour
// 											form or call us.
// 										</p>
// 									</div>
// 								</div>
// 							</CardHeader>
// 						</Card>

// 						<Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
// 							<CardHeader>
// 								<div className="flex items-start gap-4">
// 									<div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
// 										2
// 									</div>
// 									<div>
// 										<CardTitle className="text-2xl mb-2">
// 											Complete Application
// 										</CardTitle>
// 										<p className="text-gray-600">
// 											Fill out the enrollment application form online or
// 											download and bring a completed copy during your visit.
// 										</p>
// 									</div>
// 								</div>
// 							</CardHeader>
// 						</Card>

// 						<Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
// 							<CardHeader>
// 								<div className="flex items-start gap-4">
// 									<div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
// 										3
// 									</div>
// 									<div>
// 										<CardTitle className="text-2xl mb-2">
// 											Submit Documents
// 										</CardTitle>
// 										<p className="text-gray-600">
// 											Provide required documents including immunization records,
// 											birth certificate, and emergency contact info.
// 										</p>
// 									</div>
// 								</div>
// 							</CardHeader>
// 						</Card>

// 						<Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
// 							<CardHeader>
// 								<div className="flex items-start gap-4">
// 									<div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
// 										4
// 									</div>
// 									<div>
// 										<CardTitle className="text-2xl mb-2">
// 											Pay Registration Fee
// 										</CardTitle>
// 										<p className="text-gray-600">
// 											Submit the non-refundable registration fee to secure a
// 											spot. Payment options: cash, mobile money, bank transfer,
// 											card.
// 										</p>
// 									</div>
// 								</div>
// 							</CardHeader>
// 						</Card>

// 						<Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
// 							<CardHeader>
// 								<div className="flex items-start gap-4">
// 									<div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
// 										5
// 									</div>
// 									<div>
// 										<CardTitle className="text-2xl mb-2">
// 											Orientation & Start Date
// 										</CardTitle>
// 										<p className="text-gray-600">
// 											Attend orientation to meet teachers, learn routines, and
// 											prepare for the first day. We'll confirm start date after
// 											admin checks and payment.
// 										</p>
// 									</div>
// 								</div>
// 							</CardHeader>
// 						</Card>
// 					</div>
// 				</section>

// 				{/* Required Documents Section */}
// 				<section id="documents" className="mb-16">
// 					<h2 className="text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
// 						Required Documents Checklist
// 					</h2>
// 					<div className="max-w-4xl mx-auto">
// 						<Card>
// 							<CardContent className="p-8">
// 								<p className="text-gray-600 mb-6">
// 									Please prepare the following documents before enrollment:
// 								</p>
// 								<div className="grid md:grid-cols-2 gap-6">
// 									<div className="space-y-4">
// 										<h3 className="font-semibold text-lg text-gray-800 mb-3">
// 											Child Documents
// 										</h3>
// 										<ul className="space-y-4">
// 											<li>
// 												<p className="font-medium text-gray-800">
// 													Birth Certificate
// 												</p>
// 												<p className="text-sm text-gray-600">
// 													Original or certified copy
// 												</p>
// 											</li>
// 											<li>
// 												<p className="font-medium text-gray-800">
// 													Immunization Records
// 												</p>
// 												<p className="text-sm text-gray-600">
// 													Up-to-date vaccination card
// 												</p>
// 											</li>
// 											<li>
// 												<p className="font-medium text-gray-800">
// 													Health Assessment Form
// 												</p>
// 												<p className="text-sm text-gray-600">
// 													Completed by pediatrician
// 												</p>
// 											</li>
// 											<li>
// 												<p className="font-medium text-gray-800">
// 													Recent Photo
// 												</p>
// 												<p className="text-sm text-gray-600">
// 													Passport-size (2 copies)
// 												</p>
// 											</li>
// 										</ul>
// 									</div>

// 									<div className="space-y-4">
// 										<h3 className="font-semibold text-lg text-gray-800 mb-3">
// 											Parent/Guardian Documents
// 										</h3>
// 										<ul className="space-y-4">
// 											<li>
// 												<p className="font-medium text-gray-800">Valid ID</p>
// 												<p className="text-sm text-gray-600">
// 													National ID, passport, or driver's license
// 												</p>
// 											</li>
// 											<li>
// 												<p className="font-medium text-gray-800">
// 													Proof of Residence
// 												</p>
// 												<p className="text-sm text-gray-600">
// 													Utility bill or rental agreement
// 												</p>
// 											</li>
// 											<li>
// 												<p className="font-medium text-gray-800">
// 													Emergency Contacts
// 												</p>
// 												<p className="text-sm text-gray-600">
// 													At least 2 additional contacts
// 												</p>
// 											</li>
// 											<li>
// 												<p className="font-medium text-gray-800">
// 													Work Contact Information
// 												</p>
// 												<p className="text-sm text-gray-600">
// 													Phone and address
// 												</p>
// 											</li>
// 										</ul>
// 									</div>
// 								</div>

// 								<div className="mt-8 p-4 bg-blue-50 rounded-lg">
// 									<p className="text-sm text-blue-800">
// 										<strong>Note:</strong> Originals may be required for
// 										verification but will be returned immediately.
// 									</p>
// 								</div>
// 							</CardContent>
// 						</Card>
// 					</div>
// 				</section>

// 				{/* Tuition & Payment Plans Section */}
// 				<section id="tuition" className="mb-16">
// 					<h2 className="text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
// 						Tuition Fees & Payment Plans
// 					</h2>
// 					<div className="max-w-6xl mx-auto">
// 						{/* Registration Fee */}
// 						<Card className="mb-8 border-2 border-green-200">
// 							<CardContent className="p-8 text-center">
// 								<h3 className="text-2xl font-bold text-gray-900 mb-2">
// 									One-Time Registration Fee
// 								</h3>
// 								<p className="text-4xl font-bold text-green-600 mb-2">$150</p>
// 								<p className="text-gray-600">
// 									Non-refundable fee covers enrollment processing, student
// 									materials, and orientation.
// 								</p>
// 							</CardContent>
// 						</Card>

// 						{/* Program Tiers */}
// 						<div className="grid md:grid-cols-3 gap-6 mb-8">
// 							<Card
// 								className={`cursor-pointer transition-all p-4 ${
// 									selectedPlan === "baby"
// 										? "border-4 border-green-500 shadow-2xl"
// 										: "hover:shadow-xl"
// 								}`}
// 								onClick={() => handlePlanSelect("baby")}
// 								role="button"
// 								aria-pressed={selectedPlan === "baby"}>
// 								<CardHeader className="text-center pb-4">
// 									<div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
// 										<svg
// 											className="w-10 h-10 text-white"
// 											fill="none"
// 											stroke="currentColor"
// 											viewBox="0 0 24 24">
// 											<path
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 												strokeWidth={2}
// 												d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// 											/>
// 										</svg>
// 									</div>
// 									<CardTitle className="text-2xl">Baby Class</CardTitle>
// 									<p className="text-gray-600">6 months - 18 months</p>
// 								</CardHeader>
// 								<CardContent className="text-center">
// 									<p className="text-4xl font-bold text-gray-900 mb-4">
// 										$450<span className="text-lg text-gray-600">/month</span>
// 									</p>
// 									<ul className="text-left space-y-2 text-gray-600">
// 										<li>1:4 teacher-child ratio</li>
// 										<li>Meals & snacks included</li>
// 										<li>Diapers & wipes provided</li>
// 										<li>Daily reports</li>
// 									</ul>
// 								</CardContent>
// 							</Card>

// 							<Card
// 								className={`cursor-pointer transition-all p-4 ${
// 									selectedPlan === "toddler"
// 										? "border-4 border-green-500 shadow-2xl"
// 										: "hover:shadow-xl"
// 								}`}
// 								onClick={() => handlePlanSelect("toddler")}
// 								role="button"
// 								aria-pressed={selectedPlan === "toddler"}>
// 								<CardHeader className="text-center pb-4">
// 									<div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
// 										<svg
// 											className="w-10 h-10 text-white"
// 											fill="none"
// 											stroke="currentColor"
// 											viewBox="0 0 24 24">
// 											<path
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 												strokeWidth={2}
// 												d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z"
// 											/>
// 										</svg>
// 									</div>
// 									<CardTitle className="text-2xl">Toddler Class</CardTitle>
// 									<p className="text-gray-600">18 months - 3 years</p>
// 								</CardHeader>
// 								<CardContent className="text-center">
// 									<p className="text-4xl font-bold text-gray-900 mb-4">
// 										$400<span className="text-lg text-gray-600">/month</span>
// 									</p>
// 									<ul className="text-left space-y-2 text-gray-600">
// 										<li>1:6 teacher-child ratio</li>
// 										<li>Meals & snacks included</li>
// 										<li>Potty training support</li>
// 										<li>Learning activities</li>
// 									</ul>
// 								</CardContent>
// 							</Card>

// 							<Card
// 								className={`cursor-pointer transition-all p-4 ${
// 									selectedPlan === "preschool"
// 										? "border-4 border-green-500 shadow-2xl"
// 										: "hover:shadow-xl"
// 								}`}
// 								onClick={() => handlePlanSelect("preschool")}
// 								role="button"
// 								aria-pressed={selectedPlan === "preschool"}>
// 								<CardHeader className="text-center pb-4">
// 									<div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
// 										<svg
// 											className="w-10 h-10 text-white"
// 											fill="none"
// 											stroke="currentColor"
// 											viewBox="0 0 24 24">
// 											<path
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 												strokeWidth={2}
// 												d="M12 6.253v13"
// 											/>
// 										</svg>
// 									</div>
// 									<CardTitle className="text-2xl">Pre-Primary</CardTitle>
// 									<p className="text-gray-600">3 - 5 years</p>
// 								</CardHeader>
// 								<CardContent className="text-center">
// 									<p className="text-4xl font-bold text-gray-900 mb-4">
// 										$350<span className="text-lg text-gray-600">/month</span>
// 									</p>
// 									<ul className="text-left space-y-2 text-gray-600">
// 										<li>1:10 teacher-child ratio</li>
// 										<li>Meals & snacks included</li>
// 										<li>School readiness program</li>
// 										<li>Extra-curricular activities</li>
// 									</ul>
// 								</CardContent>
// 							</Card>
// 						</div>

// 						{/* Payment Options */}
// 						<Card className="border-2 border-blue-200">
// 							<CardHeader>
// 								<CardTitle className="text-2xl text-center">
// 									Flexible Payment Options
// 								</CardTitle>
// 							</CardHeader>
// 							<CardContent>
// 								<div className="grid md:grid-cols-3 gap-6">
// 									<div className="text-center p-6 bg-gray-50 rounded-lg">
// 										<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
// 											<svg
// 												className="w-8 h-8 text-blue-600"
// 												fill="none"
// 												stroke="currentColor"
// 												viewBox="0 0 24 24">
// 												<path
// 													strokeLinecap="round"
// 													strokeLinejoin="round"
// 													strokeWidth={2}
// 													d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2"
// 												/>
// 											</svg>
// 										</div>
// 										<h4 className="font-bold text-lg mb-2">Annually</h4>
// 										<p className="text-gray-600 text-sm mb-2">
// 											Pay for full year upfront
// 										</p>
// 										<p className="text-purple-600 font-semibold">Save 10%</p>
// 									</div>

// 									<div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-400">
// 										<Badge className="mb-2 bg-green-600">Most Popular</Badge>
// 										<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
// 											<svg
// 												className="w-8 h-8 text-green-600"
// 												fill="none"
// 												stroke="currentColor"
// 												viewBox="0 0 24 24">
// 												<path
// 													strokeLinecap="round"
// 													strokeLinejoin="round"
// 													strokeWidth={2}
// 													d="M9 7h6m0 10v-3"
// 												/>
// 											</svg>
// 										</div>
// 										<h4 className="font-bold text-lg mb-2">Termly</h4>
// 										<p className="text-gray-600 text-sm mb-2">
// 											Pay per term (3 months)
// 										</p>
// 										<p className="text-green-600 font-semibold">Save 5%</p>
// 									</div>

// 									<div className="text-center p-6 bg-purple-50 rounded-lg">
// 										<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
// 											<svg
// 												className="w-8 h-8 text-purple-600"
// 												fill="none"
// 												stroke="currentColor"
// 												viewBox="0 0 24 24">
// 												<path
// 													strokeLinecap="round"
// 													strokeLinejoin="round"
// 													strokeWidth={2}
// 													d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
// 												/>
// 											</svg>
// 										</div>
// 										<h4 className="font-bold text-lg mb-2">Monthly</h4>
// 										<p className="text-gray-600 text-sm">
// 											Pay at the beginning of each month
// 										</p>
// 									</div>
// 								</div>

// 								<div className="mt-8 p-6 bg-gray-50 rounded-lg">
// 									<h4 className="font-semibold text-lg mb-4">
// 										Payment Methods Accepted:
// 									</h4>
// 									<div className="flex flex-wrap gap-4 justify-center items-center">
// 										<Badge variant="outline" className="text-base px-4 py-2">
// 											Cash
// 										</Badge>
// 										<Badge variant="outline" className="text-base px-4 py-2">
// 											Check
// 										</Badge>
// 										<Badge variant="outline" className="text-base px-4 py-2">
// 											Bank Transfer
// 										</Badge>
// 										<Badge variant="outline" className="text-base px-4 py-2">
// 											Mobile Money
// 										</Badge>
// 										<Badge variant="outline" className="text-base px-4 py-2">
// 											Card
// 										</Badge>
// 									</div>
// 								</div>

// 								<div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
// 									<h5 className="font-semibold text-amber-900 mb-2">
// 										Sibling Discount
// 									</h5>
// 									<p className="text-amber-800 text-sm">
// 										Enroll 2 or more siblings and receive 10% off the second
// 										child's tuition and 15% off each additional child!
// 									</p>
// 								</div>
// 							</CardContent>
// 						</Card>
// 					</div>
// 				</section>

// 				{/* Enrollment Forms Section */}
// 				<section id="forms" className="mb-16">
// 					<h2 className="text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
// 						Enrollment Forms
// 					</h2>
// 					<div className="max-w-4xl mx-auto">
// 						<Card>
// 							<CardContent className="p-8">
// 								<p className="text-gray-600 mb-6 text-center">
// 									Download and complete these forms, or fill them out during
// 									your visit.
// 								</p>
// 								<div className="grid md:grid-cols-2 gap-4">
// 									{/* Each button links to a PDF (place them in public/forms/) */}
// 									<a
// 										href="/forms/enrollment-application.pdf"
// 										target="_blank"
// 										rel="noreferrer"
// 										className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-left">
// 										<div className="w-12 h-12 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
// 											<svg
// 												className="w-6 h-6 text-red-600"
// 												fill="none"
// 												stroke="currentColor"
// 												viewBox="0 0 24 24">
// 												<path
// 													strokeLinecap="round"
// 													strokeLinejoin="round"
// 													strokeWidth={2}
// 													d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
// 												/>
// 											</svg>
// 										</div>
// 										<div className="flex-1">
// 											<h4 className="font-semibold text-gray-900">
// 												Enrollment Application
// 											</h4>
// 											<p className="text-sm text-gray-600">PDF - 2 pages</p>
// 										</div>
// 										<svg
// 											className="w-5 h-5 text-gray-400"
// 											fill="none"
// 											stroke="currentColor"
// 											viewBox="0 0 24 24">
// 											<path
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 												strokeWidth={2}
// 												d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1"
// 											/>
// 										</svg>
// 									</a>

// 									<a
// 										href="/forms/medical-form.pdf"
// 										target="_blank"
// 										rel="noreferrer"
// 										className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-left">
// 										<div className="w-12 h-12 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
// 											<svg
// 												className="w-6 h-6 text-red-600"
// 												fill="none"
// 												stroke="currentColor"
// 												viewBox="0 0 24 24">
// 												<path
// 													strokeLinecap="round"
// 													strokeLinejoin="round"
// 													strokeWidth={2}
// 													d="M7 21h10a2 2 0 002-2V9.414"
// 												/>
// 											</svg>
// 										</div>
// 										<div className="flex-1">
// 											<h4 className="font-semibold text-gray-900">
// 												Medical Information Form
// 											</h4>
// 											<p className="text-sm text-gray-600">PDF - 1 page</p>
// 										</div>
// 										<svg
// 											className="w-5 h-5 text-gray-400"
// 											fill="none"
// 											stroke="currentColor"
// 											viewBox="0 0 24 24">
// 											<path
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 												strokeWidth={2}
// 												d="M4 16v1a3 3 0 003 3"
// 											/>
// 										</svg>
// 									</a>

// 									<a
// 										href="/forms/emergency-contact.pdf"
// 										target="_blank"
// 										rel="noreferrer"
// 										className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-left">
// 										<div className="w-12 h-12 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
// 											<svg
// 												className="w-6 h-6 text-red-600"
// 												fill="none"
// 												stroke="currentColor"
// 												viewBox="0 0 24 24">
// 												<path
// 													strokeLinecap="round"
// 													strokeLinejoin="round"
// 													strokeWidth={2}
// 													d="M7 21h10a2 2 0 002-2V9.414"
// 												/>
// 											</svg>
// 										</div>
// 										<div className="flex-1">
// 											<h4 className="font-semibold text-gray-900">
// 												Emergency Contact Form
// 											</h4>
// 											<p className="text-sm text-gray-600">PDF - 1 page</p>
// 										</div>
// 										<svg
// 											className="w-5 h-5 text-gray-400"
// 											fill="none"
// 											stroke="currentColor"
// 											viewBox="0 0 24 24">
// 											<path
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 												strokeWidth={2}
// 												d="M4 16v1a3 3 0 003 3"
// 											/>
// 										</svg>
// 									</a>

// 									<a
// 										href="/forms/authorization-release.pdf"
// 										target="_blank"
// 										rel="noreferrer"
// 										className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-left">
// 										<div className="w-12 h-12 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
// 											<svg
// 												className="w-6 h-6 text-red-600"
// 												fill="none"
// 												stroke="currentColor"
// 												viewBox="0 0 24 24">
// 												<path
// 													strokeLinecap="round"
// 													strokeLinejoin="round"
// 													strokeWidth={2}
// 													d="M7 21h10a2 2 0 002-2"
// 												/>
// 											</svg>
// 										</div>
// 										<div className="flex-1">
// 											<h4 className="font-semibold text-gray-900">
// 												Authorization & Release Form
// 											</h4>
// 											<p className="text-sm text-gray-600">PDF - 1 page</p>
// 										</div>
// 										<svg
// 											className="w-5 h-5 text-gray-400"
// 											fill="none"
// 											stroke="currentColor"
// 											viewBox="0 0 24 24">
// 											<path
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 												strokeWidth={2}
// 												d="M4 16v1a3 3 0 003 3"
// 											/>
// 										</svg>
// 									</a>
// 								</div>

// 								<div className="mt-8 text-center">
// 									<Button
// 										size="lg"
// 										className="bg-green-600 hover:bg-green-700"
// 										onClick={handleDownloadAll}>
// 										<svg
// 											className="w-5 h-5 mr-2"
// 											fill="none"
// 											stroke="currentColor"
// 											viewBox="0 0 24 24">
// 											<path
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 												strokeWidth={2}
// 												d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1"
// 											/>
// 										</svg>
// 										Download All Forms (ZIP)
// 									</Button>
// 								</div>
// 							</CardContent>
// 						</Card>
// 					</div>
// 				</section>

// 				{/* Waiting List Section */}
// 				<section id="waitlist" className="mb-16">
// 					<div className="max-w-4xl mx-auto">
// 						<Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
// 							<CardHeader className="text-center">
// 								<div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
// 									<svg
// 										className="w-8 h-8 text-amber-600"
// 										fill="none"
// 										stroke="currentColor"
// 										viewBox="0 0 24 24">
// 										<path
// 											strokeLinecap="round"
// 											strokeLinejoin="round"
// 											strokeWidth={2}
// 											d="M12 8v4l3 3m6-3a9 9 0 11-18 0"
// 										/>
// 									</svg>
// 								</div>
// 								<CardTitle className="text-3xl">
// 									Join Our Waiting List
// 								</CardTitle>
// 								<p className="text-gray-600 mt-2">
// 									Spaces fill up quickly! Add your name to be notified when
// 									spots become available.
// 								</p>
// 							</CardHeader>
// 							<CardContent className="p-8">
// 								<form
// 									onSubmit={handleWaitlist}
// 									className="max-w-xl mx-auto space-y-4">
// 									<div>
// 										<label className="block text-sm font-medium text-gray-700 mb-1">
// 											Full Name
// 										</label>
// 										<input
// 											value={waitlistName}
// 											onChange={(e) => setWaitlistName(e.target.value)}
// 											type="text"
// 											className="w-full px-4 py-2 border border-gray-300 rounded-lg"
// 											placeholder="Your full name"
// 											required
// 										/>
// 									</div>
// 									<div>
// 										<label className="block text-sm font-medium text-gray-700 mb-1">
// 											Phone Number
// 										</label>
// 										<input
// 											value={waitlistPhone}
// 											onChange={(e) => setWaitlistPhone(e.target.value)}
// 											type="tel"
// 											className="w-full px-4 py-2 border border-gray-300 rounded-lg"
// 											placeholder="+256 7xx xxx xxx"
// 											required
// 										/>
// 									</div>
// 									<div className="text-center">
// 										<Button
// 											type="submit"
// 											size="lg"
// 											className="bg-amber-600 hover:bg-amber-700"
// 											disabled={submittingWaitlist}>
// 											{submittingWaitlist
// 												? "Joining..."
// 												: "Add Me to Waiting List"}
// 										</Button>
// 									</div>
// 								</form>
// 							</CardContent>
// 						</Card>
// 					</div>
// 				</section>

// 				{/* Schedule Tour Section */}
// 				<section id="tour" className="mb-16">
// 					<h2 className="text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
// 						Schedule a Tour
// 					</h2>
// 					<div className="max-w-4xl mx-auto">
// 						<Card className="border-2 border-green-200">
// 							<CardContent className="p-8">
// 								<div className="grid md:grid-cols-2 gap-8 mb-8">
// 									<div>
// 										<h3 className="text-2xl font-bold text-gray-900 mb-4">
// 											See Our School in Action
// 										</h3>
// 										<p className="text-gray-600 mb-6">
// 											Experience our warm, nurturing environment firsthand. Tour
// 											our facilities, meet our teachers, and see why parents
// 											trust us with their children.
// 										</p>
// 										<div className="space-y-4">
// 											<div className="flex items-center gap-3">
// 												<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
// 													<svg
// 														className="w-5 h-5 text-green-600"
// 														fill="none"
// 														stroke="currentColor"
// 														viewBox="0 0 24 24">
// 														<path
// 															strokeLinecap="round"
// 															strokeLinejoin="round"
// 															strokeWidth={2}
// 															d="M12 8v4l3 3m6-3a9 9 0 11-18 0"
// 														/>
// 													</svg>
// 												</div>
// 												<div>
// 													<p className="font-semibold text-gray-900">
// 														30–45 minute tour
// 													</p>
// 													<p className="text-sm text-gray-600">
// 														Comprehensive facility walkthrough
// 													</p>
// 												</div>
// 											</div>
// 											<div className="flex items-center gap-3">
// 												<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
// 													<svg
// 														className="w-5 h-5 text-green-600"
// 														fill="none"
// 														stroke="currentColor"
// 														viewBox="0 0 24 24">
// 														<path
// 															strokeLinecap="round"
// 															strokeLinejoin="round"
// 															strokeWidth={2}
// 															d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857"
// 														/>
// 													</svg>
// 												</div>
// 												<div>
// 													<p className="font-semibold text-gray-900">
// 														Meet our staff
// 													</p>
// 													<p className="text-sm text-gray-600">
// 														Connect with teachers and administrators
// 													</p>
// 												</div>
// 											</div>
// 											<div className="flex items-center gap-3">
// 												<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
// 													<svg
// 														className="w-5 h-5 text-green-600"
// 														fill="none"
// 														stroke="currentColor"
// 														viewBox="0 0 24 24">
// 														<path
// 															strokeLinecap="round"
// 															strokeLinejoin="round"
// 															strokeWidth={2}
// 															d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
// 														/>
// 													</svg>
// 												</div>
// 												<div>
// 													<p className="font-semibold text-gray-900">
// 														Ask questions
// 													</p>
// 													<p className="text-sm text-gray-600">
// 														Get all your concerns addressed
// 													</p>
// 												</div>
// 											</div>
// 										</div>
// 									</div>

// 									{/* Tour Scheduling Form */}
// 									<form onSubmit={handleSubmit} className="space-y-4">
// 										<div>
// 											<label className="block text-sm font-medium text-gray-700 mb-1">
// 												Parent/Guardian Name *
// 											</label>
// 											<input
// 												type="text"
// 												name="parentName"
// 												required
// 												value={formData.parentName}
// 												onChange={handleInputChange}
// 												className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
// 												placeholder="Your full name"
// 											/>
// 										</div>

// 										<div>
// 											<label className="block text-sm font-medium text-gray-700 mb-1">
// 												Email Address *
// 											</label>
// 											<input
// 												type="email"
// 												name="email"
// 												required
// 												value={formData.email}
// 												onChange={handleInputChange}
// 												className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
// 												placeholder="your@email.com"
// 											/>
// 										</div>

// 										<div>
// 											<label className="block text-sm font-medium text-gray-700 mb-1">
// 												Phone Number *
// 											</label>
// 											<input
// 												type="tel"
// 												name="phone"
// 												required
// 												value={formData.phone}
// 												onChange={handleInputChange}
// 												className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
// 												placeholder="+256 123 456 789"
// 											/>
// 										</div>

// 										<div>
// 											<label className="block text-sm font-medium text-gray-700 mb-1">
// 												Child's Name
// 											</label>
// 											<input
// 												type="text"
// 												name="childName"
// 												value={formData.childName}
// 												onChange={handleInputChange}
// 												className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
// 												placeholder="Child's full name"
// 											/>
// 										</div>

// 										<div>
// 											<label className="block text-sm font-medium text-gray-700 mb-1">
// 												Child's Age
// 											</label>
// 											<input
// 												type="text"
// 												name="childAge"
// 												value={formData.childAge}
// 												onChange={handleInputChange}
// 												className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
// 												placeholder="e.g., 2 years"
// 											/>
// 										</div>

// 										<div>
// 											<label className="block text-sm font-medium text-gray-700 mb-1">
// 												Program (select or click plan)
// 											</label>
// 											<select
// 												name="program"
// 												value={formData.program}
// 												onChange={handleInputChange}
// 												className="w-full px-4 py-2 border border-gray-300 rounded-lg">
// 												<option value="">Select program</option>
// 												<option value="baby">Baby Class</option>
// 												<option value="toddler">Toddler Class</option>
// 												<option value="preschool">Pre-Primary</option>
// 											</select>
// 										</div>

// 										<div className="grid grid-cols-2 gap-4">
// 											<div>
// 												<label className="block text-sm font-medium text-gray-700 mb-1">
// 													Preferred Date
// 												</label>
// 												<input
// 													type="date"
// 													name="tourDate"
// 													value={formData.tourDate}
// 													onChange={handleInputChange}
// 													className="w-full px-4 py-2 border border-gray-300 rounded-lg"
// 												/>
// 											</div>
// 											<div>
// 												<label className="block text-sm font-medium text-gray-700 mb-1">
// 													Preferred Time
// 												</label>
// 												<select
// 													name="tourTime"
// 													value={formData.tourTime}
// 													onChange={handleInputChange}
// 													className="w-full px-4 py-2 border border-gray-300 rounded-lg">
// 													<option value="">Select time</option>
// 													<option value="9:00 AM">9:00 AM</option>
// 													<option value="10:00 AM">10:00 AM</option>
// 													<option value="11:00 AM">11:00 AM</option>
// 													<option value="1:00 PM">1:00 PM</option>
// 													<option value="2:00 PM">2:00 PM</option>
// 													<option value="3:00 PM">3:00 PM</option>
// 												</select>
// 											</div>
// 										</div>

// 										<div>
// 											<label className="block text-sm font-medium text-gray-700 mb-1">
// 												Message / Questions
// 											</label>
// 											<textarea
// 												name="message"
// 												value={formData.message}
// 												onChange={handleInputChange}
// 												className="w-full px-4 py-2 border border-gray-300 rounded-lg"
// 												rows={3}
// 												placeholder="Any additional info or questions"
// 											/>
// 										</div>

// 										<Button
// 											type="submit"
// 											className="w-full bg-green-600 hover:bg-green-700"
// 											size="lg"
// 											disabled={submittingTour}>
// 											{submittingTour ? "Scheduling..." : "Schedule My Tour"}
// 										</Button>
// 									</form>
// 								</div>

// 								<div className="border-t pt-6">
// 									<p className="text-center text-gray-600 mb-4">
// 										Or reach out directly:
// 									</p>
// 									<div className="flex flex-wrap gap-4 justify-center">
// 										<a
// 											href="tel:+256123456789"
// 											className="flex items-center gap-2 text-green-600 hover:text-green-700">
// 											<svg
// 												className="w-5 h-5"
// 												fill="none"
// 												stroke="currentColor"
// 												viewBox="0 0 24 24">
// 												<path
// 													strokeLinecap="round"
// 													strokeLinejoin="round"
// 													strokeWidth={2}
// 													d="M3 5a2 2 0 012-2h3.28"
// 												/>
// 											</svg>
// 											Call: +256 123 456 789
// 										</a>
// 										<a
// 											href="mailto:info@damakids.edu"
// 											className="flex items-center gap-2 text-green-600 hover:text-green-700">
// 											<svg
// 												className="w-5 h-5"
// 												fill="none"
// 												stroke="currentColor"
// 												viewBox="0 0 24 24">
// 												<path
// 													strokeLinecap="round"
// 													strokeLinejoin="round"
// 													strokeWidth={2}
// 													d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
// 												/>
// 											</svg>
// 											Email: info@damakids.edu
// 										</a>
// 									</div>
// 								</div>
// 							</CardContent>
// 						</Card>
// 					</div>
// 				</section>

// 				{/* CTA Section */}
// 				<div className="text-center mb-12">
// 					<Card className="p-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0">
// 						<h3 className="text-3xl font-bold mb-4">Ready to Enroll?</h3>
// 						<p className="text-xl mb-6 text-green-50">
// 							Join our family and give your child an exceptional early education
// 							experience
// 						</p>
// 						<div className="flex flex-wrap gap-4 justify-center">
// 							<Link href="/">
// 								<Button
// 									className="bg-white text-green-600 hover:bg-gray-100"
// 									size="lg">
// 									Back to Home
// 								</Button>
// 							</Link>

// 							{/* Updated Schedule a Visit CTA as requested */}
// 							<Link href="/enrollment#tour">
// 								<Button
// 									size="lg"
// 									className="bg-white text-green-700 hover:bg-gray-100">
// 									Schedule a Visit
// 								</Button>
// 							</Link>

// 							<Link href="/resources">
// 								<Button
// 									variant="outline"
// 									className="border-white text-white hover:bg-white/10"
// 									size="lg">
// 									Parent Resources
// 								</Button>
// 							</Link>
// 						</div>
// 					</Card>
// 				</div>
// 			</main>
// 		</div>
// 	);
// }

//-------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
"use client";
import React from "react";
// FIX 1: Remove '/enrollment' from all component paths
import Steps from "@/components/Steps"; // Changed from named to default import, see Note below
import RequiredDocs from "@/components/RequiredDocs";
import TuitionPlans from "@/components/TuitionPlans";
import DownloadForms from "@/components/DownloadForms";
import WaitingList from "@/components/WaitingList"; // Assuming this exists in components
import TourSchedule from "@/components/TourSchedule";
import BlogSection from "@/components/BlogSection";
import Partners from "@/components/Partners";
import SocialLinks from "@/components/SocialLinks";
import LiveChat from "@/components/LiveChat";
import VirtualTour from "@/components/VirtualTour"; // Assuming this exists in components
import TransportGallery from "@/components/TransportGallery";
import MealPlan from "@/components/MealPlan";
import Analytics from "@/components/Analytics";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function EnrollmentPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
			<Analytics />
			<LiveChat />

			<header className="bg-white shadow sticky top-0 z-40">
				<div className="container mx-auto px-4 py-4 flex items-center justify-between">
					<Link href="/" className="flex items-center gap-3">
						<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
							<img src="/images/logo.jpg" alt="DK" />
						</div>
						<div>
							<h1 className="font-bold text-lg text-gray-800">DAMAKIDS</h1>
							<p className="text-xs text-gray-600">Early Childhood Centre</p>
						</div>
					</Link>
					<nav className="hidden md:flex gap-3 items-center">
						<a
							href="#process"
							className="text-sm text-green-700 hover:underline">
							Process
						</a>
						<a
							href="#documents"
							className="text-sm text-green-700 hover:underline">
							Documents
						</a>
						<a
							href="#tuition"
							className="text-sm text-green-700 hover:underline">
							Tuition
						</a>
						<a href="#forms" className="text-sm text-green-700 hover:underline">
							Forms
						</a>
						<a href="#tour" className="text-sm text-green-700 hover:underline">
							Tour
						</a>
						<Link href="/contact">
							<Button variant="outline">Contact</Button>
						</Link>
					</nav>
				</div>
			</header>

			<main className="container mx-auto px-4 py-12">
				<section className="text-center mb-10">
					<div className="max-w-3xl mx-auto">
						<div className="mb-4 inline-block bg-green-100 text-green-800 px-3 py-1 rounded">
							Start Your Journey
						</div>
						<h2 className="text-4xl font-bold mb-2">
							Enrollment & School Information
						</h2>
						<p className="text-gray-600 mb-6">
							Everything parents need — admission process, forms, tours, meal
							plans, transportation and more.
						</p>
						<div className="flex gap-3 justify-center flex-wrap">
							<a href="#process">
								<Button
									variant="outline"
									className="border-green-500 text-green-600">
									Enrollment Process
								</Button>
							</a>
							<a href="#documents">
								<Button
									variant="outline"
									className="border-green-500 text-green-600">
									Required Documents
								</Button>
							</a>
							<a href="#tuition">
								<Button
									variant="outline"
									className="border-green-500 text-green-600">
									Tuition & Plans
								</Button>
							</a>
							<a href="#forms">
								<Button
									variant="outline"
									className="border-green-500 text-green-600">
									Forms
								</Button>
							</a>
							<a href="#tour">
								<Button
									variant="outline"
									className="border-green-500 text-green-600">
									Schedule Tour
								</Button>
							</a>
						</div>
					</div>
				</section>

				<Steps />

				{/* Add other sections if needed */}
				<RequiredDocs />
				<TuitionPlans />
				<DownloadForms />
			</main>

			{/* CTA Section */}
			<div className="text-center mt-10">
				<Card className="p-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0">
					<h3 className="text-3xl font-bold mb-4">Ready to Visit?</h3>
					<p className="text-lg mb-6 text-green-50">
						Schedule a tour and experience DAMAKIDS in person.
					</p>

					<Link href="/enrollment#tour">
						<Button
							size="lg"
							className="bg-white text-green-700 hover:bg-gray-100">
							Schedule a Visit
						</Button>
					</Link>
				</Card>
			</div>
		</div>
	);
}
