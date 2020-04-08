// default 
import redis from 'redis';
const redisUtil = {
    config: {
        url: 'localhost',
        port: '6379',
        password: '123456'
    },
    client: null,
    /**
     * 创建连接
     * @param {Object} conf 配置信息
     */
    createClient(conf) {
        this.client = redis.createClient(conf.port, conf.url, {});
        this.client.auth(conf.password, function (res) {
            console.log(res);
        });
        const _this = this;
        this.client.on('connect', function () {
            _this.client.set('author', 'Wilson', redis.print);
            _this.client.get('author', redis.print);
            console.log('connect');
        });
        this.client.on('ready', function () {
            console.log('ready');
        });
    },
    /**
     * 获取链接
     */
    getClient() {
        if (this.client == null) {
            this.createClient(this.config);
        }
        return this.client;
    },
    /**
     * 设置值
     * @param {String} key 
     * @param {Object} value 
     */
    setKey(key, value) {
        const client = this.getClient();
        return new Promise((resolve, reject) => {
            client.set(key, value, (err, replay) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(replay);
                }
            })
        })
    },
    /**
     * 获取值
     * @param {String}} key 
     */
    getKey(key) {
        const client = this.getClient();
        return new Promise((resolve, reject) => {
            client.get(key, (err, replay) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(replay);
                }
            })
        })
    },
    /**
     * 查询key
     * @param {String}} pattern 
     */
    keys(pattern) {
        const client = this.getClient();
        return new Promise((resolve, reject) => {
            client.keys(pattern, (err, replay) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(replay);
                }
            });
        });
    }
}
export default redisUtil;