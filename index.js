let myLead = [];
const inputEl = document.getElementById('input_el');
const inputBtn = document.getElementById('input_btn');
const ulEl = document.getElementById('ul-el');



inputBtn.addEventListener('click', function () {
    myLead.push(inputEl.value);
    inputEl.value = "";
    console.log(myLead);
    renderLeads();
});

for (let i = 0; i < myLead.length; i++) {
    ulEl.innerHTML += "<li>" + myLead[i] + "</li>";
}


function renderLeads() {
    listItems = "";
    for (let i = 0; i < myLead.length; i++) {
        listItems += "<li>" + myLead[i] + "</li>";
    }
    ulEl.innerHTML = listItems;
}

// Initial render if needed
// renderLeads();