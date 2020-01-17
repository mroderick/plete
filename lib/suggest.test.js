import { assert, sinon } from "@sinonjs/referee-sinon";
import { loadDefault } from "./proxyquire-helper.js";
import { getState } from "./state-helper.js";

describe("suggest", function() {
  it("is a unary Function named 'suggest'", function() {
    const suggest = loadDefault("./suggest", {});

    assert.hasArity(suggest, 1);
    assert.equals(suggest.name, "suggest");
  });

  context("when filter returns a promise", function() {
    before(function() {
      this.filterResult = ["1654642f-d476-4e3c-9ea5-1359b7258889"];
      const fakeClearSuggestion = sinon.fake();
      const fakeFilter = sinon.fake.resolves(this.filterResult);
      this.fakeRender = sinon.fake();
      const fakeSelect = sinon.fake();

      this.suggest = loadDefault("./suggest.js", {
        "./clear-suggestions.js": fakeClearSuggestion,
        "./filter": fakeFilter,
        "./render": this.fakeRender,
        "./select": fakeSelect
      });
    });

    it("calls render with the data of the promise", async function() {
      const { fakeRender, filterResult, suggest } = this;
      const state = getState();

      await suggest(state);

      assert.calledWith(fakeRender, state, filterResult);
    });
  });

  context("when filter returns an object", function() {
    before(function() {
      this.filterResult = ["1654642f-d476-4e3c-9ea5-1359b7258889"];
      const fakeClearSuggestion = sinon.fake();
      const fakeFilter = sinon.fake.returns({
        promise: Promise.resolve(this.filterResult),
        abort: sinon.fake()
      });
      this.fakeRender = sinon.fake();
      const fakeSelect = sinon.fake();

      this.suggest = loadDefault("./suggest.js", {
        "./clear-suggestions.js": fakeClearSuggestion,
        "./filter": fakeFilter,
        "./render": this.fakeRender,
        "./select": fakeSelect
      });
    });

    it("calls render with the data of the promise", async function() {
      const { fakeRender, filterResult, suggest } = this;
      const state = getState();

      await suggest(state);

      assert.calledWith(fakeRender, state, filterResult);
    });
  });
});
