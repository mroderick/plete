import { refute, sinon } from "@sinonjs/referee-sinon";

import highlight from "./highlight.js";

describe("highlight", function() {
  context("when passed a non-existent index", function() {
    it("does not throw", function() {
      const fakeState = {
        list: {
          querySelectorAll: sinon.fake.returns([])
        }
      };

      refute.exception(function() {
        highlight(fakeState, 1);
      });
    });
  });
});
