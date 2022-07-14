import $ from "jquery";

export async function fetch_get(url) {
   let response = null;

   const settings = {
      url: url,
      method: "GET",
      success: (data, status, xhr) => {
         console.log(data);
         console.log(status);
         console.log(xhr);

         response = data;
      }
   };
   
   await $.ajax(settings);

   return response;
}