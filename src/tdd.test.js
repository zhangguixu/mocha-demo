var mocha = require("suite");
var assert = require("assert");

var suite = mocha.suite;
var suiteSetup = mocha.suiteSetup;
var setup = mocha.setup;
var test = mocha.test;
var teardown = mocha.teardown;
var suiteTeardown = mocha.suiteTeardown;

// 一组测试用例
suite("数组API测试", function(){
    suiteSetup(function(){
        console.log("suiteSetup...");
    });

    setup(function(){
        console.log("setup...");
    });

    suite("IndexOf", function(){
         test("indexOf", function(){
            assert(-1, [1,2,3].indexOf(4));
        });
    });
   


    teardown(function(){
        console.log("teardown...");
    });

    suiteTeardown(function(){
        console.log("suiteTeardown");
    });
});