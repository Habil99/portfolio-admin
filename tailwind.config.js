
/** @type {import("tailwindcss").Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        "primary": "var(--primary-color)",
        "secondary": "var(--secondary-color)",
        "input-primary": "var(--input-primary-color)",
        "btn-primary": "var(--btn-primary-color)",
        "btn-primary-hover": "var(--btn-primary-hover-color)",
        "btn-secondary": "var(--btn-secondary-color)",
        "primary-error": "var(--primary-error-color)",
        "primary-success": "var(--primary-success-color)",
        "link-hover": "var(--link-hover-color)",
        "primary-gradient": "var(--primary-gradient)",
        "primary-shadow": "var(--primary-shadow)",
      }
    },
    textColor: {
      ...colors,
      "primary": "var(--text-primary-color)",
      "secondary": "var(--text-secondary-color)",
      "link-hover": "var(--link-hover-color)",
      "input-primary": "var(--input-primary-color)",
      "btn-primary": "var(--btn-primary-color)",
      "btn-primary-hover": "var(--btn-primary-hover-color)",
      "btn-secondary": "var(--btn-secondary-color)",
      "primary-error": "var(--primary-error-color)",
      "primary-success": "var(--primary-success-color)",
      "primary-gradient": "var(--primary-gradient)",
      "primary-shadow": "var(--primary-shadow)",
    },
    backgroundColor: {
      ...colors,
      "primary": "var(--bg-primary-color)",
      "secondary": "var(--bg-secondary-color)",
      "tertiary": "var(--bg-tertiary-color)",
      "primary-error": "var(--primary-error-color)",
    },
    borderColor: {
      ...colors,
      "primary": "var(--border-primary-color)",
    },
    boxShadow: {
      "primary": "var(--primary-shadow)",
    },
    gradientColorStops: {
      "primary": "var(--primary-gradient)",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

