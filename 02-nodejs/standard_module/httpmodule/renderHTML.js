function renderHTML(url) {
    switch (url) {
    case '/home':
    return `
    <html>
      <body>
        <b>home</b>
      </body>
    </html>
    `
    case '/list':
    return `
    <html>
      <body>
        <b>list</b>
      </body>
    </html>
    `
    case '/api/home':
        return`
         {name:'home'}
        `
    case '/api/list':
        return `
        ["list1","list2","list3"]
        `
    default:
    return `
    <html>
      <body>
        <b>not found</b>
      </body>
    </html>
    `
    }
  }

exports.renderHTML = renderHTML;


