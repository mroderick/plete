import { refute, sinon } from "@sinonjs/referee-sinon";
import { fireEvent, waitForElement } from "@testing-library/dom";
import { setupTest } from "./test-helper";

describe("Autocomplete", function() {
  describe("minChars", function() {
    it("defaults to three");

    context("when using an async (function) data source", function() {
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

      context("when the input's value is shorter than `minChars`", function() {
        // In this test we can't use the waitForElement helper, as
        // we're expecting there to NOT be an element
        // Instead, we can use use the `ready` callback, to know when the async
        // remote filtering is done
        it("does not filter anything", function(done) {
          const input = setupTest({
            minChars: 4,
            dataSrc: fakeDataSrc,
            ready: ready
          });

          function ready() {
            refute.called(fakeDataSrc);
            done();
          }

          input.value = "aaa";
          fireEvent.input(input, {
            key: "a"
          });
        });
      });

      context(
        "when the input's value is at least same length as `minChars`",
        function() {
          it("filters", async function() {
            const input = setupTest({
              minChars: 4,
              dataSrc: fakeDataSrc
            });

            input.value = "aaaa";
            fireEvent.input(input, {
              key: "a"
            });

            await waitForElement(() => document.querySelector("plete-list"));
          });
        }
      );
    });

    context("when using a local data source", function() {
      it("ignores `minChars` and filters immediately", async function() {
        const input = setupTest();

        input.value = "a";
        fireEvent.input(input, {
          key: "a"
        });

        const list = await waitForElement(() =>
          document.querySelector("plete-list")
        );

        refute.isNull(list);
      });
    });
  });
});
