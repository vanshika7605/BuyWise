export function parseQuery(query = "") {
  const normalized = query
    .toLowerCase()
    .replace(/,/g, "")
    .trim();

  let budget = null;

  // Examples:
  // ₹1 lakh
  // 1 lakh
  // ₹80k
  // 80k
  // ₹100000
  // ₹200
  const lakhMatch = normalized.match(
    /(?:₹\s*)?(\d+(?:\.\d+)?)\s*lakh/
  );

  const thousandMatch = normalized.match(
    /(?:₹\s*)?(\d+(?:\.\d+)?)\s*k\b/
  );

  // Match any number following ₹
  const rupeeMatch = normalized.match(
    /₹\s*(\d+(?:\.\d+)?)/
  );

  // Match "under 100000", "below 50000", etc.
  const underNumberMatch = normalized.match(
    /(?:under|below|less than|max(?:imum)?|upto|up to)\s*(?:₹\s*)?(\d+(?:\.\d+)?)/
  );

  if (lakhMatch) {
    budget = Number(lakhMatch[1]) * 100000;
  } else if (thousandMatch) {
    budget = Number(thousandMatch[1]) * 1000;
  } else if (rupeeMatch) {
    budget = Number(rupeeMatch[1]);
  } else if (underNumberMatch) {
    budget = Number(underNumberMatch[1]);
  }

  const gaming =
    normalized.includes("gaming") ||
    normalized.includes("game");

  const college =
    normalized.includes("college") ||
    normalized.includes("student") ||
    normalized.includes("university");

  const programming =
    normalized.includes("programming") ||
    normalized.includes("coding") ||
    normalized.includes("developer");

  const battery =
    normalized.includes("battery") ||
    normalized.includes("long battery");

  return {
    originalQuery: query,
    budget,
    gaming,
    college,
    programming,
    battery,
  };
}