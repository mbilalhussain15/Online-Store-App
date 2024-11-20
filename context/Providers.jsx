"use client"
import { ThemeProvider } from 'next-themes'
import {Provider} from "react-redux"
import {store} from "@/redux/store"

import {Toaster} from 'react-hot-toast'
import { SessionProvider } from "next-auth/react";
// import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
// import { extractRouterConfig } from "uploadthing/server";
// import { ourFileRouter } from "../app/api/uploadthing/core";
import React from 'react'
import { useEffect } from 'react';

function disableInspect() {
  // Disable right-click
  document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
  });

  // Disable keyboard shortcuts
  document.onkeydown = function(e) {
      if (
          e.key === "F12" ||
          (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
          (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
          (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
          (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
          (e.ctrlKey && e.keyCode === 83) // Ctrl+S
      ) {
          return false;
      }
  };
}

export default function Providers({children}) {
//   useEffect(() => {
//     disableInspect();
// }, []);
  return (
   <ThemeProvider attribute='class' defaultTheme='dark'>
     {/* <NextSSRPlugin
      
          routerConfig={extractRouterConfig(ourFileRouter)}
        /> */}
    <Toaster position="top-center" reverseOrder={false}/>
    <SessionProvider>
        <Provider store={store}>{children}</Provider>
    </SessionProvider>;
    {children}
   </ThemeProvider>
  )
}
