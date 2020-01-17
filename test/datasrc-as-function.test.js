import { assert, refute, sinon } from "@sinonjs/referee-sinon";
import { fireEvent } from "@testing-library/dom";
import { setupTest } from "./test-helper";

describe("dataSrc is function", function() {
  beforeEach(function() {
    document.body.innerHTML = "";
  });

  context("when it returns an object", function() {
    // This tests needs to be refactored to use Sinon's clock, so to not depend on setTimeout
    it("calls abort function of previous object", function(done) {
      const LONGER_THAN_DEBOUNCE = 121;

      const abort = sinon.fake();
      const input = setupTest({
        dataSrc: sinon.fake.returns({
          promise: Promise.resolve(["4855337c-cbea-4360-8163-71c48edd4aa7"]),
          abort
        })
      });

      input.value = "aaa";
      fireEvent.input(input, {
        key: "a"
      });

      // wait for the debounce before making the second event,
      // or it will be the only event
      setTimeout(function() {
        refute.called(abort);

        input.value = "aab";
        fireEvent.input(input, {
          key: "b"
        });

        // then wait for another debounce, before checking if the abort has been called
        setTimeout(function() {
          assert.calledOnce(abort);
          done();
        }, LONGER_THAN_DEBOUNCE);
      }, LONGER_THAN_DEBOUNCE);
    });
  });
});
