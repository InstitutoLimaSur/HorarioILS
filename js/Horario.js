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
{"Curso":"Antiguo Testamento - Ven Sigueme 2022","CursoCorto":"AntiguoTestamentoVenSigueme2022","DiasTipos":"MartesVirtual MiercolesVirtual SabadoPresencial","Dias":"Martes Miercoles Sabado","Tipos":"Virtual Presencial"},
{"Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","DiasTipos":"LunesVirtual MartesVirtual MartesPresencial JuevesVirtual JuevesPresencial ViernesPresencial SabadoVirtual","Dias":"Lunes Martes Jueves Viernes Sabado","Tipos":"Virtual Presencial"},
{"Curso":"Coro","CursoCorto":"Coro","DiasTipos":"SabadoVirtual","Dias":"Sabado","Tipos":"Virtual"},
{"Curso":"Doctrina y Convenios 1","CursoCorto":"DoctrinayConvenios1","DiasTipos":"SabadoVirtual","Dias":"Sabado","Tipos":"Virtual"},
{"Curso":"El Divino don del Perdon","CursoCorto":"ElDivinodondelPerdon","DiasTipos":"MartesPresencial ViernesPresencial MiercolesPresencial MiercolesVirtual SabadoVirtual SabadoPresencial","Dias":"Martes Viernes Miercoles Sabado","Tipos":"Presencial Virtual"},
{"Curso":"El Evangelio y la Vida Productiva","CursoCorto":"ElEvangelioylaVidaProductiva","DiasTipos":"MiercolesPresencial","Dias":"Miercoles","Tipos":"Presencial"},
{"Curso":"Enseñanzas y Doctrina del Libro de Mormon","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","DiasTipos":"JuevesPresencial ViernesVirtual SabadoPresencial","Dias":"Jueves Viernes Sabado","Tipos":"Presencial Virtual"}
,
{"Curso":"Escuchalo-Lecciones de vida y vida eterna","CursoCorto":"Escuchalo-Leccionesdevidayvidaeterna","DiasTipos":"JuevesVirtual SabadoVirtual","Dias":"Jueves Sabado","Tipos":"Virtual"},
{"Curso":"Fundamentos de la Restauracion","CursoCorto":"FundamentosdelaRestauracion","DiasTipos":"MartesVirtual JuevesPresencial","Dias":"Martes Jueves","Tipos":"Virtual Presencial"},
{"Curso":"Himnos de los Santos de los Ultimos Dias","CursoCorto":"HimnosdelosSantosdelosUltimosDias","DiasTipos":"MartesVirtual","Dias":"Martes","Tipos":"Virtual"},
{"Curso":"Historia de los Santos","CursoCorto":"HistoriadelosSantos","DiasTipos":"ViernesVirtual","Dias":"Viernes","Tipos":"Virtual"},
{"Curso":"Historia Familiar","CursoCorto":"HistoriaFamiliar","DiasTipos":"ViernesVirtual","Dias":"Viernes","Tipos":"Virtual"},
{"Curso":"Jesucristo y el Evangelio Sempiterno","CursoCorto":"JesucristoyelEvangelioSempiterno","DiasTipos":"MartesVirtual JuevesPresencial JuevesVirtual MiercolesVirtual","Dias":"Martes Jueves Miercoles","Tipos":"Virtual Presencial"},
{"Curso":"La Familia Eterna","CursoCorto":"LaFamiliaEterna","DiasTipos":"JuevesPresencial ViernesPresencial SabadoVirtual","Dias":"Jueves Viernes Sabado","Tipos":"Presencial Virtual"},
{"Curso":"La Perla de gran precio","CursoCorto":"LaPerladegranprecio","DiasTipos":"JuevesPresencial","Dias":"Jueves","Tipos":"Presencial"},
{"Curso":"Las Mujeres de las escrituras","CursoCorto":"LasMujeresdelasescrituras","DiasTipos":"JuevesVirtual","Dias":"Jueves","Tipos":"Virtual"},
{"Curso":"Las Parabolas de Jesus","CursoCorto":"LasParabolasdeJesus","DiasTipos":"JuevesVirtual MiercolesVirtual SabadoVirtual","Dias":"Jueves Miercoles Sabado","Tipos":"Virtual"},
{"Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","DiasTipos":"MartesVirtual JuevesVirtual MiercolesVirtual SabadoPresencial SabadoVirtual","Dias":"Martes Jueves Miercoles Sabado","Tipos":"Virtual Presencial"},
{"Curso":"Nuevo Testamento 1","CursoCorto":"NuevoTestamento1","DiasTipos":"ViernesVirtual","Dias":"Viernes","Tipos":"Virtual"},
{"Curso":"Preparemonos para un Matrimonio Eterno","CursoCorto":"PreparemonosparaunMatrimonioEterno","DiasTipos":"MartesVirtual SabadoPresencial","Dias":"Martes Sabado","Tipos":"Virtual Presencial"},
{"Curso":"Presidentes de la Iglesia","CursoCorto":"PresidentesdelaIglesia","DiasTipos":"SabadoVirtual","Dias":"Sabado","Tipos":"Virtual"},
{"Curso":"Principios de Liderazgo","CursoCorto":"PrincipiosdeLiderazgo","DiasTipos":"ViernesVirtual","Dias":"Viernes","Tipos":"Virtual"}
   ]
   ;


