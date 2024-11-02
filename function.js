document.addEventListener("DOMContentLoaded",()=>{

  //For Email
  const IconEmail = document.getElementById("email");
  const IconNormalEmail = document.getElementById("IconNormalLEmail");
  const IconFocusEmail = document.getElementById("IconFocusEmail");

  //For TextBox
  const InputBoxHighlight = document.getElementsByClassName("inputBox")
  const IconPass = document.getElementById("password");
  const IconNormalPass = document.getElementById("IconNormalLPass");
  const IconFocusPass = document.getElementById("IconFocusPass");
  const EyeOpen = document.getElementById("EyeOpen")
  const EyeClose = document.getElementById("EyeClose")

  //For CheckBox
  const CheckBoxOriginal = document.getElementById("Remind");
  const ChangeCheckBox = document.getElementsByClassName("checkBox");
  const CheckBoxImg = document.getElementsByClassName("CheckImg");
  let toggle = "close";

  IconEmail.addEventListener("focus",()=>{
    IconNormalEmail.classList.add("hide")
    InputBoxHighlight[0].classList.add("highlight")
    IconFocusEmail.classList.remove("hide")
  });
  IconEmail.addEventListener("blur",()=>{
    IconNormalEmail.classList.remove("hide");
    InputBoxHighlight[0].classList.remove("highlight")
    IconFocusEmail.classList.add("hide");
  });

  IconPass.addEventListener("focus",()=>{
    IconNormalPass.classList.add("hide");
    InputBoxHighlight[1].classList.add("highlight")
    IconFocusPass.classList.remove("hide");
  });
  IconPass.addEventListener("blur",()=>{
    IconNormalPass.classList.remove("hide");
    InputBoxHighlight[1].classList.remove("highlight")
    IconFocusPass.classList.add("hide");
  });

  EyeClose.addEventListener("click",()=>{
    IconPass.focus();
    EyeClose.classList.add("hide")
    EyeOpen.classList.remove("hide")
    IconPass.type = "text";
  });
  EyeOpen.addEventListener("click",()=>{
    IconPass.focus();
    EyeClose.classList.remove("hide")
    EyeOpen.classList.add("hide")
    IconPass.type = "password";
  });

  CheckBoxOriginal.addEventListener("click",()=>{
    if(CheckBoxOriginal.checked){
      ChangeCheckBox[0].classList.add("BoxColorYellow")
      CheckBoxImg[0].classList.remove("hide")
    }
    else{
      ChangeCheckBox[0].classList.remove("BoxColorYellow")
      CheckBoxImg[0].classList.add("hide")
    }
  });

  //For LoginInfo
  Form.addEventListener("submit",(event)=>{    
    event.preventDefault();
    const Form = document.getElementById("Form")
    const formData = {
      UserEmail: IconEmail.value,
      UserPassword: IconPass.value,
      Remind: CheckBoxOriginal.checked
    };
    IconEmail.value = "";
    IconPass.value = "";
    ChangeCheckBox[0].classList.remove("BoxColorYellow")
    CheckBoxImg[0].classList.add("hide")
    CheckBoxOriginal.checked = false;
    console.log(formData);
  });
});
