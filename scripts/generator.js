
window.addEventListener("load", (event) => {

if(document.getElementById("wzor_1976").checked)
{
	document.getElementById("typ").style.display = "none";
	document.getElementById("typ_1976").style.display = "inline-block";
	document.getElementById("allowed-formats").innerHTML = getPermittedPatterns(document.getElementById("typ_1976").value);
	document.getElementById("example").src = "images/wzory/" + document.getElementById("typ_1976").value + ".png";
}
else
{
	document.getElementById("typ").style.display = "inline-block";
	document.getElementById("typ_1976").style.display = "none";
	document.getElementById("allowed-formats").innerHTML = getPermittedPatterns(document.getElementById("typ").value);
	document.getElementById("example").src = "images/wzory/" + document.getElementById("typ").value + ".png";
}


});

function przelaczWysw(a)
{
if(a == 0)
{
	document.getElementById("typ").style.display = "none";
	document.getElementById("typ_1976").style.display = "inline-block";
	document.getElementById("naklejka_ziel").style.display = "none";
	document.getElementById("allowed-formats").innerHTML = getPermittedPatterns(document.getElementById("typ_1976").value);
	document.getElementById("example").src = "images/wzory/" + document.getElementById("typ_1976").value + ".png";
}
else 
{
	document.getElementById("typ").style.display = "inline-block";
	document.getElementById("typ_1976").style.display = "none";
	document.getElementById("allowed-formats").innerHTML = getPermittedPatterns(document.getElementById("typ").value);
	document.getElementById("example").src = "images/wzory/" + document.getElementById("typ").value + ".png";
}
}

function zmienWid(s)
{
	if(s.value >= 51 && s.value <= 55) document.getElementById("naklejka_ziel").style.display = "inline-block";
	else document.getElementById("naklejka_ziel").style.display = "none";
	
	document.getElementById("allowed-formats").innerHTML = getPermittedPatterns(s.value);
	
	if(document.getElementById("wzor_1976").checked) document.getElementById("example").src = "images/wzory/" + document.getElementById("typ_1976").value + ".png";
	else document.getElementById("example").src = "images/wzory/" + document.getElementById("typ").value + ".png";
	
}

function switchPageStyle()
{
	if(document.getElementById("pagestyle").getAttribute("href") == "styles/style-bright.css") document.getElementById("pagestyle").setAttribute("href", "styles/style.css");
	else document.getElementById("pagestyle").setAttribute("href", "styles/style-bright.css");
}

function setCanvas(a, sc)
{
var c_width = 0;
var c_height = 0;

if(a==1 || a==6 || a==9 || a==10 || a==17 || a==22 || a==51){c_width=1040;c_height=228;} //1-rzędowa
else if(a==2 || a==7 || a==11 || a==12 || a==18 || a==23 || a==52){c_width=610;c_height=428;} //2-rzędowa
else if(a==3 || a==26 || a==21 || a==53){c_width=610;c_height=228;} //zmniejszona
else if(a==4 || a==8 || a==13 || a==14 || a==19 || a==24 || a==54 || a==103 || a==107 || a==110 || a==113){c_width=380;c_height=300;} //motocyklowa
else if(a==5 || a==27 || a==15 || a==16 || a==20 || a==25 || a==55){c_width=280;c_height=228;} //motorowerowa
else if(a==101 || a==105 || a==108 || a==111 || a==114){c_width=1040;c_height=240;} //1-rzędowa 1976
else if(a==102 || a==106 || a==109 || a==112){c_width=580;c_height=460;} //2-rzędowa 1976
else if(a==115){c_width=660;c_height=460;} //2-rzędowa dyplomatyczna 1976
else if(a==104 || a==117 || a==118){c_width=280;c_height=230;} //motorowerowa 1976
else if(a == 116){c_width=440;c_height=300;} //motocyklowa dyplomatyczna 1976

document.getElementById("tablica").width = c_width*sc;
document.getElementById("tablica").height = c_height*sc;

}

function getPermittedPatterns(a)
{
if(a == 1 || a== 2 || a == 51 || a == 52) return "KR&nbsp;12345, KR&nbsp;1234A, KR&nbsp;123AC, KR&nbsp;1A234, KR&nbsp;1AC23, KR&nbsp;A1234, KRA&nbsp;A123, KRA&nbsp;12AC, KRA&nbsp;1A23, KRA&nbsp;12A3, KRA&nbsp;1AC2, KRA&nbsp;AC12, KRA&nbsp;12345, KRA&nbsp;1234A, KRA&nbsp;123AC";
if(a == 3 || a== 21 || a== 26 || a== 53) return "K&nbsp;123, K&nbsp;12A, K&nbsp;1A2, K&nbsp;A12, K&nbsp;1AC, K&nbsp;AC1, K&nbsp;A1C";
if(a == 4 || a == 5 || a == 54 || a == 55) return "KR&nbsp;1234, KR&nbsp;123A, KR&nbsp;A123, KR&nbsp;12AC, KR&nbsp;1A23, KR&nbsp;12A3, KR&nbsp;1AC2, KR&nbsp;AC12, KRA&nbsp;A123, KRA&nbsp;12AC, KRA&nbsp;1A23, KRA&nbsp;12A3, KRA&nbsp;1AC2, KRA&nbsp;AC12, KRA&nbsp;A12C, KRA&nbsp;A1CE";
if(a == 6 || a == 7 || a == 8 || a == 27) return "KR&nbsp;123, KR&nbsp;12A, KRA&nbsp;1A, KRA&nbsp;A1, KRA&nbsp;12";
if(a == 9 || a == 11 || a == 13 || a == 15) return "K1&nbsp;2345, K1&nbsp;234A";
if(a == 10 || a == 12 || a == 14 || a == 16) return "K1&nbsp;234&nbsp;B";
if(a == 17 || a == 18 || a == 19 || a == 20) return "W&nbsp;123456"; 
if(a == 22 || a == 23 || a == 24 || a == 25) return "K12&nbsp;34<b>P</b>56, K12&nbsp;34<b>P</b>5A";
if(a == 101 || a == 102 || a == 103 || a == 104) return "WAB&nbsp;1234, WAB&nbsp;123C";
if(a == 105 || a == 106 || a == 107 || a == 117) return "A&nbsp;12&nbsp;3456";
if(a == 108 || a == 109 || a == 110 || a == 118) return "<b>X</b>WA&nbsp;1234";
if(a == 111 || a == 112 || a == 113) return "<b>I</b>WA&nbsp;1234";
if(a == 114 || a == 115 || a == 116) return "WA&nbsp;12&nbsp;345";

}

/*
function download(){
	var nazwa_pliku = ((document.getElementById("numer").value).replace(/\s/g, "").toUpperCase()) + ".png";
    document.getElementById("downloader").download = "nazwa_pliku";
    document.getElementById("downloader").href = document.getElementById("tablica").toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
}
*/

