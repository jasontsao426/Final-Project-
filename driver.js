var json1 = [

    {"Time Period":"small sedan/hatchback/SUV", "Morning rush hour ":"+$0.02/min", "Mid-day rush hour ":"+$0.018/min", "Afternoon rush hour ":"+$0.02/min", "Day off-rush hour":"+$0.015/min", "Night-off rush hour":"+$0.012/min", "Mid-night ~ early morning":"+$0.005/min"},
    {"Time Period":"mid-size sedan/hatchback/SUV", "Morning rush hour ":"+$0.021/min", "Mid-day rush hour ":"+$0.019/min", "Afternoon rush hour ":"+$0.021/min", "Day off-rush hour":"+$0.016/min", "Night-off rush hour":"+$0.013/min", "Mid-night ~ early morning":"+$0.006/min"},
    {"Time Period":"full-size sedan/hatchback/SUV", "Morning rush hour ":"+$0.022/min", "Mid-day rush hour ":"+$0.02/min", "Afternoon rush hour ":"+$0.022/min", "Day off-rush hour":"+$0.017/min", "Night-off rush hour":"+$0.014/min", "Mid-night ~ early morning":"+$0.007/min"},
    {"Time Period":"van/ mini-van", "Morning rush hour ":"+$0.023/min", "Mid-day rush hour ":"+$0.021/min", "Afternoon rush hour ":"+$0.023/min", "Day off-rush hour":"+$0.018/min", "Night-off rush hour":"+$0.015/min", "Mid-night ~ early morning":"+$0.008/min"},
    {"Time Period":"convertible/roadster/supercar", "Morning rush hour ":"+$0.025/min", "Mid-day rush hour ":"+$0.023/min", "Afternoon rush hour ":"+$0.025/min", "Day off-rush hour":"+$0.020/min", "Night-off rush hour":"+$0.018/min", "Mid-night ~ early morning":"+$0.009/min"},

];
var json2 = [

    {"Road Type":"small sedan/hatchback/SUV", "Ally/Lane":"+$0.05/mile", "Street/Road/Way":"+$0.08/mile", "Avenue/Boulevard":"+$0.10/mile", "Highway":"+$0.30/mile"},
    {"Road Type":"mid-size sedan/hatchback/SUV", "Ally/Lane":"+$0.05/mile", "Street/Road/Way":"+$0.09/mile", "Avenue/Boulevard":"+$0.11/mile", "Highway":"+$0.31/mile"},
    {"Road Type":"full-size sedan/hatchback/SUV", "Ally/Lane":"+$0.05/mile", "Street/Road/Way":"+$0.10/mile", "Avenue/Boulevard":"+$0.12/mile", "Highway":"+$0.32/mile"},
    {"Road Type":"van/ mini-van", "Ally/Lane":"+$0.05/mile", "Street/Road/Way":"+$0.11/mile", "Avenue/Boulevard":"+$0.12/mile", "Highway":"+$0.26/mile"},
    {"Road Type":"convertible/roadster/supercar", "Ally/Lane":"+$0.05/mile", "Street/Road/Way":"+$0.15/mile", "Avenue/Boulevard":"+$0.16/mile", "Highway":"+$0.36/mile"},

];

var json3 = [

    {"Region ":"small sedan/hatchback/SUV", "Urban":"X 1.1", "Suburban":"X 1.08", "Rural ":"base"},
    {"Region ":"mid-size sedan/hatchback/SUV", "Urban":"X 1.1", "Suburban":"X 1.08", "Rural ":"base"},
    {"Region ":"full-size sedan/hatchback/SUV", "Urban":"X 1.1", "Suburban":"X 1.08", "Rural ":"base"},
    {"Region ":"van/ mini-van", "Urban":"X 1.1", "Suburban":"X 1.08", "Rural ":"base"},
    {"Region ":"convertible/roadster/supercar", "Urban":"X 1.1", "Suburban":"X 1.08", "Rural ":"base"},

];

var json4 = [

    {"District":"small sedan/hatchback/SUV", "Business  ":"+$0.07/min", "Tourist  ":"+$0.08/min", "Housing ":"+$0.05/min"},
    {"District":"mid-size sedan/hatchback/SUV", "Business  ":"+$0.08/min", "Tourist  ":"+$0.09/min", "Housing ":"+$0.06/min"},
    {"District":"full-size sedan/hatchback/SUV", "Business  ":"+$0.09/min", "Tourist  ":"+$0.10/min", "Housing ":"+$0.07/min"},
    {"District":"van/ mini-van", "Business  ":"+$0.10/min", "Tourist  ":"+$0.11/min", "Housing ":"+$0.08/min"},
    {"District":"convertible/roadster/supercar", "Business  ":"+$0.12/min", "Tourist  ":"+$0.13/min", "Housing ":"+$0.10/min"},

];
var json5 = [

    {"Brand":"small sedan/hatchback/SUV", "Luxury":"X 1.1", "Non-luxury   ":"base"},
    {"Brand":"mid-size sedan/hatchback/SUV", "Luxury":"X 1.15", "Non-luxury   ":"base"},
    {"Brand":"full-size sedan/hatchback/SUV", "Luxury":"X 1.13", "Non-luxury   ":"base"},
    {"Brand":"van/ mini-van", "Luxury":"X 1.2", "Non-luxury   ":"base"},
    {"Brand":"convertible/roadster/supercar", "Luxury":"X 1.5", "Non-luxury   ":"base"},

];




function buildTable(input) {
    var column = [];



    for (var i = 0; i < input.length; i++) {
        for (var k in input[i]) {
            if (column.indexOf(k) === -1) {
                column.push(k);
            }
        }
    }

    var table = document.createElement("table");

    var row = table.insertRow(-1);

    for (var i = 0; i < column.length; i++) {
        var header = document.createElement("th");
        header.innerHTML = column[i];
        header.classList.add("thstyle");
        row.appendChild(header);
    }


    for (var i = 0; i < input.length; i++) {


        tableRow = table.insertRow(-1);
        for (var j = 0; j < column.length; j++) {
            var outputRow = tableRow.insertCell(-1);
            outputRow.classList.add("mystyle");

            outputRow.innerHTML = input[i][column[j]];
        }
    }


    var output = document.getElementById("table");

    output.appendChild(table);
}

buildTable(json1)
<
buildTable(json2)
buildTable(json3)
buildTable(json4)
buildTable(json5)
