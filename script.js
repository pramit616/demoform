const form = document.querySelector("form"), 
         nextBtn = form.querySelector(".nextBtn"), 
         backBtn = form.querySelector(".backBtn"), 
         allInput = form.querySelectorAll(".first input"); 
         const issueDateText=form.querySelector("#issueDate"); 
         const expDateText=form.querySelector("#expDate");       
         
  
 nextBtn.addEventListener("click", ()=> { 
     const issueDate=new Date(issueDateText.value); 
     const expDate =new Date(expDateText.value); 
     const issue=issueDate.getTime(); 
     const exp=expDate.getTime(); 
     const diff =Math.floor((exp-issue)/(24*3600*1000)); 
     console.log(diff); 
     if(diff<=30){ 
         alert("Expiry date must be at least 30 days greater than issue date") 
         return; 
     } 
     allInput.forEach(input => { 
         if(input.value != ""){ 
             form.classList.add('secActive'); 
         }else{ 
             form.classList.remove('secActive'); 
         } 
     }) 
     
     
 }) 
  
 backBtn.addEventListener("click", () => form.classList.remove('secActive'));