var zasoby = [
{
type:1, //1. zasób grodzki
regex:/^[A-Z][A-Z][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[68,17],[129,17],[218,17],[275,17],[332,17],[389,17],[446,17]], 
cpos_wide:[[64,17],[132,17],[226,17],[283,17],[340,17],[397,17],[454,17]], 
width:[1,1,1,1,1,1,1],
spos_narrow:[188,42], 
spos_wide:[197,42],
epos:[190,17]
},
{
type:1, //2. zasób grodzki
regex:/^[A-Z][A-Z][0-9][0-9][0-9][0-9][A-Z]$/, 
cpos_narrow:[[68,17],[129,17],[218,17],[274,17],[330,17],[386,17],[442,17]], 
cpos_wide:[[64,17],[132,17],[226,17],[282,17],[338,17],[394,17],[451,17]],
width:[1,1,1,1,1,1,0],
spos_narrow:[188,42],
spos_wide:[197,42], 
epos:[190,17]
},
{
type:1, //3. zasób grodzki
regex:/^[A-Z][A-Z][0-9][0-9][0-9][A-Z][A-Z]$/, 
cpos_narrow:[[68,17],[129,17],[218,17],[273,17],[328,17],[383,17],[442,17]], 
cpos_wide:[[64,17],[132,17],[226,17],[281,17],[336,17],[391,17],[450,17]], 
width:[1,1,1,1,1,0,0],
spos_narrow:[188,42], 
spos_wide:[197,42], 
epos:[190,17]
},
{
type:1, //4. zasób grodzki
regex:/^[A-Z][A-Z][0-9][A-Z][0-9][0-9][0-9]$/, 
cpos_narrow:[[68,17],[129,17],[218,17],[274,17],[334,17],[390,17],[446,17]], 
cpos_wide:[[64,17],[132,17],[226,17],[281,17],[340,17],[395,17],[450,17]], 
width:[1,1,1,0,1,1,1],
spos_narrow:[188,42], 
spos_wide:[197,42],
epos:[190,17]
},
{
type:1, //5. zasób grodzki
regex:/^[A-Z][A-Z][0-9][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[68,17],[129,17],[218,17],[273,17],[332,17],[391,17],[446,17]], 
cpos_wide:[[64,17],[132,17],[226,17],[281,17],[340,17],[399,17],[454,17]],  
width:[1,1,1,0,0,1,1],
spos_narrow:[188,42], 
spos_wide:[197,42],
epos:[190,17]
},
{
type:1, //1. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][A-Z][0-9][0-9][0-9]$/, 
cpos_narrow:[[68,17],[127,17],[186,17],[275,17],[335,17],[391,17],[447,17]], 
cpos_wide:[[64,17],[130,17],[196,17],[289,17],[347,17],[401,17],[455,17]],
width:[1,1,1,0,1,1,1],
spos_narrow:[245,42], 
spos_wide:[260.5,42],
epos:[247,17]
},
{
type:1, //3. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][A-Z][0-9][0-9]$/, 
cpos_narrow:[[68,17],[127,17],[186,17],[275,17],[331,17],[391,17],[447,17]], 
cpos_wide:[[64,17],[130,17],[196,17],[289,17],[343,17],[401,17],[455,17]], 
width:[1,1,1,1,0,1,1],
spos_narrow:[245,42], 
spos_wide:[260.5,42], 
epos:[247,17]
},
{
type:1, //4. zasób ziemski 
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][A-Z][0-9]$/, 
cpos_narrow:[[68,17],[127,17],[186,17],[275,17],[331,17],[387,17],[447,17]], 
cpos_wide:[[64,17],[130,17],[196,17],[289,17],[343,17],[397,17],[455,17]], 
width:[1,1,1,1,1,0,1],
spos_narrow:[245,42], 
spos_wide:[260.5,42], 
epos:[247,17]
},
{
type:1, //2. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][A-Z][A-Z]$/, 
cpos_narrow:[[68,17],[127,17],[186,17],[273,17],[328,17],[383,17],[442,17]], 
cpos_wide:[[64,17],[129,17],[194,17],[285,17],[339,17],[393,17],[451,17]], 
width:[1,1,1,1,1,0,0],
spos_narrow:[244,42], 
spos_wide:[257.5,42], 
epos:[246,17]
},
{
type:1, //5. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[68,17],[127,17],[186,17],[273,17],[328,17],[387,17],[446,17]], 
cpos_wide:[[64,17],[129,17],[194,17],[285,17],[339,17],[397,17],[455,17]], 
width:[1,1,1,1,0,0,1],
spos_narrow:[244,42], 
spos_wide:[257.5,42], 
epos:[246,17]
},
{
type:1, //6. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[68,17],[127,17],[186,17],[273,17],[332,17],[391,17],[446,17]], 
cpos_wide:[[64,17],[129,17],[194,17],[285,17],[343,17],[401,17],[455,17]], 
width:[1,1,1,0,0,1,1],
spos_narrow:[244,42], 
spos_wide:[257.5,42], 
epos:[246,17]
},
{
type:1, //7. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[55,17],[110,17],[165,17],[247,17],[300,17],[353,17],[406,17],[459,17]], 
cpos_wide:[[55,17],[110,17],[165,17],[247,17],[300,17],[353,17],[406,17],[459,17]], 
width:[0,0,0,1,1,1,1,1],
spos_narrow:[220.5,42], 
spos_wide:[220.5,42], 
epos:[222.5,17]
},
{
type:1, //8. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9][A-Z]$/, 
cpos_narrow:[[55,17],[110,17],[165,17],[247,17],[299,17],[351,17],[403,17],[455,17]], 
cpos_wide:[[55,17],[110,17],[165,17],[247,17],[299,17],[351,17],[403,17],[455,17]], 
width:[0,0,0,1,1,1,1,0],
spos_narrow:[220.5,42], 
spos_wide:[220.5,42], 
epos:[222.5,17]
},
{
type:1, //9. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][A-Z][A-Z]$/, 
cpos_narrow:[[55,17],[110,17],[165,17],[247,17],[298,17],[349,17],[400,17],[455,17]], 
cpos_wide:[[55,17],[110,17],[165,17],[247,17],[298,17],[349,17],[400,17],[455,17]], 
width:[0,0,0,1,1,1,0,0],
spos_narrow:[220.5,42], 
spos_wide:[220.5,42], 
epos:[222.5,17]
},
{ 
type:1, //wycofany 4. zasób grodzki (wycofanego 5. nie ma bo ma ten sam układ co 1. zasób ziemski, a zasoby wyszukuje wg numeru bez spacji)
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[68,17],[129,17],[218,17],[278,17],[334,17],[390,17],[446,17]],  
cpos_wide:[[64,17],[132,17],[226,17],[285,17],[340,17],[395,17],[450,17]],  
width:[1,1,0,1,1,1,1],
spos_narrow:[188,42], 
spos_wide:[197,42],
epos:[190,17]
},
//indywidualne 5-znakowe
{
type:1, //AAAAA
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][A-Z][A-Z]$/, 
cpos_narrow:[[65,17],[125,17],[212,17],[272,17],[332,17],[392,17],[452,17]], 
cpos_wide:[[64,17],[124,17],[209,17],[269,17],[329,17],[389,17],[449,17]], 
width:[0,1,0,0,0,0,0],
spos_narrow:[181,42], 
spos_wide:[179,42],
epos:[183,17]
},
{
type:1, //AAAA1
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[65,17],[125,17],[212,17],[272,17],[332,17],[392,17],[452,17]],  
cpos_wide:[[65,17],[125,17],[212,17],[272,17],[332,17],[392,17],[454,17]], 
width:[0,1,0,0,0,0,1],
spos_narrow:[181,42], 
spos_wide:[181,42],
epos:[183,17]
},
{
type:1, //AAA1A
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][0-9][A-Z]$/, 
cpos_narrow:[[65,17],[125,17],[212,17],[272,17],[332,17],[392,17],[448,17]],  
cpos_wide:[[65,17],[125,17],[212,17],[272,17],[332,17],[394,17],[452,17]], 
width:[0,1,0,0,0,1,0],
spos_narrow:[181,42], 
spos_wide:[181,42],
epos:[183,17]
},
{
type:1, //AAA11
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[65,17],[126,17],[213,17],[274,17],[335,17],[396,17],[453,17]],  
cpos_wide:[[65,17],[125,17],[212,17],[272,17],[332,17],[394,17],[454,17]], 
width:[0,1,0,0,0,1,1],
spos_narrow:[182,42], 
spos_wide:[181,42],
epos:[184,17]
},
//indywidualne 4-znakowe
{
type:1, //AAAA
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][A-Z]$/, 
cpos_narrow:[[75,17],[138,17],[236,17],[299,17],[362,17],[425,17]], 
cpos_wide:[[68,17],[138,17],[228,17],[298,17],[368,17],[438,17]],
width:[1,1,1,1,1,1],
spos_narrow:[199.5,42], 
spos_wide:[195.5,42], 
epos:[201.5,17]
},
{
type:1, //AAA1
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[75,17],[138,17],[236,17],[299,17],[362,17],[425,17]],
cpos_wide:[[69,17],[139,17],[231,17],[301,17],[371,17],[446.5,17]],
width:[1,1,1,1,1,1],
spos_narrow:[199.5,42], 
spos_wide:[197.5,42], 
epos:[201.5,17]
},
{
type:1, //AA1A
regex:/^[A-Z][0-9][A-Z][A-Z][0-9][A-Z]$/, 
cpos_narrow:[[75,17],[138,17],[236,17],[299,17],[362,17],[421,17]],
cpos_wide:[[69,17],[139,17],[231,17],[301,17],[376.5,17],[441,17]],
width:[1,1,1,1,1,1],
spos_narrow:[199.5,42], 
spos_wide:[197.5,42], 
epos:[201.5,17]
},
{
type:1, //AA11
regex:/^[A-Z][0-9][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[75,17],[138,17],[236,17],[299,17],[362,17],[421,17]], 
cpos_wide:[[72,17],[142,17],[238,17],[308,17],[383.5,17],[448,17]],
width:[1,1,1,1,1,1],
spos_narrow:[199.5,42], 
spos_wide:[202.5,42], 
epos:[201.5,17]
},
//indywidualne 3-znakowe
{
type:1, //AAA
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z]$/, 
cpos_narrow:[[90,17],[157,17],[285,17],[352,17],[419,17]], 
cpos_wide:[[82,17],[156,17],[275,17],[349,17],[423,17]], 
width:[1,1,1,1,1],
spos_narrow:[233.5,42], 
spos_wide:[228,42], 
epos:[235.5,17]
},
{
type:1, //AA1
regex:/^[A-Z][0-9][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[90,17],[157,17],[285,17],[352,17],[419,17]], 
cpos_wide:[[83,17],[157,17],[277,17],[351,17],[430.5,17]], 
width:[1,1,1,1,1],
spos_narrow:[233.5,42], 
spos_wide:[229.5,42], 
epos:[235.5,17]
},
{
type:1, //A1A
regex:/^[A-Z][0-9][A-Z][0-9][A-Z]$/, 
cpos_narrow:[[90,17],[157,17],[285,17],[352,17],[415,17]], 
cpos_wide:[[83,17],[157,17],[277,17],[356.5,17],[425,17]], 
width:[1,1,1,1,1],
spos_narrow:[233.5,42], 
spos_wide:[229.5,42], 
epos:[235.5,17]
},
{
type:1, //A11
regex:/^[A-Z][0-9][A-Z][0-9][0-9]$/, 
cpos_narrow:[[90,17],[157,17],[285,17],[352,17],[415,17]],  
cpos_wide:[[85,17],[159,17],[282,17],[361.5,17],[435.5,17]],  
width:[1,1,1,1,1],
spos_narrow:[233.5,42], 
spos_wide:[233,42], 
epos:[235.5,17]
},
//dwurzędowe
{
type:2, //1. zasób grodzki
regex:/^[A-Z][A-Z][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[96,17],[163,17],[19,117],[75,117],[131,117],[187,117],[243,117]], 
cpos_wide:[[92,17],[164,17],[19,117],[75,117],[131,117],[187,117],[243,117]], 
width:[1,1,1,1,1,1,1],
spos_narrow:[245,42], 
spos_wide:[249,42], 
epos:[247,17]
},
{
type:2, //2. zasób grodzki
regex:/^[A-Z][A-Z][0-9][0-9][0-9][0-9][A-Z]$/, 
cpos_narrow:[[96,17],[163,17],[19,117],[74,117],[129,117],[184,117],[239,117]], 
cpos_wide:[[92,17],[164,17],[19,117],[74,117],[129,117],[184,117],[239,117]], 
width:[1,1,1,1,1,1,0],
spos_narrow:[245,42], 
spos_wide:[249,42], 
epos:[247,17]
},
{
type:2, //3. zasób grodzki
regex:/^[A-Z][A-Z][0-9][0-9][0-9][A-Z][A-Z]$/, 
cpos_narrow:[[96,17],[163,17],[19,117],[73,117],[127,117],[181,117],[239,117]], 
cpos_wide:[[92,17],[164,17],[19,117],[73,117],[127,117],[181,117],[239,117]], 
width:[1,1,1,1,1,0,0],
spos_narrow:[245,42], 
spos_wide:[249,42], 
epos:[247,17]
},
{
type:2, //4. zasób grodzki
regex:/^[A-Z][A-Z][0-9][A-Z][0-9][0-9][0-9]$/, 
cpos_narrow:[[96,17],[163,17],[19,117],[74,117],[133,117],[188,117],[243,117]], 
cpos_wide:[[92,17],[164,17],[19,117],[74,117],[133,117],[188,117],[243,117]], 
width:[1,1,1,0,1,1,1],
spos_narrow:[245,42], 
spos_wide:[249,42], 
epos:[247,17]
},
{
type:2, //5. zasób grodzki
regex:/^[A-Z][A-Z][0-9][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[96,17],[163,17],[17,117],[72,117],[131,117],[190,117],[245,117]], 
cpos_wide:[[92,17],[164,17],[19,117],[74,117],[133,117],[192,117],[247,117]],
width:[1,1,1,0,0,1,1], 
spos_narrow:[245,42], 
spos_wide:[249,42], 
epos:[247,17]
},
{
type:2, //wycofany 4. zasób grodzki
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[96,17],[163,17],[19,117],[74,117],[133,117],[188,117],[243,117]], 
cpos_wide:[[92,17],[164,17],[19,117],[78,117],[133,117],[188,117],[243,117]], 
width:[1,1,0,1,1,1,1],
spos_narrow:[245,42], 
spos_wide:[249,42], 
epos:[247,17]
},
{
type:2, //1. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][A-Z][0-9][0-9][0-9]$/, 
cpos_narrow:[[70,17],[129,17],[188,17],[34,117],[101,117],[164,117],[227,117]], 
cpos_wide:[[65,17],[131,17],[197,17],[34,117],[101,117],[164,117],[227,117]], 
width:[1,1,1,0,1,1,1],
spos_narrow:[257.5,42], 
spos_wide:[265.5,42], 
epos:[259.5,17]
},
{
type:2, //3. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][A-Z][0-9][0-9]$/, 
cpos_narrow:[[70,17],[129,17],[188,17],[34,117],[97,117],[164,117],[227,117]],  
cpos_wide:[[65,17],[131,17],[197,17],[34,117],[97,117],[164,117],[227,117]], 
width:[1,1,1,1,0,1,1],
spos_narrow:[257.5,42], 
spos_wide:[265.5,42], 
epos:[259.5,17]
},
{
type:2, //4. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][A-Z][0-9]$/, 
cpos_narrow:[[70,17],[129,17],[188,17],[34,117],[97,117],[160,117],[227,117]],  
cpos_wide:[[65,17],[131,17],[197,17],[34,117],[97,117],[160,117],[227,117]], 
width:[1,1,1,1,1,0,1],
spos_narrow:[257.5,42], 
spos_wide:[265.5,42],
epos:[259.5,17]
},
{
type:2, //2. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][A-Z][A-Z]$/, 
cpos_narrow:[[70,17],[129,17],[188,17],[32,117],[95,117],[158,117],[225,117]],  
cpos_wide:[[65,17],[131,17],[197,17],[32,117],[95,117],[158,117],[225,117]], 
width:[1,1,1,1,1,0,0],
spos_narrow:[257.5,42], 
spos_wide:[265.5,42], 
epos:[259.5,17]
},
{
type:2, //5. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[70,17],[129,17],[188,17],[32,117],[95,117],[162,117],[229,117]], 
cpos_wide:[[65,17],[131,17],[197,17],[32,117],[95,117],[162,117],[229,117]],
width:[1,1,1,1,0,0,1],
spos_narrow:[257.5,42], 
spos_wide:[265.5,42], 
epos:[259.5,17]
},
{
type:2, //6. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[70,17],[129,17],[188,17],[32,117],[99,117],[166,117],[229,117]], 
cpos_wide:[[65,17],[131,17],[197,17],[32,117],[99,117],[166,117],[229,117]],
width:[1,1,1,0,0,1,1],
spos_narrow:[257.5,42], 
spos_wide:[265.5,42], 
epos:[259.5,17]
},
{
type:2, //7. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[70,17],[129,17],[188,17],[19,117],[75,117],[131,117],[187,117],[243,117]], 
cpos_wide:[[65,17],[131,17],[197,17],[19,117],[75,117],[131,117],[187,117],[243,117]], 
width:[1,1,1,1,1,1,1,1],
spos_narrow:[257.5,42], 
spos_wide:[265.5,42], 
epos:[259.5,17]
},
{
type:2, //8. zasób ziemski 
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9][A-Z]$/, 
cpos_narrow:[[70,17],[129,17],[188,17],[19,117],[74,117],[129,117],[184,117],[239,117]],  
cpos_wide:[[65,17],[131,17],[197,17],[19,117],[74,117],[129,117],[184,117],[239,117]], 
width:[1,1,1,1,1,1,1,0],
spos_narrow:[257.5,42], 
spos_wide:[265.5,42], 
epos:[259.5,17]
},
{
type:2, //9. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][A-Z][A-Z]$/, 
cpos_narrow:[[70,17],[129,17],[188,17],[19,117],[73,117],[127,117],[181,117],[239,117]], 
cpos_wide:[[65,17],[131,17],[197,17],[19,117],[73,117],[127,117],[181,117],[239,117]], 
width:[1,1,1,1,1,1,0,0],
spos_narrow:[257.5,42], 
spos_wide:[265.5,42], 
epos:[259.5,17]
},
//indywidualne 2-rzędowe 5-znakowe
{
type:2, //AAAAA
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][A-Z][A-Z]$/, 
cpos_narrow:[[98,17],[163,17],[19,117],[74,117],[129,117],[184,117],[239,117]], 
cpos_wide:[[102,17],[174,17],[19,117],[74,117],[129,117],[184,117],[239,117]], 
width:[1,1,0,0,0,0,0],
spos_narrow:[243,42], 
spos_wide:[248.5,42], 
epos:[245,17]
},
{
type:2, //AAAA1
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[98,17],[163,17],[20,117],[75,117],[130,117],[185,117],[240,117]], 
cpos_wide:[[102,17],[174,17],[19,117],[74,117],[129,117],[184,117],[241,117]], 
width:[1,1,0,0,0,0,1],
spos_narrow:[243,42], 
spos_wide:[248.5,42], 
epos:[245,17]
},
{
type:2, //AAA1A
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][0-9][A-Z]$/, 
cpos_narrow:[[98,17],[163,17],[21,117],[76,117],[131,117],[186,117],[237,117]], 
cpos_wide:[[102,17],[174,17],[19,117],[74,117],[129,117],[186,117],[239,117]], 
width:[1,1,0,0,0,1,0],
spos_narrow:[243,42], 
spos_wide:[248.5,42], 
epos:[245,17]
},
{
type:2, //AAA11
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[98,17],[163,17],[23,117],[78,117],[133,117],[188,117],[239,117]], 
cpos_wide:[[102,17],[174,17],[19,117],[74,117],[129,117],[186,117],[241,117]], 
width:[1,1,0,0,0,1,1],
spos_narrow:[243,42], 
spos_wide:[248.5,42], 
epos:[245,17]
},
//indywidualne 2-rzędowe 4-znakowe
{
type:2,
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][A-Z]$/, 
cpos_narrow:[[98,17],[163,17],[25,117],[94,117],[163,117],[232,117]],  
cpos_wide:[[102,17],[174,17],[19,117],[90,117],[161,117],[232,117]], 
width:[1,1,1,1,1,1],
spos_narrow:[243,42], 
spos_wide:[248.5,42], 
epos:[245,17]
},
{
type:2,
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[98,17],[163,17],[27,117],[96,117],[165,117],[234,117]],   
cpos_wide:[[102,17],[174,17],[20,117],[91,117],[162,117],[238.5,117]], 
width:[1,1,1,1,1,1],
spos_narrow:[243,42], 
spos_wide:[248.5,42], 
epos:[245,17]
},
{
type:2,
regex:/^[A-Z][0-9][A-Z][A-Z][0-9][A-Z]$/, 
cpos_narrow:[[98,17],[163,17],[27,117],[96,117],[165,117],[230,117]],   
cpos_wide:[[102,17],[174,17],[20,117],[91,117],[167.5,117],[233,117]], 
width:[1,1,1,1,1,1],
spos_narrow:[243,42], 
spos_wide:[248.5,42], 
epos:[245,17]
},
{
type:2,
regex:/^[A-Z][0-9][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[98,17],[163,17],[28,117],[98,117],[168,117],[234,117]],   
cpos_wide:[[102,17],[174,17],[21,117],[92,117],[168.5,117],[239.5,117]], 
width:[1,1,1,1,1,1],
spos_narrow:[243,42], 
spos_wide:[248.5,42], 
epos:[245,17]
},
//indywidualne 2-rzędowe 3-znakowe
{
type:2,
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z]$/, 
cpos_narrow:[[98,17],[163,17],[56,117],[129,117],[202,117]], 
cpos_wide:[[102,17],[174,17],[46,117],[125,117],[204,117]],
width:[1,1,1,1,1],
spos_narrow:[243,42], 
spos_wide:[248.5,42], 
epos:[245,17]
},
{
type:2,
regex:/^[A-Z][0-9][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[98,17],[163,17],[58,117],[131,117],[204,117]], 
cpos_wide:[[102,17],[174,17],[49,117],[128,117],[212.5,117]], 
width:[1,1,1,1,1],
spos_narrow:[243,42], 
spos_wide:[248.5,42], 
epos:[245,17]
},
{
type:2,
regex:/^[A-Z][0-9][A-Z][0-9][A-Z]$/, 
cpos_narrow:[[98,17],[163,17],[58,117],[131,117],[200,117]], 
cpos_wide:[[102,17],[174,17],[49,117],[133.5,117],[207,117]], 
width:[1,1,1,1,1],
spos_narrow:[243,42], 
spos_wide:[248.5,42], 
epos:[245,17]
},
{
type:2,
regex:/^[A-Z][0-9][A-Z][0-9][0-9]$/, 
cpos_narrow:[[98,17],[163,17],[56,117],[133,117],[206,117]], 
cpos_wide:[[102,17],[174,17],[48,117],[132.5,117],[211.5,117]], 
width:[1,1,1,1,1],
spos_narrow:[243,42], 
spos_wide:[248.5,42], 
epos:[245,17]
},
//zmniejszone
{
type:3,
regex:/^[A-Z][0-9][0-9][0-9]$/, 
cpos_narrow:[[54,17],[136,17],[187,17],[238,17]], 
cpos_wide:[[54,17],[136,17],[187,17],[238,17]], 
width:[0,1,1,1],
spos_narrow:[109.5,42], 
spos_wide:[109.5,42], 
epos:[111.5,17]
},
{
type:3,
regex:/^[A-Z][0-9][0-9][A-Z]$/, 
cpos_narrow:[[54,17],[136,17],[187,17],[238,17]], 
cpos_wide:[[54,17],[136,17],[187,17],[238,17]], 
width:[0,1,1,0],
spos_narrow:[109.5,42], 
spos_wide:[109.5,42], 
epos:[111.5,17]
},
{
type:3,
regex:/^[A-Z][0-9][A-Z][0-9]$/, 
cpos_narrow:[[54,17],[136,17],[187,17],[242,17]], 
cpos_wide:[[54,17],[136,17],[187,17],[242,17]], 
width:[0,1,0,1],
spos_narrow:[109.5,42], 
spos_wide:[109.5,42], 
epos:[111.5,17]
},
{
type:3,
regex:/^[A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[54,17],[136,17],[191,17],[242,17]], 
cpos_wide:[[54,17],[136,17],[191,17],[242,17]], 
width:[0,0,1,1],
spos_narrow:[109.5,42], 
spos_wide:[109.5,42], 
epos:[111.5,17]
},
{
type:3,
regex:/^[A-Z][0-9][A-Z][A-Z]$/, 
cpos_narrow:[[54,17],[136,17],[185,17],[238,17]], 
cpos_wide:[[54,17],[136,17],[185,17],[238,17]], 
width:[0,1,0,0],
spos_narrow:[109.5,42], 
spos_wide:[109.5,42], 
epos:[111.5,17]
},
{
type:3,
regex:/^[A-Z][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[54,17],[136,17],[189,17],[242,17]], 
cpos_wide:[[54,17],[136,17],[189,17],[242,17]], 
width:[0,0,0,1],
spos_narrow:[109.5,42], 
spos_wide:[109.5,42], 
epos:[111.5,17]
},
{
type:3,
regex:/^[A-Z][A-Z][0-9][A-Z]$/, 
cpos_narrow:[[54,17],[136,17],[189,17],[238,17]], 
cpos_wide:[[54,17],[136,17],[189,17],[238,17]], 
width:[0,0,1,0],
spos_narrow:[109.5,42], 
spos_wide:[109.5,42], 
epos:[111.5,17]
},
//motocyklowe
{
type:4, //1. zasób grodzki
regex:/^[A-Z][A-Z][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[63,20],[105,20],[18,85],[60,85],[102,85],[144,85]],  
cpos_wide:[[63,20],[107,20],[18,85],[60,85],[102,85],[144,85]],  
width:[1,1,1,1,1,1],
spos_narrow:[149,35], 
spos_wide:[152,35], 
epos:[151,15]
},
{
type:4, //2. zasób grodzki
regex:/^[A-Z][A-Z][0-9][0-9][0-9][A-Z]$/, 
cpos_narrow:[[63,20],[105,20],[18,85],[60,85],[102,85],[144,85]],    
cpos_wide:[[63,20],[107,20],[18,85],[60,85],[102,85],[144,85]],  
width:[1,1,1,1,1,0],
spos_narrow:[149,35], 
spos_wide:[152,35], 
epos:[151,15]
},
{
type:4, //6. zasób grodzki
regex:/^[A-Z][A-Z][0-9][0-9][A-Z][0-9]$/, 
cpos_narrow:[[63,20],[105,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[63,20],[105,20],[18,85],[60,85],[102,85],[144,85]], 
width:[1,1,1,1,0,1],
spos_narrow:[149,35], 
spos_wide:[152,35], 
epos:[151,15]
},
{
type:4, //5. zasób grodzki
regex:/^[A-Z][A-Z][0-9][A-Z][0-9][0-9]$/, 
cpos_narrow:[[63,20],[105,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[63,20],[105,20],[18,85],[60,85],[102,85],[144,85]], 
width:[1,1,1,0,1,1],
spos_narrow:[149,35], 
spos_wide:[152,35], 
epos:[151,15]
},
{
type:4, //3. zasób grodzki
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9]$/, 
cpos_narrow:[[63,20],[105,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[63,20],[105,20],[18,85],[60,85],[102,85],[144,85]], 
width:[1,1,0,1,1,1],
spos_narrow:[149,35], 
spos_wide:[152,35], 
epos:[151,15]
},
{
type:4, //4. zasób grodzki
regex:/^[A-Z][A-Z][0-9][0-9][A-Z][A-Z]$/, 
cpos_narrow:[[63,20],[105,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[63,20],[105,20],[18,85],[60,85],[102,85],[144,85]],
width:[1,1,1,1,0,0],
spos_narrow:[149,35], 
spos_wide:[152,35], 
epos:[151,15]
},
{
type:4, //7. zasob grodzki
regex:/^[A-Z][A-Z][0-9][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[63,20],[105,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[63,20],[105,20],[18,85],[60,85],[102,85],[144,85]],
width:[1,1,1,0,0,1], 
spos_narrow:[149,35], 
spos_wide:[152,35], 
epos:[151,15]
},
{
type:4, //8. zasób grodzki
regex:/^[A-Z][A-Z][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[63,20],[105,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[63,20],[105,20],[18,85],[60,85],[102,85],[144,85]], 
width:[1,1,0,0,1,1],
spos_narrow:[149,35], 
spos_wide:[152,35], 
epos:[151,15]
},
{
type:4, //1. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][A-Z][0-9][0-9][0-9]$/, 
cpos_narrow:[[50,20],[86,20],[122,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[50,20],[88,20],[126,20],[18,85],[60,85],[102,85],[144,85]], 
width:[1,1,1,0,1,1,1],
spos_narrow:[157.5,35], 
spos_wide:[161.5,35], 
epos:[159.5,15]
},
{
type:4, //3. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][A-Z][0-9][0-9]$/, 
cpos_narrow:[[50,20],[86,20],[122,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[50,20],[88,20],[126,20],[18,85],[60,85],[102,85],[144,85]], 
width:[1,1,1,1,0,1,1],
spos_narrow:[157.5,35], 
spos_wide:[161.5,35], 
epos:[159.5,15]
},
{
type:4, //4. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][A-Z][0-9]$/, 
cpos_narrow:[[50,20],[86,20],[122,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[50,20],[88,20],[126,20],[18,85],[60,85],[102,85],[144,85]], 
width:[1,1,1,1,1,0,1],
spos_narrow:[157.5,35], 
spos_wide:[161.5,35], 
epos:[159.5,15]
},
{
type:4, //2. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][A-Z][A-Z]$/, 
cpos_narrow:[[50,20],[86,20],[122,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[50,20],[88,20],[126,20],[18,85],[60,85],[102,85],[144,85]], 
width:[1,1,1,1,1,0,0],
spos_narrow:[157.5,35], 
spos_wide:[161.5,35], 
epos:[159.5,15]
},
{
type:4, //5. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][0-9][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[50,20],[86,20],[122,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[50,20],[88,20],[126,20],[18,85],[60,85],[102,85],[144,85]], 
width:[1,1,1,1,0,0,1],
spos_narrow:[157.5,35], 
spos_wide:[161.5,35], 
epos:[159.5,15]
},
{
type:4, //6. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[50,20],[86,20],[122,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[50,20],[88,20],[126,20],[18,85],[60,85],[102,85],[144,85]],
width:[1,1,1,0,0,1,1],
spos_narrow:[157.5,35], 
spos_wide:[161.5,35], 
epos:[159.5,15]
},
{
type:4, //10. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][A-Z][0-9][0-9][A-Z]$/, 
cpos_narrow:[[50,20],[86,20],[122,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[50,20],[88,20],[126,20],[18,85],[60,85],[102,85],[144,85]],
width:[1,1,1,0,1,1,0],
spos_narrow:[157.5,35], 
spos_wide:[161.5,35], 
epos:[159.5,15]
},
{
type:4, //11. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][A-Z][0-9][A-Z][A-Z]$/, 
cpos_narrow:[[50,20],[86,20],[122,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[50,20],[88,20],[126,20],[18,85],[60,85],[102,85],[144,85]],
width:[1,1,1,0,1,0,0],
spos_narrow:[157.5,35], 
spos_wide:[161.5,35], 
epos:[159.5,15]
},
//motocyklowe indywidualne 5-znakowe
{
type:4,
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][A-Z][A-Z]$/, 
cpos_narrow:[[67,20],[113,20],[13,85],[47,85],[81,85],[115,85],[149,85]], 
cpos_wide:[[67,20],[115,20],[13,85],[47,85],[81,85],[115,85],[149,85]], 
width:[1,1,0,0,0,0,0],
spos_narrow:[153,35], 
spos_wide:[154,35], 
epos:[155,15]
},
{
type:4,
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[67,20],[113,20],[13,85],[47,85],[81,85],[115,85],[149,85]], 
cpos_wide:[[67,20],[115,20],[13,85],[47,85],[81,85],[115,85],[149,85]], 
width:[1,1,0,0,0,0,1],
spos_narrow:[153,35], 
spos_wide:[154,35], 
epos:[155,15]
},
{
type:4,
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][0-9][A-Z]$/, 
cpos_narrow:[[67,20],[113,20],[13,85],[47,85],[81,85],[115,85],[149,85]], 
cpos_wide:[[67,20],[115,20],[13,85],[47,85],[81,85],[115,85],[149,85]], 
width:[1,1,0,0,0,1,0],
spos_narrow:[153,35], 
spos_wide:[154,35], 
epos:[155,15]
},
{
type:4,
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[67,20],[113,20],[13,85],[47,85],[81,85],[115,85],[149,85]], 
cpos_wide:[[67,20],[115,20],[13,85],[47,85],[81,85],[115,85],[149,85]], 
width:[1,1,0,0,0,1,1],
spos_narrow:[153,35], 
spos_wide:[154,35], 
epos:[155,15]
},
//motocyklowe indywidualne 4-znakowe
{
type:4,
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][A-Z]$/, 
cpos_narrow:[[67,20],[113,20],[23,85],[61,85],[99,85],[137,85]], 
cpos_wide:[[67,20],[115,20],[16,85],[58,85],[100,85],[142,85]],
width:[1,1,1,1,1,1],
spos_narrow:[153,35], 
spos_wide:[154,35], 
epos:[155,15]
},
{
type:4,
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[67,20],[113,20],[23,85],[61,85],[99,85],[137,85]], 
cpos_wide:[[67,20],[115,20],[16,85],[58,85],[100,85],[144,85]],
width:[1,1,1,1,1,1],
spos_narrow:[153,35], 
spos_wide:[154,35], 
epos:[155,15]
},
{
type:4,
regex:/^[A-Z][0-9][A-Z][A-Z][0-9][A-Z]$/, 
cpos_narrow:[[67,20],[113,20],[23,85],[61,85],[99,85],[137,85]], 
cpos_wide:[[67,20],[115,20],[16,85],[58,85],[102,85],[142,85]],
width:[1,1,1,1,1,1],
spos_narrow:[153,35], 
spos_wide:[154,35], 
epos:[155,15]
},
{
type:4,
regex:/^[A-Z][0-9][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[67,20],[113,20],[23,85],[61,85],[99,85],[137,85]], 
cpos_wide:[[67,20],[115,20],[17,85],[59,85],[103,85],[145,85]],
width:[1,1,1,1,1,1],
spos_narrow:[153,35], 
spos_wide:[154,35], 
epos:[155,15]
},
//indywidualne 2-rzędowe 3-znakowe
{
type:4,
regex:/^[A-Z][0-9][A-Z][A-Z][A-Z]$/, 
cpos_narrow:[[67,20],[113,20],[32,85],[80,85],[128,85]], 
cpos_wide:[[67,20],[115,20],[28,85],[79,85],[130,85]], 
width:[1,1,1,1,1],
spos_narrow:[153,35], 
spos_wide:[154,35], 
epos:[155,15]
},
{
type:4,
regex:/^[A-Z][0-9][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[67,20],[113,20],[32,85],[80,85],[128,85]], 
cpos_wide:[[67,20],[115,20],[28,85],[79,85],[132,85]], 
width:[1,1,1,1,1],
spos_narrow:[153,35], 
spos_wide:[154,35], 
epos:[155,15]
},
{
type:4,
regex:/^[A-Z][0-9][A-Z][0-9][A-Z]$/, 
cpos_narrow:[[67,20],[113,20],[32,85],[80,85],[128,85]], 
cpos_wide:[[67,20],[115,20],[28,85],[81,85],[130,85]], 
width:[1,1,1,1,1],
spos_narrow:[153,35], 
spos_wide:[154,35],   
epos:[155,15]
},
{
type:4,
regex:/^[A-Z][0-9][A-Z][0-9][0-9]$/, 
cpos_narrow:[[67,20],[113,20],[32,85],[80,85],[128,85]], 
cpos_wide:[[67,20],[115,20],[28,85],[81,85],[132,85]], 
width:[1,1,1,1,1],
spos_narrow:[153,35], 
spos_wide:[154,35],  
epos:[155,15]
},
//motorowerowe
{
type:5, //1. zasób grodzki
regex:/^[A-Z][A-Z][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[58,17.5],[90,17.5],[40,66.5],[63,66.5],[86,66.5],[109,66.5]], 
cpos_wide:[[58,17.5],[90,17.5],[40,66.5],[63,66.5],[86,66.5],[109,66.5]],  
width:[1,1,1,1,1,1],
spos_narrow:[14.5,66.5],
spos_wide:[14.5,66.5]
},
{
type:5, //2. zasób grodzki
regex:/^[A-Z][A-Z][0-9][0-9][0-9][A-Z]$/, 
cpos_narrow:[[58,17.5],[90,17.5],[40,66.5],[63,66.5],[86,66.5],[109,66.5]], 
cpos_wide:[[58,17.5],[90,17.5],[36,66.5],[59,66.5],[82,66.5],[105,66.5]], 
width:[1,1,1,1,1,1],
spos_narrow:[14.5,66.5],
spos_wide:[14.5,66.5]
},
{
type:5,
regex:/^[A-Z][A-Z][0-9][0-9][A-Z][0-9]$/, 
cpos_narrow:[[58,17.5],[90,17.5],[36,66.5],[59,66.5],[82,66.5],[109,66.5]], 
cpos_wide:[[58,17.5],[90,17.5],[36,66.5],[59,66.5],[82,66.5],[109,66.5]], 
width:[1,1,1,1,1,1],
spos_narrow:[12.5,66.5],
spos_wide:[12.5,66.5]
},
{
type:5,
regex:/^[A-Z][A-Z][0-9][A-Z][0-9][0-9]$/, 
cpos_narrow:[[58,17.5],[90,17.5],[36,66.5],[59,66.5],[86,66.5],[109,66.5]], 
cpos_wide:[[58,17.5],[90,17.5],[36,66.5],[59,66.5],[86,66.5],[109,66.5]], 
width:[1,1,1,1,1,1],
spos_narrow:[12.5,66.5],
spos_wide:[12.5,66.5]
},
{
type:5,
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9]$/, 
cpos_narrow:[[58,17.5],[90,17.5],[36,66.5],[63,66.5],[86,66.5],[109,66.5]], 
cpos_wide:[[58,17.5],[90,17.5],[36,66.5],[63,66.5],[86,66.5],[109,66.5]], 
width:[1,1,1,1,1,1],
spos_narrow:[12.5,66.5],
spos_wide:[12.5,66.5]
},
{
type:5,
regex:/^[A-Z][A-Z][0-9][0-9][A-Z][A-Z]$/, 
cpos_narrow:[[58,17.5],[90,17.5],[32,66.5],[55,66.5],[78,66.5],[105,66.5]], 
cpos_wide:[[58,17.5],[90,17.5],[32,66.5],[55,66.5],[78,66.5],[105,66.5]], 
width:[1,1,1,1,1,1],
spos_narrow:[10.5,66.5],
spos_wide:[10.5,66.5]
},
{
type:5,
regex:/^[A-Z][A-Z][0-9][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[58,17.5],[90,17.5],[32,66.5],[55,66.5],[82,66.5],[109,66.5]], 
cpos_wide:[[58,17.5],[90,17.5],[32,66.5],[55,66.5],[82,66.5],[109,66.5]], 
width:[1,1,1,1,1,1],
spos_narrow:[10.5,66.5],
spos_wide:[10.5,66.5]
},
{
type:5,
regex:/^[A-Z][A-Z][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[58,17.5],[90,17.5],[32,66.5],[59,66.5],[86,66.5],[109,66.5]],  
cpos_wide:[[58,17.5],[90,17.5],[32,66.5],[59,66.5],[86,66.5],[109,66.5]],  
width:[1,1,1,1,1,1],
spos_narrow:[10.5,66.5],
spos_wide:[10.5,66.5]
},
{
type:5, //1. zasób ziemski
regex:/^[A-Z][A-Z][A-Z][A-Z][0-9][0-9][0-9]$/, 
cpos_narrow:[[47,17.5],[75,17.5],[103,17.5],[36,66.5],[63,66.5],[86,66.5],[109,66.5]], 
cpos_wide:[[47,17.5],[75,17.5],[103,17.5],[36,66.5],[63,66.5],[86,66.5],[109,66.5]],
width:[1,1,1,1,1,1,1],
spos_narrow:[12.5,66.5],
spos_wide:[12.5,66.5]
},
{
type:5,
regex:/^[A-Z][A-Z][A-Z][0-9][A-Z][0-9][0-9]$/, 
cpos_narrow:[[47,17.5],[75,17.5],[103,17.5],[36,66.5],[59,66.5],[86,66.5],[109,66.5]], 
cpos_wide:[[47,17.5],[75,17.5],[103,17.5],[36,66.5],[59,66.5],[86,66.5],[109,66.5]], 
width:[1,1,1,1,1,1,1],
spos_narrow:[12.5,66.5],
spos_wide:[12.5,66.5]
},
{
type:5,
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][A-Z][0-9]$/, 
cpos_narrow:[[47,17.5],[75,17.5],[103,17.5],[36,66.5],[59,66.5],[82,66.5],[109,66.5]], 
cpos_wide:[[47,17.5],[75,17.5],[103,17.5],[36,66.5],[59,66.5],[82,66.5],[109,66.5]], 
width:[1,1,1,1,1,1,1],
spos_narrow:[12.5,66.5],
spos_wide:[12.5,66.5]
},
{
type:5,
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][A-Z][A-Z]$/, 
cpos_narrow:[[47,17.5],[75,17.5],[103,17.5],[32,66.5],[55,66.5],[78,66.5],[105,66.5]], 
cpos_wide:[[47,17.5],[75,17.5],[103,17.5],[32,66.5],[55,66.5],[78,66.5],[105,66.5]], 
width:[1,1,1,1,1,1,1],
spos_narrow:[10.5,66.5],
spos_wide:[10.5,66.5]
},
{
type:5,
regex:/^[A-Z][A-Z][A-Z][0-9][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[47,17.5],[75,17.5],[103,17.5],[32,66.5],[55,66.5],[82,66.5],[109,66.5]], 
cpos_wide:[[47,17.5],[75,17.5],[103,17.5],[32,66.5],[55,66.5],[82,66.5],[109,66.5]], 
width:[1,1,1,1,1,1,1],
spos_narrow:[10.5,66.5],
spos_wide:[10.5,66.5]
},
{
type:5,
regex:/^[A-Z][A-Z][A-Z][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[47,17.5],[75,17.5],[103,17.5],[32,66.5],[59,66.5],[86,66.5],[109,66.5]], 
cpos_wide:[[47,17.5],[75,17.5],[103,17.5],[32,66.5],[59,66.5],[86,66.5],[109,66.5]],
width:[1,1,1,1,1,1,1],
spos_narrow:[10.5,66.5],
spos_wide:[10.5,66.5]
},
{
type:5,
regex:/^[A-Z][A-Z][A-Z][A-Z][0-9][0-9][A-Z]$/, 
cpos_narrow:[[47,17.5],[75,17.5],[103,17.5],[32,66.5],[59,66.5],[82,66.5],[105,66.5]], 
cpos_wide:[[47,17.5],[75,17.5],[103,17.5],[32,66.5],[59,66.5],[82,66.5],[105,66.5]], 
width:[1,1,1,1,1,1,1],
spos_narrow:[10.5,66.5],
spos_wide:[10.5,66.5]
},
{
type:5,
regex:/^[A-Z][A-Z][A-Z][A-Z][0-9][A-Z][A-Z]$/, 
cpos_narrow:[[47,17.5],[75,17.5],[103,17.5],[32,66.5],[58,66.5],[80,66.5],[106,66.5]], 
cpos_wide:[[47,17.5],[75,17.5],[103,17.5],[32,66.5],[58,66.5],[80,66.5],[106,66.5]], 
width:[1,1,1,1,1,1,1],
spos_narrow:[10.5,66.5],
spos_wide:[10.5,66.5]
},
{ //tablice zabytkowe
type:6,
regex:/^[A-Z][A-Z][0-9][0-9][0-9]$/,
cpos_narrow:[[66,17],[125,17],[212,17],[267,17],[322,17]],
cpos_wide:[[64,17],[130,17],[223,17],[278,17],[333,17]],
width:[1,1,1,1,1],
spos_narrow:[183,42],
spos_wide:[194.5,42],
epos:[185,17],
apos_narrow:[393,32.5],
apos_wide:[400,32.5],
},
{
type:6,
regex:/^[A-Z][A-Z][0-9][0-9][A-Z]$/,
cpos_narrow:[[66,17],[125,17],[212,17],[267,17],[322,17]],
cpos_wide:[[64,17],[130,17],[223,17],[278,17],[333,17]],
width:[1,1,1,1,0],
spos_narrow:[183,42],
spos_wide:[194.5,42],
epos:[185,17],
apos_narrow:[393,32.5],
apos_wide:[400,32.5],
},
{
type:6,
regex:/^[A-Z][A-Z][A-Z][0-9][0-9]$/,
cpos_narrow:[[66,17],[125,17],[184,17],[271,17],[330,17]],
cpos_wide:[[65,17],[129,17],[194,17],[287,17],[341,17]],
width:[1,1,1,1,1],
spos_narrow:[242,42],
spos_wide:[258.5,42],
epos:[244,17],
apos_narrow:[401,32.5],
apos_wide:[404,32.5],
},
{
type:6,
regex:/^[A-Z][A-Z][A-Z][0-9][A-Z]$/,
cpos_narrow:[[66,17],[125,17],[184,17],[271,17],[330,17]],
cpos_wide:[[65,17],[129,17],[194,17],[287,17],[341,17]],
width:[1,1,1,1,0],
spos_narrow:[242,42],
spos_wide:[258.5,42],
epos:[244,17],
apos_narrow:[401,32.5],
apos_wide:[404,32.5],
},
{
type:6,
regex:/^[A-Z][A-Z][A-Z][A-Z][0-9]$/,
cpos_narrow:[[66,17],[125,17],[184,17],[271,17],[330,17]],
cpos_wide:[[65,17],[129,17],[194,17],[287,17],[345,17]],
width:[1,1,1,0,1],
spos_narrow:[242,42],
spos_wide:[258.5,42],
epos:[244,17],
apos_narrow:[401,32.5],
apos_wide:[404,32.5]
},
{//tablice zabytkowe dwurzędowe
type:7,
regex:/^[A-Z][A-Z][0-9][0-9][0-9]$/, 
cpos_narrow:[[96,17],[161,17],[19,117],[74,117],[129,117]],
cpos_wide:[[92,17],[164,17],[19,117],[74,117],[129,117]],
width:[1,1,1,1,1],
spos_narrow:[244,42], 
spos_wide:[249,42], 
epos:[246,17],
apos_narrow:[192,133],
apos_wide:[191,133]
},
{
type:7,
regex:/^[A-Z][A-Z][0-9][0-9][A-Z]$/, 
cpos_narrow:[[96,17],[161,17],[19,117],[74,117],[129,117]],
cpos_wide:[[92,17],[164,17],[19,117],[74,117],[129,117]],
width:[1,1,1,1,0],
spos_narrow:[244,42], 
spos_wide:[249,42], 
epos:[246,17],
apos_narrow:[193,133],
apos_wide:[191,133]
},
{
type:7,
regex:/^[A-Z][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[70,17],[129,17],[188,17],[38,117],[101,117]], 
cpos_wide:[[65,17],[131,17],[197,17],[38,117],[101,117]], 
width:[1,1,1,1,1],
spos_narrow:[257.5,42], 
spos_wide:[265.5,42], 
epos:[259.5,17],
apos_narrow:[174,133],
apos_wide:[173,133]
},
{
type:7,
regex:/^[A-Z][A-Z][A-Z][0-9][A-Z]$/, 
cpos_narrow:[[70,17],[129,17],[188,17],[38,117],[101,117]], 
cpos_wide:[[65,17],[131,17],[197,17],[38,117],[101,117]], 
width:[1,1,1,1,0],
spos_narrow:[257.5,42], 
spos_wide:[265.5,42], 
epos:[259.5,17],
apos_narrow:[174,133],
apos_wide:[173,133]
},
{
type:7,
regex:/^[A-Z][A-Z][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[70,17],[129,17],[188,17],[38,117],[101,117]], 
cpos_wide:[[65,17],[131,17],[197,17],[38,117],[105,117]], 
width:[1,1,1,0,1],
spos_narrow:[257.5,42], 
spos_wide:[265.5,42], 
epos:[259.5,17],
apos_narrow:[174,133],
apos_wide:[173,133]
},
{ //tablice zabytkowe motocyklowe
type:8,
regex:/^[A-Z][A-Z][0-9][0-9][0-9]$/, 
cpos_narrow:[[63,20],[105,20],[14,85],[48,85],[82,85]], 
cpos_wide:[[63,20],[107,20],[14,85],[48,85],[82,85]], 
width:[1,1,1,1,1],
spos_narrow:[149,35], 
spos_wide:[152,35], 
epos:[151,15],
apos_narrow:[117,93],
apos_wide:[117,93]
},
{
type:8,
regex:/^[A-Z][A-Z][0-9][0-9][A-Z]$/, 
cpos_narrow:[[63,20],[105,20],[14,85],[48,85],[82,85]], 
cpos_wide:[[63,20],[107,20],[14,85],[48,85],[82,85]], 
width:[1,1,1,1,0],
spos_narrow:[149,35], 
spos_wide:[152,35], 
epos:[151,15],
apos_narrow:[117,93],
apos_wide:[117,93]
},
{
type:8,
regex:/^[A-Z][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[50,20],[86,20],[122,20],[22,85],[65,85]], 
cpos_wide:[[50,20],[88,20],[126,20],[22,85],[65,85]], 
width:[1,1,1,1,1],
spos_narrow:[157.5,35], 
spos_wide:[161.5,35], 
epos:[159.5,15],
apos_narrow:[108,93],
apos_wide:[108,93]
},
{
type:8,
regex:/^[A-Z][A-Z][A-Z][0-9][A-Z]$/, 
cpos_narrow:[[50,20],[86,20],[122,20],[22,85],[65,85]], 
cpos_wide:[[50,20],[88,20],[126,20],[22,85],[65,85]], 
width:[1,1,1,1,0],
spos_narrow:[157.5,35], 
spos_wide:[161.5,35], 
epos:[159.5,15],
apos_narrow:[108,93],
apos_wide:[108,93]
},
{
type:8,
regex:/^[A-Z][A-Z][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[50,20],[86,20],[122,20],[22,85],[65,85]], 
cpos_wide:[[50,20],[88,20],[126,20],[22,85],[65,85]], 
width:[1,1,1,0,1],
spos_narrow:[157.5,35], 
spos_wide:[161.5,35], 
epos:[159.5,15],
apos_narrow:[108,93],
apos_wide:[108,93]
},
//tablice zabytkowe zmniejszone
{
type:26,
regex:/^[A-Z][0-9][0-9][0-9]$/, 
cpos_narrow:[[54,17],[136,17],[187,17],[238,17]], 
cpos_wide:[[54,17],[136,17],[187,17],[238,17]], 
width:[0,1,1,1],
spos_narrow:[109.5,42], 
spos_wide:[109.5,42], 
epos:[111.5,17]
},
{
type:26,
regex:/^[A-Z][0-9][0-9][A-Z]$/, 
cpos_narrow:[[54,17],[136,17],[187,17],[238,17]], 
cpos_wide:[[54,17],[136,17],[187,17],[238,17]], 
width:[0,1,1,0],
spos_narrow:[109.5,42], 
spos_wide:[109.5,42], 
epos:[111.5,17]
},
{
type:26,
regex:/^[A-Z][0-9][A-Z][0-9]$/, 
cpos_narrow:[[54,17],[136,17],[187,17],[242,17]], 
cpos_wide:[[54,17],[136,17],[187,17],[242,17]], 
width:[0,1,0,1],
spos_narrow:[109.5,42], 
spos_wide:[109.5,42], 
epos:[111.5,17]
},
{
type:26,
regex:/^[A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[54,17],[136,17],[191,17],[242,17]], 
cpos_wide:[[54,17],[136,17],[191,17],[242,17]], 
width:[0,0,1,1],
spos_narrow:[109.5,42], 
spos_wide:[109.5,42], 
epos:[111.5,17]
},
{
type:26,
regex:/^[A-Z][0-9][A-Z][A-Z]$/, 
cpos_narrow:[[54,17],[136,17],[185,17],[238,17]], 
cpos_wide:[[54,17],[136,17],[185,17],[238,17]], 
width:[0,1,0,0],
spos_narrow:[109.5,42], 
spos_wide:[109.5,42], 
epos:[111.5,17]
},
{
type:26,
regex:/^[A-Z][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[54,17],[136,17],[189,17],[242,17]], 
cpos_wide:[[54,17],[136,17],[189,17],[242,17]], 
width:[0,0,0,1],
spos_narrow:[109.5,42], 
spos_wide:[109.5,42], 
epos:[111.5,17]
},
{
type:26,
regex:/^[A-Z][A-Z][0-9][A-Z]$/, 
cpos_narrow:[[54,17],[136,17],[189,17],[238,17]], 
cpos_wide:[[54,17],[136,17],[189,17],[238,17]], 
width:[0,0,1,0],
spos_narrow:[109.5,42], 
spos_wide:[109.5,42], 
epos:[111.5,17]
},
{ //tablice zabytkowe motorowerowe
type:27,
regex:/^[A-Z][A-Z][0-9][0-9][0-9]$/, 
cpos_narrow:[[47,17.5],[75,17.5],[19,66.5],[42,66.5],[65,66.5]], 
cpos_wide:[[47,17.5],[75,17.5],[19,66.5],[42,66.5],[65,66.5]], 
width:[1,1,1,1,1],
spos_narrow:[105,17.5], 
spos_wide:[105,17.5], 
epos:[100,55],
apos_narrow:[93,78],
apos_wide:[93,78]
},
{
type:27,
regex:/^[A-Z][A-Z][0-9][0-9][A-Z]$/, 
cpos_narrow:[[47,17.5],[75,17.5],[15,66.5],[38,66.5],[61,66.5]], 
cpos_wide:[[47,17.5],[75,17.5],[15,66.5],[38,66.5],[61,66.5]],
width:[1,1,1,1,1],
spos_narrow:[105,17.5], 
spos_wide:[105,17.5], 
epos:[100,55],
apos_narrow:[93,78],
apos_wide:[93,78]
},
{
type:27,
regex:/^[A-Z][A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[47,17.5],[75,17.5],[103,17.5],[44,66.5],[67,66.5]],
cpos_wide:[[47,17.5],[75,17.5],[103,17.5],[44,66.5],[67,66.5]], 
width:[1,1,1,1,1],
spos_narrow:[14,66.5], 
spos_wide:[14,66.5], 
epos:[100,55],
apos_narrow:[93,78],
apos_wide:[93,78]
},
{
type:27,
regex:/^[A-Z][A-Z][A-Z][0-9][A-Z]$/, 
cpos_narrow:[[47,17.5],[75,17.5],[103,17.5],[40,66.5],[63,66.5]],
cpos_wide:[[47,17.5],[75,17.5],[103,17.5],[40,66.5],[63,66.5]], 
width:[1,1,1,1,1],
spos_narrow:[14,66.5], 
spos_wide:[14,66.5], 
epos:[100,55],
apos_narrow:[93,78],
apos_wide:[93,78]
},
{
type:27,
regex:/^[A-Z][A-Z][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[47,17.5],[75,17.5],[103,17.5],[40,66.5],[67,66.5]],
cpos_wide:[[47,17.5],[75,17.5],[103,17.5],[40,66.5],[67,66.5]], 
width:[1,1,1,1,1],
spos_narrow:[14,66.5], 
spos_wide:[14,66.5], 
epos:[100,55],
apos_narrow:[93,78],
apos_wide:[93,78]
},
{
type:9, //tablice tymczasowe
regex:/^[A-Z][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[67,17],[130,17],[273,17],[329,17],[385,17],[441,17]], 
cpos_wide:[[66,17],[136,17],[279,17],[334,17],[389,17],[444,17]],
width:[1,1,1,1,1,1],
spos_narrow:[200.5,34.5],
spos_wide:[206.5,34.5],
},
{
type:9,
regex:/^[A-Z][0-9][0-9][0-9][0-9][A-Z]$/, 
cpos_narrow:[[67,17],[130,17],[273,17],[329,17],[385,17],[441,17]], 
cpos_wide:[[66,17],[136,17],[279,17],[334,17],[389,17],[444,17]],
width:[1,1,1,1,1,0],
spos_narrow:[200.5,34.5],
spos_wide:[206.5,34.5]
},
{
type:10, //tablice tymczasowe badawcze
regex:/[A-Z][0-9][0-9][0-9][0-9][A-Z]$/, 
cpos_narrow:[[67,17],[130,17],[223,17],[280,17],[337,17],[430,17]], 
cpos_wide:[[66,17],[136,17],[229,17],[284,17],[339,17],[422,17]], 
width:[1,1,1,1,1,1],
spos_narrow:[189,42],
spos_wide:[195,42],
},
{
type:11, //tablice dwurzędowe tymczasowe
regex:/[A-Z][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[75,17],[140,17],[36,117],[99,117],[162,117],[225,117]], 
cpos_wide:[[72,17],[144,17],[36,117],[99,117],[162,117],[225,117]],  
width:[1,1,1,1,1,1],
spos_narrow:[218.5,34.5],
spos_wide:[219.5,34.5],
},
{
type:11,
regex:/[A-Z][0-9][0-9][0-9][0-9][A-Z]$/, 
cpos_narrow:[[75,17],[140,17],[36,117],[98,117],[160,117],[222,117]],  
cpos_wide:[[72,17],[144,17],[36,117],[98,117],[160,117],[222,117]], 
width:[1,1,1,1,1,0],
spos_narrow:[218.5,34.5],
spos_wide:[219.5,34.5],
},
{
type:12, //tablice dwurzędowe tymczasowe badawcze
regex:/[A-Z][0-9][0-9][0-9][0-9][A-Z]$/, 
cpos_narrow:[[80,17],[147,17],[30,117],[93,117],[156,117],[226,117]], 
cpos_wide:[[72,17],[144,17],[28,117],[91,117],[154,117],[223,117]], 
width:[1,1,1,1,1,1],
spos_narrow:[248.5,42],
spos_wide:[233.5,42]
},
{
type:13, //tablice motocyklowe tymczasowe
regex:/^[A-Z][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[55,20],[95,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[55,20],[97,20],[18,85],[60,85],[102,85],[144,85]], 
width:[1,1,1,1,1,1],
spos_narrow:[130.5,18],
spos_wide:[131.5,18],
},
{
type:13,
regex:/^[A-Z][0-9][0-9][0-9][0-9][A-Z]$/, 
cpos_narrow:[[55,20],[95,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[55,20],[97,20],[18,85],[60,85],[102,85],[144,85]], 
width:[1,1,1,1,1,0],
spos_narrow:[130.5,18],
spos_wide:[131.5,18],
},
{
type:14, //tablice motocyklowe tymczasowe badawcze
regex:/^[A-Z][0-9][0-9][0-9][0-9][A-Z]$/, 
cpos_narrow:[[60,20],[100,20],[20,85],[58,85],[96,85],[140,85]], 
cpos_wide:[[55,20],[97,20],[20,85],[58,85],[96,85],[138,85]], 
width:[1,1,1,1,1,1],
spos_narrow:[152.5,35],
spos_wide:[145,35],
},
{
type:15, //tablice motorowerowe tymczasowe
regex:/^[A-Z][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[46,17.5],[74,17.5],[23,66.5],[49,66.5],[75,66.5],[101,66.5]], 
cpos_wide:[[46,17.5],[74,17.5],[23,66.5],[49,66.5],[75,66.5],[101,66.5]], 
width:[1,1,1,1,1,1],
spos_narrow:[88,8],
spos_wide:[88,8],
},
{
type:15,
regex:/^[A-Z][0-9][0-9][0-9][0-9][A-Z]$/, 
cpos_narrow:[[46,17.5],[74,17.5],[22,66.5],[47,66.5],[72,66.5],[97,66.5]], 
cpos_wide:[[46,17.5],[74,17.5],[22,66.5],[47,66.5],[72,66.5],[97,66.5]], 
width:[1,1,1,1,1,1],
spos_narrow:[88,8],
spos_wide:[88,8],
},
{
type:16, //tablice motorowerowe tymczasowe badawcze
regex:/^[A-Z][0-9][0-9][0-9][0-9][A-Z]$/, 
cpos_narrow:[[46,17.5],[74,17.5],[20,66.5],[45,66.5],[70,66.5],[99,66.5]], 
cpos_wide:[[46,17.5],[74,17.5],[17,66.5],[45,66.5],[73,66.5],[103,66.5]],  
width:[1,1,1,1,1,1],
spos_narrow:[103,17.5],
spos_wide:[102.5,17.5],
},
{
type:17, //tablice dyplomatyczne
regex:/^[A-Z][0-9][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[32,17],[129,17],[192,17],[255,17],[318,17],[381,17],[444,17]], 
cpos_wide:[[30,17],[132,17],[195,17],[258,17],[321,17],[384,17],[447,17]], 
width:[1,1,1,1,1,1,1],
spos_narrow:[95,42],
spos_wide:[99,42],
epos:[97,17],
},
{
type:18, //tablice dyplomatyczne 2-rz
regex:/^[A-Z][0-9][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[48,17],[150,17],[213,17],[36,117],[99,117],[162,117],[225,117]], 
cpos_wide:[[45,17],[153,17],[216,17],[36,117],[99,117],[162,117],[225,117]], 
width:[1,1,1,1,1,1,1],
spos_narrow:[113.5,42],
spos_wide:[117,42],
epos:[115.5,17],
},
{
type:19, //tablice dyplomatyczne motocyklowe
regex:/^[A-Z][0-9][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[24,20],[94,20],[136,20],[18,85],[60,85],[102,85],[144,85]], 
cpos_wide:[[24,20],[96,20],[138,20],[18,85],[60,85],[102,85],[144,85]], 
width:[1,1,1,1,1,1,1],
spos_narrow:[64,35],
spos_wide:[67,35],
epos:[66,15],
},
{
type:20, //tablice dyplomatycznie motorowerowe
regex:/^[A-Z][0-9][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_narrow:[[19,17.5],[79,17.5],[105,17.5],[23,66.5],[49,66.5],[75,66.5],[101,66.5]], 
cpos_wide:[[19,17.5],[79,17.5],[105,17.5],[23,66.5],[49,66.5],[75,66.5],[101,66.5]], 
width:[1,1,1,1,1,1,1],
spos_narrow:[50,17.5],
spos_wide:[50,17.5]
},
//zmniejszone tymczasowe
{
type:21,
regex:/^[A-Z][0-9][0-9][0-9]$/, 
cpos_narrow:[[54,17],[136,17],[187,17],[238,17]], 
cpos_wide:[[54,17],[136,17],[187,17],[238,17]], 
width:[0,1,1,1],
spos_narrow:[93,32.5],
spos_wide:[93,32.5]
},
{
type:21,
regex:/^[A-Z][0-9][0-9][A-Z]$/, 
cpos_narrow:[[54,17],[136,17],[187,17],[238,17]], 
cpos_wide:[[54,17],[136,17],[187,17],[238,17]], 
width:[0,1,1,0],
spos_narrow:[93,32.5],
spos_wide:[93,32.5]
},
{
type:21,
regex:/^[A-Z][0-9][A-Z][0-9]$/, 
cpos_narrow:[[54,17],[136,17],[187,17],[242,17]], 
cpos_wide:[[54,17],[136,17],[187,17],[242,17]],
width:[0,1,0,1],
spos_narrow:[93,32.5],
spos_wide:[93,32.5]
},
{
type:21,
regex:/^[A-Z][A-Z][0-9][0-9]$/, 
cpos_narrow:[[54,17],[136,17],[191,17],[242,17]], 
cpos_wide:[[54,17],[136,17],[191,17],[242,17]],
width:[0,0,1,1], 
spos_narrow:[93,32.5],
spos_wide:[93,32.5]
},
{
type:21,
regex:/^[A-Z][0-9][A-Z][A-Z]$/, 
cpos_narrow:[[54,17],[136,17],[185,17],[238,17]], 
cpos_wide:[[54,17],[136,17],[185,17],[238,17]], 
width:[0,1,0,0],
spos_narrow:[93,32.5],
spos_wide:[93,32.5]
},
{
type:21,
regex:/^[A-Z][A-Z][A-Z][0-9]$/, 
cpos_narrow:[[54,17],[136,17],[189,17],[242,17]], 
cpos_wide:[[54,17],[136,17],[189,17],[242,17]], 
width:[0,0,0,1],
spos_narrow:[93,32.5],
spos_wide:[93,32.5]
},
{
type:21,
regex:/^[A-Z][A-Z][0-9][A-Z]$/, 
cpos_narrow:[[54,17],[136,17],[189,17],[238,17]], 
cpos_wide:[[54,17],[136,17],[189,17],[238,17]], 
width:[0,0,1,0],
spos_narrow:[93,32.5],
spos_wide:[93,32.5]
},
//profesjonalne
{
type:22,
regex:/^[A-Z][0-9][0-9][0-9][0-9]P[0-9][0-9]$/, 
cpos_narrow:[[60,17],[117,17],[170,17],[248,17],[301,17],[354,17],[411,17],[464,17]], 
cpos_wide:[[60,17],[117,17],[170,17],[248,17],[301,17],[354,17],[411,17],[464,17]], 
width:[0,1,1,1,1,0,1,1],
spos_narrow:[221.5,42], 
spos_wide:[222,42],
epos:[223.5,17], 
},
{
type:22,
regex:/^[A-Z][0-9][0-9][0-9][0-9]P[0-9][A-Z]$/, 
cpos_narrow:[[55,17],[112,17],[165,17],[243,17],[296,17],[349,17],[406,17],[459,17]], 
cpos_wide:[[55,17],[112,17],[165,17],[243,17],[296,17],[349,17],[406,17],[459,17]], 
width:[0,1,1,1,1,0,1,0],
spos_narrow:[216.5,42], 
spos_wide:[217,42],
epos:[218.5,17], 
},
{
type:23,
regex:/^[A-Z][0-9][0-9][0-9][0-9]P[0-9][0-9]$/, 
cpos_narrow:[[80,17],[137,17],[190,17],[23,117],[76,117],[129,117],[186,117],[239,117]], 
cpos_wide:[[80,17],[137,17],[190,17],[23,117],[76,117],[129,117],[186,117],[239,117]],
width:[0,1,1,1,1,0,1,1],
spos_narrow:[256.5,42],
spos_wide:[256,42],
epos:[258.5,17],
},
{
type:23,
regex:/^[A-Z][0-9][0-9][0-9][0-9]P[0-9][A-Z]$/, 
cpos_narrow:[[80,17],[137,17],[190,17],[23,117],[76,117],[129,117],[186,117],[239,117]], 
cpos_wide:[[80,17],[137,17],[190,17],[23,117],[76,117],[129,117],[186,117],[239,117]], 
width:[0,1,1,1,1,0,1,0],
spos_narrow:[256.5,42],
spos_wide:[256,42],
epos:[258.5,17],
},
{
type:24,
regex:/^[A-Z][0-9][0-9][0-9][0-9]P[0-9][0-9]$/, 
cpos_narrow:[[50,20],[84,20],[118,20],[13,85],[47,85],[81,85],[115,85],[149,85]], 
cpos_wide:[[50,20],[84,20],[118,20],[13,85],[47,85],[81,85],[115,85],[149,85]], 
width:[0,1,1,1,1,0,1,1],
spos_narrow:[155.5,32.5],
spos_wide:[156,32.5],
epos:[157.5,15],
},
{
type:24,
regex:/^[A-Z][0-9][0-9][0-9][0-9]P[0-9][A-Z]$/, 
cpos_narrow:[[50,20],[84,20],[118,20],[13,85],[47,85],[81,85],[115,85],[149,85]], 
cpos_wide:[[50,20],[84,20],[118,20],[13,85],[47,85],[81,85],[115,85],[149,85]], 
width:[0,1,1,1,1,0,1,0],
spos_narrow:[155.5,32.5],
spos_wide:[156,32.5],
epos:[157.5,15],
},
{
type:25,
regex:/^[A-Z][0-9][0-9][0-9][0-9]P[0-9][0-9]$/, 
cpos_narrow:[[43,17.5],[69,17.5],[91,17.5],[12,66.5],[34,66.5],[56,66.5],[82,66.5],[104,66.5]], 
cpos_wide:[[43,17.5],[69,17.5],[91,17.5],[12,66.5],[34,66.5],[56,66.5],[82,66.5],[104,66.5]],
width:[1,1,1,1,1,1,1,1],
spos_narrow:[111,32.5],
spos_wide:[112,32.5]
},
{
type:25,
regex:/^[A-Z][0-9][0-9][0-9][0-9]P[0-9][A-Z]$/, 
cpos_narrow:[[43,17.5],[69,17.5],[91,17.5],[12,66.5],[34,66.5],[56,66.5],[82,66.5],[104,66.5]], 
cpos_wide:[[43,17.5],[69,17.5],[91,17.5],[12,66.5],[34,66.5],[56,66.5],[82,66.5],[104,66.5]],
width:[1,1,1,1,1,1,1,1],
spos_narrow:[111,32.5],
spos_wide:[112,32.5]
},
{
type:101, //czarne 1-rz 4 cyfry
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[20,20],[92,20],[164,20],[274,20],[335,20],[396,20],[457,20]], 
},
{
type:101, //czarne 1-rz 3 cyfry 1 litera
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][A-Z^AMW]$/, 
cpos_wide:[[15,20],[87,20],[159,20],[267,20],[327,20],[387,20],[451,20]], 
},
{
type:102, //czarne 2-rz 4 cyfry
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[25,20],[100,20],[175,20],[26,130],[91,130],[156,130],[221,130]], 
},
{
type:102, //czarne 2-rz 3 cyfry 1 litera
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][A-Z]$/, 
cpos_wide:[[20,20],[95,20],[170,20],[20,130],[83,130],[146,130],[216,130]], 
},
{
type:103, //czarne motocyklowe 4 cyfry
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[14,20],[63,20],[112,20],[15,85],[59,85],[103,85],[147,85]], 
},
{
type:103, //czarne motocyklowe 3 cyfry 1 litera
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][A-Z]$/, 
cpos_wide:[[13,20],[61,20],[110,20],[12,85],[55,85],[97,85],[145,85]], 
},
{
type:104, //czarne motorowerowe 4 cyfry
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[24,17.5],[60,17.5],[96,17.5],[20,67.5],[48,67.5],[76,67.5],[104,67.5]], 
},
{
type:104, //czarne motorowerowe 3 cyfry 1 litera
regex:/^[A-Z][A-Z][A-Z][0-9][0-9][0-9][A-Z]$/, 
cpos_wide:[[24,17.5],[60,17.5],[96,17.5],[20,67.5],[48,67.5],[76,67.5],[102,67.5]], 
},
{
type:105, //tymczasowe 1-rz
regex:/^[A-Z][0-9][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[20,20],[132,20],[193,20],[274,20],[335,20],[396,20],[457,20]], 
},
{
type:106, //tymczasowe 2-rz
regex:/^[A-Z][0-9][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[26,20],[127,20],[191,20],[26,130],[91,130],[156,130],[221,130]], 
},
{
type:107, //tymczasowe motocyklowe
regex:/^[A-Z][0-9][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[15,20],[75,20],[119,20],[15,85],[59,85],[103,85],[147,85]], 
},
{
type:117, //tymczasowe motorowerowe
regex:/^[A-Z][0-9][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[24,17.5],[68,17.5],[96,17.5],[20,67.5],[48,67.5],[76,67.5],[104,67.5]], 
},
{
type:108, //próbne 1-rz
regex:/^X[A-Z][A-Z][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[20,20],[92,20],[164,20],[274,20],[335,20],[396,20],[457,20]], 
},
{
type:109, //próbne 2-rz
regex:/^X[A-Z][A-Z][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[25,20],[100,20],[175,20],[26,130],[91,130],[156,130],[221,130]], 
},
{
type:110, //próbne motocyklowe
regex:/^X[A-Z][A-Z][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[14,20],[63,20],[112,20],[15,85],[59,85],[103,85],[147,85]], 
},
{
type:118, //próbne motorowerowe 4 cyfry
regex:/^X[A-Z][A-Z][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[24,17.5],[60,17.5],[96,17.5],[20,67.5],[48,67.5],[76,67.5],[104,67.5]], 
},
{
type:111, //cudzoziemskie 1-rz
regex:/^I[A-Z][A-Z][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[20,20],[92,20],[164,20],[274,20],[335,20],[396,20],[457,20]], 
},
{
type:112, //cudzoziemskie 2-rz
regex:/^I[A-Z][A-Z][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[25,20],[100,20],[175,20],[26,130],[91,130],[156,130],[221,130]], 
},
{
type:113, //cudzoziemskie motocyklowe
regex:/^I[A-Z][A-Z][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[14,20],[63,20],[112,20],[15,85],[59,85],[103,85],[147,85]], 
},
{
type:114, //dyplomatyczne 1-rz
regex:/^[A-Z][A-Z][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[15,20],[87,20],[199,20],[260,20],[336,20],[397,20],[458,20]], 
},
{
type:115, //dyplomatyczne 2-rz
regex:/^[A-Z][A-Z][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[21,20],[97,20],[203,20],[267,20],[57,130],[122,130],[187,130]], 
},
{
type:116, //dyplomatyczne motocyklowe
regex:/^[A-Z][A-Z][0-9][0-9][0-9][0-9][0-9]$/, 
cpos_wide:[[15,20],[62,20],[139,20],[177,20],[35,85],[79,85],[123,85]], 
},
];

