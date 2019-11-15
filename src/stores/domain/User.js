import Base from './Base';
import {observable} from 'mobx';
import moment from 'moment';
import realm from '../../servers/realm';
import global from '../Global'
import _ from 'lodash'

export default class User extends Base {
    @observable user_uuid = '';
    // 是否登录
    @observable user_type = '';
    // 登录账号
    @observable user_no = '';
    // 姓名
    @observable user_name = '';
    // 密码
    @observable user_pwd = '';
    // 年龄
    @observable user_age = '';
    // 电话号码
    @observable phone_number = '';
    //创建日期
    @observable crt_date = ''

    constructor() {
        super();
        this.user_uuid = this.serno;
    }

    static create(user) {
        realm.create('User', realm.cascadingCopy(user), true)
    }

    static update(user) {
        user.crt_date = moment().format("YYYY/MM/DD HH:mm:ss");
        realm.create('User', user, true)
    }

    static deleteUser() {
        const localUser = realm.objects('User')
        realm.delete(localUser)
    }
}
