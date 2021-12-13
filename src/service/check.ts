import { BaseContext } from "koa";

class Service {
    ctx: BaseContext;
    constructor(ctx: BaseContext) {
        this.ctx = ctx;
    }
}

class check extends Service {
    index() {
        return 6 + 3;
    }
}

module.exports = check;
