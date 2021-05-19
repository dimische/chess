
var table = document.createElement("table"); //генерация таблицы букв
table.className = "number";
    for (var i = 0; i < 1; i++) {
        var tr = document.createElement('tr');
            for (var j = 0; j < 8; j++) {
                var td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = j+1;
                td.className = "num";
                
            }        
        table.appendChild(tr);
    }

document.body.appendChild(table);