var data = [], freqA, Ne, numGen, numSim;

    draw_line_chart([0], "Time (generations)", "Allele Frequency", [""]);

    //changing and storing values
    $("#Ne input").on("change", function () {
        $("#Ne span").html($("#Ne input")[0].value);
    });
    $("#numGen input").on("change", function () {
        $("#numGen span").html($("#numGen input")[0].value);
    });
    $("#numSim input").on("change", function () {
        $("#numSim span").html($("#numSim input")[0].value);
    });
    
    //main graph functions
    $("#params button").on("click", function () {
        $("svg").hide();
        freqA = $("#freqA input")[0].value;
        Ne = $("#Ne input")[0].value;
        numGen = $("#numGen input")[0].value;
        numSim = $("#numSim input")[0].value;
        data = [];
        for (i = 0; i < numSim; i++) {
            freqA = $("#freqA input")[0].value;
            data.push([]);
            for (j = 0; j < numGen; j++) {
                var p = 0;
                for (k = 0; k < (2 * Ne); k++) {
                    if (Math.random() <= freqA) { //rand 0 to 1
                        p++;
                    }
                }
                freqA = p / (2 * Ne); //plot next generation
                data[i].push(freqA); //plot points
                
                console.log(freqA);
            }
        }
        draw_line_chart(data, "Generations", "Allele Frequency", [""]);
    })
