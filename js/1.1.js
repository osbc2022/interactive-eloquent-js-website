let dropBtn = document.querySelectorAll(".li");

dropBtn.forEach((ele)=>{
    ele.onclick = (e)=>{
        console.log(e.target.nextElementSibling);
        let nextEleSibling = e.target.nextElementSibling;
        if(nextEleSibling.style.display === "block"){
            nextEleSibling.style.display = "none";
        }
        else{
            nextEleSibling.style.display = "block";
        }
    }
})
