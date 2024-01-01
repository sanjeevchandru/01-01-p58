document.write("21.to create another string by adding 'Py' in front of a given string. If the given string begins with 'Py' return the original string."+"<br>");
function test21(str){
    if(str.substring(0,2)==="Py"){
        return str;
    }
    return "Py"+str;
}
document.write("The Sting is :Python ,Ans : "+test21("Python")+"<br>");
document.write("The Sting is :sanjeev ,Ans : "+test21("sanjeev")+"<br><br>");