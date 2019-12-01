import { assert, refute } from "@sinonjs/referee-sinon";
import { fireEvent, waitForElement } from "@testing-library/dom";
import { setupTest } from "./test-helper";

describe("Autocomplete", function() {
  describe("autoFirst", function() {
    async function assertFirstItemHighlighted(options) {
      const input = setupTest(options);

      input.value = "a";
      fireEvent.input(input, {
        key: "a"
      });

      const list = await waitForElement(() =>
        document.querySelector("plete-list")
      );
      const highlightedItem = list.querySelector(".highlight");

      refute.isNull(highlightedItem);
      assert.equals(highlightedItem, list.firstChild);
    }

    it("defaults to true", async function() {
      await assertFirstItemHighlighted();
    });

    context("when set to `true`", function() {
      it("automatically highlights the first item", async function() {
        await assertFirstItemHighlighted({
          autoFirst: true
        });
      });
    });

    context("when set to `false`", function() {
      it("does not automatically highlight the first item", async function() {
        const input = setupTest({
          autoFirst: false
        });

        input.value = "a";
        fireEvent.input(input, {
          key: "a"
        });

        const list = await waitForElement(() =>
          document.querySelector("plete-list")
        );
        const highlightedItem = list.querySelector(".highlight");

        assert.isNull(highlightedItem);
      });
    });
  });
});
