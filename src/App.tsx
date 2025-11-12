import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <h1>React Quickstart</h1>
      <a href="https://react.dev/learn" target='_blank'>
        Link to official quickstart
      </a>

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
          <img className='avatar' src='https://placehold.co/100' />
        </div>
      </div>

      <div className='container'>
        <div className='topic'>Displaying data</div>
        <div>
          <Profile />
        </div>
      </div>

      <div className='container'>
        <div className='topic'>Conditional rendering</div>
        <div>
          <SecuredContent />
        </div>
        <div>
          {isLoggedIn2 ? <AdminPanel /> : <LoginForm />}
        </div>
        <div>
          {isLoggedIn && <AdminPanel />}
        </div>
      </div>

      <div className='container'>
        <div className='topic'>Rendering lists</div>
        <div>
          <ShoppingList />
        </div>
      </div>

      <div className='container'>
        <div className='topic'>Responding to events</div>
        <div><p></p>
          <MyButton2 />
        </div>
      </div>

      <div className='container'>
        <div className='topic'>Updating the screen</div>
        <div><p></p>
          <MyButton3 /> &nbsp;
          <MyButton3 />
        </div>
      </div>

      <div className='container'>
        <div className='topic'>Sharing data between components</div>
        <div><p></p>
          <MyButton4 count={count} onClick={handleClick} /> &nbsp;
          <MyButton4  count={count} onClick={handleClick} />
        </div>
      </div>

    </>

  )
}

import { useState } from 'react';

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



let isLoggedIn = false
let isLoggedIn2 = true
function SecuredContent() {
  let content: any;
  if (isLoggedIn) {
    content = <AdminPanel />
  } else {
    content = <LoginForm />
  }
  return (
    <>
      <div>
        {content}
      </div>
    </>
  )
}
function AdminPanel() {
  return (
    <>
      <h1>AdminPane</h1>
    </>
  )
}
function LoginForm() {
  return (
    <>
      <h1>LoginForm</h1>
    </>
  )
}

const products = [
  { title: 'Cabbage', id: 1 , isFruit: false},
  { title: 'Garlic', id: 2 , isFruit: true},
  { title: 'Apple', id: 3 , isFruit: false},
]
function ShoppingList() {
  const listItems: any = products.map(product =>
    <li key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
    {product.title}</li>
  )

  return (
    <ul>{listItems}</ul>
  )
}

function MyButton2() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  )
}

function MyButton3() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>Clicked {count} times</button>
  )
}

function MyButton4({count, onClick} :any) {
  return (
    <button onClick={onClick}>Clicked {count} times</button>
  )
}

export default App
