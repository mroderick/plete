import { sinon, assert } from "@sinonjs/referee-sinon";

import processResponse from "./process-response.js";

describe("processResponse", function() {
  context("when result is not an array", function() {
    it("it returns defaultResult", async function() {
      const promise = Promise.resolve({
        json: sinon.fake.resolves("b6ab9275-1cf5-4628-bdc3-f88c079dc73c")
      });
      const mapData = sinon.fake();
      const defaultResult = "6dc49244-e791-45b3-92ef-5055ffde6285";
      const result = await processResponse(promise, mapData, defaultResult);

      assert.equals(result, defaultResult);
    });
  });
  context("When result is an array", function() {
    it("it returns mapData(result)", async function() {
      const promise = Promise.resolve({
        json: sinon.fake.resolves(["b6ab9275-1cf5-4628-bdc3-f88c079dc73c"])
      });
      const mapData = sinon.fake.returns(
        "fe1961d8-f2ee-4c9f-8612-3385d69c18a2"
      );
      const result = await processResponse(promise, mapData);

      assert.equals(result, mapData.returnValues[0]);
    });
  });
});
