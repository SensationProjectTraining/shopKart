import { Link } from 'react-router-dom'
const Shopping = () => {
  return (
    <>
        <div className='bg-orange-500 text-center'>
        <Link className="px-6 hover:text-white hover:bg-blue-700" to="/">Home</Link>
        <Link className="px-6 hover:text-white hover:bg-blue-700" to="/Shopping">Shopping</Link>
        <Link className="px-6 hover:text-white hover:bg-blue-700" to="/Cart">Cart</Link>
        <Link className="px-6 hover:text-white hover:bg-blue-700" to="/Login">Login/SignUp</Link>
        </div>
      <h1>Shopping</h1>
    </>
  )
}

export default Shopping
