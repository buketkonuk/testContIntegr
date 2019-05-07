
// import {hello} from "./hello.js";

const hello = require("./hello.js");

test('should be defined', () => {
    expect(hello).toBeDefined();
}) 