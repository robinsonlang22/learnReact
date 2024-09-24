const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    // 处理成功情况
    console.log(response.data);
  })
  .catch(function (error) {
    // 处理错误情况
    console.log(error);
  })
  .finally(function () {
    console.log("already finish");
  });

