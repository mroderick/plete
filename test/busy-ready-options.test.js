import { assert, sinon } from "@sinonjs/referee-sinon";
import { fireEvent, waitForElement } from "@testing-library/dom";
import { setupTest } from "./test-helper";

describe("Autocomplete", function() {
  describe("busy and ready options", function() {
    const result = [
      "Albania",
      "Belgium",
      "Croatia",
      "Denmark",
      "Estonia",
      "Finland",
      "Ireland",
      "Norway",
      "Portugal",
      "Spain",
      "United Kingdom"
    ].map(v => {
      return { id: v, label: v };
    });
    const fakeDataSrc = sinon.fake.resolves(result);

    afterEach(function() {
      sinon.reset();
    });

    context("when dataSrc is queries for data", function() {
      it("busy is called before ready", async function() {
        const fakeBusy = sinon.fake();
        const fakeReady = sinon.fake();
        const input = setupTest({
          dataSrc: fakeDataSrc,
          busy: fakeBusy,
          ready: fakeReady
        });

        input.value = "aaa";
        fireEvent.input(input, {
          key: "a"
        });

        await waitForElement(() => document.querySelector("plete-list"));
        assert.calledOnce(fakeBusy);
        assert.calledOnce(fakeReady);

        assert.callOrder(fakeBusy, fakeReady);
      });
    });
  });
});
