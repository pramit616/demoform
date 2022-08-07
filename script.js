const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");
        const issueDateText=form.querySelector("#issueDate");
        const expDateText=form.querySelector("#expDate"); 
        const fullNameText=form.querySelector("#fullName"); 
        const dobText =form.querySelector("#dob");  
        const emailText =form.querySelector("#email")
        const mobileText =form.querySelector("#mobile")
        const occupationText=form.querySelector("#occupation");
        const idTypeText=form.querySelector("#idType")
        const idNumText=form.querySelector("#idNum")
        const issueAuthText=form.querySelector("#issueAuth")
        const issueStateText=form.querySelector("#issueState")
        
       

nextBtn.addEventListener("click", ()=> {
    const fullName=fullNameText.value;
    if(fullName.length<1){
        alert("Name  is Required");
        return;
    }
    const dobValue=dobText.value;
    if(dobValue===""){
        alert("Date of Birth is required");
        return;
    }
    const email=emailText.value;
    if(email===""){
        alert("Email is Required");
        return;
    }
    const mobile=mobileText.value;
    if(mobile===""){
        alert("Mobile Number is Required");
        return;
    }
    const occupation=occupationText.value;
    if(occupation===""){
        alert("Occupation is Required");
        return;
    }
    const idType=idTypeText.value;
    if(idType===""){
        alert("Id Type is Required");
        return;
    }
    const idNum=idNumText.value;
    if(idNum===""){
        alert("Id Number is Required");
        return;
    }
    const issueAuth=issueAuthText.value;
    if(issueAuth===""){
        alert("Issue Auth is Required");
        return;
    }
    const issueState=issueStateText.value;
    if(issueState===""){
        alert("Issue State is Required");
        return;
    }
   
    
   

    const issueDate=new Date(issueDateText.value);
    const expDate =new Date(expDateText.value);
    const issue=issueDate.getTime();
    const exp=expDate.getTime();
    const diff =Math.floor((exp-issue)/(24*3600*1000));
    console.log(diff);
    if(diff<=30){
        alert("Expiry date must be at least 30 days greater than issue date")
        return;
    }
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
   
   
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));
