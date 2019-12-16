import { assert, sinon } from "@sinonjs/referee-sinon";

import mouseDownHandler from "./mouse-down-handler.js";

describe("mouseDownHandler", function() {
  it("calls preventDefault", function() {
    const event = {
      preventDefault: sinon.fake()
    };

    mouseDownHandler(event);

    assert.calledOnce(event.preventDefault);
  });
});
