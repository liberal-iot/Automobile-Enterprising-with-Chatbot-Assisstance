var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can I help you?"],
        options: ["General Dental Care","Dental Issues","Oral Hygiene Products","Diet and Oral Health","Emergency Care"]
    },
    generaldentalcare: {
        title:["Please choose a question from the below options :"],
        options:['How often should I brush my teeth','How often should I visit the dentist','What is the best way to floss'],
        url : {
            
        }
    },
    howoftenshouldibrushmyteeth: {
        title:["You should brush your teeth at least twice a day for two minutes each time to maintain good oral hygiene."],
        options:[],
        url : {
        }
    },
    howoftenshouldivisitthedentist: {
        title:["It’s recommended to visit the dentist every six months for regular check-ups and cleanings."],
        options:[],
        url : {
        }
    },
    la: {
        title:["Thanks for your response","Choose any 1 among the following","Click on it to know more"],
        options:['Urus'],
        url : {
        }
    },

    
    dentalissues: {
        title:["What type of SUV would you like to buy ?"],
        options:["Luxury","Sport","Offroad","Economy",],
        url : {
        }
    },
    oralhygieneproducts: {
        title:["Thanks for your response","Which brand would you prefer from these choices ?","Please select one of the below options to proceed further"],
        options:['Rolls','MercedesBenz','Bently','Jaguar'],
        url : {
            
        }
    },
    dietandoralhealth: {
        title:["Thanks for your response","Here are some suggestions for you","Click on it to know more"],
        options:['GLE','GLS','G63AMG','G-WAGON',],
        url : {
            more:"https://www.mercedes-benz.co.in/passengercars/models/suv.html?subgroup=all.offroader&group=all&view=BODYTYPE",
            link:["https://www.mercedes-benz.co.in/passengercars/models/suv.html?subgroup=all.offroader&group=all&view=BODYTYPE","#","#","#"]
        }
    },
    emergencycare: {
        title:[ "We hope you are okay","Please select a question from below which is appropriate to you","We wish you the best"],
        options:['What should I do if I knock out a tooth','What should I do in case of excessive bleeding '],
        url:{

        }
        },
    whatshouldidoifiknockoutatooth: {
        title:["Try to place the tooth back in its socket if possible. If not, keep it moist in milk or saline, and seek dental care immediately."],
        options:[],
        url : {
        }
    },
    whatisthebestwaytofloss: {
        title:["Use about 18 inches of dental floss, wrap it around your fingers, and gently slide it between your teeth, making a C-shape around each tooth."],
        options:[],
        url : {
        }
    },

    la: {
        title:["Thanks for your response","Choose any 1 among the following","Click on it to know more"],
        options:['Urus'],
        url : {
        }
    },

}







document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str = this.innerText.replace(/\s+/g, '');
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}