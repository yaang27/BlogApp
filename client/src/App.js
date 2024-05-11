import { Routes, Route, Outlet } from "react-router-dom";
import {
  BlogDetails,
  CategoriesPage,
  Home,
  LoginPage,
  SignupPage,
  WriterPage,
} from "./pages";
import { Loading } from "./components";

function Layout() {
}

function App() {
  const theme = "dark";
  const isLoading =false;

  return (
    <main className={theme}>
      <div className={`w-full min-h-screen relative bg-white dark:bg-[#020619]`}>
        <Routes>
          <Route element={<Layout />} />
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<CategoriesPage />} />
          <Route path='/:slug/:id?' element={<BlogDetails />} />
          <Route path='/writer/:id' element={<WriterPage />} />

          <Route path='/sign-up' element={<SignupPage />} />
          <Route path='/sign-in' element={<LoginPage />} />
        </Routes>

      {isLoading && <Loading />}
      </div>
    </main>
  );
}

export default App;