function generate()
{
var t = parseInt(document.getElementById("typ").value);
var t1976 = parseInt(document.getElementById("typ_1976").value);
var n = (document.getElementById("numer").value).replace(/\s/g, "").toUpperCase();
var canvas = document.getElementById("tablica");
var ctx = canvas.getContext("2d");
var elem_name = "";
var format_correct = false;

var cert_number = "Z/00/000/22";
var manufacturer_name = "PTR";

var scaling = document.getElementById("scaling").value / 100.0;

ctx.imageSmoothingEnabled = true;

ctx.clearRect(0, 0, 1040, 460);

//nieaktualne wzory
if((document.getElementById("wzor_2000").checked || document.getElementById("wzor_2002").checked || document.getElementById("wzor_2006").checked) && t >= 51 && t <= 55) //tablice zielone wydaje się od 01.2020
{
	document.getElementById("not-yet-issued").style.display="inline-block";
	if(document.documentElement.lang == "pl") document.getElementById("not-yet-issued").innerText = "Błędny wzór tablicy: Tablice zielone wydawane są od stycznia 2020.";
	else if(document.documentElement.lang == "en") document.getElementById("not-yet-issued").innerText = "Incorrect plate style: Green plates are issued since January 2020.";
}
else if((document.getElementById("wzor_2000").checked || document.getElementById("wzor_2002").checked || document.getElementById("wzor_2006").checked) && (t==3 || t==21 || t==53)) //tablice zmniejszone wydaje się od 07.2018
{
	document.getElementById("not-yet-issued").style.display="inline-block";
	if(document.documentElement.lang == "pl") document.getElementById("not-yet-issued").innerText = "Błędny wzór tablicy: Tablice zmniejszone wydawane są od lipca 2018.";
	else if(document.documentElement.lang == "en") document.getElementById("not-yet-issued").innerText = "Incorrect plate style: Reduced size plates are issued since July 2018.";
}
else if((document.getElementById("wzor_2000").checked || document.getElementById("wzor_2002").checked || document.getElementById("wzor_2006").checked) && t>= 22 && t <= 25) //tablice profesjonalne wydaje się od 07.2019
{
	document.getElementById("not-yet-issued").style.display="inline-block";
	if(document.documentElement.lang == "pl") document.getElementById("not-yet-issued").innerText = "Błędny wzór tablicy: Tablice profesjonalne wydawane są od lipca 2019.";
	else if(document.documentElement.lang == "en") document.getElementById("not-yet-issued").innerText = "Incorrect plate style: Professional plates are issued since July 2019.";
}
else if(document.getElementById("wzor_2020").checked && (t==10 || t==12 || t==14 || t==16)) //tablice badawcze wycofano w 07.2019
{
	document.getElementById("not-yet-issued").style.display="inline-block";
	if(document.documentElement.lang == "pl") document.getElementById("not-yet-issued").innerText = "Błędny wzór tablicy: Tablice tymczasowe badawcze nie są już wydawane od lipca 2019.";
	else if(document.documentElement.lang == "en") document.getElementById("not-yet-issued").innerText = "Incorrect plate style: Temporary testing plates are no more issued since July 2019.";
}
else if((document.getElementById("wzor_2000").checked || document.getElementById("wzor_2002").checked || document.getElementById("wzor_2006").checked || document.getElementById("wzor_2018").checked) && (t == 26 || t == 27)) //tablice zabytkowe zmniejszone i motorowerowe wydaje się od 09.2022 / 05.2023
{
	document.getElementById("not-yet-issued").style.display="inline-block";
	if(document.documentElement.lang == "pl") document.getElementById("not-yet-issued").innerText = "Błędny wzór tablicy: Tablice zabytkowe motorowerowe i zmniejszone wydawane są od września 2022 / maja 2023.";
	else if(document.documentElement.lang == "en") document.getElementById("not-yet-issued").innerText = "Incorrect plate style: Reduced size & moped classic plates are issued since September 2022 / May 2023.";
}
else
{
	document.getElementById("not-yet-issued").style.display="none";
}

if(document.getElementById("wzor_1976").checked == false) setCanvas(t, scaling);
else setCanvas(t1976, scaling);

if(document.getElementById("wzor_1976").checked == false)
{
for(var i = 0; i < zasoby.length; i++)
{
if(zasoby[i].type == t%50 && zasoby[i].regex.test(n))
{
format_correct = true;
if(document.getElementById("wzor_2000").checked || document.getElementById("wzor_2002").checked) ctx.drawImage(document.getElementById("tab"+t+"f"), 0, 0, scaling*document.getElementById("tab"+t).width, scaling*document.getElementById("tab"+t).height);
else ctx.drawImage(document.getElementById("tab"+t), 0, 0, scaling*document.getElementById("tab"+t).width, scaling*document.getElementById("tab"+t).height);

for(var j = 0; j < zasoby[i].cpos_narrow.length; j++)
{
if(document.getElementById("wzor_2020").checked || document.getElementById("wzor_2018").checked) //dla wzoru od 2018, czcionka wyłącznie zwężona
{
if(t%50 <= 3)      elem_name = "s"+n[j]  + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t%50 == 4) elem_name = "m"+n[j]  + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t%50 == 5) elem_name = "r"+n[j];
else if(t == 6)    elem_name = "s"+n[j]  + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 7)    elem_name = "s"+n[j]  + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 8)    elem_name = "m"+n[j]  + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 9)    elem_name = "cs"+n[j] + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 10)   elem_name = "cs"+n[j] + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 11)   elem_name = "cs"+n[j] + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 12)   elem_name = "cs"+n[j] + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 13)   elem_name = "cm"+n[j] + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 14)   elem_name = "cm"+n[j] + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 15)   elem_name = "cr"+n[j];
else if(t == 16)   elem_name = "cr"+n[j];
else if(t == 17)   elem_name = "bs"+n[j] + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 18)   elem_name = "bs"+n[j] + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 19)   elem_name = "bm"+n[j] + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 20)   elem_name = "br"+n[j];
else if(t == 21)   elem_name = "cs"+n[j] + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 22)   elem_name = "zs"+n[j] + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 23)   elem_name = "zs"+n[j] + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 24)   elem_name = "zm"+n[j] + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 25)   elem_name = "zr"+n[j];
else if(t == 26)   elem_name = "s"+n[j]  + ((n.charCodeAt(j) >= 48 && n.charCodeAt(j) <= 57) ? "" : "_");
else if(t == 27)   elem_name = "r"+n[j];

