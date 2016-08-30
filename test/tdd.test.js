var mocha = require("mocha");
var assert = require("assert");

var suite = mocha.suite;
var suiteSetup = mocha.suiteSetup;
var setup = mocha.setup;
var test = mocha.test;
var teardown = mocha.teardown;
var suiteTeardown = mocha.suiteTeardown;

// 一组测试用例
suite("Array", function(){
    suiteSetup(function(){
        console.log("suiteSetup...");
    });

    setup(function(){
        console.log("setup...");
    });

    suite("测试indexOf", function(){
        test("搜索应该返回-1", function(){
            assert(-1, [1,2,3].indexOf(4));
        });
    });

    suite("测试IndexOF", function(){
        test("搜索应该返回0", function(){
            assert(1, [1,2,3].indexOf(1));
        });
    })

    teardown(function(){
        console.log("teardown...");
    });

    suiteTeardown(function(){
        console.log("suiteTeardown");
    });
});