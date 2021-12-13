import { Context } from 'koa';

export class Controller {
    ctx: Context;
    constructor(ctx: Context) {
        this.ctx = ctx;
    }
}
