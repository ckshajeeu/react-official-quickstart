import './App.css'

function App() {
  
  return (
    <>
      <div className='container'>
        <div className='topic'>Creating and nesting components </div>
        <div>
          <h1>Welcome to my app</h1>
          <MyButton />
        </div>
      </div>

      <div className='container'>
        <div className='topic'>Writing markup with JSX</div>
        <div>
          <AboutPage />
        </div>
      </div>

      <div className='container'>
        <div className='topic'>Adding styles </div>
        <div>
          <img className='avatar' src='https://placehold.co/100'/>
        </div>
      </div> 

      <div className='container'>
        <div className='topic'>Displaying data</div>
        <div>
          <Profile />
        </div>
      </div> 
    </>
    
  )
}

function MyButton() {
  return (
    <button>I'm a button</button>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  )
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
}
function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img className='avatar' src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  )
}

export default App
