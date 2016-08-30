var assert = require("assert");

describe("测试用例组", () => {
    it.skip("skip", () => {
        assert.equal(1, 1);
    });

    it("普通测试用例", () => {
        assert(1,1);
    });
})