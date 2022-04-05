
    let tab = "";
    let subTab = "";

    function Tab (name) {
        //Get
        if (!arguments.length) {
            return tab;
        }
        //Set
        
        if (typeof name != "string")
        throw new Error("Значение должно быть строкой");

        tab = name;
    }

    function SubTab(name) {
        //Get
        if (!arguments.length) {
            return subTab;
        }
        //Set
        
        if (typeof name != "string")
        throw new Error("Значение должно быть строкой");

       subTab = name;
    }

// Tab menu function

function removeSelected() {
    document.querySelectorAll(".tablist > ul > li").forEach(element => {
        element.classList.remove("selected");
    });
}

function selectTab (elem) {
    removeSelected();
    Tab(elem);
    document.querySelector(".tablist ul > #"+elem).classList.add("selected");
}

function removeHidden (elem) {
    
    hideSections();
    document.querySelector("main > #"+elem).classList.remove("hidden");
}

function hideSections() {
    document.querySelectorAll("main > section").forEach(element => {
        element.classList.add("hidden");
    });
}

function clickOnTab(elem) {
    selectTab(elem);
    removeHidden(elem);
}

document.querySelectorAll(".tablist li").forEach(element => {
    element.onclick = () => clickOnTab(event.currentTarget.getAttribute("id"));
});

// [Hobby] subTab menu function


function removeSelected() {
    document.querySelectorAll(".tablist > ul > li").forEach(element => {
        element.classList.remove("selected");
    });
    
}

function selectSubTab (elem) {
    removeSelected();
    SubTab(elem);
    document.querySelector(".tablist ul > #"+elem).classList.add("selected");
}

function unHideSubs (elem) {
    
    hideSubs();
    document.querySelector("main > #hobby > #"+elem).classList.remove("hidden");
}

function hideSubs() {
    document.querySelectorAll("main > #hobby > sub").forEach(element => {
        element.classList.add("hidden");
    });
}

function clickOnSubTab(elem) {
    selectSubTab(elem);
    unHideSubs(elem);
}

document.querySelectorAll(".tablist > ul > #hobby > .submenu > li").forEach(element => {
    element.onclick = () => clickOnSubTab(event.currentTarget.getAttribute("id"));
});