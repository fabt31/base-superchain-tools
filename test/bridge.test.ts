import { estimateBridgeTime } from "../src/bridge";
describe("bridge utils", () => {
  it("returns 7-day estimate for Base->Ethereum", () => {
    const t = estimateBridgeTime("base", "ethereum");
    expect(t).toContain("7 days");
  });
  it("returns fast estimate for L2->L2", () => {
    const t = estimateBridgeTime("base", "mode");
    expect(t).toContain("minutes");
  });
});