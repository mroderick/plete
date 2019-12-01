import jsc from "jsverify";

const positiveIntegersArb = jsc.nat.smap(
  x => x + 1,
  x => x - 1
);

export { positiveIntegersArb };
