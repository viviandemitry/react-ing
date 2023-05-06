//React components are JavaScript functions that return markup

function MyButton() {
  return (
    <button>I'm a button</button>
    );
}

//After to declar MyButton, you can use it into another component:

export default function MyApp() {  // the export default specify the main component in the file
  return(
    <div>
      <h1>Welcome to my app</h1>
      <MyButton /> //We know it's a react component once it starts with capital letter.
    </div>
    );
}

// React projects use JSX for its convenience, You have to close tags like <br />

//EX:

function AboutPage(){
  retunr(
    <>
      <h1>ABout</h1>
       <p>Hello there.<br />How do you do?</p>
    </>
   );
}

//CSS works the same way as the HTML 

className="avatar" //passes the "avatar" as the class name
src={user.imageUrl} // reads the JavaScript user.imageUrl


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>   //Hedy Lamarr
      <img
        className="avatar"
        src={user.imageUrl}  //getting the url 
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}  //n the above example, style={{}} is not a special syntax, but a regular {} object inside the style={ } JSX curly braces.
      />
    </>
  );
}

