import { assert, sinon } from "@sinonjs/referee-sinon";
import { loadDefault } from "./proxyquire-helper.js";

function getOptions(overrides) {
  return Object.assign(
    {
      mapData: function identity(data) {
        return data;
      },
      urlTemplate: "{query}"
    },
    overrides
  );
}

describe("pleteWithFetchAndAbort", function() {
  beforeEach(function() {
    this.fakePlete = sinon.fake.returns("ff7abd30-c066-43de-b71c-3b376a6bb564");
    this.fakeFetchDataSrc = sinon.fake();

    this.pleteWithFetchAndAbort = loadDefault(
      "./plete-with-fetch-and-abort.js",
      {
        "./plete.js": this.fakePlete,
        "./fetch-data-src.js": this.fakeFetchDataSrc
      }
    );
  });

  it("returns a Plete instance", function() {
    const options = getOptions();
    const result = this.pleteWithFetchAndAbort(options);

    assert.isTrue(result instanceof this.fakePlete);
  });

  context("when called with an invalid urlTemplate option", function() {
    it("throws an error", function() {
      const t = this;
      [undefined, "6def581d-fecf-4181-84e0-1e06d1b9e4ba"].forEach(function(
        value
      ) {
        const options = getOptions({
          urlTemplate: value
        });

        assert.exception(
          function() {
            t.pleteWithFetchAndAbort(options);
          },
          {
            message:
              "urlTemplate option expected to be a string containing '{query}'"
          }
        );
      });
    });
  });

  context("when called with an invalid mapData option", function() {
    it("throws an error", function() {
      const t = this;

      [undefined, sinon.fake()].forEach(function(value) {
        const options = getOptions({
          mapData: value
        });

        assert.exception(
          function() {
            t.pleteWithFetchAndAbort(options);
          },
          {
            message: "mapData option expected to be a unary function"
          }
        );
      });
    });
  });

  context("when called with a dataSrc option", function() {
    it("throws an error", function() {
      const t = this;

      [[], sinon.fake()].forEach(function(value) {
        const options = getOptions({
          dataSrc: value
        });

        assert.exception(
          function() {
            t.pleteWithFetchAndAbort(options);
          },
          {
            message:
              "pleteWithFetchAndAbort does not use a dataSrc option, but uses urlTemplate and mapData options"
          }
        );
      });
    });
  });
});
