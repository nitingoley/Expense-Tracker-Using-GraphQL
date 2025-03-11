import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import TransactionPage from "./pages/TransactionPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "./graphql/queries/user.query";
import { Toaster } from "react-hot-toast";

function App() {
  const { loading, data} = useQuery(GET_AUTHENTICATED_USER);
  // console.log(GET_AUTHENTICATED_USER);

  if (loading) return null;
  return (
    <div>
      {data?.authUser && <Header />}
      <Routes>
				<Route path='/' element={data.authUser ? <Home /> : <Navigate to='/login' />} />
				<Route path='/login' element={!data.authUser ? <Login /> : <Navigate to='/' />} />
				<Route path='/signup' element={!data.authUser ? <Signup /> : <Navigate to='/' />} />
				<Route
					path='/transaction/:id'
					element={data.authUser ? <TransactionPage /> : <Navigate to='/login' />}
				/>
				<Route path='*' element={<NotFound />} />
			</Routes>
      <Toaster />
    </div>
  );
}

export default App;