ctx.drawImage(document.getElementById(elem_name), 2*scaling*(zasoby[i].cpos_narrow[j][0])-(5*scaling), 2*scaling*(zasoby[i].cpos_narrow[j][1])-(5*scaling), scaling*document.getElementById(elem_name).width, scaling*document.getElementById(elem_name).height);
}
if(document.getElementById("wzor_2000").checked || document.getElementById("wzor_2002").checked || document.getElementById("wzor_2006").checked) //dla wzoru od 2002, czcionka szeroka lub zwężona
{
if(t%50 <= 3)      elem_name = "s"+n[j]  + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t%50 == 4) elem_name = "m"+n[j]  + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t%50 == 5) elem_name = "r"+n[j];
else if(t == 6)    elem_name = "s"+n[j]  + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 7)    elem_name = "s"+n[j]  + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 8)    elem_name = "m"+n[j]  + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 9)    elem_name = "cs"+n[j] + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 10)   elem_name = "cs"+n[j] + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 11)   elem_name = "cs"+n[j] + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 12)   elem_name = "cs"+n[j] + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 13)   elem_name = "cm"+n[j] + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 14)   elem_name = "cm"+n[j] + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 15)   elem_name = "cr"+n[j];
else if(t == 16)   elem_name = "cr"+n[j];
else if(t == 17)   elem_name = "bs"+n[j] + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 18)   elem_name = "bs"+n[j] + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 19)   elem_name = "bm"+n[j] + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 20)   elem_name = "br"+n[j];
else if(t == 21)   elem_name = "cs"+n[j] + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 22)   elem_name = "zs"+n[j] + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 23)   elem_name = "zs"+n[j] + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 24)   elem_name = "zm"+n[j] + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 25)   elem_name = "zr"+n[j];
else if(t == 26)   elem_name = "s"+n[j]  + ((zasoby[i].width[j] == 0) ? "_" : "");
else if(t == 27) elem_name = "r"+n[j];

