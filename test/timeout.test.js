var assert = require("assert");

describe("异步测试", () => {
    it("x的值应该为true", (done) => {
        var x = false;
        setTimeout(() => {
            x = true;
            console.log(x);
            assert.equal(true, x);
            //done(); // 通知mocha测试结束
        },4000);
    })
})