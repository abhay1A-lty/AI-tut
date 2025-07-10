import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'

import AdminRoutes from "./Routes/AdminRoutes/AdminRoutes.jsx";
import SmeRoutes from "./Routes/SmeRoutes/SmeRoutes.jsx";
import DataEntryRoutes from "./Routes/DataEntryRoutes/DataEntryRoutes.jsx";
import StudentRoutes from "./Routes/StudentRoutes/StudentRoutes.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GlobalLoader from "./Components/CommonComponents/Loaders/GlobalLoader.jsx";

const App = () => {
  return (
    <Router>
      <Toaster position="bottom-right" />
      <GlobalLoader/>
      <GoogleOAuthProvider clientId="531480060774-mnnq17ff8jkmk9c5ts0ti07bga88a83m.apps.googleusercontent.com">
      <Routes>
        <Route path="/dataEntry/*" element={<DataEntryRoutes/>} />
        <Route path="/sme/*" element={<SmeRoutes/>}/>
        <Route path="/admin/*" element={<AdminRoutes/>}/>
        <Route path="/*" element={<StudentRoutes/>}/>
      </Routes>
      </GoogleOAuthProvider>
    </Router>
  )
}

export default App