const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://holistickidsfoundation.org";

module.exports = baseUrl;
