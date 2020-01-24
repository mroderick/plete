import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "lib/plete.js",
    output: [
      {
        file: "dist/plete.js",
        format: "iife",
        name: "Plete"
      },
      {
        file: "dist/plete.min.js",
        format: "iife",
        name: "Plete",
        plugins: [terser()]
      },
      {
        file: "dist/plete-cjs.js",
        format: "cjs"
      },
      {
        file: "dist/plete-cjs.min.js",
        format: "cjs",
        plugins: [terser()]
      },
      {
        file: "dist/plete-esm.js",
        format: "esm"
      },
      {
        file: "dist/plete-esm.min.js",
        format: "esm",
        plugins: [terser()]
      }
    ]
  }
];
