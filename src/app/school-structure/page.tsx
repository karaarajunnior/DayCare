"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const facilityImages = [
	{
		url: "https://images.unsplash.com/photo-1587616211892-cc1b8e6b9e36?w=1200&h=800&fit=crop&q=80",
		title: "Main Building",
		description: "Our beautiful main building with modern classrooms",
	},
	{
		url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=800&fit=crop&q=80",
		title: "Outdoor Play Area",
		description: "Spacious playground with safe and fun equipment",
	},
	{
		url: "https://images.unsplash.com/photo-1614933423693-01de0e346c46?w=1200&h=800&fit=crop&q=80",
		title: "Colorful Classrooms",
		description: "Bright, engaging learning spaces designed for young minds",
	},
	{
		url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop&q=80",
		title: "Creative Arts Studio",
		description: "Dedicated space for arts, crafts, and creative expression",
	},
	{
		url: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1200&h=800&fit=crop&q=80",
		title: "Library Corner",
		description: "Cozy reading nook filled with age-appropriate books",
	},
	{
		url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=800&fit=crop&q=80",
		title: "Indoor Play Space",
		description: "Climate-controlled indoor activity area",
	},
	{
		url: "https://images.unsplash.com/photo-1631556805751-b4b60cad28e7?w=1200&h=800&fit=crop&q=80",
		title: "Garden Area",
		description: "Teaching garden where children learn about nature",
	},
	{
		url: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop&q=80",
		title: "School Transport",
		description: "Safe and comfortable school van for pickups and dropoffs",
	},
	{
		url: "https://images.unsplash.com/photo-1577896851905-dc2914a279b6?w=1200&h=800&fit=crop&q=80",
		title: "Dining Area",
		description: "Clean and spacious cafeteria for meal times",
	},
	{
		url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&h=800&fit=crop&q=80",
		title: "Music & Movement Room",
		description: "Special room for music activities and physical development",
	},
];

export default function SchoolStructure() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextImage = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === facilityImages.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const prevImage = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? facilityImages.length - 1 : prevIndex - 1,
		);
	};

	const goToImage = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
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
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-12">
						<h1 className="text-5xl font-heading font-bold text-gray-900 mb-4">
							Our School Structure
						</h1>
						<p className="text-xl text-gray-600">
							Explore our modern facilities designed for optimal learning and
							development
						</p>
					</div>

					{/* Image Carousel */}
					<Card className="overflow-hidden shadow-2xl">
						<div className="relative">
							{/* Main Image */}
							<div className="relative h-[500px] bg-gray-100">
								<img
									src={facilityImages[currentIndex].url}
									alt={facilityImages[currentIndex].title}
									className="w-full h-full object-cover"
								/>

								{/* Navigation Arrows */}
								<button
									onClick={prevImage}
									className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
									aria-label="Previous image">
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
									onClick={nextImage}
									className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
									aria-label="Next image">
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

								{/* Image Counter */}
								<div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
									{currentIndex + 1} / {facilityImages.length}
								</div>
							</div>

							{/* Image Info */}
							<div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
								<h3 className="text-2xl font-heading font-bold mb-2">
									{facilityImages[currentIndex].title}
								</h3>
								<p className="text-green-50">
									{facilityImages[currentIndex].description}
								</p>
							</div>

							{/* Thumbnail Navigation */}
							<div className="bg-white p-6">
								<div className="flex gap-3 overflow-x-auto pb-2">
									{facilityImages.map((image, index) => (
										<button
											key={index}
											onClick={() => goToImage(index)}
											className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-4 transition-all ${
												index === currentIndex
													? "border-green-500 scale-110"
													: "border-gray-200 hover:border-green-300 opacity-60 hover:opacity-100"
											}`}>
											<img
												src={image.url}
												alt={image.title}
												className="w-full h-full object-cover"
											/>
										</button>
									))}
								</div>
							</div>
						</div>
					</Card>

					{/* Additional Info */}
					<div className="mt-12 grid md:grid-cols-2 gap-6">
						<Card className="p-6">
							<h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
								Safety First
							</h3>
							<p className="text-gray-600">
								All our facilities are designed with child safety as the top
								priority. We maintain strict safety standards and regular
								inspections.
							</p>
						</Card>
						<Card className="p-6">
							<h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
								Modern Equipment
							</h3>
							<p className="text-gray-600">
								Our school is equipped with age-appropriate learning materials
								and play equipment to support holistic development.
							</p>
						</Card>
					</div>

					{/* CTA */}
					<div className="mt-12 text-center">
						<Link href="/staff">
							<Button size="lg" className="mr-4">
								Meet Our Staff
							</Button>
						</Link>
						<Link href="/">
							<Button size="lg" variant="outline">
								Back to Home
							</Button>
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
}
