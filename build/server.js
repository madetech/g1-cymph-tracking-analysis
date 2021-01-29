"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const DemoController_1 = require("./controllers/DemoController");
const controllers = require("./controllers/DemoController");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
class DemoServer extends core_1.Server {
    constructor() {
        super(true);
        this.SERVER_START_MSG = 'Demo server started on port: ';
        this._DEV_MSG = 'Express Server is running in development mode. ' +
            'No front-end content is being served.';
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        super.addControllers(new DemoController_1.default());
        if (process.env.NODE_ENV !== 'production') {
            console.info('Starting server in development mode');
            const msg = this._DEV_MSG + process.env.EXPRESS_PORT;
            this.app.get('*', (req, res) => res.send(msg));
        }
    }
    setupControllers() {
        const ctlrInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                let Controller = controllers[name];
                ctlrInstances.push(new Controller());
            }
        }
        super.addControllers(ctlrInstances);
    }
    start(port) {
        this.app.listen(port, () => {
            logger_1.Logger.Imp(this.SERVER_START_MSG + port);
        });
    }
}
exports.default = DemoServer;
//# sourceMappingURL=server.js.map