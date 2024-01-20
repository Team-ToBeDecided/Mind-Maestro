import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Router } from "./Router";
import { AuthContextProvider } from "./contexts/AuthContext";
import { useContext } from "react";
import { UserAuth } from "./contexts/AuthContext";
import { Spinner } from "@material-tailwind/react";

const App = () => {

  // const { loading } = UserAuth();

  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          {/* {loading && <div className=" opacity-50 blur-xl h-screen w-screen flex justify-center items-center z-50">
            <Spinner color="blue" className="w-10 h-10" />
          </div>} */}
          <Router />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  )
}

export default App;