var DiasSemana = [
   {
      "Valor": "0",
      "Dia": "Todos"
   },
   {
      "Valor": "Lunes",
      "Dia": "Lunes"
   },
   {
      "Valor": "Martes",
      "Dia": "Martes"
   },
   {
      "Valor": "Miercoles",
      "Dia": "Miercoles"
   },
   {
      "Valor": "Jueves",
      "Dia": "Jueves"
   },
   {
      "Valor": "Viernes",
      "Dia": "Viernes"
   },
   {
      "Valor": "Sabado",
      "Dia": "Sabado"
   }
];

var CursosDisponibles = [   {
   "Curso":"Todos los Cursos",
   "CursoCorto":"0",
   "DiasTipos":"LunesPresencial MartesPresencial MiercolesPresencial JuevesPresencial ViernesPresencial SabadoPresencial",
   "Dias":"Lunes Martes Miercoles Jueves Viernes Sabado",
   "Tipos":"Presencial"
},
{"Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","DiasTipos":"SabadoPresencial","Dias":"Sabado","Tipos":"Presencial"},
{"Curso":"Antiguo Testamento 2","CursoCorto":"AntiguoTestamento2","DiasTipos":"MiercolesVirtual","Dias":"Miercoles","Tipos":"Virtual"},
{"Curso":"Cortejo y Noviazgo Inteligente","CursoCorto":"CortejoyNoviazgoInteligente","DiasTipos":"LunesVirtual MiercolesPresencial","Dias":"Lunes Miercoles","Tipos":"Virtual Presencial"},
{"Curso":"El Don Divino del Perdon","CursoCorto":"ElDonDivinodelPerdon","DiasTipos":"JuevesPresencial MartesPresencial","Dias":"Jueves Martes","Tipos":"Presencial"},
{"Curso":"El Evangelio y La Vida Productiva","CursoCorto":"ElEvangelioyLaVidaProductiva","DiasTipos":"MartesVirtual","Dias":"Martes","Tipos":"Virtual"},
{"Curso":"Enseñanzas y Doctrina del Libro de Mormon","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","DiasTipos":"MartesPresencial MiercolesPresencial","Dias":"Martes Miercoles","Tipos":"Presencial"}
,
{"Curso":"Establecer un Matrimonio Eterno","CursoCorto":"EstablecerunMatrimonioEterno","DiasTipos":"MartesVirtual","Dias":"Martes","Tipos":"Virtual"},
{"Curso":"Fundamentos de la Restauracion","CursoCorto":"FundamentosdelaRestauracion","DiasTipos":"MartesPresencial MiercolesVirtual ViernesPresencial","Dias":"Martes Miercoles Viernes","Tipos":"Presencial Virtual"},
{"Curso":"Introduccion a la Historia de los Santos de los ultimos dias","CursoCorto":"IntroduccionalaHistoriadelosSantosdelosultimosdias","DiasTipos":"JuevesVirtual","Dias":"Jueves","Tipos":"Virtual"},
{"Curso":"Jesucristo y su Evangelio Sempiterno","CursoCorto":"JesucristoysuEvangelioSempiterno","DiasTipos":"MartesPresencial MiercolesVirtual ViernesPresencial","Dias":"Martes Miercoles Viernes","Tipos":"Presencial Virtual"},
{"Curso":"La Familia Eterna","CursoCorto":"LaFamiliaEterna","DiasTipos":"JuevesPresencial MartesPresencial SabadoVirtual","Dias":"Jueves Martes Sabado","Tipos":"Presencial Virtual"},
{"Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","DiasTipos":"MartesPresencial MartesVirtual","Dias":"Martes","Tipos":"Presencial Virtual"},
{"Curso":"Libro de Mormon 2","CursoCorto":"LibrodeMormon2","DiasTipos":"MiercolesPresencial SabadoPresencial MartesVirtual","Dias":"Miercoles Sabado Martes","Tipos":"Presencial Virtual"},
{"Curso":"Mujeres de las Escrituras","CursoCorto":"MujeresdelasEscrituras","DiasTipos":"SabadoVirtual","Dias":"Sabado","Tipos":"Virtual"},
{"Curso":"NT-Ven Sigueme 2023 (Parte 2)","CursoCorto":"NT-VenSigueme2023(Parte2)","DiasTipos":"MartesPresencial MiercolesVirtual ViernesVirtual ViernesPresencial","Dias":"Martes Miercoles Viernes","Tipos":"Presencial Virtual"},
{"Curso":"Nuevo Testamento 1","CursoCorto":"NuevoTestamento1","DiasTipos":"JuevesPresencial","Dias":"Jueves","Tipos":"Presencial"},
{"Curso":"Preparacion Misional","CursoCorto":"PreparacionMisional","DiasTipos":"JuevesPresencial ViernesPresencial","Dias":"Jueves Viernes","Tipos":"Presencial"},
{"Curso":"Preparemonos para un Matrimonio Eterno","CursoCorto":"PreparemonosparaunMatrimonioEterno","DiasTipos":"MartesVirtual SabadoVirtual SabadoPresencial","Dias":"Martes Sabado","Tipos":"Virtual Presencial"},
{"Curso":"Principios de Liderazgo","CursoCorto":"PrincipiosdeLiderazgo","DiasTipos":"SabadoVirtual","Dias":"Sabado","Tipos":"Virtual"}
]
   ;


