let box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newr=document.querySelector("#bnt");
let turn1=true;
// 2d array
const arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
box.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn1){
        box.innerText="o";
        turn1=false;
        }else{
            box.innerText="x";
            turn1=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const checkwinner =()=>{
    for(pattern of arr){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(box[pattern[0]].innerText,
        //             box[pattern[1]].innerText,
        //             box[pattern[2]].innerText);

                 let pos1= box[pattern[0]].innerText;
                 let pos2=box[pattern[1]].innerText;
                 let pos3=box[pattern[2]].innerText;
                if( pos1!="" && pos2!=""&& pos3!=""){
                    if(pos1===pos2 && pos2===pos3 ){
                        let win=document.createElement("h1");                       
                        win.innerHTML="winner";
                        console.log("winner",pos1);
                    document.querySelector("body").append(win,pos1);
                    disa();
                    }
                }
    }
};
const disa=()=>{
    for(let b of box){
        b.disabled=true;
    }
};
const enab=()=>{
    for(let b of box){
        b.disabled=false;
        b.innerText="";
    }
};
const reset1=()=>{
    turn1=true;
    enab();
};
newr.addEventListener("click",reset1);
reset.addEventListener("click",reset1);