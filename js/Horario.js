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
   {"Curso":"Antiguo Testamento","CursoCorto":"AntiguoTestamento","DiasTipos":"MartesVirtual","Dias":"Martes","Tipos":"Virtual"},
   {"Curso":"Como mantener vivo el matrimonio","CursoCorto":"Comomantenervivoelmatrimonio","DiasTipos":"SabadoVirtual","Dias":"Sabado","Tipos":"Virtual"},
   {"Curso":"Cortejo y Noviazgo a la manera del Señor","CursoCorto":"CortejoyNoviazgoalamaneradelSeñor","DiasTipos":"MiercolesPresencial","Dias":"Miercoles","Tipos":"Presencial"}
   ,
   {"Curso":"Discipulos de Jesucristo","CursoCorto":"DiscipulosdeJesucristo","DiasTipos":"JuevesVirtual JuevesPresencial","Dias":"Jueves","Tipos":"Virtual Presencial"},
   {"Curso":"El Don Divino del Perdon","CursoCorto":"ElDivinoDondelPerdon","DiasTipos":"MartesPresencial SabadoVirtual","Dias":"Martes Sabado","Tipos":"Presencial Virtual"},
   {"Curso":"El Estudio de las escrituras - el poder de la palabra","CursoCorto":"ElEstudiodelasescrituras-elpoderdelapalabra","DiasTipos":"MiercolesPresencial","Dias":"Miercoles","Tipos":"Presencial"},
   {"Curso":"El Libro de Mormon y una Vida Sana","CursoCorto":"ElLibrodeMormonyunaVidaSana","DiasTipos":"LunesVirtual MartesPresencial","Dias":"Lunes Martes","Tipos":"Virtual Presencial"},
   {"Curso":"Enseñanzas y doctrina del libro de Mormon","CursoCorto":"EnseñanzasydoctrinadellibrodeMormon","DiasTipos":"MartesVirtual JuevesPresencial ViernesPresencial","Dias":"Martes Jueves Viernes","Tipos":"Virtual Presencial"}
   ,
   {"Curso":"Fundamentos de la Restauracion","CursoCorto":"FundamentosdelaRestauracion","DiasTipos":"SabadoVirtual MiercolesVirtual","Dias":"Sabado Miercoles","Tipos":"Virtual"}
   ,
   {"Curso":"Jesucristo y su evangelio Sempiterno","CursoCorto":"JesucristoyelEvangelioSempiterno","DiasTipos":"ViernesPresencial MiercolesVirtual","Dias":"Viernes Miercoles","Tipos":"Presencial Virtual"},
   {"Curso":"La Familia Eterna","CursoCorto":"LaFamiliaEterna","DiasTipos":"SabadoVirtual","Dias":"Sabado","Tipos":"Virtual"},
   {"Curso":"La Perla de gran precio","CursoCorto":"LaPerladegranprecio","DiasTipos":"MiercolesPresencial","Dias":"Miercoles","Tipos":"Presencial"},
   {"Curso":"Las Parabolas de Jesus","CursoCorto":"LasParabolasdeJesús","DiasTipos":"MartesPresencial ViernesPresencial","Dias":"Martes Viernes","Tipos":"Presencial"},
   {"Curso":"Libro de Mormon 2","CursoCorto":"LibrodeMormon2","DiasTipos":"MiercolesPresencial SabadoPresencial","Dias":"Miercoles Sabado","Tipos":"Presencial"},
   {"Curso":"Mujeres de las Escrituras","CursoCorto":"MujeresdelasEscrituras","DiasTipos":"JuevesVirtual","Dias":"Jueves","Tipos":"Virtual"},
   {"Curso":"NT-Ven Sigueme 2023 (Parte 2)","CursoCorto":"NT-VenSigueme2023(Parte2)","DiasTipos":"LunesVirtual MartesPresencial JuevesPresencial ViernesVirtual","Dias":"Lunes Martes Jueves Viernes","Tipos":"Virtual Presencial"}
   ,
   {"Curso":"Preparemonos para un Matrimonio Eterno","CursoCorto":"PreparemonosparaunMatrimonioEterno","DiasTipos":"JuevesVirtual","Dias":"Jueves","Tipos":"Virtual"},
   {"Curso":"Principios eternos para enfrentar desafios","CursoCorto":"Principioseternosparaenfrentardesafios","DiasTipos":"MartesPresencial SabadoPresencial","Dias":"Martes Sabado","Tipos":"Presencial"},
   {"Curso":"Resiliencia emocional y la expiacion de Jesucristo","CursoCorto":"ResilienciaemocionalylaexpiaciondeJesucristo","DiasTipos":"SabadoVirtual","Dias":"Sabado","Tipos":"Virtual"},
   {"Curso":"Temas de ayuda para la vida","CursoCorto":"Temasdeayudaparalavida","DiasTipos":"JuevesVirtual MiercolesPresencial","Dias":"Jueves Miercoles","Tipos":"Virtual Presencial"}
   ]
   
   ;


