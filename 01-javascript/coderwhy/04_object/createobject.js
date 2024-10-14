var name = 'lang';

var obj = {
  name: 'kobe',
  age: 40,
  height: 198,
  eating: function () {
    console.log(this.name + ' eating');
  },
};

obj.eating();

Object.defineProperty(obj, 'name', {
  get: function () {
    return this.name;
  },
  set: function (newName) {
    this.name = newName;
  },
});