/*

*/
var dersler = 
[
["mat101-1","mat-2"],       ["mat101-3"],        ["mat101-5","BM207-1"] ,          [],                                  [],
["mat101-1","mat-2"],         ["mat101-3"],         ["mat101-5","BM207-1"],      ["BM211-1","ENG203-7","ENG203-8"],         ["ENG203-11","ENG203-12"],
["mat101-3","mat101-4"],          ["mat101-1"],      ["mat101-6","mat101-7","BM207-1"],   ["BM211-1","ENG203-7","ENG203-8"],                             [],
[],                      [],           [],                        ["BM211-1"],                                  [],
[],                      [],           [],                        ["BM211-1"],                                  [],  //12
["CENG213-0"],                      [],           [],                        ["BM211-1"],                                  [],  // 1.30

];

var ders_isimleri = sessionStorage.selected_courses;

//sube ismleriyle
var secilen_dersler = []
var secilmeyen_dersler = []
var saatler = Array("8:30 - 9:20","9:30 - 10:20","10:30 - 11:20","11:30 - 12:20", "12:30 - 13:20", "13:30 - 14:20","14:30 - 15:20","15:30 - 16:20","16:30 - 17:20");
 



if (ders_isimleri.includes(",")) {
    ders_isimleri = ders_isimleri.split(",");
}
else {
    ders_isimleri = [ders_isimleri];
}


var tmp_list=  [];

for (var i = 0 ; i< dersler.length; i++) {

    tmp_list = [];
    
    dersler[i].forEach( ii => {
   
            if ( ders_isimleri.includes(ii.split("-")[0])) {
                tmp_list.push(ii);
            }
    })

    dersler[i] = tmp_list;
   
}





index();

function index(){
    text = "  <table border='1' cellpadding='1' cellspacing='3'><tr>";
    text += "<tr><td></td><td>Pazartesi</td> <td>Salı</td> <td>Çarşamba</td> <td>persembe</td> <td>cuma</td>";
    var id=0;
    for(var i = 0; i < saatler.length; i++) {
        var td= "<td>" + saatler[i]+ "</td>";
        for (var j=0;j<5;j++) {
            
            td+= "<td id='" + id++ + "'>" + "<select style='visibility:visible'></select>"+ "</td>";
        }
        text += "<tr>" + td  + "</tr>";
    }
    text += "</table>";

    document.getElementById("deneme").innerHTML = text;

    
    tum_optionlari_yenile();

   
    
   
}


function ders_sil_bolumu() {
    var text = "";
       
    secilen_dersler.forEach(element => {
       
        text += "<button onClick=\"ders_sil('" + element + "');\" >" +element  + "</button>";

    });

    document.getElementById("silinebilir_dersler").innerHTML = text
}

function ders_sil(ders) {
    console.log("silinen ders: " + ders);

    secilen_dersler.splice(secilen_dersler.indexOf(ders), 1);

    secilmeyen_dersler = [];

    tum_optionlari_yenile();

}


function tum_optionlari_yenile() {
    for(var i=0; saatler.length * 5  > i ;i++) {
        optionEkle(i);
    }

    ders_sil_bolumu();
}



function getRandom() {
    return Math.floor(Math.random() * (10000 - 1000) ) + 1000;
  }


function options_list_clear(id) {
    try {
        while (true) {
            document.getElementById(id).getElementsByTagName("option").item(0).remove();
        }
    } catch (error) { }
}



function optionEkle(id) {
    var tmp = dersler[id];
    
     if (id < 30 && tmp.length>0) {
        options_list_clear(id);
        
        var secilmeyen_dersler_m = secilmeyen_dersler.join();
        var secilen_dersler_m = secilen_dersler.join();
       
       
        var yeni_tmp = [];
        var secilen_var = false;

        var x = document.getElementById(id).getElementsByTagName("select").item(0);
        
     
        //secilen ve secilebilir ders listesi kontrol 
        for (var i of tmp) {
             if (secilen_dersler.includes(i)) {
                yeni_tmp.push(i);
                secilen_var = true; 
            }
            else if (!secilmeyen_dersler.includes(i)) {
                yeni_tmp.push(i);
           
            }
        }
        //-------------
      

        // tum liste kontrol
        var tekrar = false;
        for (var i of yeni_tmp) {
            if (!secilen_dersler.includes(i)  && secilen_dersler_m.includes(i.split("-")[0])) {
                if (!secilmeyen_dersler.includes(i)) {
                    secilmeyen_dersler.push(i);
                    tekrar = true;
                }
            }
        }
        
        if (tekrar) {
            tum_optionlari_yenile();
            return;
        }


        else if (yeni_tmp.length != 1 && secilen_var) {
            for (var i of yeni_tmp) {
                if (!secilen_dersler.includes(i))  {
                    secilmeyen_dersler.push(i);
                }
            }
            tum_optionlari_yenile();
            return;

        }
        else if (yeni_tmp.length == 1 && secilen_var) {
            x.add(newOption(id, yeni_tmp[0]));
        }

     
       
        else  if (yeni_tmp.length == 0 ) {
                x.add(newOption(id, ""))
        }
        else if(yeni_tmp.length > 0){
            x.add(newOption(id, "ders seç")) 
             for (var i of yeni_tmp) {
                x.add(newOption(id,i));
            }
        }
          
    }
    else { // ders hiç yoksa
        document.getElementById(id).getElementsByTagName("select").item(0).style.visibility ="hidden";
    }

}

function newOption(id, m) {
    id = id + "-" + getRandom();
    var option = document.createElement("option");
    option.text = m;
    option.id = id ;
    option.setAttribute("onClick","option_click(id);");
    return option;
}

function option_click(id) {

    var opt = document.getElementById(id);
    var text = opt.text;

    if (text.includes("ders"))
        return;
    else if (!secilen_dersler.includes(text))
        secilen_dersler.push(text);

    tum_optionlari_yenile();

} 



