import pkg from "./package.json" with { type: "json" };

export default {
  name: pkg.name,

  triggers: {
    keywords: [
      "laptop",
      "laptops",
      "gaming laptop",
      "best laptop",
      "laptop for college",
      "laptop for programming",
    ],
  },

  query_format: {
    regex: [
      "best laptop",
      "gaming laptop",
      "laptop under .*",
      "laptop below .*",
      "laptop less than .*",
      "laptop for .*",
      "best .* laptop",
    ],
  },

  client: {
    location: pkg.module,
    moduleName: pkg.umdName || "HD" + pkg.name,
    baseURL: "/" + pkg.name,
  },

  format: {
    mainline: true,
    sidebar: true,
  },

  permissions: {},

  info: {
    category: "shopping",
    description:
      "Interactive laptop comparison and recommendation",
  },
};