import $ from "jquery";

export async function fetch_post(url, body) {

   // let isFailed = null;
   let data = null;

   const settings = {
      url: url,
      method: "POST",
      crossDomain: true,
      data: body,
      dataType: "json",
      success: (res, status, xhr) => {
         console.log(res);
         console.log(status);
         console.log(xhr);

         data = res;
      },
      error: (xhr, status, error) => {
         console.log(xhr);
         console.log(status);
         console.error(error);
      }
   };

   await $.ajax(settings);

   console.log(data);

   return data;
}