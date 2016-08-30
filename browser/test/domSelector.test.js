var expect = chai.expect;
describe("dom选择器测试", function(){

    context("不存在该元素时", function() {
        it("应该返回null", function(){
            expect(document.getElementById("1")).to.be.equal(null);
        });
    });

    context("存在该元素时", function() {
        it("应该返回该元素", function(){
            expect(document.getElementById("mocha").id).to.be.equal("mocha");
        });
    });

});