var assert = require("assert");
var should = require("should");

describe("数组测试", () => {
	before(() => {
        console.log("before");
    });

    beforeEach(() => {
        console.log("beforeEach");
    });

    describe("测试indexOf", () => {
        context("当不存在元素时", () => {
            it("不应该抛出错误", () => {
                (() => {
                    [1,2,3].indexOf(4);
                }).should.not.throw();
            })
        });
        context("当存在元素时，需要返回该元素第一次出现的下标", () => {
            it("应该返回1", () => {
                [1,2,3].indexOf(1).should.equal(0)
            })
        });
    });

    describe("测试join", () => {
        context("当不存在参数时", () => {
            it("不应该抛出错误", () => {
                (() => {
                    [1,2,3].join();
                }).should.not.throw();
            })
        });
        context("当存在参数，应该以该参数为分隔符", () => {
            it("应该返回1&2&3", () => {
                [1,2,3].join("&").should.equal("1&2&3")
            })
        });
    });
    
    // specify(() => {
    //     console.log("specify");
    // });

    after(() => {
        console.log("after");
    });

    afterEach(() => {
        console.log("afterEach");
    });

});