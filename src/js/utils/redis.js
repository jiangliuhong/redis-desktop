// default 
import redis from 'redis';
const redisUtil = {
    config: {
        url: 'localhost',
        port: '6379',
        password: '123456'
    },
    client: null,
    createClient() {
        this.client = redis.createClient(this.config.port, this.config.url, {});
        this.client.auth(this.config.password, function (res) {
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
    setKey(key, value) {
        return new Promise((resolve, reject) => {
            this.client.set(key, value, (err, replay) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(replay);
                }
            })
        })
    },
    getKey(key) {
        return new Promise((resolve, reject) => {
            this.client.get(key, (err, replay) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(replay);
                }
            })
        })
    }
}
export default redisUtil;