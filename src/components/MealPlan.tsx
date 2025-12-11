import React from "react";

export default function MealPlan() {
	return (
		<div className="p-4 border rounded">
			<h4 className="font-semibold mb-2">Sample Meal Plan</h4>
			<ul className="text-sm text-gray-700">
				<li>
					<strong>Morning Tea:</strong> Milk & fruit
				</li>
				<li>
					<strong>Breakfast:</strong> Porridge / Eggs
				</li>
				<li>
					<strong>Lunch:</strong> Protein + Veg + Rice/Posho
				</li>
				<li>
					<strong>Snacks:</strong> Fruit or biscuits
				</li>
			</ul>
			<p className="text-xs text-gray-500 mt-2">
				Meals prepared under hygienic conditions. Special diets accommodated on
				request.
			</p>
		</div>
	);
}
