import { assert } from "@sinonjs/referee-sinon";

import filter from "./filter.js";

describe("filter", function() {
  context("when used with Array dataSrc", function() {
    // https://github.com/mroderick/plete/issues/6
    it("escapes the input query", async function() {
      const state = {
        input: {
          value: "S.a.n"
        },
        dataSrc: ["Denmark", "Germany", "Spain", "Sweden", "United Kingdom"]
      };

      const result = await filter(state);

      assert.equals(result, []);
    });

    it("filters by matching characters", async function() {
      const state = {
        input: {
          value: "er"
        },
        dataSrc: ["Denmark", "Germany", "Spain", "Sweden", "United Kingdom"]
      };

      const result = await filter(state);

      assert.equals(result, ["Denmark", "Germany"]);
    });
  });

  context("when used with a non-Array, non-Function dataSrc", function() {
    it("throws an Error", async function() {
      const state = {
        input: {
          value: "2d51923b-7076-424b-bbff-6d98635d56c1"
        },
        dataSrc: {}
      };

      try {
        await filter(state);
        throw new Error("filter failed to throw");
      } catch (error) {
        assert.equals(error.message, "Unsupported dataSrc type");
      }
    });
  });
});
