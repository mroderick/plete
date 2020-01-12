import { assert, sinon } from "@sinonjs/referee-sinon";
import { loadDefault } from "./proxyquire-helper.js";
import { getState } from "./state-helper.js";

const filterResult = ["1654642f-d476-4e3c-9ea5-1359b7258889"];
const fakeClearSuggestion = sinon.fake();
const fakeFilter = sinon.fake.resolves(filterResult);
const fakeRender = sinon.fake();
const fakeSelect = sinon.fake();

const suggest = loadDefault("./suggest.js", {
  "./clear-suggestions.js": fakeClearSuggestion,
  "./filter": fakeFilter,
  "./render": fakeRender,
  "./select": fakeSelect
});

describe("suggest", function() {
  it("is a unary Function named 'suggest'", function() {
    assert.hasArity(suggest, 1);
    assert.equals(suggest.name, "suggest");
  });

  context("when filter returns a promise", function() {
    it("calls render with the data of the promise", async function() {
      const state = getState();

      await suggest(state);

      assert.calledWith(fakeRender, state, filterResult);
    });
  });
});
