window.addEventListener('load', () => {
    const form = document.querySelector("#new-due-form");
    const whoinput = document.querySelector("#new-who-input");
    const amtinput = document.querySelector("#new-amount-input");
    const whyinput = document.querySelector("#new-why-input");
    const list_el = document.querySelector("#dues");

    console.log(form);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const who = whoinput.value;
        const amount = amtinput.value;
        const why = whyinput.value;

        if (!who || !amount || !why) {
            alert("Please fill out all inputs.");
            return;
        } 

        const due_el = document.createElement("div");
        due_el.classList.add("due");

        const who_el = document.createElement("div");
        who_el.classList.add("who");
        who_el.innerText = who;
        
        const amount_el = document.createElement("div");
        amount_el.classList.add("amount");
        amount_el.innerText = amount;;
        
        const why_el = document.createElement("div");
        why_el.classList.add("why");
        why_el.innerText = why;

        due_el.appendChild(who_el);
        due_el.appendChild(amount_el);
        due_el.appendChild(why_el);

        list_el.appendChild(due_el);
    });
});
