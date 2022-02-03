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
   {"Curso":"Antiguo Testamento - Ven Sigueme 2022","CursoCorto":"AntiguoTestamento-VenSigueme2022","DiasTipos":"LunesVirtual MartesVirtual JuevesVirtual ViernesPresencial SabadoVirtual","Dias":"Lunes Martes Jueves Viernes Sabado","Tipos":"Virtual Presencial"},
   {"Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","DiasTipos":"SabadoVirtual","Dias":"Sabado","Tipos":"Virtual"},
   {"Curso":"Coro","CursoCorto":"Coro","DiasTipos":"SabadoVirtual","Dias":"Sabado","Tipos":"Virtual"},
   {"Curso":"Doctrina y Convenios 1","CursoCorto":"DoctrinayConvenios1","DiasTipos":"MartesVirtual ViernesPresencial MiercolesVirtual SabadoVirtual","Dias":"Martes Viernes Miercoles Sabado","Tipos":"Virtual Presencial"},
   {"Curso":"El Divino don del Perdon","CursoCorto":"ElDivinoDondelPerdon","DiasTipos":"MiercolesVirtual","Dias":"Miercoles","Tipos":"Virtual"},
   {"Curso":"El Evangelio y la Vida Productiva","CursoCorto":"ElEvangelioylaVidaProductiva","DiasTipos":"JuevesVirtual ViernesPresencial SabadoPresencial","Dias":"Jueves Viernes Sabado","Tipos":"Virtual Presencial"},
   {"Curso":"Enseñanzas y Doctrina del Libro de Mormon","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","DiasTipos":"JuevesPresencial SabadoPresencial","Dias":"Jueves Sabado","Tipos":"Virtual Presencial"}
   ,
   {"Curso":"Escuchalo-Lecciones de vida y vida eterna","CursoCorto":"Escuchalo-Leccionesdevidayvidaeterna","DiasTipos":"MartesVirtual JuevesVirtual","Dias":"Martes Jueves","Tipos":"Virtual"},
   {"Curso":"Fundamentos de la Restauracion","CursoCorto":"FundamentosdelaRestauracion","DiasTipos":"MartesVirtual","Dias":"Martes","Tipos":"Virtual"},
   {"Curso":"Himnos de los Santos de los Ultimos Dias","CursoCorto":"HimnosdelosSantosdelosUltimosDias","DiasTipos":"ViernesPresencial","Dias":"Viernes","Tipos":"Presencial"},
   {"Curso":"Historia de los Santos","CursoCorto":"HistoriadelosSantos","DiasTipos":"ViernesPresencial","Dias":"Viernes","Tipos":"Presencial"},
   {"Curso":"Historia Familiar","CursoCorto":"HistoriaFamiliar","DiasTipos":"MartesVirtual JuevesVirtual MiercolesVirtual","Dias":"Martes Jueves Miercoles","Tipos":"Virtual"},
   {"Curso":"Jesucristo y el Evangelio Sempiterno","CursoCorto":"JesucristoyelEvangelioSempiterno","DiasTipos":"JuevesVirtual ViernesPresencial SabadoPresencial","Dias":"Jueves Viernes Sabado","Tipos":"Virtual Presencial"},
   {"Curso":"La Familia Eterna","CursoCorto":"LaFamiliaEterna","DiasTipos":"JuevesVirtual","Dias":"Jueves","Tipos":"Virtual"},
   {"Curso":"La Perla de gran precio","CursoCorto":"LaPerladegranprecio","DiasTipos":"JuevesVirtual","Dias":"Jueves","Tipos":"Virtual"},
   {"Curso":"Las Mujeres de las escrituras","CursoCorto":"LasMujeresdelasescrituras","DiasTipos":"JuevesVirtual MiercolesVirtual SabadoPresencial","Dias":"Jueves Miercoles Sabado","Tipos":"Virtual Presencial"},
   {"Curso":"Las Parabolas de Jesus","CursoCorto":"LasParabolasdeJesus","DiasTipos":"MartesVirtual JuevesVirtual MiercolesVirtual SabadoPresencial","Dias":"Martes Jueves Miercoles Sabado","Tipos":"Virtual Presencial"},
   {"Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","DiasTipos":"ViernesPresencial","Dias":"Viernes","Tipos":"Presencial"},
   {"Curso":"Nuevo Testamento 1","CursoCorto":"NuevoTestamento1","DiasTipos":"MartesVirtual SabadoPresencial","Dias":"Martes Sabado","Tipos":"Virtual Presencial"},
   {"Curso":"Preparemonos para un Matrimonio Eterno","CursoCorto":"PreparemonosparaunMatrimonioEterno","DiasTipos":"SabadoPresencial","Dias":"Sabado","Tipos":"Presencial"},
   {"Curso":"Presidentes de la Iglesia","CursoCorto":"PresidentesdelaIglesia","DiasTipos":"ViernesPresencial","Dias":"Viernes","Tipos":"Presencial"},
   {"Curso":"Principios de Liderazgo","CursoCorto":"PrincipiosdeLiderazgo","DiasTipos":"ViernesPresencial","Dias":"Viernes","Tipos":"Presencial"}
   ]
   ;


