document.querySelector("#csv-form").onkeyup = function() {

    var csvString = document.querySelector("#csv-data").value;

    if (csvString != '') {

        var myArray = CSVToArray(csvString, document.querySelector('input[name="delimiter"]').value);

        var table = '';

        var search = document.querySelector('input[name="search"]').value.toLowerCase();

        myArray.forEach(function(row, index) {

            if (index == 0) {

                table += '<thead><tr><th>' + row.join('</th><th>') + '</th></tr></thead>';

            } else if ( search == '' ) {

                table += '<tr><td>' + row.join('</td><td>') + '</td></tr>';

            } else if ( row.join(',').toLowerCase().search(search) != -1 ) {

                tmpRow = '<tr><td>' + row.join('</td><td>') + '</td></tr>';

                search = '\(' + search + '\)';

                var re = new RegExp(search, 'gi');

                table += tmpRow.replace(re, "<span class=\"text-info\"><b>" + '$1' + "</b></span>");

            }

        });

        document.querySelector("#csv-output").innerHTML = table;

    }
};
