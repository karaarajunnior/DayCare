"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function BlogPage() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const categories = [
		"All",
		"Development",
		"Nutrition",
		"Behavior",
		"Learning",
		"Health",
	];

	const blogPosts = [
		{
			id: 1,
			title: "10 Ways to Encourage Early Reading",
			excerpt:
				"Discover proven strategies to foster a love of reading in your child from an early age...",
			category: "Learning",
			date: "December 10, 2025",
			author: "Sarah Mitchell",
			readTime: "5 min read",
			image: "📚",
		},
		{
			id: 2,
			title: "Understanding Toddler Tantrums",
			excerpt:
				"Learn why tantrums happen and effective techniques for managing difficult moments...",
			category: "Behavior",
			date: "December 8, 2025",
			author: "Dr. James Peterson",
			readTime: "7 min read",
			image: "🧸",
		},
		{
			id: 3,
			title: "Healthy Snacks Your Kids Will Love",
			excerpt:
				"Creative and nutritious snack ideas that are both delicious and good for growing bodies...",
			category: "Nutrition",
			date: "December 5, 2025",
			author: "Chef Maria Santos",
			readTime: "4 min read",
			image: "🍎",
		},
		{
			id: 4,
			title: "Milestone Guide: Ages 2-3",
			excerpt:
				"What to expect during this crucial developmental period and when to seek professional advice...",
			category: "Development",
			date: "December 3, 2025",
			author: "Dr. Emily Chen",
			readTime: "8 min read",
			image: "👶",
		},
		{
			id: 5,
			title: "Building Strong Sleep Habits",
			excerpt:
				"Establish healthy sleep routines that benefit the whole family and support child development...",
			category: "Health",
			date: "December 1, 2025",
			author: "Sleep Consultant Lisa Brown",
			readTime: "6 min read",
			image: "😴",
		},
		{
			id: 6,
			title: "The Power of Imaginative Play",
			excerpt:
				"Why pretend play is crucial for cognitive and social development in early childhood...",
			category: "Learning",
			date: "November 28, 2025",
			author: "Sarah Mitchell",
			readTime: "5 min read",
			image: "🎭",
		},
		{
			id: 7,
			title: "Dealing with Picky Eaters",
			excerpt:
				"Practical tips and strategies for parents struggling with selective eating habits...",
			category: "Nutrition",
			date: "November 25, 2025",
			author: "Chef Maria Santos",
			readTime: "6 min read",
			image: "🥗",
		},
		{
			id: 8,
			title: "Potty Training Success Guide",
			excerpt:
				"Step-by-step approach to successful potty training with patience and positivity...",
			category: "Development",
			date: "November 22, 2025",
			author: "Dr. Emily Chen",
			readTime: "7 min read",
			image: "🚽",
		},
		{
			id: 9,
			title: "Screen Time: Finding Balance",
			excerpt:
				"Guidelines for appropriate screen time and creating healthy digital habits for young children...",
			category: "Health",
			date: "November 20, 2025",
			author: "Dr. James Peterson",
			readTime: "5 min read",
			image: "📱",
		},
	];

	const filteredPosts =
		selectedCategory === "All"
			? blogPosts
			: blogPosts.filter((post) => post.category === selectedCategory);

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
						Expert Advice for Parents
					</div>
					<h1 className="text-5xl font-bold text-gray-900 mb-4">
						Parenting Blog
					</h1>
					<p className="text-xl text-gray-600">
						Tips, insights, and guidance from our team of early childhood
						experts
					</p>
				</div>

				{/* Category Filter */}
				<div className="max-w-5xl mx-auto mb-12">
					<div className="flex flex-wrap gap-3 justify-center">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-6 py-2 rounded-full font-medium transition-all ${
									selectedCategory === category
										? "bg-green-600 text-white shadow-lg"
										: "bg-white text-gray-700 hover:bg-green-50 border border-gray-300"
								}`}>
								{category}
							</button>
						))}
					</div>
				</div>

				{/* Featured Post */}
				<section className="mb-16 max-w-5xl mx-auto">
					<Card className="overflow-hidden hover:shadow-2xl transition-all border-2 border-green-200">
						<div className="grid md:grid-cols-2">
							<div className="bg-gradient-to-br from-green-400 to-emerald-500 p-12 flex items-center justify-center">
								<div className="text-9xl">{blogPosts[0].image}</div>
							</div>
							<CardContent className="p-8 flex flex-col justify-center">
								<Badge className="w-fit mb-3 bg-green-600">
									{blogPosts[0].category}
								</Badge>
								<h2 className="text-3xl font-bold text-gray-900 mb-4">
									{blogPosts[0].title}
								</h2>
								<p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
								<div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
									<span>{blogPosts[0].author}</span>
									<span>•</span>
									<span>{blogPosts[0].date}</span>
									<span>•</span>
									<span>{blogPosts[0].readTime}</span>
								</div>
								<Button className="w-fit bg-green-600 hover:bg-green-700">
									Read Full Article
								</Button>
							</CardContent>
						</div>
					</Card>
				</section>

				{/* Blog Grid */}
				<section className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold text-gray-900 mb-8">
						{selectedCategory === "All"
							? "Latest Articles"
							: `${selectedCategory} Articles`}
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{filteredPosts.slice(1).map((post) => (
							<Card
								key={post.id}
								className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group">
								<div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 flex items-center justify-center group-hover:scale-105 transition-transform">
									<div className="text-6xl">{post.image}</div>
								</div>
								<CardContent className="p-6">
									<Badge className="mb-3 bg-green-100 text-green-800">
										{post.category}
									</Badge>
									<h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
										{post.title}
									</h3>
									<p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
									<div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
										<span>{post.date}</span>
										<span>•</span>
										<span>{post.readTime}</span>
									</div>
									<Button
										variant="outline"
										size="sm"
										className="w-full border-green-500 text-green-600 hover:bg-green-50">
										Read More
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Newsletter Signup */}
				<section className="mt-16 max-w-4xl mx-auto">
					<Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0">
						<CardContent className="p-8 text-center">
							<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h3 className="text-3xl font-bold mb-4">Never Miss a Post</h3>
							<p className="text-lg mb-6 text-green-50">
								Subscribe to our newsletter for weekly parenting tips and
								resources
							</p>
							<div className="max-w-md mx-auto flex gap-3">
								<input
									type="email"
									placeholder="Enter your email"
									className="flex-1 px-4 py-3 rounded-lg text-gray-900"
								/>
								<Button
									size="lg"
									className="bg-white text-green-700 hover:bg-gray-100">
									Subscribe
								</Button>
							</div>
						</CardContent>
					</Card>
				</section>

				{/* Popular Topics */}
				<section className="mt-16 max-w-5xl mx-auto">
					<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
						Popular Topics
					</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<Card className="hover:shadow-xl transition-all cursor-pointer">
							<CardContent className="p-6 text-center">
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
								<h3 className="font-bold text-gray-900 mb-2">Early Literacy</h3>
								<p className="text-sm text-gray-600">
									Building reading skills from birth
								</p>
							</CardContent>
						</Card>

						<Card className="hover:shadow-xl transition-all cursor-pointer">
							<CardContent className="p-6 text-center">
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
											d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<h3 className="font-bold text-gray-900 mb-2">Social Skills</h3>
								<p className="text-sm text-gray-600">
									Developing friendships and empathy
								</p>
							</CardContent>
						</Card>

						<Card className="hover:shadow-xl transition-all cursor-pointer">
							<CardContent className="p-6 text-center">
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
											d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
										/>
									</svg>
								</div>
								<h3 className="font-bold text-gray-900 mb-2">
									Problem Solving
								</h3>
								<p className="text-sm text-gray-600">
									Encouraging critical thinking
								</p>
							</CardContent>
						</Card>
					</div>
				</section>
			</main>
		</div>
	);
}
