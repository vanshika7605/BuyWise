const coefficients = [
  24.59317806,
  24.45825301,
  24.67657156,
  24.55152307,
  24.52318661,
  24.35864312,
  0.74363213,
];

const intercept = -20.35585757;

function sigmoid(value) {
  return 1 / (1 + Math.exp(-value));
}

export function predictPreference(laptop, weights) {
  const total =
    weights.performance +
    weights.gaming +
    weights.battery +
    weights.display +
    weights.portability +
    weights.value;

  if (total === 0) {
    return 0;
  }

  // Normalize the sliders so their total is always 1.
  const performanceWeight =
    weights.performance / total;

  const gamingWeight =
    weights.gaming / total;

  const batteryWeight =
    weights.battery / total;

  const displayWeight =
    weights.display / total;

  const portabilityWeight =
    weights.portability / total;

  const valueWeight =
    weights.value / total;

  const features = [
    (laptop.performance / 100) * performanceWeight,
    (laptop.gaming / 100) * gamingWeight,
    (laptop.battery / 100) * batteryWeight,
    (laptop.display / 100) * displayWeight,
    (laptop.portability / 100) * portabilityWeight,
    (laptop.value / 100) * valueWeight,
    laptop.value / 100,
  ];

  let score = intercept;

  for (let i = 0; i < coefficients.length; i++) {
    score += coefficients[i] * features[i];
  }

  return Math.round(sigmoid(score) * 100);
}