var Horarios =[
   {"Dia":"Lunes","Hora":"6 am","Maestro":"David Soriano Medrano","Curso":"El Libro de Mormon y una Vida Sana","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1451800","LinkWhatsapp":"https://chat.whatsapp.com/GbzE2KT7w7t2v0EZcRaEEQ","CursoCorto":"ElLibrodeMormonyunaVidaSana","NombreImagen":"David Soriano Lunes"},
   {"Dia":"Lunes","Hora":"9 am.","Maestro":"Veronica Otivo","Curso":"NT-Ven Sigueme 2023 (Parte 2)","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1452680","LinkWhatsapp":"https://chat.whatsapp.com/EbjdWH9WvLbK3q1vSuPiVY","CursoCorto":"NT-VenSigueme2023(Parte2)","NombreImagen":"Veronica"},
   {"Dia":"Martes","Hora":"4 pm.","Maestro":"Elizabeth Blanca Cuadros Loayza","Curso":"Antiguo Testamento","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1402942","LinkWhatsapp":"https://chat.whatsapp.com/FYlbxiLx8OP6m2eiih0zni","CursoCorto":"AntiguoTestamento","NombreImagen":"Elizabeth Cuadros Martes"},
   {"Dia":"Martes","Hora":"6 pm.","Maestro":"Angelo Oscar Mauricio Cribillero","Curso":"Las Parabolas de Jesus","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1410176","LinkWhatsapp":"https://chat.whatsapp.com/HxbYFuQcaaY9N3avr6XDIN","CursoCorto":"LasParabolasdeJesús","NombreImagen":"Angelo"},
   {"Dia":"Martes","Hora":"7 pm.","Maestro":"Miguel Alejandro Pinto Gonzales","Curso":"El Don Divino del Perdon","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1452037","LinkWhatsapp":"https://chat.whatsapp.com/BCpJKqt0G8n1hSe4sdMQm9","CursoCorto":"ElDivinoDondelPerdon","NombreImagen":"Miguel"},
   {"Dia":"Martes","Hora":"7 pm","Maestro":"Valeria De Jesus Duerto Pardo de Cordova","Curso":"Enseñanzas y doctrina del libro de Mormon","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1452048","LinkWhatsapp":"https://chat.whatsapp.com/Hg6uoLX3AJH8QIiPwM2Y46","CursoCorto":"EnseñanzasydoctrinadellibrodeMormon","NombreImagen":"Valeria"}
   ,
   {"Dia":"Martes","Hora":"7:30 pm.","Maestro":"David Soriano Medrano","Curso":"El Libro de Mormon y una Vida Sana","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1451803","LinkWhatsapp":"https://chat.whatsapp.com/GbzE2KT7w7t2v0EZcRaEEQ","CursoCorto":"ElLibrodeMormonyunaVidaSana","NombreImagen":"David Soriano Martes"},
   {"Dia":"Martes","Hora":"7:30 pm.","Maestro":"Julio Cesar Agurto Garay","Curso":"Principios eternos para enfrentar desafios","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1454046","LinkWhatsapp":"https://chat.whatsapp.com/ExyzPLGGE9sARvomu0RiLh","CursoCorto":"Principioseternosparaenfrentardesafios","NombreImagen":"Julio Agurto Martes"},
   {"Dia":"Martes","Hora":"7:30 pm.","Maestro":"Victor Raul Calderon Punto","Curso":"NT-Ven Sigueme 2023 (Parte 2)","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1452040","LinkWhatsapp":"https://chat.whatsapp.com/IIMfXpp9ngs5niljpy3r52","CursoCorto":"NT-VenSigueme2023(Parte2)","NombreImagen":"Victor"},
   {"Dia":"Miercoles","Hora":"6 pm","Maestro":"Julio Cesar Agurto Garay","Curso":"Fundamentos de la Restauracion","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1451804","LinkWhatsapp":"https://chat.whatsapp.com/KA9T0oszEjE1BagDDpY5Q6","CursoCorto":"FundamentosdelaRestauracion","NombreImagen":"Julio Agurto Miercoles 2"},
   {"Dia":"Miercoles","Hora":"7 pm.","Maestro":"Jair Omar Mariscal Calderon","Curso":"La Perla de gran precio","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1452049","LinkWhatsapp":"https://chat.whatsapp.com/F4mM1aQHvcV25e5uIFcIKw","CursoCorto":"LaPerladegranprecio","NombreImagen":"Jair"},
   {"Dia":"Miercoles","Hora":"7 pm.","Maestro":"Jorge Alonso Espinoza","Curso":"Jesucristo y su evangelio Sempiterno","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1452758","LinkWhatsapp":"https://chat.whatsapp.com/FPhoq3OUqXM3S2V31btS54","CursoCorto":"JesucristoyelEvangelioSempiterno","NombreImagen":"Jorge"},
   {"Dia":"Miercoles","Hora":"7 pm.","Maestro":"Martin Antonio Vera Jimenez","Curso":"Libro de Mormon 2","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1452050","LinkWhatsapp":"https://chat.whatsapp.com/BUDVrqn6iQHHyfNI80o8aj","CursoCorto":"LibrodeMormon2","NombreImagen":"Martin"},
   {"Dia":"Miercoles","Hora":"7:30 pm.","Maestro":"David Soriano Medrano","Curso":"Temas de ayuda para la vida","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1453165","LinkWhatsapp":"https://chat.whatsapp.com/JVwSaauftP3HlneHVG5QUg","CursoCorto":"Temasdeayudaparalavida","NombreImagen":"David Soriano Miercoles"},
   {"Dia":"Miercoles","Hora":"7:30 pm.","Maestro":"Julio Cesar Agurto Garay","Curso":"Cortejo y Noviazgo a la manera del Señor","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1454048","LinkWhatsapp":"https://chat.whatsapp.com/IC1i1YgmzsdKlbUHSLTXF6","CursoCorto":"CortejoyNoviazgoalamaneradelSeñor","NombreImagen":"Julio Agurto Miercoles 1"}
   ,
   {"Dia":"Miercoles","Hora":"7:30 pm.","Maestro":"Kenny Quispitupac","Curso":"El Estudio de las escrituras - el poder de la palabra","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1452043","LinkWhatsapp":"https://chat.whatsapp.com/FPhoq3OUqXM3S2V31btS54","CursoCorto":"ElEstudiodelasescrituras-elpoderdelapalabra","NombreImagen":"Kenny"},
   {"Dia":"Jueves","Hora":"4 pm.","Maestro":"Elizabeth Blanca Cuadros Loayza","Curso":"NT-Ven Sigueme 2023 (Parte 2)","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1452790","LinkWhatsapp":"https://chat.whatsapp.com/KMuk6IHmUJB6F1BUWctbx2","CursoCorto":"NT-VenSigueme2023(Parte2)","NombreImagen":"Elizabeth Cuadros Jueves"},
   {"Dia":"Jueves","Hora":"7 pm.","Maestro":"Rudy Serna Cajaleon","Curso":"Mujeres de las Escrituras","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403030","LinkWhatsapp":"https://chat.whatsapp.com/KFLYLZ1vTrG7VXyeeDGDAI","CursoCorto":"MujeresdelasEscrituras","NombreImagen":"Rudy"},
   {"Dia":"Jueves","Hora":"7:30 pm.","Maestro":"Daniel Roman","Curso":"Discipulos de Jesucristo","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1453001","LinkWhatsapp":"https://chat.whatsapp.com/H7bgOZNnRtoGiAFmfrSKLE","CursoCorto":"DiscipulosdeJesucristo","NombreImagen":"Daniel"},
   {"Dia":"Jueves","Hora":"7:30 pm.","Maestro":"David Soriano Medrano","Curso":"Temas de ayuda para la vida","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1453166","LinkWhatsapp":"https://chat.whatsapp.com/JVwSaauftP3HlneHVG5QUg","CursoCorto":"Temasdeayudaparalavida","NombreImagen":"David Soriano Jueves"},
   {"Dia":"Jueves","Hora":"7: 30 pm.","Maestro":"Yenny de Nazario","Curso":"Discipulos de Jesucristo","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1452999","LinkWhatsapp":"https://chat.whatsapp.com/DEy5tkT9A88EKmvOVMXqwf","CursoCorto":"DiscipulosdeJesucristo","NombreImagen":"Yenny"},
   {"Dia":"Jueves","Hora":"8 pm.","Maestro":"Fernando Glen Boyd Mostacero Jesus / Jennifer Mostacero","Curso":"Preparemonos para un Matrimonio Eterno","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1403021","LinkWhatsapp":"https://chat.whatsapp.com/INeE6WOQ4Vu0qRu0YsnR5j","CursoCorto":"PreparemonosparaunMatrimonioEterno","NombreImagen":"Fernando"},
   {"Dia":"Jueves","Hora":"8 pm.","Maestro":"Joseph Balta","Curso":"Enseñanzas y doctrina del libro de Mormon","Tipo":"Presencial","LinkInscripcion":"","LinkWhatsapp":"https://chat.whatsapp.com/FxB7WGNinZiBGSS93eLZIv","CursoCorto":"EnseñanzasydoctrinadellibrodeMormon","NombreImagen":"Joseph"}
   ,
   {"Dia":"Viernes","Hora":"6 am","Maestro":"Marly Julieth Rojas Zapata","Curso":"NT-Ven Sigueme 2023 (Parte 2)","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1453005","LinkWhatsapp":"https://chat.whatsapp.com/G2VCNmrWecK5S7LS24nfau","CursoCorto":"NT-VenSigueme2023(Parte2)","NombreImagen":"Marly"},
   {"Dia":"Viernes","Hora":"7 pm.","Maestro":"Hugo Chavez Bernaola","Curso":"Jesucristo y su evangelio Sempiterno","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1453015","LinkWhatsapp":"https://chat.whatsapp.com/H22zms4UAK3HjNGa4tYDem","CursoCorto":"JesucristoyelEvangelioSempiterno","NombreImagen":"Hugo"},
   {"Dia":"Viernes","Hora":"7: 30 pm.","Maestro":"Felix Scott Balta Benavides","Curso":"Las Parabolas de Jesus","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1453007","LinkWhatsapp":"https://chat.whatsapp.com/HnSKIEABAry82g9uYMxNBW","CursoCorto":"LasParabolasdeJesús","NombreImagen":"Felix"},
   {"Dia":"Viernes","Hora":"7: 30 pm.","Maestro":"Joshua Andre Hidalgo Esquivel","Curso":"Enseñanzas y doctrina del libro de Mormon","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1453006","LinkWhatsapp":"https://chat.whatsapp.com/FgCuY59NnQe2Z7GW5kkzCb","CursoCorto":"EnseñanzasydoctrinadellibrodeMormon","NombreImagen":"Joshua"}
   ,
   {"Dia":"Sabado","Hora":"6 am.","Maestro":"Beto Angel Mamani Larico","Curso":"Fundamentos de la Restauracion","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1451801","LinkWhatsapp":"https://chat.whatsapp.com/ElPsXIgGJkr3BNtuCDCj9L","CursoCorto":"FundamentosdelaRestauracion","NombreImagen":"Beto"},
   {"Dia":"Sabado","Hora":"9 am.","Maestro":"Luis Alberto Martinez Cosquillo","Curso":"Libro de Mormon 2","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1453009","LinkWhatsapp":"https://chat.whatsapp.com/DiwlqUDRtd86XaxfF9RxGY","CursoCorto":"LibrodeMormon2","NombreImagen":"Luis"},
   {"Dia":"Sabado","Hora":"6 pm.","Maestro":"Julio Cesar Agurto Garay","Curso":"Como mantener vivo el matrimonio","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1454045","LinkWhatsapp":"https://chat.whatsapp.com/F6QMNadPsjl2CvpNrv0avD","CursoCorto":"Comomantenervivoelmatrimonio","NombreImagen":"Julio Agurto Sabado 2"},
   {"Dia":"Sabado","Hora":"7 pm.","Maestro":"Evelyn y Eduardo Berrios","Curso":"La Familia Eterna","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1453011","LinkWhatsapp":"https://chat.whatsapp.com/DcbltnbmNrbFjmZGkW39o0","CursoCorto":"LaFamiliaEterna","NombreImagen":"Evelyn"},
   {"Dia":"Sabado","Hora":"7:30 pm.","Maestro":"Julio Cesar Agurto Garay","Curso":"Principios eternos para enfrentar desafios","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1454047","LinkWhatsapp":"https://chat.whatsapp.com/ExyzPLGGE9sARvomu0RiLh","CursoCorto":"Principioseternosparaenfrentardesafios","NombreImagen":"Julio Agurto Sabado 1"},
   {"Dia":"Sabado","Hora":"8 pm.","Maestro":"Francklin Swett Gutierrez Camacho","Curso":"El Don Divino del Perdon","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1453014","LinkWhatsapp":"https://chat.whatsapp.com/DENu7do1GplGeh5EerYcJM","CursoCorto":"ElDivinoDondelPerdon","NombreImagen":"Francklin"},
   {"Dia":"Sabado","Hora":"9 pm.","Maestro":"Joana Muriell Oscorima Celis","Curso":"Resiliencia emocional y la expiacion de Jesucristo","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/signup/1453027","LinkWhatsapp":"https://chat.whatsapp.com/HKyp9HDqMHdFpf0zXNmIvb","CursoCorto":"ResilienciaemocionalylaexpiaciondeJesucristo","NombreImagen":"Joana"}
   ]
   
   
   
   
     
   ;
   
