"use strict";

// int, Float -> Number
// Boolean -> Boolean
// String, char -> String
// null, None -> null
// undefined -> undefined
// map, array, list -> Object
// Symbol

// const adder = () => { }
// function adder2() { }
// const adder3 = function () { }

// var zmienna = 1 //global
// let zmienna
// const zmiennaOstalejReferencji

const adder = () => {
        const inputA = document.getElementById("number-a");
    const inputB = document.querySelector("#number-b");

    console.log({ inputA });

    if(inputA.value === '' || inputB.value === '')
    {
        console.log("A lub B jest puste")

        const modal = document.getElementById("my-modal");
        modal.showModal();

        return;
    }


    const valueA = Number(inputA.value);
    const valueB = Number(inputB.value);

    console.log(`${valueA} + ${valueB} = ${valueA + valueB}`);

    const listItem = document.createElement("li");
    listItem.innerText = `${valueA} + ${valueB} = ${valueA + valueB}`;
    
    const listOfOperations = document.getElementById("list-of-operations");

    listOfOperations.append(listItem);
};

// window.addEventListener("load", ()=> {})

window.onload = () => {
    
    const closingButton = document.getElementById("closing-button");
    closingButton.addEventListener("click", ()=> {
        modal.close();
    });
}