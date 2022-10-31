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

function menu(){
    let main = document.querySelector("main");
    if(main.style.gridTemplateColumns === "100% 0%"){
        main.style.gridTemplateColumns = "0% 100%";
    }
    else{
        main.style.gridTemplateColumns = "100% 0%"
    }
}
