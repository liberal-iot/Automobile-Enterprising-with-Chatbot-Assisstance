var data = {
    chatinit: {
        title: ["Hello <span class='emoji'> &#128075;</span>", "I am Mr. Chatbot", "How can I help you?"],
        options: ["buy  <span class='emoji'> &#128250;</span>", "Insurance", "i want to sell my car <span class='emoji'> &#128090;</span>", "Loan <span class='emoji'> &#127925;</span>"]
    },
    buy: {
        title: ["Great, there has never been a better time to buy one. Please choose what you have in mind."],
        options: ['SUV', 'SEDAN', 'MUV', 'PICKUP'],
        url: {}
    },
    iwanttosellmycar: {
        title: ["Great, there has never been a better time to buy one. Please choose what you have in mind."],
        options: ['SUV', 'SEDAN', 'MUV', 'PICKUP'],
        url: {}
    },
    // ... (other data remains unchanged)
};

document.getElementById("init").addEventListener("click", showChatBot);
var cbot = document.getElementById("chat-box");

var len1 = data.chatinit.title.length;

function showChatBot() {
    if (this.innerText == 'START CHAT') {
        document.getElementById('test').style.display = 'block';
        document.getElementById('init').innerText = 'CLOSE CHAT';
        initChat();
    } else {
        location.reload();
    }
}

function initChat() {
    j = 0;
    cbot.innerHTML = '';
    for (var i = 0; i < len1; i++) {
        setTimeout(handleChat, (i * 500));
    }
    setTimeout(function () {
        showOptions(data.chatinit.options);
    }, ((len1 + 1) * 500));
}

var j = 0;
function handleChat() {
    var elm = document.createElement("p");
    elm.innerHTML = data.chatinit.title[j];
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options) {
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var inp = '<div>' + options[i] + '</div>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt() {
    var str = this.innerText;

    // Remove whitespace and emojis
    var cleanedStr = str.replace(/\s+/g, '').replace(/<span class='emoji'>.*?<\/span>/g, '');
    
    document.querySelectorAll(".opt").forEach(el => {
        el.remove();
    });

    var elm = document.createElement("p");
    elm.setAttribute("class", "test");
    var sp = '<span class="rep">' + this.innerText + '</span>';
    elm.innerHTML = sp;
    cbot.appendChild(elm);

    var tempObj = data[cleanedStr.toLowerCase()];
    handleResults(tempObj.title, tempObj.options, tempObj.url);
}

function handleDelay(title) {
    var elm = document.createElement("p");
    elm.innerHTML = title;
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
}

function handleResults(title, options, url) {
    for (let i = 0; i < title.length; i++) {
        setTimeout(function () {
            handleDelay(title[i]);
        }, i * 500);
    }

    const isObjectEmpty = (url) => {
        return JSON.stringify(url) === "{}";
    }

    if (isObjectEmpty(url) == true) {
        setTimeout(function () {
            showOptions(options);
        }, title.length * 500);
    } else {
        setTimeout(function () {
            handleOptions(options, url);
        }, title.length * 500);
    }
}

function handleOptions(options, url) {
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var inp = '<a class="m-link" href="' + url.link[i] + '">' + options[i] + '</a>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        cbot.appendChild(opt);
    }
    var opt = document.createElement("span");
    var inp = '<a class="m-link" href="' + url.more + '">' + 'See more</a>';
    
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll() {
    var elem = document.getElementById('chat-box');
    elem.scrollTop = elem.scrollHeight;
}
