import { refute, sinon } from "@sinonjs/referee-sinon";

import removeHighlight from "./remove-highlight.js";

describe("highlight", function() {
  context("when nothing is highlighted", function() {
    it("does not throw", function() {
      const fakeState = {
        list: {
          querySelector: sinon.fake.returns(null)
        }
      };

      refute.exception(function() {
        removeHighlight(fakeState);
      });
    });
  });
});
