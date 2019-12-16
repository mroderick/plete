import { assert, refute, sinon } from "@sinonjs/referee-sinon";
import { fireEvent, waitForElement } from "@testing-library/dom";
import { setupTest } from "./test-helper";

describe("Plete", function() {
  describe("keyboard", function() {
    beforeEach(function() {
      document.body.innerHTML = "";
    });

    context("when typing a value", function() {
      it("displays suggestions", async function() {
        // make sure that our test setup is clean
        assert.isNull(document.querySelector("plete-list"));

        const input = setupTest();

        input.value = "a";
        fireEvent.input(input, {
          key: "a"
        });

        const list = await waitForElement(() =>
          document.querySelector("plete-list")
        );
        const items = list.querySelectorAll("plete-item");
        assert.equals(items.length, 5);
      });

      it("does not confuse character keys for commands", function(done) {
        // make sure that our test setup is clean
        assert.isNull(document.querySelector("plete-list"));

        const input = setupTest();

        input.value = "a";
        fireEvent.keyDown(input, {
          key: "a"
        });

        setTimeout(function() {
          const list = document.querySelector("plete-list");

          assert.isNull(list);

          done();
        }, 100);
      });
    });

    context("when not displaying suggestions", function() {
      ["ArrowUp", "ArrowDown", "Enter", "Tab", "Escape"].forEach(function(key) {
        context(`and pressing "${key}"`, function() {
          beforeEach(function(done) {
            // make sure that our test setup is clean
            assert.isNull(document.querySelector("plete-list"));

            this.select = sinon.fake();
            const input = setupTest({
              select: this.select
            });

            input.value = "a";
            fireEvent.keyDown(input, {
              key: key
            });

            setTimeout(() => {
              this.list = document.querySelector("plete-list");
              done();
            }, 100);
          });

          it("does not display suggestions", function() {
            assert.isNull(this.list);
          });

          it("does not call the select callback", function() {
            refute.called(this.select);
          });
        });
      });
    });

    context("when displaying suggestions with autoFirst false", function() {
      beforeEach(async function() {
        this.fakeSelect = sinon.fake();
        this.input = setupTest({
          autoFirst: false,
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

      context("and pressing `Enter` when nothing is selected", function() {
        it("selects nothing", function() {
          fireEvent.keyDown(this.input, {
            key: "Enter"
          });
          refute.called(this.fakeSelect);
        });

        it("does not update the value of the input", function() {
          const originalValue = this.input.value;

          fireEvent.keyDown(this.input, {
            key: "Enter"
          });
          assert.equals(this.input.value, originalValue);
        });

        it("closes the suggestions panel", function() {
          fireEvent.keyDown(this.input, {
            key: "Enter"
          });
          refute.isNull(document.querySelector("plete-list"));
        });

        it("keeps focus on the input", function() {
          fireEvent.keyDown(this.input, {
            key: "Enter"
          });

          assert.equals(document.activeElement, this.input);
        });
      });
    });

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

      context("and pressing `ArrowUp`", function() {
        it("it moves the selection up", function() {
          let highlightedItem = this.list.querySelector(".highlight");
          assert.equals(
            Array.from(this.list.childNodes).indexOf(highlightedItem),
            0
          );

          fireEvent.keyDown(this.input, {
            key: "ArrowDown"
          });
          highlightedItem = this.list.querySelector(".highlight");
          assert.equals(
            Array.from(this.list.childNodes).indexOf(highlightedItem),
            1
          );

          fireEvent.keyDown(this.input, {
            key: "ArrowDown"
          });
          highlightedItem = this.list.querySelector(".highlight");
          assert.equals(
            Array.from(this.list.childNodes).indexOf(highlightedItem),
            2
          );

          fireEvent.keyDown(this.input, {
            key: "ArrowUp"
          });
          highlightedItem = this.list.querySelector(".highlight");
          assert.equals(
            Array.from(this.list.childNodes).indexOf(highlightedItem),
            1
          );
        });
      });

      context("and pressing `ArrowDown`", function() {
        it("it moves the selection down", function() {
          let highlightedItem = this.list.querySelector(".highlight");
          assert.equals(
            Array.from(this.list.childNodes).indexOf(highlightedItem),
            0
          );

          fireEvent.keyDown(this.input, {
            key: "ArrowDown"
          });
          highlightedItem = this.list.querySelector(".highlight");
          assert.equals(
            Array.from(this.list.childNodes).indexOf(highlightedItem),
            1
          );

          fireEvent.keyDown(this.input, {
            key: "ArrowDown"
          });
          highlightedItem = this.list.querySelector(".highlight");
          assert.equals(
            Array.from(this.list.childNodes).indexOf(highlightedItem),
            2
          );
        });
      });

      context("and pressing `Enter`", function() {
        beforeEach(function() {
          fireEvent.keyDown(this.input, {
            key: "ArrowDown"
          });
          fireEvent.keyDown(this.input, {
            key: "ArrowDown"
          });
        });

        it("calls the select callback with the selected value", function() {
          const expectedValue = this.list
            .querySelector(".highlight")
            .getAttribute("value");

          refute.isUndefined(expectedValue);
          refute.isNull(expectedValue);

          fireEvent.keyDown(this.input, {
            key: "Enter"
          });
          assert.calledOnceWith(this.fakeSelect, expectedValue);
        });

        it("updates the value of the input with the selected value", function() {
          const expectedValue = this.list
            .querySelector(".highlight")
            .getAttribute("value");

          refute.isUndefined(expectedValue);
          refute.isNull(expectedValue);

          fireEvent.keyDown(this.input, {
            key: "Enter"
          });
          assert.equals(this.input.value, expectedValue);
        });

        it("closes the suggestions panel", function() {
          fireEvent.keyDown(this.input, {
            key: "Enter"
          });
          assert.isNull(document.querySelector("plete-list"));
        });

        it("keeps focus on the input", function() {
          fireEvent.keyDown(this.input, {
            key: "Enter"
          });

          assert.equals(document.activeElement, this.input);
        });
      });

      context("and pressing `Tab`", function() {
        it("calls the select callback with the selected value", function() {
          const expectedValue = this.list
            .querySelector(".highlight")
            .getAttribute("value");

          refute.isUndefined(expectedValue);
          refute.isNull(expectedValue);

          fireEvent.keyDown(this.input, {
            key: "Tab"
          });
          assert.calledOnceWith(this.fakeSelect, expectedValue);
        });

        it("updates the value of the input with the selected value", function() {
          const expectedValue = this.list
            .querySelector(".highlight")
            .getAttribute("value");

          refute.isUndefined(expectedValue);
          refute.isNull(expectedValue);

          fireEvent.keyDown(this.input, {
            key: "Tab"
          });
          assert.equals(this.input.value, expectedValue);
        });

        it("closes the suggestions panel", function() {
          fireEvent.keyDown(this.input, {
            key: "Tab"
          });
          assert.isNull(document.querySelector("plete-list"));
        });

        // JSDOM doesn't trigger "user events", see
        // https://github.com/jsdom/jsdom/issues/2102#issuecomment-355475031
        // eslint-disable-next-line mocha/no-skipped-tests
        it.skip("moves focus from the input", function() {
          // fireEvent.keyDown(this.input, {
          //   key: "Tab"
          // });
          // fireEvent.keyUp(this.input, {
          //   key: "Tab"
          // });
          // refute.equals(document.activeElement, this.input);
        });
      });

      context("and pressing `Escape`", function() {
        it("does not update the input", function() {
          const initialValue = this.input.value;

          fireEvent.keyDown(this.input, {
            key: "ArrowDown"
          });
          fireEvent.keyDown(this.input, {
            key: "Escape"
          });

          assert.equals(this.input.value, initialValue);
        });

        it("calls the select callback with `undefined`", function() {
          fireEvent.keyDown(this.input, {
            key: "ArrowDown"
          });
          fireEvent.keyDown(this.input, {
            key: "Escape"
          });

          assert.calledOnceWith(this.fakeSelect, undefined);
        });

        it("closes the suggestions panel", function() {
          fireEvent.keyDown(this.input, {
            key: "ArrowDown"
          });
          fireEvent.keyDown(this.input, {
            key: "Escape"
          });

          assert.isNull(document.querySelector("autoselect-list"));
        });

        // this is challenging to do with jsdom, so we'll leave this one for now
        it("keeps focus on the input");
      });
    });
  });
});
