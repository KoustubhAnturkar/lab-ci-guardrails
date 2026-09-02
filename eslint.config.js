module.exports = [
  {
    files: ["**/*.js"],
    rules: {
      "no-eval": "error",
      "no-unused-vars": ["warn", { 
      "varsIgnorePattern": "^_"
    }]
    },
  },
];
