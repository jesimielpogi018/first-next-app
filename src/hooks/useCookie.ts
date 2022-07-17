/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";

interface CookieOptions {
   path?: string | undefined;
   secure?: boolean | undefined;
   expiry?: number | undefined;
   domain?: string | undefined;
   age?: number | undefined;
   sameSite?: "Lax" | "None" | "Strict" | undefined;
}

class Cookie {
   // creating or setting up new cookie
   set(name: string, value: string, options: CookieOptions = {}) {
      if (typeof document === "undefined") return;

      try {
         const settings: CookieOptions = {
            path: undefined,
            expiry: undefined,
            secure: undefined,
            age: undefined,
            domain: undefined,
            sameSite: undefined,
         };

         // option validation
         for (const [key, value] of Object.entries(options)) {
            (settings as any)[key] = value;
         }

         let cookieString = `${name}=${value};`;

         if (settings.path !== undefined) {
            cookieString += ` path=${settings.path};`;
         }

         if (settings.expiry !== undefined) {
            let expires = new Date(Date.now() + settings.expiry * 864e5);
            cookieString += ` expires=${expires.toUTCString()}`;
         }

         if (settings.domain !== undefined) {
            cookieString += ` domain=${settings.domain};`;
         }

         if (settings.sameSite !== undefined) {
            cookieString += ` SameSite=${settings.sameSite};`;
         }

         if (settings.secure) {
            cookieString += " Secure;";
         }

         if (settings.age !== undefined) {
            cookieString += ` max-age=${settings.age * (60 * 60 * 24)};`;
         }

         document.cookie = cookieString;

         return options;
      } catch (e) {
         console.error(e);
         return;
      }
   }

   // returning or getting the value of the cookie
   get(name: string) {
      if (typeof document === "undefined") return;
      const arr: string[] = document.cookie.split("; ");
      const size: number = arr.length;

      for (let i = 0; i < size; i++) {
         const current = arr[i].split("=");
         if (current[0] === name) {
            return current[1];
         }
      }

      return undefined;
   }

   // deleting a cookie
   remove(name: string) {
      if (typeof document === "undefined") return;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
   }

   // return all key-pair cookie in object form
   all() {
      if (typeof document === "undefined") return;
      const cookies = {};

      const arr: string[] = document.cookie.split("; ");
      const size: number = arr.length;

      for (let i = 0; i < size; i++) {
         const current = arr[i].split("=");
         (cookies as any)[current[0]] = current[1];
      }

      return cookies;
   }
}

const errorMessages = {
   SSR_ERR:
      "If you are using NextJS, Gatsby... declare useCookie inside the useEffect hooks. document does not exist and is not defined in node (Server-Side-Rendering)",
};

function createCookie() {
   if (typeof document === "undefined") return;

   return new Cookie();
}

export interface cookieObject {
   Cookie: Cookie | undefined,
   setCookie: Function
}

function useCookie() {

   if (typeof document === "undefined") {
      return;
      // throw new Error(errorMessages.SSR_ERR);
   }

   const [cookies, setCookies] = useState<Cookie | undefined>();


   useEffect(() => {
      setCookies(() => new Cookie());
   }, []);

   return cookies;
}

export { createCookie, useCookie };
