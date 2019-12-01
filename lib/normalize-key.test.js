import jsc from "jsverify";
import { assert } from "@sinonjs/referee-sinon";

import normalizeKey from "./normalize-key.js";

describe("normalizeKey", function() {
  context("when called with 'Up'", function() {
    it("returns 'ArrowUp'", function() {
      const actual = normalizeKey("Up");
      const expected = "ArrowUp";

      assert.equals(actual, expected);
    });
  });

  context("when called with 'Down'", function() {
    it("returns 'ArrowDown'", function() {
      const actual = normalizeKey("Down");
      const expected = "ArrowDown";

      assert.equals(actual, expected);
    });
  });

  context("when called with 'Esc'", function() {
    it("returns 'ArrowUp'", function() {
      const actual = normalizeKey("Esc");
      const expected = "Escape";

      assert.equals(actual, expected);
    });
  });

  // If you're a completionist and want to do all the subquests, then you
  // could test for all the values defined in
  // developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
  // For this library, we'll stick to testing the values actually in use
  context("when called standard values", function() {
    it("returns the value", function() {
      const regularValues = [
        "ArrowDown",
        "ArrowUp",
        "Enter",
        "Escape",
        "Tab"
      ].map(jsc.constant);
      const regularValue = jsc.oneof(regularValues);

      jsc.assertForall(regularValue, function(value) {
        return normalizeKey(value) === value;
      });
    });
  });
});
