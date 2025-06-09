// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict";

function intakeNumber() {

    let counter = 0

    let numbers = ""

    let minNumb = parseInt(document.getElementById("minNumber").value)
    let maxNumb = parseInt(document.getElementById("maxNumber").value)

    while (counter <= maxNumb) {
        if (counter >= minNumb) {
            numbers += counter + "<br>"
        }
        counter = counter + 1
    }

    document.getElementById("outputNumber").innerHTML = numbers
}