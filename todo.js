function Add_item(){
    document.querySelector(".list").style.display="block"
    document.querySelector("div.submain").style.filter="blur(10px)"
    }
//   upon clicking on plus icon add new list to be open and background shild be blur
$(".addbutton,.closebutton").click(function () {
    $(".list,.noitem").hide()
})
// upon clicking on add or close add new item and no item in todo list  should get hide 
$(".closebutton").click(function () {
    document.querySelector("div.submain").style.filter="blur(0px)"
    document.querySelector(".noitem").style.display="block"
})
// upon clicking on close button no item in todo list should get display with task list and add item

const AddCard = document.querySelector(".addbutton")
const div_container = document.getElementById("contfc")
// add event listner to call the event click and call the function Add_new_list

AddCard.addEventListener("click",Add_new_list)
const head_list = document.getElementById('text');
const flex = document.getElementById('contfc');

// function Add-new-list 
function Add_new_list(){
    const head_list = document.getElementById('text');
    const flex = document.getElementById('contfc'); 
    let card = document.createElement('div');
    card.classList.add('card');
    flex.appendChild(card);

    let card_to_dis = document.createElement('div');
    card_to_dis.classList.add('main');
    card.appendChild(card_to_dis);

    let heading_list = document.createElement('h2');
    heading_list.classList.add('heading');
    heading_list.style.color = 'tomato';
    heading_list.innerHTML = `${head_list.value} `;
    card_to_dis.appendChild(heading_list);

    let line = document.createElement('hr');
    line.classList.add('line');
    card.appendChild(line);
   // created a div for add the item and same time delete the card
    let Addplus = document.createElement("div")
    Addplus.id="task"
    Addplus.innerHTML=` <span class="material-icons  addplus" id="addplus">
    add_circle
                </span>
    <span class="material-icons trash">
delete
                </span>`
    card.appendChild(Addplus);
    
    document.querySelector("div.submain").style.filter="blur(0px)"

    heading_list.addEventListener('click', myFunc)
    function myFunc(e) {
        e.target.parentElement.parentElement.classList.toggle('active')

    let oklist = document.querySelectorAll('.card')
    for (let i = 0; i < oklist.length; i++) {
        if (oklist[i] !== e.target.parentElement.parentElement) {
         oklist[i].classList.add('minusone')
            container.classList.add('minusone')
            sec.classList.add('active')

        let secheadtitle = document.createElement('h1')
        secheadtitle.innerHTML = `<span style="color:tomato;">${heading_list.innerHTML}</span>`
        minus.after(secheadtitle)

        minus.addEventListener('click', () => {
        container.classList.remove('minusone')
        oklist[i].classList.remove('minusone')
        sec.classList.remove('active')
        secheaditle.remove()

                })
        plus.addEventListener('click', () => {
        Add_new_list()
        container.classList.remove('minusone')
        oklist[i].classList.remove('minusone')
        sec.classList.remove('active')
        secheaditle.remove()
                })
                
            }
        }
        console.log("")
        
 $(e.target).removeClass('heading')
        console.log("")
    }
};
console.log("");

flex.addEventListener('click', delTodo);

function delTodo(e) {
    let item = e.target;
    if (item.classList.contains('tick')) {
    item.parentElement.classList.toggle('hori');

    }
}

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('trash')) {
        e.target.parentElement.parentElement.remove();
    }
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('addplus')) {
        document.querySelector(".aca").style.display="block"
        parentNode = e.target.parentNode.parentNode;
    }
});

const title1 = document.getElementById('title1');
adonce.addEventListener('click', () => {
// created an element div for mark done or completed item
   let complete = document.createElement('div');
    complete.classList.add('complete');

    complete.innerHTML = `
        <span class="material-icons tick ">done_all</span>
        <p class="del" id="">${title1.value}</p>`;
    parentNode.appendChild(complete);
    title1.value = '';
});