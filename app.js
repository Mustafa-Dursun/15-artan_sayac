const boxBodies = document.querySelectorAll('.boxBody');


boxBodies.forEach(boxBody => {
    boxBody.innerText = '0';

    const updateBody = () =>{
        const target = Number(boxBody.getAttribute('data-target'));
        // console.log(typeof target, target);

        const c = +boxBody.innerText

        const increment = Math.ceil(target/300);
        // console.log(increment, c);

        if(c < target){
            boxBody.innerText = `${c + increment}`;

            setTimeout(updateBody, 1);
        }else{
            boxBody.innerText = target;
        }
    }

    updateBody();
});