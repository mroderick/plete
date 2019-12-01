import { assert } from "@sinonjs/referee-sinon";
import { fireEvent, waitForElement } from "@testing-library/dom";
import { setupTest } from "./test-helper";

describe("Autocomplete", function() {
  async function assertNumberOfSuggestions(input, maxItems) {
    input.value = "a";
    fireEvent.input(input, {
      key: "a"
    });

    const list = await waitForElement(() =>
      document.querySelector("plete-list")
    );
    const items = list.querySelectorAll("plete-item");

    assert.equals(items.length, maxItems);
  }

  describe("maxItems option", function() {
    it("defaults to five", async function() {
      const input = setupTest();

      assertNumberOfSuggestions(input, 5);
    });

    it("restricts the number of items displayed", function() {
      const maxItems = 3;
      const input = setupTest({
        maxItems: maxItems
      });

      assertNumberOfSuggestions(input, maxItems);
    });
  });
});
