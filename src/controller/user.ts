import { Controller } from './base';
import { bp } from '../blueprint';

export default class User extends Controller {
    async user() {
        this.ctx.body = this.ctx.service.check.index();
        // console.log(this.ctx.service.check.ctx, 111);
        // console.log(this.ctx.config.middleware[0], 222);
        // console.log(this.ctx.Sequelize, 333);
    }

    @bp.get('/test')
    async userinfo() {
        this.ctx.body = '我是装饰器';
        // console.log(this.ctx.service.check.ctx, 111);
    }
}
