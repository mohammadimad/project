// The btoa() method encodes a string in base-64.
// btoa() : يتم استخدامها لتشفير بيانات النصية إلى تشفير بنظام القاعدة64
// ----------------------------------------------------------------------------
// This method uses the "A-Z", "a-z", "0-9", "+", "/" and "=" characters to encode the string. 
// هذا عنصر يستخدم احرف اللغة الإنجليزية , الصغيرة والكبيرة , الأرقام و علامة 
// +  و  /  و =
// عندما يقوم بتشفير النص
//------------------------------------------------------------------------------
// Tip: Use the atob() method to decode a base-64 encoded string.
// atob() : يتم استخدام هذا العنصر لفك تشفير نص مشفر بنظام قاعدة64
var text = "Mohammad Abdelfattah";
var encode_text = window.btoa(text);
var decode_text = window.atob(encode_text);
var textarea52 = document.getElementById("text23");
var resulte45 = document.getElementById("result23");
var select34 = document.getElementById("select_23");
textarea52.addEventListener("input",()=>{
       make_restle();
});
select34.addEventListener("change",()=>{
    make_restle()
});
function make_restle(){
    if(select34.value == "decode"){
     resulte45.value = window.atob(textarea52.value);
    }else{
        resulte45.value = window.btoa(textarea52.value);

    }
}