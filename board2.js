// шаблон поля
var boardTemplateA = [
    '','',
    '','','','','','','','',
    '','','','','','','','',
    '♙','♙','♙','♙','♙','♙','♙','♙','♙',
    '♖','♘','♗','♕','♔','♗','♘','♖'
];

var table = document.createElement("table"); 
    table.className = "chesspole2";
    for (var i=z = 0 ; i < 4; i++) {
        z++;
        var tr = document.createElement('tr');
            for (var j = 0; j < 8; j++) {
                z++;    
                var td = document.createElement('td'); 
                td.innerHTML = boardTemplateA[z-2];                                    
                if (i%2 == j%2) {
                    td.className = "white";                                       
                } else {
                    td.className = "black";
                }                                                     
                              
                tr.appendChild(td);
                                
            }
        table.appendChild(tr);            
    }                                       
    document.body.appendChild(table);
    
    
