var dataExportHelper = dataExportHelper || {};
               
dataExportHelper.saveAsCsv = function(opts, data, fileName){
    var textContent = '';
    for(var i=0; i<opts.length; i++){
        if( i==0 ){
            textContent += opts[i].title;
        }else{
            textContent += ',' + opts[i].title;
        }
    }
    textContent += "\n";
    for(var i=0; i<data.length; i++){
        for(var j=0; j<opts.length; j++){
            if( j==0 ){
                if(typeof opts[j].render == 'function'){
                    textContent += opts[j].render(data[i][opts[j].key]);
                }else{
                    textContent += data[i][opts[j].key];
                }                       
            }else{
                if(typeof opts[j].render == 'function'){
                    textContent += ','+opts[j].render(data[i][opts[j].key]);
                }else{
                    textContent += ','+data[i][opts[j].key];
                }     
            }
        }
        textContent += "\n";
    }
    try {
        var isFileSaverSupported = !!new Blob;
    } catch (e) {}
    if(isFileSaverSupported){      
        saveTextAs(textContent, fileName, "utf-8");       
       // saveAs(new Blob([textContent], {type: "text/plain;charset=utf-8"}),fileName);
    }else{
        saveTextAs(textContent, fileName, "utf-8");
    }
}
/*
dataExportHelper.saveAsXlsx = function(opts, data, fileName){
    //todo
    var s2ab = function(s){
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
}*/