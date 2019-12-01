import { assert, refute, sinon } from "@sinonjs/referee-sinon";
import jsc from "jsverify";
import { positiveIntegersArb } from "./arbitraries.js";

import { getOptions } from "../test/test-helper.js";

import validateOptions from "./validate-options.js";

describe("validateOptions", function() {
  context("when `input` option is not an instance of HTMLElement", function() {
    it("throws a TypeError", function() {
      const invalidOptions = getOptions({ input: {} });
      const expectedError = {
        name: "TypeError",
        message:
          "input option expected to be an input DOM element, but was: [object Object]"
      };

      assert.exception(function() {
        validateOptions(invalidOptions);
      }, expectedError);
    });
  });

  context("when `input` option is not an INPUT element", function() {
    it("throws a TypeError", function() {
      const invalidOptions = getOptions({
        input: document.createElement("div")
      });
      const expectedError = {
        name: "TypeError",
        message:
          "input option expected to be an input DOM element, but was: [object HTMLDivElement]"
      };

      assert.exception(function() {
        validateOptions(invalidOptions);
      }, expectedError);
    });
  });

  context(
    "when `input` option does not have a text type attribute",
    function() {
      it("throws a TypeError", function() {
        const invalidInput = document.createElement("input");
        invalidInput.type = "radio";

        const invalidOptions = getOptions({
          input: invalidInput
        });
        const expectedError = {
          name: "TypeError",
          message:
            "input option expected to be an input DOM element, but was: [object HTMLInputElement], with type radio"
        };

        assert.exception(function() {
          validateOptions(invalidOptions);
        }, expectedError);
      });
    }
  );

  context("when `dataSrc` option is not an Array or a Function", function() {
    it("throws a TypeError", function() {
      const invalidOptions = getOptions({ dataSrc: {} });
      const expectedError = {
        name: "TypeError",
        message: "dataSrc option expect to be an Array or a Function"
      };

      assert.exception(function() {
        validateOptions(invalidOptions);
      }, expectedError);
    });
  });

  context("when `autoFirst` is not a Boolean", function() {
    it("throws a TypeError", function() {
      const invalidOptions = getOptions({ autoFirst: "true" });
      const expectedError = {
        name: "TypeError",
        message: "Expected autoFirst option to be a boolean"
      };

      assert.exception(function() {
        validateOptions(invalidOptions);
      }, expectedError);
    });
  });

  context("when maxItems is a positive integer", function() {
    it("does not throw", function() {
      jsc.assertForall(positiveIntegersArb, function(value) {
        const options = getOptions({ maxItems: value });

        validateOptions(options);

        return true;
      });
    });
  });

  context("when maxItems is not a positive Integer", function() {
    it("throws a TypeError", function() {
      const invalidOptions = getOptions({ maxItems: "5" });
      const expectedError = {
        name: "TypeError",
        message: "Expected maxItems option to be a positive integer"
      };

      assert.exception(function() {
        validateOptions(invalidOptions);
      }, expectedError);
    });
  });

  context("when minChars is a positive integer", function() {
    it("does not throw", function() {
      jsc.assertForall(positiveIntegersArb, function(value) {
        const options = getOptions({ minChars: value });

        validateOptions(options);

        return true;
      });
    });
  });

  context("when minChars is not a positive Integer", function() {
    it("throws a TypeError", function() {
      const invalidOptions = getOptions({ minChars: "5" });
      const expectedError = {
        name: "TypeError",
        message: "Expected minChars option to be a positive integer"
      };

      assert.exception(function() {
        validateOptions(invalidOptions);
      }, expectedError);
    });
  });

  context("when render option is a function", function() {
    it("does not throw", function() {
      refute.exception(function() {
        validateOptions(getOptions({ render: sinon.fake() }));
      });
    });
  });

  context("when render option is undefined", function() {
    it("does not throw", function() {
      refute.exception(function() {
        validateOptions(getOptions({ render: undefined }));
      });
    });
  });

  context(
    "when render option is not and Function, and not `undefined`",
    function() {
      it("throws a TypeError", function() {
        const invalidOptions = getOptions({ render: "not a function" });
        const expectedError = {
          name: "TypeError",
          message: "Expected render option to be a function or undefined"
        };

        assert.exception(function() {
          validateOptions(invalidOptions);
        }, expectedError);
      });
    }
  );

  context("when busy option is a function", function() {
    it("does not throw", function() {
      refute.exception(function() {
        validateOptions(getOptions({ busy: sinon.fake() }));
      });
    });
  });

  context("when busy option is undefined", function() {
    it("does not throw", function() {
      refute.exception(function() {
        validateOptions(getOptions({ busy: undefined }));
      });
    });
  });

  context(
    "when busy option is not and Function, and not `undefined`",
    function() {
      it("throws a TypeError", function() {
        const invalidOptions = getOptions({ busy: "not a function" });
        const expectedError = {
          name: "TypeError",
          message: "Expected busy option to be a function or undefined"
        };

        assert.exception(function() {
          validateOptions(invalidOptions);
        }, expectedError);
      });
    }
  );

  context("when ready option is a function", function() {
    it("does not throw", function() {
      refute.exception(function() {
        validateOptions(getOptions({ ready: sinon.fake() }));
      });
    });
  });

  context("when ready option is undefined", function() {
    it("does not throw", function() {
      refute.exception(function() {
        validateOptions(getOptions({ ready: undefined }));
      });
    });
  });

  context(
    "when ready option is not and Function, and not `undefined`",
    function() {
      it("throws a TypeError", function() {
        const invalidOptions = getOptions({ ready: "not a function" });
        const expectedError = {
          name: "TypeError",
          message: "Expected ready option to be a function or undefined"
        };

        assert.exception(function() {
          validateOptions(invalidOptions);
        }, expectedError);
      });
    }
  );

  context("when select option is a function", function() {
    it("does not throw", function() {
      refute.exception(function() {
        validateOptions(getOptions({ select: sinon.fake() }));
      });
    });
  });

  context("when select option is undefined", function() {
    it("does not throw", function() {
      refute.exception(function() {
        validateOptions(getOptions({ select: undefined }));
      });
    });
  });

  context(
    "when select option is not and Function, and not `undefined`",
    function() {
      it("throws a TypeError", function() {
        const invalidOptions = getOptions({ select: "not a function" });
        const expectedError = {
          name: "TypeError",
          message: "Expected select option to be a function or undefined"
        };

        assert.exception(function() {
          validateOptions(invalidOptions);
        }, expectedError);
      });
    }
  );
});
