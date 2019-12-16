import { assert } from "@sinonjs/referee-sinon";

import filter from "./filter.js";

describe("filter", function() {
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
