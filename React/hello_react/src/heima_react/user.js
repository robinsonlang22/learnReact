
const user = {
    name: 'Success Kid',
    imageUrl: 'https://i.imgur.com/4hXONqs.png',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <div>
        <h1>{user.name}</h1>
        <img
            className="avatar" 
            src={user.imageUrl} 
            alt={' Photo of ' + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
        />
      </div>
    )
  }
  