import MyComponent from './MyComponent'
import Alert from './Alert'

function App() {
  return (
    <MyComponent>
      <h2>What is children?</h2>
      <p>
        <strong>children</strong> is a special property of React components
        which contains any child elements defined within the component.
      </p>
      <div className="App">
      <Alert variant="success">این یک هشدار است!</Alert>
      <Alert variant="warning">
        <p className="text-center">این یک هشدار وسط‌چین است!</p>
      </Alert>
      <Alert variant="danger">
        <h4>این یک هشدار جدی است!</h4>
        <p>لطفاً هر چه سریعتر ان را بررسی کنید.</p>
      </Alert>
    </div>
    </MyComponent>
  )
}

export default App
