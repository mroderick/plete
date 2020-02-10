import { sinon, assert } from "@sinonjs/referee-sinon";
import { loadDefault } from "./proxyquire-helper.js";

function prepareTest(
  t,
  error,
  result = "48cf68ea-91f4-4945-9e74-ab6fc8c27287"
) {
  t.fakeAddAbortSignal = sinon.fake.returns(
    "84e73b2b-b234-49f6-b411-7e05c245a6e3"
  );
  t.fakeProcessResponse = error
    ? sinon.fake.throws(error)
    : sinon.fake.returns(result);
  t.fetchDataSrc = loadDefault("./fetch-data-src.js", {
    "./add-abort-signal.js": t.fakeAddAbortSignal,
    "./process-response.js": t.fakeProcessResponse
  });
}

describe("fetchDataSrc", function() {
  after(function() {
    sinon.restore();
  });

  it("calls fetch with fetchOptions", function() {
    prepareTest(this);
    const fakeFetch = sinon.fake.resolves(
      "caf721e7-cca2-4def-b71c-a5ea09b9c91c"
    );
    const urlTemplate = "{query}";
    const mapData = sinon.fake();
    const fetchOptions = {};
    const query = "00becaa8-936b-43cc-9af4-7cf396c037d6";

    this.fetchDataSrc(fakeFetch, urlTemplate, mapData, fetchOptions, query);

    assert.calledOnce(fakeFetch);
    assert.calledWith(
      fakeFetch,
      query,
      this.fakeAddAbortSignal.returnValues[0]
    );
  });

  it("returns the processed response", function() {
    prepareTest(this);
    const fakeFetch = sinon.fake.resolves(
      "caf721e7-cca2-4def-b71c-a5ea09b9c91c"
    );
    const urlTemplate = "{query}";
    const mapData = sinon.fake();
    const fetchOptions = {};
    const query = "00becaa8-936b-43cc-9af4-7cf396c037d6";

    const result = this.fetchDataSrc(
      fakeFetch,
      urlTemplate,
      mapData,
      fetchOptions,
      query
    );

    assert.equals(result, this.fakeProcessResponse.returnValues[0]);
  });

  context("when a request is aborted", function() {
    it("returns an empty array", function() {
      const error = new Error();
      error.name = "AbortError";
      prepareTest(this, error);
      const fakeFetch = sinon.fake.resolves(
        "caf721e7-cca2-4def-b71c-a5ea09b9c91c"
      );
      const urlTemplate = "{query}";
      const mapData = sinon.fake();
      const fetchOptions = {};
      const query = "00becaa8-936b-43cc-9af4-7cf396c037d6";

      const result = this.fetchDataSrc(
        fakeFetch,
        urlTemplate,
        mapData,
        fetchOptions,
        query
      );
      assert.equals(result, []);
    });
  });

  context("when process response throws", function() {
    it("re-throws the same error", function() {
      const errorMessage = "e2ac030f-ef6f-48a3-a3d0-11af9e41d8c2";
      const error = new Error(errorMessage);
      prepareTest(this, error);
      const fakeFetch = sinon.fake.resolves(
        "caf721e7-cca2-4def-b71c-a5ea09b9c91c"
      );
      const urlTemplate = "{query}";
      const mapData = sinon.fake();
      const fetchOptions = {};
      const query = "00becaa8-936b-43cc-9af4-7cf396c037d6";
      const t = this;

      assert.exception(
        function() {
          t.fetchDataSrc(fakeFetch, urlTemplate, mapData, fetchOptions, query);
        },
        {
          message: errorMessage
        }
      );
    });
  });
});
