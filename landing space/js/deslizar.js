(function(){

    const sliders =[...document.querySelectorAll('.redaccion_body')];
    const buttonNext = document.querySelector('#siguiente');
    const buttonBefore= document.querySelector('#anterior');

    let value;

    buttonsiguiente.addEventListener('click',()=>{
        changePosition(1);
    });

    buttonanterior.addEventListener('click',()=>{
        changePosition(-1);
    });
    const changePosition = (add)=>{
        const currentredaccion = document.querySelector('.redaccion_body--show').dataset.id
        value = Number(currentredaccion);
        value+= add;

        sliders[Number(currentredaccion)-1].classList.remove('redaccion_body--show');
        if(value === sliders.length+1 || value === 0 ){
            value = value === 0 ? sliders.length : 1;

        }
        sliders[value-1].classList.add('redaccion_body--show');
    }
})();