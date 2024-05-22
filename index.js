
    var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
    var sidemenu=document.getElementById("SideMenu");
    function openMenu(){
        sidemenu.style.right="0";

    }
    function closeMenu(){
        sidemenu.style.right="-200px";
        
    }
  
//   <!-- <scrip>
//     const scriptURL ="https://script.google.com/macros/s/AKfycbyfjI20nq4-EWrRshLQaejHeKAqmfvsrEhe3peWg9FZWIVKHJcGHd6iwxSVgOGN1KHJMQ/exec"
//     const form = document.forms['submit-to-google-sheet']
  
//     const msg=document.getElementById("msg")
//     form.addEventListener('submit', e => {
//       e.preventDefault()
//       fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response =>{
//             msg.innerHTML="Message sent successfully"
//             setTimeout(function(){
//                 msg.innerHTML=""
//             },5000)
//             form.reset()
//         } )
//         .catch(error => {
//             msg.innerHTML="Message not sent"
//             setTimeout(function(){
//                 msg.innerHTML=""
//             },5000)
//             form.reset()
//         })

//         // console.error('Error!', error.message))
//     })
//   </script> -->

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzkYgg_0zxw8ojUF4jmjctDh6wpScafSZfgj3ddovTAywloq3zMXoTwWzVhfJN7S3os_g/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Message sent successfully"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            form.reset()
        })
        .catch(error => {
            msg.innerHTML="Message not sent Please Try Again"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            form.reset()
        })
    })
  