if(document.getElementById("wzor_2000").checked && (n.charAt(j) == "M" || n.charAt(j) == "W")) elem_name += "__";

ctx.drawImage(document.getElementById(elem_name), 2*scaling*(zasoby[i].cpos_wide[j][0])-(5*scaling), 2*scaling*(zasoby[i].cpos_wide[j][1])-(5*scaling), scaling*document.getElementById(elem_name).width, scaling*document.getElementById(elem_name).height);

}
}

var offset_y_mot = 0;
if((t == 4 || t == 8 || t == 19 || t == 54) && !document.getElementById("wzor_2020").checked) offset_y_mot = 7.5;

if(document.getElementById("wzor_2020").checked || document.getElementById("wzor_2018").checked) //nalepka legalizacyjna
{
if((t >= 1 && t <= 8) || t == 10 || t == 12 || t == 14 || t == 16 || (t >= 17 && t <= 20) || (t >= 22 && t <= 27))
{
ctx.drawImage(document.getElementById("nakl"), 2*scaling*zasoby[i].spos_narrow[0], 2*scaling*(zasoby[i].spos_narrow[1]-offset_y_mot), scaling*document.getElementById("nakl").width, scaling*document.getElementById("nakl").height);
}
if(t >= 51 && t <= 55)
{
if(document.getElementById("w_nakl_e").checked) ctx.drawImage(document.getElementById("nakle"), 2*scaling*zasoby[i].spos_narrow[0], 2*scaling*(zasoby[i].spos_narrow[1]-offset_y_mot), scaling*document.getElementById("nakle").width, scaling*document.getElementById("nakle").height);
else ctx.drawImage(document.getElementById("naklh"), 2*scaling*zasoby[i].spos_narrow[0], 2*scaling*(zasoby[i].spos_narrow[1]-offset_y_mot), scaling*document.getElementById("naklh").width, scaling*document.getElementById("naklh").height);
}
if(t == 9 || t == 11 || t == 13 || t == 15 || t == 21)
{
ctx.drawImage(document.getElementById("naklt"), 2*scaling*zasoby[i].spos_narrow[0], 2*scaling*zasoby[i].spos_narrow[1], scaling*document.getElementById("naklt").width, scaling*document.getElementById("naklt").height);
}
}
else
{
if((t >= 1 && t <= 8) || t == 10 || t == 12 || t == 14 || t == 16 || (t >= 17 && t <= 20) || (t >= 22 && t <= 27))
{
ctx.drawImage(document.getElementById("nakl"), 2*scaling*zasoby[i].spos_wide[0], 2*scaling*(zasoby[i].spos_wide[1]-offset_y_mot), scaling*document.getElementById("nakl").width, scaling*document.getElementById("nakl").height);
}
if(t >= 51 && t <= 55)
{
if(document.getElementById("w_nakl_e").checked) ctx.drawImage(document.getElementById("nakle"), 2*scaling*zasoby[i].spos_wide[0], 2*scaling*(zasoby[i].spos_wide[1]-offset_y_mot), scaling*document.getElementById("nakle").width, scaling*document.getElementById("nakle").height);
else ctx.drawImage(document.getElementById("naklh"), 2*scaling*zasoby[i].spos_narrow[0], 2*scaling*(zasoby[i].spos_wide[1]-offset_y_mot), scaling*document.getElementById("naklh").width, scaling*document.getElementById("naklh").height);
}
if(t == 9 || t == 11 || t == 13 || t == 15 || t == 21)
{
if(document.getElementById("wzor_2000").checked) ctx.drawImage(document.getElementById("naklt2000"), 2*scaling*zasoby[i].spos_wide[0], 2*scaling*zasoby[i].spos_wide[1], scaling*document.getElementById("naklt2000").width, scaling*document.getElementById("naklt2000").height);
else ctx.drawImage(document.getElementById("naklt"), 2*scaling*zasoby[i].spos_wide[0], 2*scaling*zasoby[i].spos_wide[1], scaling*document.getElementById("naklt").width, scaling*document.getElementById("naklt").height);
}
}

