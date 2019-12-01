import { assert, sinon } from "@sinonjs/referee-sinon";
import { fireEvent, waitForElement } from "@testing-library/dom";
import { setupTest } from "./test-helper";

describe("Plete", function() {
  describe("cssClass option", function() {
    context("when passed a string", function() {
      beforeEach(async function() {
        this.cssClass = "1b0d64f5-d4af-4600-b1cb-dabff88e0e7f";
        this.dataSrc = [
          {
            id: "f5ffe8bf-4cec-451d-9ee2-58e5b3b242fe",
            label: "a1de35e5-2fda-42f3-8009-3f6c18ce2555"
          },
          {
            id: "a4f4c6d5-7ac1-4d59-a032-692e92449c54",
            label: "1b15239e-6936-4a23-9994-0f584239d7b7"
          },
          {
            id: "503f9a22-30a7-4664-b7d6-cd333cc7f93a",
            label: "d22477f3-3581-436a-8ac9-f3198c636f00"
          }
        ];
        this.input = setupTest({
          dataSrc: this.dataSrc,
          cssClass: this.cssClass
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

      it("adds the cssClass option as the class attribute on the list element", function() {
        assert.equals(this.list.classList, [this.cssClass]);
      });
    });
  });
});
