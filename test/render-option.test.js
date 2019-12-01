import { assert, sinon } from "@sinonjs/referee-sinon";
import { fireEvent, waitForElement } from "@testing-library/dom";
import { setupTest } from "./test-helper";

describe("Autocomplete", function() {
  describe("render option", function() {
    context("when passed a function", function() {
      beforeEach(async function() {
        this.render = sinon.fake(function(item) {
          return `<b>${item.id}</b> ${item.label}`;
        });
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
          render: this.render
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

      it("uses the render function to generate the label", function() {
        this.dataSrc.forEach(x => {
          const item = this.list.querySelector(`plete-item[value="${x.id}"]`);
          const expectedHTML = `<b>${x.id}</b> ${x.label}`;
          assert.equals(item.innerHTML, expectedHTML);
        });
      });
    });
  });
});