if(document.getElementById("wzor_2020").checked || document.getElementById("wzor_2018").checked)
{
if(t == 6 || t == 7)
{
ctx.drawImage(document.getElementById("zabs"), 2*scaling*(zasoby[i].apos_narrow[0])-(5*scaling), 2*scaling*(zasoby[i].apos_narrow[1])-(5*scaling), scaling*document.getElementById("zabs").width, scaling*document.getElementById("zabs").height);
}
if(t == 8)
{
ctx.drawImage(document.getElementById("zabm"), 2*scaling*(zasoby[i].apos_narrow[0])-(5*scaling), 2*scaling*(zasoby[i].apos_narrow[1])-(5*scaling), scaling*document.getElementById("zabm").width, scaling*document.getElementById("zabm").height);
}
if(t == 27)
{
ctx.drawImage(document.getElementById("zabr"), 2*scaling*(zasoby[i].apos_wide[0])-(5*scaling), 2*scaling*(zasoby[i].apos_wide[1])-(5*scaling), scaling*document.getElementById("zabr").width, scaling*document.getElementById("zabr").height);
}
if(t == 26)
{
ctx.drawImage(document.getElementById("zabsg"), 2*scaling*(zasoby[i].epos[0]-5.5), 2*scaling*81.5, scaling*document.getElementById("zabsg").width, scaling*document.getElementById("zabsg").height);
}
}
else
{
if(t == 6 || t == 7)
{
if(document.getElementById("wzor_2000").checked || document.getElementById("wzor_2002").checked) ctx.drawImage(document.getElementById("zabs2000"), 2*scaling*(zasoby[i].apos_wide[0])-(5*scaling), 2*scaling*(zasoby[i].apos_wide[1])-(5*scaling), scaling*document.getElementById("zabs2000").width, scaling*document.getElementById("zabs2000").height);
else ctx.drawImage(document.getElementById("zabs"), 2*scaling*(zasoby[i].apos_wide[0])-(5*scaling), 2*scaling*(zasoby[i].apos_wide[1])-(5*scaling), scaling*document.getElementById("zabs").width, scaling*document.getElementById("zabs").height);
}
if(t == 8)
{
if(document.getElementById("wzor_2000").checked || document.getElementById("wzor_2002").checked) ctx.drawImage(document.getElementById("zabm2000"), 2*scaling*(zasoby[i].apos_wide[0])-(5*scaling), 2*scaling*(zasoby[i].apos_wide[1])-(5*scaling), scaling*document.getElementById("zabm2000").width, scaling*document.getElementById("zabm2000").height);
else ctx.drawImage(document.getElementById("zabm"), 2*scaling*(zasoby[i].apos_wide[0])-(5*scaling), 2*scaling*(zasoby[i].apos_wide[1])-(5*scaling), scaling*document.getElementById("zabm").width, scaling*document.getElementById("zabm").height);
}
if(t == 27)
{
ctx.drawImage(document.getElementById("zabr"), 2*scaling*(zasoby[i].apos_wide[0])-(5*scaling), 2*scaling*(zasoby[i].apos_wide[1])-(5*scaling), scaling*document.getElementById("zabr").width, scaling*document.getElementById("zabr").height);
}
}

