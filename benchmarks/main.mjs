import { bench, group, run } from "mitata";
import { toHex } from "../index.mjs";

const h = "0123456789abcdef";

function toHexBaseString(c) {
  return (c & ~0x0f) !== 0 ? c.toString(16) : "0" + c.toString(16);
}

function toHexBase(buffer) {
  let result = "";
  for (let i = 0; i < buffer.length; ++i) {
    result += toHexBaseString(buffer[i]);
  }
  return result;
}

group("toHex", () => {
  const buffer = Buffer.from("abc".repeat(100));
  bench("fast", () => toHex(buffer));
  bench("base", () => toHexBase(buffer));
  bench("native", () => buffer.toString("hex"));
});

await run();
