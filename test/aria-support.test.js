import { assert, refute } from "@sinonjs/referee-sinon";
import { fireEvent, waitForElement } from "@testing-library/dom";
import { setupTest } from "./test-helper";

describe("Plete", function() {
  describe("WAI-ARIA support", function() {
    it("ensures a plete element with `aria-role` of combobox", async function() {
      [true, false].forEach(function(value) {
        const input = setupTest({ existingPlete: value });
        const plete = input.closest("plete");

        assert.equals(plete.getAttribute("aria-role"), "combobox");
        assert.equals(plete.getAttribute("aria-expanded"), "false");
      });
    });

    it("sets `aria-autocomplete` attribute to `list` on the input", function() {
      const input = setupTest();

      assert.equals(input.getAttribute("aria-autocomplete"), "list");
    });

    context("when suggestions are visible", function() {
      beforeEach(async function() {
        this.input = setupTest();

        this.input.value = "a";
        fireEvent.input(this.input, {
          key: "a"
        });

        this.list = await waitForElement(() =>
          document.querySelector("plete-list")
        );
      });

      it("sets `aria-controls` attribute on input to id of <plete-list>", function() {
        assert.equals(this.input.getAttribute("aria-controls"), this.list.id);
      });

      it("renders the list items with `aria-role` of `option`", function() {
        const listItems = this.list.querySelectorAll("plete-item");

        assert.isTrue(listItems.length > 0);
        listItems.forEach(function(item) {
          assert.equals(item.getAttribute("aria-role"), "option");
        });
      });

      it("adds an `aria-activedescendant` attribute to the input", function() {
        const listItems = this.list.querySelectorAll("plete-item");

        assert.isTrue(listItems.length > 0);
        refute.isNull(this.input);
        refute.isNull(this.input.getAttribute("aria-activedescendant"));
      });

      it("renders the list items with an `id` attribute", function() {
        const listItems = this.list.querySelectorAll("plete-item");

        assert.isTrue(listItems.length > 0);
        listItems.forEach(function(item) {
          refute.isNull(item.getAttribute("id"));
        });
      });

      it("`aria-activedescendant` attribute corresponds to an `id` attribute of another DOM node", function() {
        const listItems = this.list.querySelectorAll("plete-item");

        assert.isTrue(listItems.length > 0);
        refute.isNull(this.input);
        const activeDescendant = this.input.getAttribute("aria-activedescendant");
        refute.isNull(document.getElementById(activeDescendant));
      });

      it("sets `aria-expanded` on the `plete` element to 'true'", function() {
        const plete = this.input.closest("plete");

        assert.equals(plete.getAttribute("aria-expanded"), "true");
      });
    });

    context("when suggestions are hidden", function() {
      it("removes `aria-controls` attribute on input", async function() {
        this.input = setupTest();

        this.input.value = "a";
        fireEvent.input(this.input, {
          key: "a"
        });

        this.list = await waitForElement(() =>
          document.querySelector("plete-list")
        );

        fireEvent.keyDown(this.input, {
          key: "Escape"
        });

        assert.equals(this.input.getAttribute("aria-controls"), null);
      });

      it("sets `aria-expanded` on the `plete` element to 'false'", function() {
        const plete = this.input.closest("plete");

        assert.equals(plete.getAttribute("aria-expanded"), "false");
      });
    });
  });
});
