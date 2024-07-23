// 响应式 - 事件处理

function EventEmitter () {

  this.callbacks = {};

  this.subscribe = function (eventType, callback) {
    if (!this.callbacks[eventType]) {
      this.callbacks[eventType] = [callback];
      return;
    } 

    this.callbacks[eventType].push(callback);
  }

  this.publish = function (eventType) {
    if (!this.callbacks[eventType]) return;

    this.callbacks[eventType].forEach(cb => cb());
  }
}


const e = new EventEmitter();

e.subscribe('hello', function () {
  console.log('hello');
})

e.subscribe('hi', function () {
  console.log('hi');
})

e.publish('hello');