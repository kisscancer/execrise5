class Base {
    constructor() {
        this.events = {};
    }
    on(event, fn) {
        // 实现1
        // if(!this.events[event]){
        //     this.events[event] = [];
        // }

        // this.events[event].push(fn);

        // 实现2
        (this.events[event] = this.events[event] || [])
            .push(fn);
    }
    trigger(event, value) {
        this.events[event]
            .forEach(fn => {
                fn.call(this, value);
            });
    }
}

module.exports = Base