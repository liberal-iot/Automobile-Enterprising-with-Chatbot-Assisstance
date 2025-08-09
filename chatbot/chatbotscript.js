var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can I help you?"],
        options: ["buy  <span class='emoji'> &#128250;</span>","Insurance","i want to sell my car <span class='emoji'> &#128090;</span>","Loan <span class='emoji'> &#127925;</span>"]
    },
    buy: {
        title:["Great, there has never been a better time to buy one. Please choose what you have in mind. "],
        options:['SUV','SEDAN','MUV','PICKUP'],
        url : {
            
        }
    },
    
    suv: {
        title:["What type of SUV would you like to buy ?"],
        options:["Luxury","Sport","Offroad","Economy",],
        url : {
        }
    },
    luxury: {
        title:["Thanks for your response","Which brand would you prefer from these choices ?","Please select one of the below options to proceed further"],
        options:['Rolls','MercedesBenz','Bently','Jaguar'],
        url : {
            
        }
    },
    mercedesbenz: {
        title:["Thanks for your response","Here are some suggestions for you","Click on it to know more"],
        options:['GLE','GLS','G63AMG','G-WAGON',],
        url : {
            more:"https://www.mercedes-benz.co.in/passengercars/models/suv.html?subgroup=all.offroader&group=all&view=BODYTYPE",
            link:["https://www.mercedes-benz.co.in/passengercars/models/suv.html?subgroup=all.offroader&group=all&view=BODYTYPE","#","#","#"]
        }
    },
    bently: {
        title:["Thanks for your response","What is the seating capacity you are looking for ?","Click on it to know more"],
        options:['5','7'],
        url : {
            more:"https://www.bentleymotors.com/en/models.html",
            link:["https://www.bentleymotors.com/en.html","#","#","#"]
        }
    },
    rolls: {
        title:["Thanks for your response","Here are some suggestions","Click on it to know more"],
        options:['Cullinan','dawn'],
        url : {
            more:"https://www.rolls-roycemotorcars.com/en_US/showroom/cullinan.html",
            link:["https://www.rolls-roycemotorcars.com/en_US/showroom/cullinan.html","#","#","#"]
        }
    },
    jaguar: {
        title:["Thanks for your response","Here are some suggestions","Click on it to know more"],
        options:['F-PACE','I-PACE','MG21','XF'],
        url : {
            more:"https://www.jaguar.in/index.html?utm_source=Google&utm_medium=CPC&utm_campaign=in_nv_jg_jg_all_ajg_my24_en_gmc1000_thk_cpdxue_gs_ds_2404_dsa_ext_geo_nu_xpl_nu_sem_04275491_dg_nu_B-P-Jaguar-HOMEPAGE(DX)-1CAMPP1&utm_content=Homepage_P1_Exact_Always_On&gad_source=1&gclid=CjwKCAjwx-CyBhAqEiwAeOcTdchf6-Dxzf3J4mJaFagouWuDRfecqQVUa8z_6Lxr-960F4LlP_gzURoCVjkQAvD_BwE&gclsrc=aw.ds",
            link:["https://www.jaguar.in/index.html?utm_source=Google&utm_medium=CPC&utm_campaign=in_nv_jg_jg_all_ajg_my24_en_gmc1000_thk_cpdxue_gs_ds_2404_dsa_ext_geo_nu_xpl_nu_sem_04275491_dg_nu_B-P-Jaguar-HOMEPAGE(DX)-1CAMPP1&utm_content=Homepage_P1_Exact_Always_On&gad_source=1&gclid=CjwKCAjwx-CyBhAqEiwAeOcTdchf6-Dxzf3J4mJaFagouWuDRfecqQVUa8z_6Lxr-960F4LlP_gzURoCVjkQAvD_BwE&gclsrc=aw.ds","#","#","#"]
        }
    },
    sport: {
        title:["Thanks for your response","Choose any 1 among the following","Click on it to know more"],
        options:['Lamborghini','Porsche','RangeRover','Audi'],
        url : {

        }
    },
    lamborghini: {
        title:["Thanks for your response","Choose any 1 among the following","Click on it to know more"],
        options:['Urus'],
        url : {
            more:"https://www.lamborghini.com/en-en/models/urus",
            link:["https://www.lamborghini.com/en-en/models/urus","#","#","#"]
        }
    },
    porsche: {
        title:["Thanks for your response","Choose any 1 among the following","Click on it to know more"],
        options:['cayenne','Macan'],
        url : {
            more:"https://www.porsche.com/international/models/cayenne/",
            link:["https://www.porsche.com/international/models/cayenne/","#","#","#"]
        }
    },
    rangerover: {
        title:["Thanks for your response","Choose any 1 among the following","Click on it to know more"],
        options:['Velar','Evoque'],
        url : {
            more:"https://www.landrover.in/range-rover/index.html",
            link:["https://www.landrover.in/range-rover/index.html","#","#","#"]
        }
    },
    audi: {
        title:["Thanks for your response","Choose any 1 among the following","Click on it to know more"],
        options:['Q7','Q5','Q3','Q8'],
        url : {
            more:"https://www.audiusa.com/us/web/en/models/suv-models.html",
            link:["https://www.audiusa.com/us/web/en/models/suv-models.html","#","#","#"]
        }
    },
    offroad: {
        title:["Thanks for your response","Choose any 1 among the following","Click on it to know more"],
        options:['jeep','Benzoffroad','toyotaoffroad','Mahindraoffroad'],
        url : {
        }
    },
    Benzoffroad: {
        title:["Thanks for your response","Choose any 1 among the following","Click on it to know more"],
        options:['Gclass','Glb','Gla'],
        url : {
            more:"https://www.mercedes-benz.co.in/passengercars/models/suv/g-class/overview.html",
            link:["https://www.mercedes-benz.co.in/passengercars/models/suv/g-class/overview.html","#","#","#"]
        }
    },
    sedan: {
        title:["Thanks for your response","Choose any 1 among the following","Click on it to know more"],
        options:['Sportsedan','Dailycommute','Luxurysedan'],
        url : {
        }
    },
    sportsedan: {
        title:["Thanks for your response","Choose any 1 among the following","Click on it to know more"],
        options:['BMW','AUDI','HYUNDAI','HONDA','BENZ'],
        url : {
        }
    },
    BMW: {
        title:["Thanks for your response","Choose any 1 among the following","Click on it to know more"],
        options:['M3','M5','M2','M5CS'],
        url : {
            more:"https://www.bmw.in/en/all-models/m-series.html",
            link:["https://www.bmw.in/en/all-models/m-series.html","#","#","#"]
        }
    },
    audi: {
        title:["Thanks for your response","Choose any 1 among the following","Click on it to know more"],
        options:['RS3','RS7','A4'],
        url : {
            more:"https://www.audi.in/in/web/en/models/a5/rs-5-sportback-2021.html",
            link:["https://www.audi.in/in/web/en/models/a5/rs-5-sportback-2021.html","#","#","#"]
        }
    },
    dailycommute: {
        title:["Thanks for your response","Choose any 1 among the following","Click on it to know more"],
        options:['HYUNDAI','TOYOTA','SUZUKI'],
        url : {
        }
    },
    hyundai: {
        title:["Thanks for your response","Choose any 1 among the following","Click on it to know more"],
        options:['civic','Amaze','Accord'],
        url : {
            more:"https://www.hyundai.com/in/en#Sedan",
            link:["https://www.hyundai.com/in/en#Sedan","#","#","#"]
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
    var str= this.innerText;
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