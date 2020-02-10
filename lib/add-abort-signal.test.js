import { assert, sinon } from "@sinonjs/referee-sinon";
import { loadDefault } from "./proxyquire-helper.js";

describe("addAbortSignal", function() {
  afterEach(function() {
    sinon.restore();
  });

  context("when the runtime supports AbortController", function() {
    before(function() {
      const fakeSignal = "9db48960-74b0-4bde-b7de-81a57c8784fd";
      const fakeAbortController = sinon.fake.returns({
        signal: fakeSignal
      });

      sinon.replace(window, "AbortController", fakeAbortController);

      this.fakeSignal = fakeSignal;
    });

    it("returns an object with a signal", function() {
      const addAbortSignal = loadDefault("./add-abort-signal.js", {});

      const options = {};
      const result = addAbortSignal(options);

      assert.equals(result.signal, this.fakeSignal);
    });
  });

  context("when the runtime does not support AbortController", function() {
    before(function() {
      sinon.stub(window, "AbortController").value(undefined);
    });

    it("returns an object without a signal", function() {
      const addAbortSignal = loadDefault("./add-abort-signal.js", {});

      const options = {};
      const result = addAbortSignal(options);

      assert.isUndefined(result.signal);
    });
  });
});
