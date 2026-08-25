import { predictPreference } from "./mlModel";

export function calculateScore(laptop, weights) {
  return predictPreference(laptop, weights);
}

export function rankLaptops(
  laptops,
  weights,
  preferences = {}
) {
  let filtered = [...laptops];

  // Apply budget filter.
  if (preferences.budget) {
    filtered = filtered.filter(
      (laptop) => laptop.price <= preferences.budget
    );
  }

  // If the user explicitly asked for gaming,
  // prioritize gaming laptops.
  if (preferences.gaming) {
    const gamingLaptops = filtered.filter(
      (laptop) => laptop.category === "gaming"
    );

    if (gamingLaptops.length > 0) {
      filtered = gamingLaptops;
    }
  }

  return filtered
    .map((laptop) => ({
      ...laptop,
      buyWiseScore: calculateScore(
        laptop,
        weights
      ),
    }))
    .sort(
      (a, b) =>
        b.buyWiseScore - a.buyWiseScore
    );
}