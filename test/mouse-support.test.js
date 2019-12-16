import { assert, refute, sinon } from "@sinonjs/referee-sinon";
import { fireEvent, waitForElement } from "@testing-library/dom";
import { setupTest } from "./test-helper";

describe("Plete", function() {
  describe("mouse", function() {
    context("when displaying suggestions", function() {
      beforeEach(async function() {
        this.fakeSelect = sinon.fake();
        this.input = setupTest({
          select: this.fakeSelect
        });

        this.input.focus();
        this.input.value = "a";
        fireEvent.input(this.input, {
          key: "a"
        });

        this.list = await waitForElement(() =>
          document.querySelector("plete-list")
        );

        sinon.reset();
      });

      context("when left clicking on a suggestion", function() {
        it("calls the callback with the selected value", function() {
          const target = this.list.querySelector("plete-item:nth-child(2)");

          const expectedValue = target.getAttribute("value");

          refute.isUndefined(expectedValue);
          refute.isNull(expectedValue);

          fireEvent.click(target, { button: 0 });

          assert.calledOnceWith(this.fakeSelect, expectedValue);
        });

        it("updates the value of the input with the selected value", function() {
          const target = this.list.querySelector("plete-item:nth-child(2)");

          const expectedValue = target.getAttribute("value");

          refute.isUndefined(expectedValue);
          refute.isNull(expectedValue);

          fireEvent.click(target, { button: 0 });

          assert.equals(this.input.value, expectedValue);
        });

        it("closes the suggestions panel", function() {
          fireEvent.keyDown(this.input, {
            key: "Enter"
          });
          assert.isNull(document.querySelector("plete-list"));
        });

        it("keeps focus on the input", function() {
          const target = this.list.querySelector("plete-item:nth-child(2)");

          fireEvent.click(target, { button: 0 });

          assert.equals(document.activeElement, this.input);
        });
      });

      context("when right clicking on a suggestion", function() {
        it("selects does nothing", function() {
          const target = this.list.querySelector("plete-item:nth-child(2)");

          const expectedValue = target.getAttribute("value");

          refute.isUndefined(expectedValue);
          refute.isNull(expectedValue);

          fireEvent.click(target, { button: 2 });

          refute.called(this.fakeSelect);
        });

        it("does not update the value of the input", function() {
          const target = this.list.querySelector("plete-item:nth-child(2)");

          const originalValue = this.input.value;

          refute.isUndefined(originalValue);
          refute.isNull(originalValue);

          fireEvent.click(target, { button: 2 });

          assert.equals(this.input.value, originalValue);
        });

        it("does not close the suggestions panel", function() {
          const target = this.list.querySelector("plete-item:nth-child(2)");

          fireEvent.click(target, { button: 2 });

          refute.isNull(document.querySelector("plete-list"));
        });

        it("keeps focus on the input", function() {
          const target = this.list.querySelector("plete-item:nth-child(2)");

          fireEvent.click(target, { button: 2 });

          assert.equals(document.activeElement, this.input);
        });
      });
    });
  });
});
