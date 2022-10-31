let languageContainer = document.querySelector(".language");
let browserContainer = document.querySelector(".browser");
let beyondContainer = document.querySelector(".beyond");

function languageContainerToHtml(data){
    let htmlData = data[0].language.map((ele)=>{
        let list = ele.topic.map((topics)=>{
            return `<li> ${topics} </li>`
        });
        list = list.join(' ');
    return `
            <h4>${ele.chapter}</h4>
            <ul>${list}</ul>
    `
    });
    return htmlData.join(" ");
}
function browserContainerToHtml(data){
    let htmlData = data[0].language.map((ele)=>{
        let list = ele.topic.map((topics)=>{
            return `<li> ${topics} </li>`
        });
        list = list.join(' ');
    return `
            <h4>${ele.chapter}</h4>
            <ul>${list}</ul>
    `
    });
    return htmlData.join(" ");
}
function beyondContainerToHtml(data){
    let htmlData = data[0].language.map((ele)=>{
        let list = ele.topic.map((topics)=>{
            return `<li> ${topics} </li>`
        });
        list = list.join(' ');
    return `
            <h4>${ele.chapter}</h4>
            <ul>${list}</ul>
    `
    });
    return htmlData.join(" ");
}


languageContainer.innerHTML = languageContainerToHtml(menuData);
browserContainer.innerHTML = languageContainerToHtml(menuData);
beyondContainer.innerHTML = languageContainerToHtml(menuData);
