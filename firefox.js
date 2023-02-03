var dersler = 
[//pzt                                                                                                   //sali                                                                                                             //car                                                                                 //per                                                                                                                         //cuma
["MAT102-1","FIZ156-1","PHYS104-1","PHYS104-2"],                                 ["MAT102-2","MAT102-5","PHYS104-9","PHYS104-16","PHYS104-17"],                                                  ["FIZ156-8","PHYS104-5","PHYS104-11","PHYS104-13"] ,                                               ["MAT102-5"],                                                                                                              ["FIZ156-14","PHYS104-15","PHYS104-18"], //8
["MAT102-1","FIZ156-1","PHYS104-1","PHYS104-2","ENG204-1","ENG204-2"],            ["MAT102-2","MAT102-5","PHYS104-9","PHYS104-16","PHYS104-17"],                                                 ["FIZ156-8","PHYS104-5","PHYS104-11","PHYS104-13","ENG204-5"] ,                                  ["MAT102-5","ENG204-7","ENG204-8"],                                                                                           ["FIZ156-14","PHYS104-15","PHYS104-18","ENG204-11","ENG204-12"],  //9
["MAT102-2","FIZ156-2","PHYS104-3","PHYS104-4","ENG204-1","ENG204-2"],             ["MAT102-1","MAT102-6","FIZ156-5","PHYS104-10","PHYS104-18"],                                                ["FIZ156-9","PHYS104-7","PHYS104-12","PHYS104-14","ENG204-5"] ,                                  ["MAT102-6","PHYS104-6","PHYS104-16","ENG204-7","ENG204-8"],                                                                  ["FIZ156-15","PHYS104-14","PHYS104-17","ENG204-11","ENG204-12"],  // 10
["MAT102-2","FIZ156-2","PHYS104-3","PHYS104-4","ENG204-1","ENG204-2"],               ["MAT102-1","MAT102-6","FIZ156-5","PHYS104-10","PHYS104-18"],                                              ["FIZ156-9","PHYS104-7","PHYS104-12","PHYS104-14","ENG204-5"] ,                                  ["MAT102-6","PHYS104-6","PHYS104-16","ENG204-7","ENG204-8"],                                                                 ["FIZ156-15","PHYS104-14","PHYS104-17","ENG204-11","ENG204-12"],  // 11
[],                                                                                           [],                                                                                               [] ,                                                                                             [],                                                                                                                          [],  //12
["MAT102-3","FIZ156-3","PHYS104-5","PHYS104-6",],                                         ["MAT102-7","MAT102-9","FIZ156-6","PHYS104-11","PHYS104-19","ENG204-3","ENG204-4"],                    ["MAT102-4","FIZ156-10","PHYS104-1","PHYS104-9","PHYS104-15","ENG204-6"] ,                       ["MAT102-9","MAT102-8","FIZ156-12","PHYS104-2","PHYS104-8","PHYS104-20","ENG204-9","ENG204-10"],                           ["PHYS104-8","PHYS104-13","ENG204-13","ENG204-14"],  // 1
["MAT102-3","FIZ156-3","PHYS104-5","PHYS104-6"],                                         ["MAT102-7","MAT102-9","FIZ156-6","PHYS104-11","PHYS104-19","ENG204-3","ENG204-4"],                      ["MAT102-4","FIZ156-10","PHYS104-1","PHYS104-9","PHYS104-15","ENG204-6"] ,                       ["MAT102-9","MAT102-8","FIZ156-12","PHYS104-2","PHYS104-8","PHYS104-20","ENG204-9","ENG204-10"],                           ["PHYS104-8","PHYS104-13","ENG204-13","ENG204-14"],   // 2
["MAT102-4","FIZ156-4","PHYS104-7"],                                                      ["MAT102-8","FIZ156-7","PHYS104-12","PHYS104-20","ENG204-3","ENG204-4"],                                ["MAT102-3","FIZ156-11","PHYS104-3","PHYS104-10","ENG204-6"] ,                                   ["MAT102-7","FIZ156-13","PHYS104-4","PHYS104-19","ENG204-9","ENG204-10"],                                                  ["ENG204-13","ENG204-14"],    // 3 
["MAT102-4","FIZ156-4","PHYS104-7"],                                                              ["MAT102-8","FIZ156-7","PHYS104-12","PHYS104-20"],                                            ["MAT102-3","FIZ156-11","PHYS104-3","PHYS104-10"] ,                                                  ["MAT102-7","FIZ156-13","PHYS104-4","PHYS104-19"],                                                                           [],    // 4
]; 

var ders_isimleri = sessionStorage.selected_courses;
var coloar_list = sessionStorage.selected_courses_coloar_list;

//sube ismleriyle

var secilen_dersler = [];
var secilmeyen_dersler = [];
var saatler = Array("8:30-9:20","9:30-10:20","10:30 - 11:20","11:30 - 12:20", "12:30 - 13:20", "13:30 - 14:20","14:30 - 15:20","15:30 - 16:20","16:30 - 17:20");
 


// split courses
if (ders_isimleri.includes(",")) {
    ders_isimleri = ders_isimleri.split(",");
}
else {
    ders_isimleri = [ders_isimleri];
}


// split coloars
if (coloar_list.includes(",")) {
    coloar_list = coloar_list.split(",");
}
else {
    coloar_list = [coloar_list];
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
    text = "  <table id='" + "saasd" +" border='1' cellpadding='1' cellspacing='2'>";
    text += "<tr class='days' ><td><a href='index.html'>Anasayfa</a></td><td class='days'>Pazartesi</td> <td class='days'>Salı</td> <td class='days'>Çarşamba</td> <td class='days'>persembe</td> <td class='days'>cuma</td>";
    var id=0;
    for(var i = 0; i < saatler.length; i++) {
        var td= "<td class='times'>"+saatler[i]+"</td>";
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
    
    if (tmp.length>0) {
        options_list_clear(id);
        
        var secilmeyen_dersler_m = secilmeyen_dersler.join();
        var secilen_dersler_m = secilen_dersler.join();
       
       
        var yeni_tmp = [];
        var secilen_var = false;
        var secilen_ders = "";

        var x = document.getElementById(id).getElementsByTagName("select").item(0);


        //set default coloar
        x.removeAttribute("style");
        
        //remove disbled
        x.removeAttribute("disabled");
       
       
     
        //secilen ve secilebilir ders listesi kontrol 
        for (var i of tmp) {
             if (secilen_dersler.includes(i)) {
                yeni_tmp.push(i);
                secilen_var = true;
                secilen_ders = i;
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



        //------------------------
        // 
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
            x.disabled = "disabled";
            
            // change coloar
            x.style.backgroundColor = coloar_list[ders_isimleri.indexOf(yeni_tmp[0].split("-")[0])];

        }

        

        //------------

     
       
        else  if (yeni_tmp.length == 0 ) {
                x.disabled = "disabled";
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
    option.setAttribute("onclick","option_click(id);");
    return option;
}

function option_click(id) { // id = clicked option id
  
    var opt = document.getElementById(id);
    var text = opt.text;

    if (text.includes("ders")) {
        return;
    }

    else if (text == "") { // check if options is null
        return;
    }

    else if (!secilen_dersler.includes(text))
        secilen_dersler.push(text);

    tum_optionlari_yenile();

} 


