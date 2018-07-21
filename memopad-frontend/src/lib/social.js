import hello from 'hellojs';
//Function based Stretegy Pattern 
//Hello js 말고 다른 OAuth 라이브러리를 사용할수도 있으므로 함수로 전략선택 
hello.init({
    facebook: '278174676262839',
    google : '1009134774673-8pgmla58nipkirdmg2oq1jn71q7aa1ca.apps.googleusercontent.com'
},{
    scope : ['email']
});

class SocialProvider {

    constructor() {
        this.type = '';
        this.stretegy = null;
    }

    setStretegy(stretegy) {
        if( !stretegy instanceof Stretegy ) {
            throw 'Not a valid Stretegy Type';
        }
        
        this.stretegy = stretegy;
        return this;
    }
    
    login() {
        return this.stretegy.login();
    }

    me() {
        return this.stretegy.me();
    }
}

class Stretegy {
    constructor() {
        
    }

    login() {
        throw 'Must be Override!';
    }

    me() {
        throw 'Must be Override!';
    }
}


export const FacebookStretegy = class extends Stretegy {

    login() {
        return new Promise((resolve,reject) => {
            hello.login('facebook').then(
                () => resolve(hello('facebook').getAuthResponse())
                , e => reject(e)
            )
        });
    }

    me() {
        return new Promise((resolve, reject) => {
            hello('facebook').api('me',{fields: 'email,name,id'}).then(
                json => resolve(json),
                e => reject(e)
            )
        })
    }
}

export const GoogleStretegy = class extends Stretegy {

    login() {
        return new Promise((resolve,reject) => {
            hello.login('google').then(
                () => resolve(hello('google').getAuthResponse())
                , e => reject(e)
            )
        });
    }

    me() {
        return new Promise((resolve, reject) => {
            hello('google').api('me').then(
                json => resolve(json),
                e => reject(e)
            )
        })
    }
}

export default new SocialProvider();