var Horarios =[
   {"Dia":"Lunes","Hora":"06:00:00 AM","Maestro":"David Soriano Medrano","Curso":"Cortejo y Noviazgo Inteligente","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403550","LinkWhatsapp":"","CursoCorto":"CortejoyNoviazgoInteligente","NombreImagen":"David Soriano Lunes"},
   {"Dia":"Martes","Hora":"04:00:00 PM","Maestro":"Elizabeth Blanca Cuadros Loayza","Curso":"Libro de Mormon 2","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1402942","LinkWhatsapp":"https://chat.whatsapp.com/IrZ2F3fH9n03o70wlGTYQg","CursoCorto":"LibrodeMormon2","NombreImagen":"Elizabeth Martes"},
   {"Dia":"Martes","Hora":"05:30:00 PM","Maestro":"Giancarlo Cordova Peña / Valeria Duerto","Curso":"Jesucristo y su Evangelio Sempiterno","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403541","LinkWhatsapp":"https://chat.whatsapp.com/CdFoTsZUl3zGccZIBW2lYW","CursoCorto":"JesucristoysuEvangelioSempiterno","NombreImagen":"Fam Cordova"}
   ,
   {"Dia":"Martes","Hora":"06:00:00 PM","Maestro":"Scarlet Andreina Tineo Grillet","Curso":"Libro de Mormon 1","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403084","LinkWhatsapp":"https://chat.whatsapp.com/I6ueiZvvNbw369Sx7EGXYj","CursoCorto":"LibrodeMormon1","NombreImagen":"Scarlet"},
   {"Dia":"Martes","Hora":"06:30:00 PM","Maestro":"Moises Carlos Mamani Molina","Curso":"Fundamentos de la Restauracion","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403087","LinkWhatsapp":"https://chat.whatsapp.com/CxgFWLD6c9DBGeySFd7Uns","CursoCorto":"FundamentosdelaRestauracion","NombreImagen":"Moises"},
   {"Dia":"Martes","Hora":"07:00:00 PM","Maestro":"Linda Shany Medina Morales de Gamboa","Curso":"El Evangelio y la Vida Productiva","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1402960","LinkWhatsapp":"https://chat.whatsapp.com/HUTYiXmyBoULF9idWrXSM6","CursoCorto":"ElEvangelioylaVidaProductiva","NombreImagen":"Linda"},
   {"Dia":"Martes","Hora":"07:00:00 PM","Maestro":"Miguel Alejandro Pinto Gonzales","Curso":"La Familia Eterna","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403088","LinkWhatsapp":"https://chat.whatsapp.com/BCpJKqt0G8n1hSe4sdMQm9","CursoCorto":"LaFamiliaEterna","NombreImagen":"Miguel"},
   {"Dia":"Martes","Hora":"07:00:00 PM","Maestro":"Rudy Serna Cajaleon","Curso":"Libro de Mormon 1","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403030","LinkWhatsapp":"https://chat.whatsapp.com/KFLYLZ1vTrG7VXyeeDGDAI","CursoCorto":"LibrodeMormon1","NombreImagen":"Rudy"},
   {"Dia":"Martes","Hora":"07:00:00 PM","Maestro":"Nancy Felicitas Julca de Chavez","Curso":"Preparemonos para un Matrimonio Eterno","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403036","LinkWhatsapp":"https://chat.whatsapp.com/CVZRFj2CGT4C8olPocahSF","CursoCorto":"PreparemonosparaunMatrimonioEterno","NombreImagen":"Nancy"},
   {"Dia":"Martes","Hora":"07:30:00 PM","Maestro":"Angelo Oscar Mauricio Cribillero","Curso":"El Don Divino del Perdon","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403103","LinkWhatsapp":"https://chat.whatsapp.com/HxbYFuQcaaY9N3avr6XDIN","CursoCorto":"ElDonDivinodelPerdon","NombreImagen":"Angelo"},
   {"Dia":"Martes","Hora":"07:30:00 PM","Maestro":"Beto Angel Mamani Larico","Curso":"El Evangelio y La Vida Productiva","Tipo":"Virtual","LinkInscripcion":"","LinkWhatsapp":"https://chat.whatsapp.com/ElPsXIgGJkr3BNtuCDCj9L","CursoCorto":"ElEvangelioyLaVidaProductiva","NombreImagen":"Beto"},
   {"Dia":"Martes","Hora":"07:30:00 PM","Maestro":"David Soriano Medrano","Curso":"La Familia Eterna","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403091","LinkWhatsapp":"","CursoCorto":"LaFamiliaEterna","NombreImagen":"David Soriano Martes"},
   {"Dia":"Martes","Hora":"07:30:00 PM","Maestro":"Victor Raul Calderon Punto","Curso":"NT-Ven Sigueme 2023 (Parte 2)","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403089","LinkWhatsapp":"https://chat.whatsapp.com/IIMfXpp9ngs5niljpy3r52","CursoCorto":"NT-VenSigueme2023(Parte2)","NombreImagen":"Victor"},
   {"Dia":"Martes","Hora":"08:00:00 PM","Maestro":"Marvin John Huertas Saldaña","Curso":"Enseñanzas y Doctrina del Libro de Mormon","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403092","LinkWhatsapp":"https://chat.whatsapp.com/GYkOTzGP0esHSel1WCXcWp","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","NombreImagen":"Marvin"}
   ,
   {"Dia":"Martes","Hora":"08:00:00 PM","Maestro":"Fernando Glen Boyd Mostacero Jesus / Jennifer Mostacero","Curso":"Establecer un Matrimonio Eterno","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403021","LinkWhatsapp":"https://chat.whatsapp.com/INeE6WOQ4Vu0qRu0YsnR5j","CursoCorto":"EstablecerunMatrimonioEterno","NombreImagen":"Fam Mostacero"},
   {"Dia":"Miercoles","Hora":"07:00:00 PM","Maestro":"Jair Omar Mariscal Calderon","Curso":"Enseñanzas y Doctrina del Libro de Mormon","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403107","LinkWhatsapp":"https://chat.whatsapp.com/F4mM1aQHvcV25e5uIFcIKw","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","NombreImagen":"Jair"}
   ,
   {"Dia":"Miercoles","Hora":"07:00:00 PM","Maestro":"Martin Antonio Vera Jimenez","Curso":"Libro de Mormon 2","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403112","LinkWhatsapp":"https://chat.whatsapp.com/BUDVrqn6iQHHyfNI80o8aj","CursoCorto":"LibrodeMormon2","NombreImagen":"Martin"},
   {"Dia":"Miercoles","Hora":"07:30:00 PM","Maestro":"David Soriano Medrano","Curso":"Cortejo y Noviazgo Inteligente","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1405370","LinkWhatsapp":"","CursoCorto":"CortejoyNoviazgoInteligente","NombreImagen":"David Soriano Miercoles"},
   {"Dia":"Miercoles","Hora":"07:30:00 PM","Maestro":"Juan Carlos Landa Ramos","Curso":"Enseñanzas y Doctrina del Libro de Mormon","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403118","LinkWhatsapp":"https://chat.whatsapp.com/IDDTdF4C6no8XQVUnGaiIx","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","NombreImagen":"Juan"}
   ,
   {"Dia":"Miercoles","Hora":"07:30:00 PM","Maestro":"Juana Victoria Garcia Barrios","Curso":"Jesucristo y su Evangelio Sempiterno","Tipo":"Virtual","LinkInscripcion":"","LinkWhatsapp":"","CursoCorto":"JesucristoysuEvangelioSempiterno","NombreImagen":"Victoria Miercoles"},
   {"Dia":"Miercoles","Hora":"07:30:00 PM","Maestro":"David Kenny Quispitupac Rafael","Curso":"NT-Ven Sigueme 2023 (Parte 2)","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403034","LinkWhatsapp":"https://chat.whatsapp.com/FPhoq3OUqXM3S2V31btS54","CursoCorto":"NT-VenSigueme2023(Parte2)","NombreImagen":"David"},
   {"Dia":"Miercoles","Hora":"08:00:00 PM","Maestro":"Sahara Jara Casazola","Curso":"Antiguo Testamento 2","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403032","LinkWhatsapp":"https://chat.whatsapp.com/GLy8yfldpG49gwWIFSajvg","CursoCorto":"AntiguoTestamento2","NombreImagen":"Sahara"},
   {"Dia":"Miercoles","Hora":"08:00:00 PM","Maestro":"Valeria De Jesus Duerto Pardo de Cordova","Curso":"Fundamentos de la Restauracion","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403035","LinkWhatsapp":"https://chat.whatsapp.com/Hg6uoLX3AJH8QIiPwM2Y46","CursoCorto":"FundamentosdelaRestauracion","NombreImagen":"Valeria"},
   {"Dia":"Jueves","Hora":"04:00:00 PM","Maestro":"Elizabeth Blanca Cuadros Loayza","Curso":"Nuevo Testamento 1","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403205","LinkWhatsapp":"https://chat.whatsapp.com/BEzY84QB6JsIsxCufmgrZe","CursoCorto":"NuevoTestamento1","NombreImagen":"Elizabeth Jueves"},
   {"Dia":"Jueves","Hora":"07:00:00 PM","Maestro":"Roberto Alonso Polanco Loayza","Curso":"La Familia Eterna","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403208","LinkWhatsapp":"https://chat.whatsapp.com/ENIVncU6fv96X0GSkDGs6d","CursoCorto":"LaFamiliaEterna","NombreImagen":"Roberto"},
   {"Dia":"Jueves","Hora":"07:00:00 PM","Maestro":"Daniel Norberto Roman Benavides","Curso":"Preparacion Misional","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403544","LinkWhatsapp":"https://chat.whatsapp.com/H7bgOZNnRtoGiAFmfrSKLE","CursoCorto":"PreparacionMisional","NombreImagen":"Daniel"},
   {"Dia":"Jueves","Hora":"07:30:00 PM","Maestro":"David Soriano Medrano","Curso":"El Don Divino del Perdon","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403201","LinkWhatsapp":"","CursoCorto":"ElDonDivinodelPerdon","NombreImagen":"David Soriano Jueves"},
   {"Dia":"Jueves","Hora":"08:30:00 PM","Maestro":"Gustavo Ireneo Medina Lora","Curso":"La Familia Eterna","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403210","LinkWhatsapp":"https://chat.whatsapp.com/IeHlbhiszHeBB3kIHzJ8Jy","CursoCorto":"LaFamiliaEterna","NombreImagen":"Gustavo"},
   {"Dia":"Jueves","Hora":"08:30:00 PM","Maestro":"Joseph Arthur Balta Benavides","Curso":"La Familia Eterna","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403212","LinkWhatsapp":"https://chat.whatsapp.com/FxB7WGNinZiBGSS93eLZIv","CursoCorto":"LaFamiliaEterna","NombreImagen":"Joseph"},
   {"Dia":"Jueves","Hora":"09:00:00 PM","Maestro":"David Manuel Gamboa Espinola","Curso":"Introduccion a la Historia de los Santos de los ultimos dias","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403189","LinkWhatsapp":"https://chat.whatsapp.com/DebHlY4dglf1EanZkNRQ4Q","CursoCorto":"IntroduccionalaHistoriadelosSantosdelosultimosdias","NombreImagen":"David"},
   {"Dia":"Viernes","Hora":"06:00:00 AM","Maestro":"Marly Julieth Rojas Zapata","Curso":"NT-Ven Sigueme 2023 (Parte 2)","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403037","LinkWhatsapp":"https://chat.whatsapp.com/G2VCNmrWecK5S7LS24nfau","CursoCorto":"NT-VenSigueme2023(Parte2)","NombreImagen":"Marly"},
   {"Dia":"Viernes","Hora":"07:00:00 PM","Maestro":"Anthony Brando Travi Perez","Curso":"Fundamentos de la Restauracion","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403524","LinkWhatsapp":"https://chat.whatsapp.com/HXYkncFrUiQJoDsYGcr3ps","CursoCorto":"FundamentosdelaRestauracion","NombreImagen":"Anthony"},
   {"Dia":"Viernes","Hora":"07:00:00 PM","Maestro":"Hugo Chavez Bernaola","Curso":"NT-Ven Sigueme 2023 (Parte 2)","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403217","LinkWhatsapp":"https://chat.whatsapp.com/H22zms4UAK3HjNGa4tYDem","CursoCorto":"NT-VenSigueme2023(Parte2)","NombreImagen":"Hugo"},
   {"Dia":"Viernes","Hora":"07:00:00 PM","Maestro":"Angela Pierina Salinas Castro","Curso":"Preparacion Misional","Tipo":"Presencial","LinkInscripcion":"","LinkWhatsapp":"","CursoCorto":"PreparacionMisional","NombreImagen":"Angela"},
   {"Dia":"Viernes","Hora":"08:00:00 PM","Maestro":"Juana Victoria Garcia Barrios","Curso":"Jesucristo y su Evangelio Sempiterno","Tipo":"Presencial","LinkInscripcion":"","LinkWhatsapp":"https://chat.whatsapp.com/FZuFVLkD58LBnGVkV9a3tz","CursoCorto":"JesucristoysuEvangelioSempiterno","NombreImagen":"Victoria Viernes"},
   {"Dia":"Sabado","Hora":"07:00:00 AM","Maestro":"Donato Condori Choquepata","Curso":"Principios de Liderazgo","Tipo":"Virtual","LinkInscripcion":"","LinkWhatsapp":"https://chat.whatsapp.com/DvhMW6xxxng1YWtPYdoUBM","CursoCorto":"PrincipiosdeLiderazgo","NombreImagen":"Donato"},
   {"Dia":"Sabado","Hora":"09:00:00 AM","Maestro":"Luis Alberto Martinez Cosquillo","Curso":"Libro de Mormon 2","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403525","LinkWhatsapp":"https://chat.whatsapp.com/DiwlqUDRtd86XaxfF9RxGY","CursoCorto":"LibrodeMormon2","NombreImagen":"Luis"},
   {"Dia":"Sabado","Hora":"07:00:00 PM","Maestro":"Felix Scott Balta Benavides","Curso":"Antiguo Testamento 1","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403527","LinkWhatsapp":"https://chat.whatsapp.com/GqhPMVaGfpm4K9NNhKs6l8","CursoCorto":"AntiguoTestamento1","NombreImagen":"Felix"},
   {"Dia":"Sabado","Hora":"07:00:00 PM","Maestro":"Claudio Eduardo Berrios Silvestre / Evelyn Rubina Antunez","Curso":"Preparemonos para un Matrimonio Eterno","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403063","LinkWhatsapp":"https://chat.whatsapp.com/DcbltnbmNrbFjmZGkW39o0","CursoCorto":"PreparemonosparaunMatrimonioEterno","NombreImagen":"Fam Berrios"},
   {"Dia":"Sabado","Hora":"07:30:00 PM","Maestro":"Alex Javier Arangoitia Solar / Flor Chancahuaña","Curso":"Preparemonos para un Matrimonio Eterno","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403528","LinkWhatsapp":"https://chat.whatsapp.com/DHxYEka5Wqr2zurN6pal4W","CursoCorto":"PreparemonosparaunMatrimonioEterno","NombreImagen":"Fam Arangoitia"}
   ,
   {"Dia":"Sabado","Hora":"08:00:00 PM","Maestro":"Francklin Swett Gutierrez Camacho","Curso":"La Familia Eterna","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1405174","LinkWhatsapp":"https://chat.whatsapp.com/KgW3PhrVoGA4ChMVPy0207","CursoCorto":"LaFamiliaEterna","NombreImagen":"Francklin"},
   {"Dia":"Sabado","Hora":"09:00:00 PM","Maestro":"Joana Muriell Oscorima Celis","Curso":"Mujeres de las Escrituras","Tipo":"Virtual","LinkInscripcion":"","LinkWhatsapp":"https://chat.whatsapp.com/KkujLkPpAME40JtNvVHj8G","CursoCorto":"MujeresdelasEscrituras","NombreImagen":"Joana"}
   ]
   
     
   ;
   