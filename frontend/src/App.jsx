import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import SendMoney from './pages/SendMoney'
import Dashboard from './pages/Dashboard'
import Success from './pages/Success'

function App() {

  return (
    <div>
      <BrowserRouter>
       {/* <Appbar /> */}
       <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sendMoney" element={<SendMoney />} />
          <Route path="/success" element={<Success />} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
