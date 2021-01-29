"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
if (process.argv[2] !== 'test') {
    let server = new server_1.default();
    server.start(3000);
}
//# sourceMappingURL=start.js.map