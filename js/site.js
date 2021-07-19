function getInput() {
    let fizz = document.getElementById("fizz").value;
    let buzz = document.getElementById("buzz").value;

    fizz = parseInt(fizz);
    buzz = parseInt(buzz);

    if(!Number.isInteger(fizz) || !Number.isInteger(buzz)) {
        alert("You must enter integers!");
        return;
    }

    //let results = generateResult(fizz, buzz, 100);
    //let results = generateResultB(fizz, buzz, 100);
    let results = generateResultC(fizz, buzz, 100);

    displayResults(results);
}

function generateResult(fizz, buzz, max) {
    let output = [];

    for(let i = 1; i <= max; i++) {
        if(i % fizz == 0 && i % buzz == 0) {
            output.push("FizzBuzz");
        } else if (i % fizz == 0) {
            output.push("Fizz");
        } else if (i % buzz == 0) {
            output.push("Buzz");
        } else {
            output.push(i);
        }
    }

    return output;
}

function generateResultB(fizz, buzz, max)
{
    let output = [];
    let isFizz = false;
    let isBuzz = false;

    for(let i = 1; i <= max; i++) {
        isFizz = i % fizz == 0;
        isBuzz = i % buzz == 0;

        switch(true)
        {
            case isFizz && isBuzz: {
                output.push("FizzBuzz");
                break;
            }
            case isFizz: {
                output.push("Fizz");
                break
            }
            case isBuzz: {
                output.push("Buzz")
                break;
            }
            default: {
                output.push(i);
                break;
            }
        }
    }

    return output;
}

function generateResultC(fizz, buzz, max)
{
    let output = [];
    // Empty strings evaluate to false.
    for(let i = 1; i <= max; i++) {
        output.push( ( (i % fizz == 0  ? 'Fizz' : '') + 
            ( i % buzz == 0 ? 'Buzz' : '' ) || i ) ); 
    }

    return output;
}

function displayResults(results) {
    let tableBody = document.getElementById("results");
    let templateRow = document.getElementById("tableTemplate");

    tableBody.innerHTML = "";

    let numCols = document.importNode(templateRow.content, true)
        .querySelectorAll("td").length;

    for(let i = 0; i < results.length; i += numCols) {
        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");
        for(let j = 0; j < rowCols.length; j++)
        {
            if(!Number.isInteger(results[i + j])) {
                rowCols[j].classList.add(results[i + j])
            }
            rowCols[j].textContent = results[i + j]
        }

        tableBody.appendChild(tableRow);
    }

    // Original/Alternate Solution:
/*     let templateRows = "";
    for(let i = 0; i < results.length; i++) {
        let className = "";

        if(!Number.isInteger(results[i])) {
            className = ` class="${results[i]}"`;
        }

        if(i == 0 || templateRows.endsWith("</tr>"))
        {
            templateRows += "<tr>"
        }

        templateRows += `<td${className}>${results[i]}</td>`;

        if((i + 1) % 5 == 0)
        {
            templateRows += "</tr>"
        }
    }
    document.getElementById("results").innerHTML = templateRows; */
}