if(document.getElementById("wzor_2020").checked)
{
	
if(!(t==5 || (t>= 9 && t<=16) || t==20 || t==21 || t==25 || t==55))
ctx.drawImage(document.getElementById("orzel"), 2*scaling*zasoby[i].epos[0], 2*scaling*zasoby[i].epos[1], scaling*document.getElementById("orzel").width, scaling*document.getElementById("orzel").height);
//oznaczenie certyfikatu
ctx.fillStyle = "#00000044";
ctx.textAlign = "left";
ctx.font = 2*scaling*4 + "px Arial,sans-serif";

var offset = 0; //dla tymczasowych przesunąć drugi nadruk na środek naklejki
if((t>= 9 && t<=16) || t==21) offset = 16;

if(t==1 || t==6 || t==9 || t==10 || t==17 || t==22 || t==51) //1-rz
{
	ctx.fillText(cert_number, 2*scaling*54, canvas.height-(2*scaling*9));
	ctx.textAlign = "center";
	ctx.fillText((manufacturer_name+" "+cert_number), 2*scaling*(zasoby[i].spos_narrow[0]+9+offset), canvas.height-(2*scaling*9));
}
else if(t==2 || t==7 || t==11 || t==12 || t==18 || t==23 || t==52)
{
	ctx.fillText(cert_number, 2*scaling*18, canvas.height-(2*scaling*9));
	ctx.textAlign = "center";
	ctx.fillText((manufacturer_name+" "+cert_number), 2*scaling*(zasoby[i].spos_narrow[0]+9+offset), canvas.height-(2*scaling*9));

}
else if(t==3 || t==26 || t==21 || t==53)
{
	ctx.fillText(cert_number, 2*scaling*54, canvas.height-(2*scaling*9));
	ctx.textAlign = "center";
	ctx.fillText((manufacturer_name+" "+cert_number), 2*scaling*(zasoby[i].spos_narrow[0]+9+offset), canvas.height-(2*scaling*9));

}
else if(t==4 || t==8 || t==13 || t==14 || t==19 || t==24 || t==54)
{
	ctx.fillText(cert_number, 2*scaling*18, canvas.height-(2*scaling*9));
	ctx.textAlign = "center";
	ctx.fillText((manufacturer_name+" "+cert_number), 2*scaling*(zasoby[i].spos_narrow[0]+9+offset), canvas.height-(2*scaling*9));

}
else if(t==5 || t==27 || t==15 || t==16 || t==20 || t==25 || t==55)
{
	ctx.textAlign = "center";
	ctx.fillText((manufacturer_name+" "+cert_number), (canvas.width/2.0), canvas.height-(2*scaling*9));

}

}

}
}
}
else
{
for(var i = 0; i < zasoby.length; i++)
{
if(zasoby[i].type == t1976 && zasoby[i].regex.test(n))
{
format_correct = true;
ctx.drawImage(document.getElementById("tab"+t1976), 0, 0, scaling*document.getElementById("tab"+t1976).width, scaling*document.getElementById("tab"+t1976).height);

//oddzielnie ustal położenia znaków dla tablic 1976
var new_cpos_x = [];
var letterLoc = get1976LetterLocations(t1976, n[0], n[1], n[2]);

if(t1976 == 101 || t1976 == 108 || t1976 == 111) //1-rzędowe
{
//pierwszy znak
new_cpos_x[0] = letterLoc[0];
//drugi znak
new_cpos_x[1] = letterLoc[1];
//trzeci znak
new_cpos_x[2] = letterLoc[2];
//pozostałe znaki te same
new_cpos_x[3] = zasoby[i].cpos_wide[3][0];
new_cpos_x[4] = zasoby[i].cpos_wide[4][0];
new_cpos_x[5] = zasoby[i].cpos_wide[5][0];
//dla liter A, M i W zmodyfikować położenie
var llm = 0;
if(n[6] == "A" || n[6] == "M" || n[6] == "W") llm = get1976LetterWidth(n[6])-54;
new_cpos_x[6] = zasoby[i].cpos_wide[6][0] - llm;
}
if(t1976 == 102 || t1976 == 109 || t1976 == 112) //2-rzędowe
{
var lm = 0;
if(n[6] >= "A" && n[6] <= "Z") lm = 6;
	
//pierwszy znak
new_cpos_x[0] = letterLoc[0] - lm;
//drugi znak
new_cpos_x[1] = letterLoc[1] - lm;
//trzeci znak
new_cpos_x[2] = letterLoc[2] - lm;
//pozostałe znaki te same
new_cpos_x[3] = zasoby[i].cpos_wide[3][0];
new_cpos_x[4] = zasoby[i].cpos_wide[4][0];
new_cpos_x[5] = zasoby[i].cpos_wide[5][0];
//dla liter A, M i W zmodyfikować położenie
var llm = 0;
if(n[6] == "A" || n[6] == "M" || n[6] == "W") llm = get1976LetterWidth(n[6])-54;
new_cpos_x[6] = zasoby[i].cpos_wide[6][0] - llm;
}
if(t1976 == 103 || t1976 == 110 || t1976 == 113) //motocyklowe
{
var lm = 0;
if(n[6] >= "A" && n[6] <= "Z") lm = 2;
//pierwszy znak
new_cpos_x[0] = letterLoc[0] - lm;
//drugi znak
new_cpos_x[1] = letterLoc[1] - lm;
//trzeci znak
new_cpos_x[2] = letterLoc[2] - lm;
//pozostałe znaki te same
new_cpos_x[3] = zasoby[i].cpos_wide[3][0];
new_cpos_x[4] = zasoby[i].cpos_wide[4][0];
new_cpos_x[5] = zasoby[i].cpos_wide[5][0];
//dla liter A, M i W zmodyfikować położenie
var llm = 0;
if(n[6] == "A" || n[6] == "M" || n[6] == "W") llm = get1976LetterWidthMot(n[6])-32;
new_cpos_x[6] = zasoby[i].cpos_wide[6][0] - llm;
}
if(t1976 == 104 || t1976 == 118) //motorowerowe
{
//pierwszy znak
new_cpos_x[0] = letterLoc[0];
//drugi znak
new_cpos_x[1] = letterLoc[1];
//trzeci znak
new_cpos_x[2] = letterLoc[2];
//pozostałe znaki te same
new_cpos_x[3] = zasoby[i].cpos_wide[3][0];
new_cpos_x[4] = zasoby[i].cpos_wide[4][0];
new_cpos_x[5] = zasoby[i].cpos_wide[5][0];
//dla liter A, M i W zmodyfikować położenie
var llm = 0;
if(n[6] == "A" || n[6] == "M" || n[6] == "W") llm = get1976LetterWidthMop(n[6])-20;
new_cpos_x[6] = zasoby[i].cpos_wide[6][0] - llm;
}
if(t1976 == 105) //tymczasowe 1-rz
{
//pierwszy znak
var llm = (get1976LetterWidth(n[0])-54)/2 + get1976LetterOffset(n[0]);
new_cpos_x[0] = zasoby[i].cpos_wide[0][0] - llm;
new_cpos_x[1] = zasoby[i].cpos_wide[1][0];
new_cpos_x[2] = zasoby[i].cpos_wide[2][0];
new_cpos_x[3] = zasoby[i].cpos_wide[3][0];
new_cpos_x[4] = zasoby[i].cpos_wide[4][0];
new_cpos_x[5] = zasoby[i].cpos_wide[5][0];
new_cpos_x[6] = zasoby[i].cpos_wide[6][0];
}
if(t1976 == 106) //tymczasowe 2-rz
{
//pierwszy znak
var llm = (get1976LetterWidth(n[0])-54)/2 + get1976LetterOffset(n[0]);
new_cpos_x[0] = zasoby[i].cpos_wide[0][0] - llm;
new_cpos_x[1] = zasoby[i].cpos_wide[1][0];
new_cpos_x[2] = zasoby[i].cpos_wide[2][0];
new_cpos_x[3] = zasoby[i].cpos_wide[3][0];
new_cpos_x[4] = zasoby[i].cpos_wide[4][0];
new_cpos_x[5] = zasoby[i].cpos_wide[5][0];
new_cpos_x[6] = zasoby[i].cpos_wide[6][0];
}
if(t1976 == 107) //tymczasowe motocyklowe
{
//pierwszy znak
var llm = (get1976LetterWidthMot(n[0])-32)/2 + get1976LetterOffsetMot(n[0]);
new_cpos_x[0] = zasoby[i].cpos_wide[0][0] - llm;
new_cpos_x[1] = zasoby[i].cpos_wide[1][0];
new_cpos_x[2] = zasoby[i].cpos_wide[2][0];
new_cpos_x[3] = zasoby[i].cpos_wide[3][0];
new_cpos_x[4] = zasoby[i].cpos_wide[4][0];
new_cpos_x[5] = zasoby[i].cpos_wide[5][0];
new_cpos_x[6] = zasoby[i].cpos_wide[6][0];
}
if(t1976 == 117) //tymczasowe motorowerowe
{
//pierwszy znak
var llm = (get1976LetterWidthMop(n[0])-20)/2 + get1976LetterOffsetMop(n[0]);
new_cpos_x[0] = zasoby[i].cpos_wide[0][0] - llm;
new_cpos_x[1] = zasoby[i].cpos_wide[1][0];
new_cpos_x[2] = zasoby[i].cpos_wide[2][0];
new_cpos_x[3] = zasoby[i].cpos_wide[3][0];
new_cpos_x[4] = zasoby[i].cpos_wide[4][0];
new_cpos_x[5] = zasoby[i].cpos_wide[5][0];
new_cpos_x[6] = zasoby[i].cpos_wide[6][0];
}
if(t1976 == 114) //dyplomatyczna 1-rz.
{
//pierwszy znak
new_cpos_x[0] = letterLoc[0];
new_cpos_x[1] = letterLoc[1];
new_cpos_x[2] = zasoby[i].cpos_wide[2][0];
new_cpos_x[3] = zasoby[i].cpos_wide[3][0];
new_cpos_x[4] = zasoby[i].cpos_wide[4][0];
new_cpos_x[5] = zasoby[i].cpos_wide[5][0];
new_cpos_x[6] = zasoby[i].cpos_wide[6][0];
}
if(t1976 == 115) //dyplomatyczna 2-rz.
{
//pierwszy znak
new_cpos_x[0] = letterLoc[0];
new_cpos_x[1] = letterLoc[1];
new_cpos_x[2] = zasoby[i].cpos_wide[2][0];
new_cpos_x[3] = zasoby[i].cpos_wide[3][0];
new_cpos_x[4] = zasoby[i].cpos_wide[4][0];
new_cpos_x[5] = zasoby[i].cpos_wide[5][0];
new_cpos_x[6] = zasoby[i].cpos_wide[6][0];
}
if(t1976 == 116) //dyplomatyczna motocyklowa
{
//pierwszy znak
new_cpos_x[0] = letterLoc[0];
new_cpos_x[1] = letterLoc[1];
new_cpos_x[2] = zasoby[i].cpos_wide[2][0];
new_cpos_x[3] = zasoby[i].cpos_wide[3][0];
new_cpos_x[4] = zasoby[i].cpos_wide[4][0];
new_cpos_x[5] = zasoby[i].cpos_wide[5][0];
new_cpos_x[6] = zasoby[i].cpos_wide[6][0];
}

for(var j = 0; j < zasoby[i].cpos_wide.length; j++)
{
if(t1976 == 101) elem_name = "bs"+n[j];
if(t1976 == 102) elem_name = "bs"+n[j];
if(t1976 == 103) elem_name = "bm"+n[j];
if(t1976 == 104) elem_name = "br"+n[j];
if(t1976 == 105) elem_name = "ys"+n[j];
if(t1976 == 106) elem_name = "ys"+n[j];
if(t1976 == 107) elem_name = "ym"+n[j];
if(t1976 == 108) elem_name = "bs"+n[j];
if(t1976 == 109) elem_name = "bs"+n[j];
if(t1976 == 110) elem_name = "bm"+n[j];
if(t1976 == 111) elem_name = "bs"+n[j];
if(t1976 == 112) elem_name = "bs"+n[j];
if(t1976 == 113) elem_name = "bm"+n[j];
if(t1976 == 114) elem_name = "bs"+n[j];
if(t1976 == 115) elem_name = "bs"+n[j];
if(t1976 == 116) elem_name = "bm"+n[j];
if(t1976 == 117) elem_name = "yr"+n[j];
if(t1976 == 118) elem_name = "br"+n[j];
if(n[j] == "A" || n[j] == "M" || n[j] == "W") elem_name += "____";

ctx.drawImage(document.getElementById(elem_name), 2*scaling*(new_cpos_x[j])-(5*scaling), 2*scaling*(zasoby[i].cpos_wide[j][1])-(5*scaling), scaling*document.getElementById(elem_name).width, scaling*document.getElementById(elem_name).height);
}
}
}
}

if(!format_correct) document.getElementById("format-incorrect").style.display="inline-block";
else document.getElementById("format-incorrect").style.display="none";

}