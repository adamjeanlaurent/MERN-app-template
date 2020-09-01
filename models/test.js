class Test {
    static async Get() {
        let res = {
           name : 'Adam',
           message : 'Hello World!'
        } 
        return JSON.stringify(res);
    }
}

module.exports = Test;