var Horarios =[
   {"Dia":"Lunes","Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","Tipo":"Virtual","Hora":"06:00 AM","Maestro":"Veronica Bardales Velasquez","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243146","LinkWhatsapp":"https://chat.whatsapp.com/CSYZlFJGKFA6fpWydKORYx","NombreImagen":"Veronica"},
   {"Dia":"Martes","Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","Tipo":"Virtual","Hora":"04:00 PM","Maestro":"Elizabeth Blanca Cuadros Loayza","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243149","LinkWhatsapp":"https://chat.whatsapp.com/F79bKnIcj6qEc5ZqVBRxq3","NombreImagen":"Elizabeth"},
   {"Dia":"Martes","Curso":"Himnos de los Santos de los Ultimos Dias","CursoCorto":"HimnosdelosSantosdelosUltimosDias","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Ana Lucia Aguilar","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243180","LinkWhatsapp":"https://chat.whatsapp.com/ChhrHIVbq4Y9AO0rML1ZOm","NombreImagen":"Ana"},
   {"Dia":"Martes","Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","Tipo":"Presencial","Hora":"07:00 PM","Maestro":"Liliana Tirado","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243241","LinkWhatsapp":"https://chat.whatsapp.com/BzG9RZY5y5RJCucwpFMnhT","NombreImagen":"Liliana"},
   {"Dia":"Martes","Curso":"El Divino don del Perdon","CursoCorto":"ElDivinodondelPerdon","Tipo":"Presencial","Hora":"07:00 PM","Maestro":"Rocio Reyes","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243244","LinkWhatsapp":"https://chat.whatsapp.com/HrI39BQZGgJHxrHDR1j2Ru","NombreImagen":"Rocio"},
   {"Dia":"Martes","Curso":"Fundamentos de la Restauracion","CursoCorto":"FundamentosdelaRestauracion","Tipo":"Virtual","Hora":"07:30 PM","Maestro":"Gian Pierre Lazo Chavez","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243651","LinkWhatsapp":"https://chat.whatsapp.com/HPfXMQLbrtUAGrzJRrdsPj","NombreImagen":"Gian"},
   {"Dia":"Martes","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Kelvin Miranda","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243157","LinkWhatsapp":"https://chat.whatsapp.com/Hg6uoLX3AJH8QIiPwM2Y46","NombreImagen":"Kelvin"},
   {"Dia":"Martes","Curso":"Preparemonos para un Matrimonio Eterno","CursoCorto":"PreparemonosparaunMatrimonioEterno","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Nancy Julca Urbina","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243151","LinkWhatsapp":"https://chat.whatsapp.com/F28BA5f5yamBSllzv6PrS4","NombreImagen":"Nancy"},
   {"Dia":"Martes","Curso":"Jesucristo y el Evangelio Sempiterno","CursoCorto":"JesucristoyelEvangelioSempiterno","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Sandra Tacza Lume","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243182","LinkWhatsapp":"https://chat.whatsapp.com/HAyhQhlRoMO81PvPPRf4go","NombreImagen":"Sandra Tacza"},
   {"Dia":"Martes","Curso":"Antiguo Testamento - Ven Sigueme 2022","CursoCorto":"AntiguoTestamentoVenSigueme2022","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Victor Calderon","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243155","LinkWhatsapp":"https://chat.whatsapp.com/FbKvjj8mEIM1mZKgFpLmE5","NombreImagen":"Victor"},
   {"Dia":"Miercoles","Curso":"El Divino don del Perdon","CursoCorto":"ElDivinodondelPerdon","Tipo":"Presencial","Hora":"06:00 PM","Maestro":"Jair Mariscal","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243245","LinkWhatsapp":"https://chat.whatsapp.com/F4mM1aQHvcV25e5uIFcIKw","NombreImagen":"Jair"},
   {"Dia":"Miercoles","Curso":"El Evangelio y la Vida Productiva","CursoCorto":"ElEvangelioylaVidaProductiva","Tipo":"Presencial","Hora":"07:00 PM","Maestro":"Donato Condori","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243246","LinkWhatsapp":"https://chat.whatsapp.com/ByOTCNbw3cqFMNm93cUour","NombreImagen":"Donato"},
   {"Dia":"Miercoles","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Jhair Alonso Pulido Gomez","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1244792","LinkWhatsapp":"https://chat.whatsapp.com/IDOMLrOxZonEOzBS1iDK6Z","NombreImagen":"Jhair"},
   {"Dia":"Miercoles","Curso":"Las Parabolas de Jesus","CursoCorto":"LasParabolasdeJesus","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Linda Medina Morales","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243161","LinkWhatsapp":"https://chat.whatsapp.com/HEpdzO48B3XDLgREbWZAGL","NombreImagen":"Linda"},
   {"Dia":"Miercoles","Curso":"El Divino don del perdon","CursoCorto":"ElDivinodondelperdon","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Pedro Nuñez","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243159","LinkWhatsapp":"https://chat.whatsapp.com/KkZcarglRG9KzvrLDbpAv7","NombreImagen":"Pedro"}
   ,
   {"Dia":"Miercoles","Curso":"Jesucristo y el Evangelio Sempiterno","CursoCorto":"JesucristoyelEvangelioSempiterno","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Carlos Alberto Pujay Ortiz","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243163","LinkWhatsapp":"https://chat.whatsapp.com/DzNXY7ZmPpkA78Zc7Uqr7X","NombreImagen":"Carlos Pujay"},
   {"Dia":"Miercoles","Curso":"Antiguo Testamento - Ven Sigueme 2022","CursoCorto":"AntiguoTestamentoVenSigueme2022","Tipo":"Virtual","Hora":"8:30 p. m","Maestro":"Luis Flores Leon","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243173","LinkWhatsapp":"https://chat.whatsapp.com/LMcKEXDF0EZL6TahrerMj3","NombreImagen":"Luis"},
   {"Dia":"Jueves","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Virtual","Hora":"04:00 PM","Maestro":"Elizabeth Blanca Cuadros Loayza","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243174","LinkWhatsapp":"https://chat.whatsapp.com/Gth0FefhpbnGKTUrCaHHgC","NombreImagen":"Elizabeth"},
   {"Dia":"Jueves","Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","Tipo":"Virtual","Hora":"06:00 PM","Maestro":"Hamilton Diaz","LinkInscripcion":"https://bit.ly/HD-AT-JU6PM","LinkWhatsapp":"https://chat.whatsapp.com/FJ5OqEOg2y1KizB3On3PyE","NombreImagen":"Hamilton"},
   {"Dia":"Jueves","Curso":"La Familia Eterna","CursoCorto":"LaFamiliaEterna","Tipo":"Presencial","Hora":"07:00 PM","Maestro":"Cesar Paulino","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243495","LinkWhatsapp":"https://chat.whatsapp.com/BRZZo6ZHhDyF1DdrLXnq4T","NombreImagen":"Cesar Paulino"},
   {"Dia":"Jueves","Curso":"Enseñanzas y Doctrina del Libro de Mormon","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","Tipo":"Presencial","Hora":"07:00 PM","Maestro":"Miguel Pinto","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243528","LinkWhatsapp":"https://chat.whatsapp.com/KCt6XRTKVwPKbVCg8lvCey","NombreImagen":"Miguel Pinto"}
   ,
   {"Dia":"Jueves","Curso":"Fundamentos de la Restauracion","CursoCorto":"FundamentosdelaRestauracion","Tipo":"Presencial","Hora":"07:00 PM","Maestro":"Rennys Lopez","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243500","LinkWhatsapp":"https://chat.whatsapp.com/KXhCQGsEhuUItZP3CHjLOF","NombreImagen":"Rennys"},
   {"Dia":"Jueves","Curso":"Jesucristo y el Evangelio Sempiterno","CursoCorto":"JesucristoyelEvangelioSempiterno","Tipo":"Presencial","Hora":"07:00 PM","Maestro":"Roberto Polanco","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243497","LinkWhatsapp":"https://chat.whatsapp.com/KfunV3ZI1Q7GxgYtTsRL9C","NombreImagen":"Roberto"},
   {"Dia":"Jueves","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Virtual","Hora":"07:30 PM","Maestro":"Francklin Gutierrez","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243176","LinkWhatsapp":"https://chat.whatsapp.com/C2P9aJVCw9l2yn1d3IJtv5","NombreImagen":"Francklin"},
   {"Dia":"Jueves","Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","Tipo":"Presencial","Hora":"07:30 PM","Maestro":"Kenny Quispitupac","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243499","LinkWhatsapp":"https://chat.whatsapp.com/HjMBtAxDaYaDFboLgzYkum","NombreImagen":"Kenny"},
   {"Dia":"Jueves","Curso":"La Perla de gran precio","CursoCorto":"LaPerladegranprecio","Tipo":"Presencial","Hora":"08:00 PM","Maestro":"Antonio Vera","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243503","LinkWhatsapp":"https://chat.whatsapp.com/B8989MIQlVo648TBvde4A0","NombreImagen":"Antonio"},
   {"Dia":"Jueves","Curso":"Las Parabolas de Jesus","CursoCorto":"LasParabolasdeJesus","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Areff Segovia","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243210","LinkWhatsapp":"https://chat.whatsapp.com/Gzpqr7dPEqg8kkhddVOj45","NombreImagen":"Areff"},
   {"Dia":"Jueves","Curso":"Las Mujeres de las escrituras","CursoCorto":"LasMujeresdelasescrituras","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Rudy Serna Cajaleon","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243211","LinkWhatsapp":"https://chat.whatsapp.com/DxlnyPZqWGg7XAtYroqXv0","NombreImagen":"Rudy"},
   {"Dia":"Jueves","Curso":"Jesucristo y el Evangelio Sempiterno","CursoCorto":"JesucristoyelEvangelioSempiterno","Tipo":"Virtual","Hora":"09:00 PM","Maestro":"Angel Alberto Mauricio Mamani","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243214","LinkWhatsapp":"","NombreImagen":"Angel"},
   {"Dia":"Jueves","Curso":"Escuchalo-Lecciones de vida y vida eterna","CursoCorto":"Escuchalo-Leccionesdevidayvidaeterna","Tipo":"Virtual","Hora":"09:00 PM","Maestro":"Luis Flores Leon","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243656","LinkWhatsapp":"https://chat.whatsapp.com/GJvXa3pXkQM4QDNFRSTkCl","NombreImagen":"Luis"},
   {"Dia":"Viernes","Curso":"El Divino don del Perdon","CursoCorto":"ElDivinodondelPerdon","Tipo":"Presencial","Hora":"07:00 PM","Maestro":"Cesar Reyes","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243509","LinkWhatsapp":"https://chat.whatsapp.com/KyQxaAev9O5GILKLZ5wl5O","NombreImagen":"Cesar Reyes"},
   {"Dia":"Viernes","Curso":"La Familia Eterna","CursoCorto":"LaFamiliaEterna","Tipo":"Presencial","Hora":"08:00 PM","Maestro":"Anyd Santillan","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243522","LinkWhatsapp":"https://chat.whatsapp.com/BkjDgXM99Q2E4JYWvYQXzu","NombreImagen":"Anyd"},
   {"Dia":"Viernes","Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","Tipo":"Presencial","Hora":"08:00 PM","Maestro":"Bruno Valdiviezo","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243519","LinkWhatsapp":"https://chat.whatsapp.com/FeWw9M9xz5WA6Glm6utPmj","NombreImagen":"Bruno"},
   {"Dia":"Viernes","Curso":"Nuevo Testamento 1","CursoCorto":"NuevoTestamento1","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Carlos Alfredo Rodriguez Tito","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243217","LinkWhatsapp":"https://chat.whatsapp.com/KzyppCwQixX7r0l0QGqnwW","NombreImagen":"Carlos Rodriguez"},
   {"Dia":"Viernes","Curso":"Historia de los Santos","CursoCorto":"HistoriadelosSantos","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Leonid Quispe","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243218","LinkWhatsapp":"https://chat.whatsapp.com/KLale04m9zmGD1ku5fgSkT","NombreImagen":"Leonid"},
   {"Dia":"Viernes","Curso":"Enseñanzas y Doctrina del Libro de Mormon","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Miguel Ascarruz Vasquez","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243824","LinkWhatsapp":"https://chat.whatsapp.com/ETDUvaoi2jyL1gS9S2eC7p","NombreImagen":"Miguel Ascarruz"}
   ,
   {"Dia":"Viernes","Curso":"Historia Familiar","CursoCorto":"HistoriaFamiliar","Tipo":"Virtual","Hora":"09:00 PM","Maestro":"Ivan Briceño Castro","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243219","LinkWhatsapp":"https://chat.whatsapp.com/DO9P9Hldaa05grEiXd4VGj","NombreImagen":"Ivan"}
   ,
   {"Dia":"Viernes","Curso":"Principios de Liderazgo","CursoCorto":"PrincipiosdeLiderazgo","Tipo":"Virtual","Hora":"09:00 PM","Maestro":"Sandra Paola Pino Huaman","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243224","LinkWhatsapp":"https://chat.whatsapp.com/I4DwCWzBush5SlZ9udyNJG","NombreImagen":"Sandra Pino"},
   {"Dia":"Sabado","Curso":"El Divino don del perdon","CursoCorto":"ElDivinodondelperdon","Tipo":"Virtual","Hora":"06:00 AM","Maestro":"Eder Silvera Rivas","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243229","LinkWhatsapp":"https://chat.whatsapp.com/KKY8bUZ3WAGIKwOsE3lIso","NombreImagen":"Eder"},
   {"Dia":"Sabado","Curso":"La Familia Eterna","CursoCorto":"LaFamiliaEterna","Tipo":"Virtual","Hora":"07:00 AM","Maestro":"Moises Mamani Molina","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243231","LinkWhatsapp":"https://chat.whatsapp.com/CxgFWLD6c9DBGeySFd7Uns","NombreImagen":"Moises"},
   {"Dia":"Sabado","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Presencial","Hora":"04:00 PM","Maestro":"Brillith Aricari","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243526","LinkWhatsapp":"https://chat.whatsapp.com/ByAARovWf4zEmZPzHMpWlc","NombreImagen":"Brillith"},
   {"Dia":"Sabado","Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","Tipo":"Virtual","Hora":"05:00 PM","Maestro":"Emanuel Rodriguez F","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1247714","LinkWhatsapp":"https://chat.whatsapp.com/DwpSYRU07ZnGDPJEro3sjR","NombreImagen":"Emanuel"},
   {"Dia":"Sabado","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Virtual","Hora":"05:00 PM","Maestro":"Fausto Aldo Gonzales Huamani","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1244982","LinkWhatsapp":"https://chat.whatsapp.com/HVOBoPQPAiV1fT8xKyfQ2i","NombreImagen":"Fausto"},
   {"Dia":"Sabado","Curso":"Doctrina y Convenios 1","CursoCorto":"DoctrinayConvenios1","Tipo":"Virtual","Hora":"05:00 PM","Maestro":"Sahara Jara Casazola","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243235","LinkWhatsapp":"https://chat.whatsapp.com/EPWzDpZrPrr9Cr3Vjlf4NN","NombreImagen":"Sahara"},
   {"Dia":"Sabado","Curso":"Las Parabolas de Jesus","CursoCorto":"LasParabolasdeJesus","Tipo":"Virtual","Hora":"05:00 PM","Maestro":"Scarlet Tineo","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243233","LinkWhatsapp":"https://chat.whatsapp.com/LVVlVCCoOXE8upaVhkRA6w","NombreImagen":"Scarlet"},
   {"Dia":"Sabado","Curso":"Antiguo Testamento - Ven Sigueme 2022","CursoCorto":"AntiguoTestamentoVenSigueme2022","Tipo":"Presencial","Hora":"05:30 PM","Maestro":"Luis Flores","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243541","LinkWhatsapp":"https://chat.whatsapp.com/IYmT7Oi3a7zDuavR7SWxwD","NombreImagen":"Luis"},
   {"Dia":"Sabado","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Presencial","Hora":"06:00 PM","Maestro":"Carlos Max Riva","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243530","LinkWhatsapp":"https://chat.whatsapp.com/GkULWnp98jlHrMlKJ7roeM","NombreImagen":"Carlos Riva"},
   {"Dia":"Sabado","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Virtual","Hora":"06:00 PM","Maestro":"Carlos Rojas Baltazar","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243238","LinkWhatsapp":"https://chat.whatsapp.com/J31MLGTVLBf0IzdlQL5yHL","NombreImagen":"Carlos Rojas"},
   {"Dia":"Sabado","Curso":"Preparemonos para un Matrimonio Eterno","CursoCorto":"PreparemonosparaunMatrimonioEterno","Tipo":"Presencial","Hora":"07:00 PM","Maestro":"Alex y Flor Arangoitia","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243537","LinkWhatsapp":"https://chat.whatsapp.com/C6KlXpbzAj0Efx71nnXFLj","NombreImagen":"Alex"},
   {"Dia":"Sabado","Curso":"Presidentes de la Iglesia","CursoCorto":"PresidentesdelaIglesia","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Diane Vargas","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243239","LinkWhatsapp":"https://chat.whatsapp.com/JTksG1JD1kWGpsHeIrP9i1","NombreImagen":"Diane"},
   {"Dia":"Sabado","Curso":"El Divino don del Perdon","CursoCorto":"ElDivinodondelPerdon","Tipo":"Presencial","Hora":"07:00 PM","Maestro":"Marvin Huertas","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243532","LinkWhatsapp":"https://chat.whatsapp.com/GdwT5YcogaQG5VD7TTElKZ","NombreImagen":"Marvin"},
   {"Dia":"Sabado","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Carmen Lazo","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243240","LinkWhatsapp":"https://chat.whatsapp.com/HwDu6C8PbkyJIJKGRHkhwT","NombreImagen":"Carmen"},
   {"Dia":"Sabado","Curso":"Coro","CursoCorto":"Coro","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Enrique Aramis Cordova Torres","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243179","LinkWhatsapp":"https://chat.whatsapp.com/JlXDPs7MbqZ0W0nSGWhX6L","NombreImagen":"Enrique"},
   {"Dia":"Sabado","Curso":"Enseñanzas y Doctrina del Libro de Mormon","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","Tipo":"Presencial","Hora":"08:00 PM","Maestro":"Gabriel Arturo Romero Perico","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243546","LinkWhatsapp":"https://chat.whatsapp.com/HmDiZGHNg71GexQ7dJwvzF","NombreImagen":"Gabriel"}
   ,
   {"Dia":"Sabado","Curso":"Escuchalo-Lecciones de vida y vida eterna","CursoCorto":"Escuchalo-Leccionesdevidayvidaeterna","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Luis Flores Leon","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243658","LinkWhatsapp":"https://chat.whatsapp.com/HHtSvRq1SHNCEqB76O4JfT","NombreImagen":"Luis"}
   ]
   
   ;
   