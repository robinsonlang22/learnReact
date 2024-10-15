const finalizationRegistry = new FinalizationRegistry((value) => {
    console.log('obj 被销毁了', value);
});

let obj = { name: 'why' };
let info = new WeakRef(obj);

finalizationRegistry.register(obj, 'obj');

console.log(info.deref());
obj = null;


