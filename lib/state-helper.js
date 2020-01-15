import { sinon } from "@sinonjs/referee-sinon";
export { getState };

function getState(overrides) {
  return Object.assign(
    {
      input: {
        value: "val"
      },
      dataSrc: sinon.fake.resolves
    },
    overrides
  );
}
