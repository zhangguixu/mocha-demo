var add = require("../src/add");
var assert = require("assert");

describe("加法测试", function(){
	it("1加1等于2", function(){
		assert.equal(2, add(1,1));
	});
})