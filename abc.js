var table = document.createElement("table"); //генерация таблицы букв 
table.className = "alphavit";
var arrABC = ['A','B','C','D','E','F','G','H'];
    for (var i = 0; i < 1; i++) {
        var tr = document.createElement('tr');
            for (var j = 0; j < 8; j++) {
                var td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = arrABC[j];
                td.className = "abcd";                
            }        
        table.appendChild(tr);
    }

document.body.appendChild(table);