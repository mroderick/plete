import { assert } from "@sinonjs/referee-sinon";
import { getOptions } from "../test/test-helper";

import Plete from "../lib/main.js";

describe("Plete", function() {
  it("is a singular Function named 'Autocomplete'", function() {
    assert.hasArity(Plete, 1);
  });

  context("when called without `new`", function() {
    it("throws and Error", function() {
      assert.exception(
        function() {
          // eslint-disable-next-line new-cap
          Plete(getOptions());
        },
        {
          name: "Error",
          message: "Plete should be called with the `new` keyword"
        }
      );
    });
  });
});
