import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NutritionPage() {
	const mealPlans = [
		{
			day: "Monday",
			breakfast: "Oatmeal with fresh fruits & milk",
			snack: "Carrot sticks with hummus",
			lunch: "Grilled chicken, rice, steamed vegetables",
			afternoon: "Yogurt with granola",
		},
		{
			day: "Tuesday",
			breakfast: "Scrambled eggs, whole wheat toast",
			snack: "Apple slices with peanut butter",
			lunch: "Fish fillet, mashed potatoes, green beans",
			afternoon: "Cheese cubes with crackers",
		},
		{
			day: "Wednesday",
			breakfast: "Pancakes with banana & honey",
			snack: "Orange segments",
			lunch: "Beef stew with root vegetables, bread",
			afternoon: "Fruit smoothie",
		},
		{
			day: "Thursday",
			breakfast: "Cereal with milk & berries",
			snack: "Cucumber slices with ranch dip",
			lunch: "Pasta with tomato sauce, mixed salad",
			afternoon: "Mini muffins & milk",
		},
		{
			day: "Friday",
			breakfast: "French toast with fruit compote",
			snack: "Trail mix (nuts & dried fruits)",
			lunch: "Rice & beans, plantain, coleslaw",
			afternoon: "Fruit popsicles",
		},
	];

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
						Healthy Meals for Growing Minds
					</div>
					<h1 className="text-5xl font-bold text-gray-900 mb-4">
						Nutrition & Food Program
					</h1>
					<p className="text-xl text-gray-600">
						Delicious, nutritious meals prepared fresh daily to fuel your
						child's growth and development
					</p>
				</div>

				{/* Our Approach */}
				<section className="mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
						Our Nutritional Approach
					</h2>
					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						<Card className="border-t-4 border-t-green-500">
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
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<CardTitle className="text-center">Fresh Ingredients</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 text-center">
									We source fresh, local ingredients daily to ensure the highest
									quality and nutritional value
								</p>
							</CardContent>
						</Card>

						<Card className="border-t-4 border-t-emerald-500">
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
											d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
										/>
									</svg>
								</div>
								<CardTitle className="text-center">Balanced Meals</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 text-center">
									Every meal includes proteins, whole grains, fruits,
									vegetables, and dairy for complete nutrition
								</p>
							</CardContent>
						</Card>

						<Card className="border-t-4 border-t-green-600">
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
											d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
										/>
									</svg>
								</div>
								<CardTitle className="text-center">Allergy Aware</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 text-center">
									We accommodate all dietary restrictions and food allergies
									with alternative meal options
								</p>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Weekly Menu */}
				<section className="mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
						Sample Weekly Menu
					</h2>
					<div className="max-w-5xl mx-auto">
						<Card>
							<CardContent className="p-0">
								<div className="overflow-x-auto">
									<table className="w-full">
										<thead className="bg-green-50">
											<tr>
												<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
													Day
												</th>
												<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
													Breakfast
												</th>
												<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
													Morning Snack
												</th>
												<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
													Lunch
												</th>
												<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
													Afternoon Snack
												</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-200">
											{mealPlans.map((meal, idx) => (
												<tr key={idx} className="hover:bg-gray-50">
													<td className="px-6 py-4 font-medium text-gray-900">
														{meal.day}
													</td>
													<td className="px-6 py-4 text-gray-600">
														{meal.breakfast}
													</td>
													<td className="px-6 py-4 text-gray-600">
														{meal.snack}
													</td>
													<td className="px-6 py-4 text-gray-600">
														{meal.lunch}
													</td>
													<td className="px-6 py-4 text-gray-600">
														{meal.afternoon}
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</CardContent>
						</Card>
						<p className="text-center text-gray-600 mt-4 text-sm">
							* Menu subject to change based on seasonal availability
						</p>
					</div>
				</section>

				{/* Dietary Information */}
				<section className="mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
						Special Dietary Needs
					</h2>
					<div className="max-w-4xl mx-auto">
						<Card>
							<CardContent className="p-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-xl font-semibold text-gray-900 mb-2">
											Food Allergies
										</h3>
										<p className="text-gray-600">
											We maintain a comprehensive allergy management system.
											Parents must inform us of any allergies during enrollment,
											and we ensure all staff are aware of each child's dietary
											restrictions.
										</p>
									</div>
									<div>
										<h3 className="text-xl font-semibold text-gray-900 mb-2">
											Vegetarian & Vegan Options
										</h3>
										<p className="text-gray-600">
											We offer plant-based alternatives for every meal. Our
											vegetarian and vegan options are nutritionally balanced
											with proper protein sources.
										</p>
									</div>
									<div>
										<h3 className="text-xl font-semibold text-gray-900 mb-2">
											Religious Dietary Requirements
										</h3>
										<p className="text-gray-600">
											We respect and accommodate all religious dietary
											requirements including halal, kosher, and other
											faith-based nutritional needs.
										</p>
									</div>
									<div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
										<p className="text-amber-900 font-medium">
											Please discuss your child's specific dietary needs with
											our nutrition coordinator during enrollment or anytime
											throughout the year.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Nutrition Education */}
				<section className="mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
						Teaching Healthy Habits
					</h2>
					<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
						<Card>
							<CardHeader>
								<CardTitle>Mealtime Learning</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3 text-gray-600">
									<li className="flex items-start gap-2">
										<svg
											className="w-5 h-5 text-green-600 mt-0.5"
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
										<span>
											Teaching proper table manners and eating etiquette
										</span>
									</li>
									<li className="flex items-start gap-2">
										<svg
											className="w-5 h-5 text-green-600 mt-0.5"
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
										<span>Encouraging children to try new foods</span>
									</li>
									<li className="flex items-start gap-2">
										<svg
											className="w-5 h-5 text-green-600 mt-0.5"
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
										<span>Learning about food groups and nutrition</span>
									</li>
									<li className="flex items-start gap-2">
										<svg
											className="w-5 h-5 text-green-600 mt-0.5"
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
										<span>Developing independence in self-feeding</span>
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Kitchen Activities</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3 text-gray-600">
									<li className="flex items-start gap-2">
										<svg
											className="w-5 h-5 text-green-600 mt-0.5"
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
										<span>Simple cooking projects (mixing, decorating)</span>
									</li>
									<li className="flex items-start gap-2">
										<svg
											className="w-5 h-5 text-green-600 mt-0.5"
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
										<span>Garden-to-table experiences</span>
									</li>
									<li className="flex items-start gap-2">
										<svg
											className="w-5 h-5 text-green-600 mt-0.5"
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
										<span>Learning kitchen safety and hygiene</span>
									</li>
									<li className="flex items-start gap-2">
										<svg
											className="w-5 h-5 text-green-600 mt-0.5"
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
										<span>Cultural food exploration and tasting</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* CTA Section */}
				<div className="text-center">
					<Card className="p-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0">
						<h3 className="text-3xl font-bold mb-4">
							Questions About Our Nutrition Program?
						</h3>
						<p className="text-lg mb-6 text-green-50">
							Contact our nutrition coordinator to discuss your child's dietary
							needs
						</p>
						<div className="flex gap-4 justify-center">
							<Link href="/contact">
								<Button
									size="lg"
									className="bg-white text-green-700 hover:bg-gray-100">
									Contact Us
								</Button>
							</Link>
							<Link href="/enrollment">
								<Button
									size="lg"
									variant="outline"
									className="border-white text-white hover:bg-white/10">
									Enroll Now
								</Button>
							</Link>
						</div>
					</Card>
				</div>
			</main>
		</div>
	);
}