var Horarios = [
   {"Dia":"Lunes","Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","Tipo":"Virtual","Hora":"06:00 AM","Maestro":"Veronica Bardales Velasquez","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243146","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/LMcKEXDF0EZL6TahrerMj3","NombreImagen":"Veronica"},
   {"Dia":"Martes","Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","Tipo":"Virtual","Hora":"04:00 PM","Maestro":"Elizabeth Blanca Cuadros Loayza","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243149","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/C2P9aJVCw9l2yn1d3IJtv5","NombreImagen":"Elizabeth"},
   {"Dia":"Martes","Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Liliana Tirado","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243241","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/Gzpqr7dPEqg8kkhddVOj45","NombreImagen":"Liliana"},
   {"Dia":"Martes","Curso":"El Divino don del Perdon","CursoCorto":"ElDivinoDondelPerdon","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Rocio Reyes","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243244","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/DxlnyPZqWGg7XAtYroqXv0","NombreImagen":"Rocio"},
   {"Dia":"Martes","Curso":"Himnos de los Santos de los Ultimos Dias","CursoCorto":"HimnosdelosSantosdelosUltimosDias","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Ana Lucia Aguilar","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243180","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/GJvXa3pXkQM4QDNFRSTkCl","NombreImagen":"Ana"},
   {"Dia":"Martes","Curso":"Fundamentos de la Restauracion","CursoCorto":"FundamentosdelaRestauracion","Tipo":"Virtual","Hora":"07:30 PM","Maestro":"Gian Pierre Lazo Chavez","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243651","Enlace de grupo WhatsApp":"","NombreImagen":"Gian"},
   {"Dia":"Martes","Curso":"Antiguo Testamento - Ven Sigueme 2022","CursoCorto":"AntiguoTestamento-VenSigueme2022","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Victor Calderon","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243155","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/Gth0FefhpbnGKTUrCaHHgC","NombreImagen":"Victor"},
   {"Dia":"Martes","Curso":"Jesucristo y el Evangelio Sempiterno","CursoCorto":"JesucristoyelEvangelioSempiterno","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Sandra Tacza Lume","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243182","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/KzyppCwQixX7r0l0QGqnwW","NombreImagen":"Sandra"},
   {"Dia":"Martes","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Kelvin Miranda","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243157","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/KLale04m9zmGD1ku5fgSkT","NombreImagen":"Kelvin"},
   {"Dia":"Martes","Curso":"Preparemonos para un Matrimonio Eterno","CursoCorto":"PreparemonosparaunMatrimonioEterno","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Nancy Julca Urbina","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243151","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/ETDUvaoi2jyL1gS9S2eC7p","NombreImagen":"Nancy"},
   {"Dia":"Miercoles","Curso":"El Divino don del Perdon","CursoCorto":"ElDivinoDondelPerdon","Tipo":"Virtual","Hora":"06:00 PM","Maestro":"Jair Mariscal","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243245","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/KKY8bUZ3WAGIKwOsE3lIso","NombreImagen":"Jair"},
   {"Dia":"Miercoles","Curso":"El Divino don del perdon","CursoCorto":"ElDivinoDondelperdon","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Pedro Nuñez","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243159","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/I4DwCWzBush5SlZ9udyNJG","NombreImagen":"Pedro"}
   ,
   {"Dia":"Miercoles","Curso":"El Evangelio y la Vida Productiva","CursoCorto":"ElEvangelioylaVidaProductiva","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Donato Condori","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243246","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/CxgFWLD6c9DBGeySFd7Uns","NombreImagen":"Donato"},
   {"Dia":"Miercoles","Curso":"Las Parabolas de Jesus","CursoCorto":"LasParabolasdeJesus","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Linda Medina Morales","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243161","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/EPWzDpZrPrr9Cr3Vjlf4NN","NombreImagen":"Linda"},
   {"Dia":"Miercoles","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Jhair Alonso Pulido Gomez","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1244792","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/DwpSYRU07ZnGDPJEro3sjR","NombreImagen":"Jhair"},
   {"Dia":"Miercoles","Curso":"Jesucristo y el Evangelio Sempiterno","CursoCorto":"JesucristoyelEvangelioSempiterno","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Carlos Alberto Pujay Ortiz","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243163","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/LVVlVCCoOXE8upaVhkRA6w","NombreImagen":"Carlos"},
   {"Dia":"Miercoles","Curso":"Antiguo Testamento - Ven Sigueme 2022","CursoCorto":"AntiguoTestamento-VenSigueme2022","Tipo":"Virtual","Hora":"8:30 p. m","Maestro":"Luis Flores Leon","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243173","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/DO9P9Hldaa05grEiXd4VGj","NombreImagen":"Luis"},
   {"Dia":"Jueves","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Virtual","Hora":"04:00 PM","Maestro":"Elizabeth Blanca Cuadros Loayza","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243174","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/IDOMLrOxZonEOzBS1iDK6Z","NombreImagen":"Elizabeth"},
   {"Dia":"Jueves","Curso":"Enseñanzas y Doctrina del Libro de Mormon","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","Tipo":"Presencial","Hora":"07:00 PM","Maestro":"Miguel Pinto","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243528","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/F79bKnIcj6qEc5ZqVBRxq3","NombreImagen":"Miguel"}
   ,
   {"Dia":"Jueves","Curso":"Fundamentos de la Restauracion","CursoCorto":"FundamentosdelaRestauracion","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Rennys Lopez","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243500","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/HPfXMQLbrtUAGrzJRrdsPj","NombreImagen":"Rennys"},
   {"Dia":"Jueves","Curso":"Jesucristo y el Evangelio Sempiterno","CursoCorto":"JesucristoyelEvangelioSempiterno","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Roberto Polanco","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243497","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/FbKvjj8mEIM1mZKgFpLmE5","NombreImagen":"Roberto"},
   {"Dia":"Jueves","Curso":"La Familia Eterna","CursoCorto":"LaFamiliaEterna","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Cesar Paulino","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243495","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/Hg6uoLX3AJH8QIiPwM2Y46","NombreImagen":"Cesar"},
   {"Dia":"Jueves","Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","Tipo":"Virtual","Hora":"07:30 PM","Maestro":"Kenny Quispitupac","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243499","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/CSYZlFJGKFA6fpWydKORYx","NombreImagen":"Kenny"},
   {"Dia":"Jueves","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Virtual","Hora":"07:30 PM","Maestro":"Francklin Gutierrez","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243176","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/DzNXY7ZmPpkA78Zc7Uqr7X","NombreImagen":"Francklin"},
   {"Dia":"Jueves","Curso":"La Perla de gran precio","CursoCorto":"LaPerladegranprecio","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Antonio Vera","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243503","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/HAyhQhlRoMO81PvPPRf4go","NombreImagen":"Antonio"},
   {"Dia":"Jueves","Curso":"Las Mujeres de las escrituras","CursoCorto":"LasMujeresdelasescrituras","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Rudy Serna Cajaleon","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243211","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/KkZcarglRG9KzvrLDbpAv7","NombreImagen":"Rudy"},
   {"Dia":"Jueves","Curso":"Las Parabolas de Jesus","CursoCorto":"LasParabolasdeJesus","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Areff Segovia","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243210","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/HEpdzO48B3XDLgREbWZAGL","NombreImagen":"Areff"},
   {"Dia":"Jueves","Curso":"Escuchalo-Lecciones de vida y vida eterna","CursoCorto":"Escuchalo-Leccionesdevidayvidaeterna","Tipo":"Virtual","Hora":"09:00 PM","Maestro":"Luis Flores Leon","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243656","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/ChhrHIVbq4Y9AO0rML1ZOm","NombreImagen":"Luis"},
   {"Dia":"Jueves","Curso":"Jesucristo y el Evangelio Sempiterno","CursoCorto":"JesucristoyelEvangelioSempiterno","Tipo":"Virtual","Hora":"09:00 PM","Maestro":"Angel Alberto Mauricio Mamani","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243214","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/F28BA5f5yamBSllzv6PrS4","NombreImagen":"Angel"},
   {"Dia":"Viernes","Curso":"El Divino don del Perdon","CursoCorto":"ElDivinoDondelPerdon","Tipo":"Presencial","Hora":"07:00 PM","Maestro":"Cesar Reyes","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243509","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/BkjDgXM99Q2E4JYWvYQXzu","NombreImagen":"Cesar"},
   {"Dia":"Viernes","Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","Tipo":"Presencial","Hora":"08:00 PM","Maestro":"Bruno Valdiviezo","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243519","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/FeWw9M9xz5WA6Glm6utPmj","NombreImagen":"Bruno"},
   {"Dia":"Viernes","Curso":"Enseñanzas y Doctrina del Libro de Mormon","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","Tipo":"Presencial","Hora":"08:00 PM","Maestro":"Miguel Ascarruz Vasquez","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243824","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/LCMXRGj1P3M45fTbdh79To","NombreImagen":"Miguel"}
   ,
   {"Dia":"Viernes","Curso":"Historia de los Santos","CursoCorto":"HistoriadelosSantos","Tipo":"Presencial","Hora":"08:00 PM","Maestro":"Leonid Quispe","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243218","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/IYmT7Oi3a7zDuavR7SWxwD","NombreImagen":"Leonid"},
   {"Dia":"Viernes","Curso":"La Familia Eterna","CursoCorto":"LaFamiliaEterna","Tipo":"Presencial","Hora":"08:00 PM","Maestro":"Anyd Santillan","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243522","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/GdwT5YcogaQG5VD7TTElKZ","NombreImagen":"Anyd"},
   {"Dia":"Viernes","Curso":"Nuevo Testamento 1","CursoCorto":"NuevoTestamento1","Tipo":"Presencial","Hora":"08:00 PM","Maestro":"Carlos Alfredo Rodriguez Tito","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243217","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/C6KlXpbzAj0Efx71nnXFLj","NombreImagen":"Carlos"},
   {"Dia":"Viernes","Curso":"Historia Familiar","CursoCorto":"HistoriaFamiliar","Tipo":"Presencial","Hora":"09:00 PM","Maestro":"Ivan Briceño Castro","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243219","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/GkULWnp98jlHrMlKJ7roeM","NombreImagen":"Ivan"}
   ,
   {"Dia":"Viernes","Curso":"Principios de Liderazgo","CursoCorto":"PrincipiosdeLiderazgo","Tipo":"Presencial","Hora":"09:00 PM","Maestro":"Sandra Paola Pino Huaman","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243224","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/HmDiZGHNg71GexQ7dJwvzF","NombreImagen":"Sandra"},
   {"Dia":"Sabado","Curso":"El Divino don del perdon","CursoCorto":"ElDivinoDondelperdon","Tipo":"Virtual","Hora":"06:00 AM","Maestro":"Eder Silvera Rivas","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243229","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/JlXDPs7MbqZ0W0nSGWhX6L","NombreImagen":"Eder"},
   {"Dia":"Sabado","Curso":"La Familia Eterna","CursoCorto":"LaFamiliaEterna","Tipo":"Presencial","Hora":"07:00 AM","Maestro":"Moises Mamani Molina","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243231","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/F4mM1aQHvcV25e5uIFcIKw","NombreImagen":"Moises"},
   {"Dia":"Sabado","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Presencial","Hora":"04:00 PM","Maestro":"Brillith Aricari","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243526","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/ByAARovWf4zEmZPzHMpWlc","NombreImagen":"Brillith"},
   {"Dia":"Sabado","Curso":"Antiguo Testamento 1","CursoCorto":"AntiguoTestamento1","Tipo":"Virtual","Hora":"05:00 PM","Maestro":"Emanuel Rodriguez F","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1247714","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/J31MLGTVLBf0IzdlQL5yHL","NombreImagen":"Emanuel"},
   {"Dia":"Sabado","Curso":"Doctrina y Convenios 1","CursoCorto":"DoctrinayConvenios1","Tipo":"Virtual","Hora":"05:00 PM","Maestro":"Sahara Jara Casazola","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243235","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/HHtSvRq1SHNCEqB76O4JfT","NombreImagen":"Sahara"},
   {"Dia":"Sabado","Curso":"Las Parabolas de Jesus","CursoCorto":"LasParabolasdeJesus","Tipo":"Presencial","Hora":"05:00 PM","Maestro":"Scarlet Tineo","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243233","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/ByOTCNbw3cqFMNm93cUour","NombreImagen":"Scarlet"},
   {"Dia":"Sabado","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Presencial","Hora":"05:00 PM","Maestro":"Fausto Aldo Gonzales Huamani","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1244982","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/BRZZo6ZHhDyF1DdrLXnq4T","NombreImagen":"Fausto"},
   {"Dia":"Sabado","Curso":"Antiguo Testamento - Ven Sigueme 2022","CursoCorto":"AntiguoTestamento-VenSigueme2022","Tipo":"Virtual","Hora":"05:30 PM","Maestro":"Luis Flores","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243541","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/HVOBoPQPAiV1fT8xKyfQ2i","NombreImagen":"Luis"},
   {"Dia":"Sabado","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Presencial","Hora":"06:00 PM","Maestro":"Carlos Rojas Baltazar","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243238","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/KCt6XRTKVwPKbVCg8lvCey","NombreImagen":"Carlos"},
   {"Dia":"Sabado","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Presencial","Hora":"06:00 PM","Maestro":"Carlos Max Riva","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243530","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/KXhCQGsEhuUItZP3CHjLOF","NombreImagen":"Carlos"},
   {"Dia":"Sabado","Curso":"El Divino don del Perdon","CursoCorto":"ElDivinoDondelPerdon","Tipo":"Virtual","Hora":"07:00 PM","Maestro":"Marvin Huertas","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243532","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/HwDu6C8PbkyJIJKGRHkhwT","NombreImagen":"Marvin"},
   {"Dia":"Sabado","Curso":"Preparemonos para un Matrimonio Eterno","CursoCorto":"PreparemonosparaunMatrimonioEterno","Tipo":"Presencial","Hora":"07:00 PM","Maestro":"Alex y Flor Arangoitia","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243537","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/B8989MIQlVo648TBvde4A0","NombreImagen":"Alex"},
   {"Dia":"Sabado","Curso":"Presidentes de la Iglesia","CursoCorto":"PresidentesdelaIglesia","Tipo":"Presencial","Hora":"07:00 PM","Maestro":"Diane Vargas","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243239","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/KyQxaAev9O5GILKLZ5wl5O","NombreImagen":"Diane"},
   {"Dia":"Sabado","Curso":"Coro","CursoCorto":"Coro","Tipo":"Virtual","Hora":"08:00 PM","Maestro":"Enrique Aramis Cordova Torres","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243179","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/JTksG1JD1kWGpsHeIrP9i1","NombreImagen":"Enrique"},
   {"Dia":"Sabado","Curso":"Enseñanzas y Doctrina del Libro de Mormon","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","Tipo":"Presencial","Hora":"08:00 PM","Maestro":"Gabriel Arturo Romero Perico","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243546","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/BzG9RZY5y5RJCucwpFMnhT","NombreImagen":"Gabriel"}
   ,
   {"Dia":"Sabado","Curso":"Escuchalo-Lecciones de vida y vida eterna","CursoCorto":"Escuchalo-Leccionesdevidayvidaeterna","Tipo":"Presencial","Hora":"08:00 PM","Maestro":"Luis Flores Leon","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243658","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/HrI39BQZGgJHxrHDR1j2Ru","NombreImagen":"Luis"},
   {"Dia":"Sabado","Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","Tipo":"Presencial","Hora":"08:00 PM","Maestro":"Carmen Lazo","Enlace Myinstitute":"https://myinstitute.churchofjesuschrist.org/classes?add=1243240","Enlace de grupo WhatsApp":"https://chat.whatsapp.com/KfunV3ZI1Q7GxgYtTsRL9C","NombreImagen":"Carmen"}
   ]
   ;
   