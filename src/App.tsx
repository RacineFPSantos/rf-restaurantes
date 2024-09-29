import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import OrderManagement from '@/pages/OrderManagement';
import MenuManagement from '@/pages/MenuManagement';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white p-4 shadow-md">
          <ul className="flex space-x-4">
            <li>
              <a href="/orders" className="text-blue-600">Orders</a>
            </li>
            <li>
              <a href="/menu" className="text-blue-600">Menu</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/orders" element={<OrderManagement />} />
          <Route path="/menu" element={<MenuManagement />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
