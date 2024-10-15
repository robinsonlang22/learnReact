const info = {
    name: 'John',
    friend: {
        name: 'Jane',
        girlFriend: {
            name: 'Alice',
        },
    },
};

// 可选链 undefined.girlFriend 不会报错
console.log(info.friend?.girlFriend?.name);

