import React from "react";

const posts = [
	{
		id: 1,
		title: "5 Morning Routines for Happy Kids",
		excerpt: "Simple morning habits to make school days calm and joyful.",
	},
	{
		id: 2,
		title: "Nutrition Tips for Busy Parents",
		excerpt: "Quick healthy meals for toddlers and preschoolers.",
	},
	{
		id: 3,
		title: "Preparing Your Child for School",
		excerpt: "How to ease separation anxiety and build routines.",
	},
];

export default function BlogSection() {
	return (
		<div>
			{posts.map((p) => (
				<article key={p.id} className="mb-4">
					<h4 className="font-semibold">{p.title}</h4>
					<p className="text-sm text-gray-600">{p.excerpt}</p>
				</article>
			))}
			<a href="/blog" className="text-sm text-green-700 hover:underline">
				See all parenting tips
			</a>
		</div>
	);
}
