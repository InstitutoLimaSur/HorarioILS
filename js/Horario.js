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
{"Curso":"Antiguo Testamento - Ven Sigueme 2022","CursoCorto":"AntiguoTestamento-VenSigueme2022","DiasTipos":"MartesVirtual MiercolesPresencial SabadoPresencial","Dias":"Martes Miercoles Sabado","Tipos":"Virtual Presencial"},
{"Curso":"Antiguo Testamento 2","CursoCorto":"AntiguoTestamento2","DiasTipos":"MartesVirtual MartesPresencial MiercolesPresencial LunesVirtual","Dias":"Martes Miercoles Lunes","Tipos":"Virtual Presencial"},
{"Curso":"Coro","CursoCorto":"Coro","DiasTipos":"MartesPresencial","Dias":"Martes","Tipos":"Presencial"},
{"Curso":"Doctrina y Convenios 2","CursoCorto":"DoctrinayConvenios2","DiasTipos":"MiercolesVirtual","Dias":"Miercoles","Tipos":"Virtual"},
{"Curso":"Edifiquemos un Matrimonio Eterno","CursoCorto":"EdifiquemosunMatrimonioEterno","DiasTipos":"MartesVirtual","Dias":"Martes","Tipos":"Virtual"},
{"Curso":"El Divino don del perdon","CursoCorto":"ElDivinodondelperdon","DiasTipos":"MartesPresencial MartesVirtual ViernesVirtual","Dias":"Martes Viernes","Tipos":"Presencial Virtual"},
{"Curso":"El Evangelio y la Vida Productiva","CursoCorto":"ElEvangelioylaVidaProductiva","DiasTipos":"JuevesPresencial JuevesVirtual MiercolesVirtual","Dias":"Jueves Miercoles","Tipos":"Presencial Virtual"},
{"Curso":"Enseñanzas y Doctrina del Libro de Mormon","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","DiasTipos":"ViernesPresencial ViernesVirtual SabadoPresencial","Dias":"Viernes Sabado","Tipos":"Presencial Virtual"}
,
{"Curso":"Escuchalo-Lecciones de vida y vida eterna","CursoCorto":"Escuchalo-Leccionesdevidayvidaeterna","DiasTipos":"SabadoVirtual","Dias":"Sabado","Tipos":"Virtual"},
{"Curso":"Fundamentos de la Restauracion","CursoCorto":"FundamentosdelaRestauracion","DiasTipos":"MartesVirtual JuevesPresencial ViernesPresencial","Dias":"Martes Jueves Viernes","Tipos":"Virtual Presencial"},
{"Curso":"Historia Familiar","CursoCorto":"HistoriaFamiliar","DiasTipos":"MiercolesVirtual","Dias":"Miercoles","Tipos":"Virtual"},
{"Curso":"Jesucristo y el Evangelio Sempiterno","CursoCorto":"JesucristoyelEvangelioSempiterno","DiasTipos":"MartesPresencial JuevesPresencial JuevesVirtual MiercolesVirtual SabadoPresencial","Dias":"Martes Jueves Miercoles Sabado","Tipos":"Presencial Virtual"},
{"Curso":"La Familia Eterna","CursoCorto":"LaFamiliaEterna","DiasTipos":"JuevesPresencial JuevesVirtual ViernesVirtual SabadoVirtual SabadoPresencial","Dias":"Jueves Viernes Sabado","Tipos":"Presencial Virtual"},
{"Curso":"La fe no es ciega (curso nuevo)","CursoCorto":"Lafenoesciega(cursonuevo)","DiasTipos":"JuevesVirtual SabadoPresencial","Dias":"Jueves Sabado","Tipos":"Virtual Presencial"},
{"Curso":"Las Parabolas de Jesus","CursoCorto":"LasParabolasdeJesus","DiasTipos":"ViernesVirtual MiercolesPresencial SabadoVirtual","Dias":"Viernes Miercoles Sabado","Tipos":"Virtual Presencial"},
{"Curso":"Libro de Mormon 1","CursoCorto":"LibrodeMormon1","DiasTipos":"ViernesPresencial","Dias":"Viernes","Tipos":"Presencial"},
{"Curso":"Libro de Mormon 2","CursoCorto":"LibrodeMormon2","DiasTipos":"MartesVirtual JuevesVirtual ViernesVirtual MiercolesVirtual","Dias":"Martes Jueves Viernes Miercoles","Tipos":"Virtual"},
{"Curso":"Nuevo Testamento 2","CursoCorto":"NuevoTestamento2","DiasTipos":"JuevesVirtual JuevesPresencial ViernesVirtual MiercolesVirtual","Dias":"Jueves Viernes Miercoles","Tipos":"Virtual Presencial"},
{"Curso":"Preparemonos para un Matrimonio Eterno","CursoCorto":"PreparemonosparaunMatrimonioEterno","DiasTipos":"MartesPresencial MartesVirtual","Dias":"Martes","Tipos":"Presencial Virtual"},
{"Curso":"Presidentes de la Iglesia","CursoCorto":"PresidentesdelaIglesia","DiasTipos":"JuevesPresencial SabadoVirtual","Dias":"Jueves Sabado","Tipos":"Presencial Virtual"} ]
   ;


var Horarios =[
   {"Dia":"Lunes","Hora":"06:00 AM","Maestro":"Veronica Bardales Velasquez","Curso":"Antiguo Testamento 2","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/EeJIk9biHsMIisNYpYZGjK","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280336","CursoCorto":"AntiguoTestamento2","NombreImagen":"Veronica"},
   {"Dia":"Martes","Hora":"04:00 PM","Maestro":"Elizabeth Blanca Cuadros Loayza","Curso":"Antiguo Testamento 2","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/FbQJLrbGqtL3wYrahlCBLK","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280337","CursoCorto":"AntiguoTestamento2","NombreImagen":"Elizabeth"},
   {"Dia":"Martes","Hora":"07:00 PM","Maestro":"Liliana Tirado","Curso":"Antiguo Testamento 2","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/BzG9RZY5y5RJCucwpFMnhT","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280384","CursoCorto":"AntiguoTestamento2","NombreImagen":"Liliana"},
   {"Dia":"Martes","Hora":"07:00 PM","Maestro":"Rocio Reyes","Curso":"Jesucristo y el Evangelio Sempiterno","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/HrI39BQZGgJHxrHDR1j2Ru","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280387","CursoCorto":"JesucristoyelEvangelioSempiterno","NombreImagen":"Rocio"},
   {"Dia":"Martes","Hora":"07:00 PM","Maestro":"Marvin Huertas","Curso":"El Divino don del Perdon","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/GdwT5YcogaQG5VD7TTElKZ","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280390","CursoCorto":"ElDivinodondelPerdon","NombreImagen":"Marvin"},
   {"Dia":"Martes","Hora":"07:00 PM","Maestro":"Enrique Aramis Cordova Torres","Curso":"Coro","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/BifJa6CumuvLmw4dAI23w4","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280392","CursoCorto":"Coro","NombreImagen":"Enrique"},
   {"Dia":"Martes","Hora":"07:30 PM","Maestro":"Gian Pierre Lazo Chavez","Curso":"Fundamentos de la Restauracion","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/HPfXMQLbrtUAGrzJRrdsPj","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280338","CursoCorto":"FundamentosdelaRestauracion","NombreImagen":"Gian"},
   {"Dia":"Martes","Hora":"07:30 PM","Maestro":"Tarcila Ruiz Benites","Curso":"Preparemonos para un Matrimonio Eterno","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/FHvvYok9qFACH5uXVmCJMe","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280393","CursoCorto":"PreparemonosparaunMatrimonioEterno","NombreImagen":"Tarcila"},
   {"Dia":"Martes","Hora":"08:00 PM","Maestro":"Nancy Julca Urbina","Curso":"Preparemonos para un Matrimonio Eterno","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/F28BA5f5yamBSllzv6PrS4","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280339","CursoCorto":"PreparemonosparaunMatrimonioEterno","NombreImagen":"Nancy"},
   {"Dia":"Martes","Hora":"08:00 PM","Maestro":"Victor Calderon","Curso":"Antiguo Testamento - Ven Sigueme 2022","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/FbKvjj8mEIM1mZKgFpLmE5","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280340","CursoCorto":"AntiguoTestamento-VenSigueme2022","NombreImagen":"Victor"},
   {"Dia":"Martes","Hora":"08:00 PM","Maestro":"Kelvin Miranda","Curso":"Libro de Mormon 2","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/Hg6uoLX3AJH8QIiPwM2Y46","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280341","CursoCorto":"LibrodeMormon2","NombreImagen":"Kelvin"},
   {"Dia":"Martes","Hora":"08:00 PM","Maestro":"Sandra Tacza Lume","Curso":"El Divino don del perdon","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/HAyhQhlRoMO81PvPPRf4go","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280342","CursoCorto":"ElDivinodondelperdon","NombreImagen":"Sandra Tacza"},
   {"Dia":"Martes","Hora":"09:00 PM","Maestro":"David Gamboa","Curso":"Edifiquemos un Matrimonio Eterno","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/Eh5qSmD2ZNp5AT8Xbul658","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1286117","CursoCorto":"EdifiquemosunMatrimonioEterno","NombreImagen":"David"},
   {"Dia":"Miercoles","Hora":"05:00 PM","Maestro":"Scarlet Andreina Tineo Grillet","Curso":"El Evangelio y la Vida Productiva","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/I6ueiZvvNbw369Sx7EGXYj","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280350","CursoCorto":"ElEvangelioylaVidaProductiva","NombreImagen":"Scarlet"},
   {"Dia":"Miercoles","Hora":"06:30 PM","Maestro":"Jair Mariscal","Curso":"Las Parabolas de Jesus","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/F4mM1aQHvcV25e5uIFcIKw","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280436","CursoCorto":"LasParabolasdeJesus","NombreImagen":"Jair"},
   {"Dia":"Miercoles","Hora":"07:00 PM","Maestro":"Linda Medina Morales","Curso":"Jesucristo y el Evangelio Sempiterno","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/Kk7wHSctqPAC2XY0I9kOAb","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280347","CursoCorto":"JesucristoyelEvangelioSempiterno","NombreImagen":"Linda"},
   {"Dia":"Miercoles","Hora":"08:00 PM","Maestro":"Angel Alberto Mauricio Mamani","Curso":"Nuevo Testamento 2","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/DEs1G958uhmBz71uCWqfNB","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280353","CursoCorto":"NuevoTestamento2","NombreImagen":"Angel"},
   {"Dia":"Miercoles","Hora":"08:00 PM","Maestro":"Sahara Jara Casazola","Curso":"Doctrina y Convenios 2","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/LRFRXxsJFpl8Tc1a92ia5Q","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280354","CursoCorto":"DoctrinayConvenios2","NombreImagen":"Sahara"},
   {"Dia":"Miercoles","Hora":"08:00 PM","Maestro":"Fausto Aldo Gonzales Huamani","Curso":"Libro de Mormon 2","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/HVOBoPQPAiV1fT8xKyfQ2i","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1281525","CursoCorto":"LibrodeMormon2","NombreImagen":"Fausto"},
   {"Dia":"Miercoles","Hora":"08:00 PM","Maestro":"Luis Flores Leon","Curso":"Antiguo Testamento - Ven Sigueme 2022","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/LMcKEXDF0EZL6TahrerMj3","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1282112","CursoCorto":"AntiguoTestamento-VenSigueme2022","NombreImagen":"Luis"},
   {"Dia":"Miercoles","Hora":"08:30 PM","Maestro":"Kenny Quispitupac","Curso":"Antiguo Testamento 2","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/HjMBtAxDaYaDFboLgzYkum","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280446","CursoCorto":"AntiguoTestamento2","NombreImagen":"Kenny"},
   {"Dia":"Miercoles","Hora":"09:00 PM","Maestro":"Sandra Paola Pino Huaman","Curso":"Historia Familiar","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/I4DwCWzBush5SlZ9udyNJG","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280383","CursoCorto":"HistoriaFamiliar","NombreImagen":"Sandra Pino"},
   {"Dia":"Jueves","Hora":"04:00 PM","Maestro":"Elizabeth Blanca Cuadros Loayza","Curso":"Libro de Mormon 2","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/DQCoa39TjQt1nEMF1L2AEx","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280355","CursoCorto":"LibrodeMormon2","NombreImagen":"Elizabeth"},
   {"Dia":"Jueves","Hora":"04:30 PM","Maestro":"Miguel Ascarruz Vasquez","Curso":"Jesucristo y el Evangelio Sempiterno","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/EG4cQd7tj3LKIbGt96VQFe","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280579","CursoCorto":"JesucristoyelEvangelioSempiterno","NombreImagen":"Miguel Ascarruz"},
   {"Dia":"Jueves","Hora":"07:00 PM","Maestro":"Donato Condori","Curso":"El Evangelio y la Vida Productiva","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/ByOTCNbw3cqFMNm93cUour","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280437","CursoCorto":"ElEvangelioylaVidaProductiva","NombreImagen":"Donato"},
   {"Dia":"Jueves","Hora":"07:00 PM","Maestro":"Cesar Paulino","Curso":"La Familia Eterna","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/DrOdKIW6rLs4q4bySkMbqs","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280438","CursoCorto":"LaFamiliaEterna","NombreImagen":"Cesar Paulino"},
   {"Dia":"Jueves","Hora":"07:00 PM","Maestro":"Roberto Polanco","Curso":"Fundamentos de la Restauracion","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/ENIVncU6fv96X0GSkDGs6d","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280440","CursoCorto":"FundamentosdelaRestauracion","NombreImagen":"Roberto"},
   {"Dia":"Jueves","Hora":"07:30 PM","Maestro":"Francklin Gutierrez","Curso":"Libro de Mormon 2","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/C2P9aJVCw9l2yn1d3IJtv5","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280362","CursoCorto":"LibrodeMormon2","NombreImagen":"Francklin"},
   {"Dia":"Jueves","Hora":"07:30 PM","Maestro":"Carlos Rojas Baltazar","Curso":"Presidentes de la Iglesia","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/J31MLGTVLBf0IzdlQL5yHL","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280443","CursoCorto":"PresidentesdelaIglesia","NombreImagen":"Carlos Rojas"},
   {"Dia":"Jueves","Hora":"08:00 PM","Maestro":"Joshua Hidalgo","Curso":"Nuevo Testamento 2","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/BhVvgM98VQo2OwfHFU4QaC","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1284988","CursoCorto":"NuevoTestamento2","NombreImagen":"Joshua"},
   {"Dia":"Jueves","Hora":"08:00 PM","Maestro":"Areff Segovia","Curso":"El Evangelio y la Vida Productiva","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/Iqa7LSNMCW5IsWZNpQpVRt","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280582","CursoCorto":"ElEvangelioylaVidaProductiva","NombreImagen":"Areff"},
   {"Dia":"Jueves","Hora":"08:30 PM","Maestro":"Rudy Serna Cajaleon","Curso":"Jesucristo y el Evangelio Sempiterno","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/FpCouiPcJHPGCn88VlvsSl","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280366","CursoCorto":"JesucristoyelEvangelioSempiterno","NombreImagen":"Rudy"},
   {"Dia":"Jueves","Hora":"08:30 PM","Maestro":"Antonio Vera","Curso":"Nuevo Testamento 2","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/B8989MIQlVo648TBvde4A0","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280444","CursoCorto":"NuevoTestamento2","NombreImagen":"Antonio"},
   {"Dia":"Jueves","Hora":"09:00 PM","Maestro":"Lesseps Poul Gonzales Ravines","Curso":"La Familia Eterna","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/H558I7CElPCBH9odz4YnAD","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280367","CursoCorto":"LaFamiliaEterna","NombreImagen":"Lesseps"},
   {"Dia":"Jueves","Hora":"09:00 PM","Maestro":"Luis Flores Leon","Curso":"La fe no es ciega (curso nuevo)","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/GJvXa3pXkQM4QDNFRSTkCl","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1282686","CursoCorto":"Lafenoesciega(cursonuevo)","NombreImagen":"Luis"},
   {"Dia":"Viernes","Hora":"07:00 PM","Maestro":"Cesar Reyes","Curso":"Libro de Mormon 1","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/KyQxaAev9O5GILKLZ5wl5O","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280447","CursoCorto":"LibrodeMormon1","NombreImagen":"Cesar Reyes"},
   {"Dia":"Viernes","Hora":"07:30 PM","Maestro":"Carmen Lazo","Curso":"Libro de Mormon 2","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/HwDu6C8PbkyJIJKGRHkhwT","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280375","CursoCorto":"LibrodeMormon2","NombreImagen":"Carmen"},
   {"Dia":"Viernes","Hora":"08:00 PM","Maestro":"Carlos Alfredo Rodriguez Tito","Curso":"Nuevo Testamento 2","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/KzyppCwQixX7r0l0QGqnwW","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280368","CursoCorto":"NuevoTestamento2","NombreImagen":"Carlos Rodriguez"},
   {"Dia":"Viernes","Hora":"08:00 PM","Maestro":"Joana Muriell Oscorima Celis","Curso":"La Familia Eterna","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/E63UEsL6ozj3HhhlvLsXBP","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280369","CursoCorto":"LaFamiliaEterna","NombreImagen":"Joana"},
   {"Dia":"Viernes","Hora":"08:00 PM","Maestro":"Bruno Valdiviezo","Curso":"Las Parabolas de Jesus","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/FeWw9M9xz5WA6Glm6utPmj","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280376","CursoCorto":"LasParabolasdeJesus","NombreImagen":"Bruno"},
   {"Dia":"Viernes","Hora":"08:00 PM","Maestro":"Anyd Santillan","Curso":"Fundamentos de la Restauracion","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/LFE0GKCYbj20zxdE3GiRNm","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280449","CursoCorto":"FundamentosdelaRestauracion","NombreImagen":"Anyd"},
   {"Dia":"Viernes","Hora":"08:00 PM","Maestro":"Oskar Junchaya","Curso":"Enseñanzas y Doctrina del Libro de Mormon","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/H7cfo2OtgJkHdw3CwhEIMV","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1284989","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","NombreImagen":"Oskar"}
   ,
   {"Dia":"Viernes","Hora":"09:00 PM","Maestro":"Emanuel Rodriguez F","Curso":"El Divino don del perdon","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/IHcfO7EQ5P7A1NWUEgvYmG","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1281054","CursoCorto":"ElDivinodondelperdon","NombreImagen":"Emanuel"},
   {"Dia":"Viernes","Hora":"09:00 PM","Maestro":"Erick John Rojas Cornejo","Curso":"Enseñanzas y Doctrina del Libro de Mormon","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/BoaqO0elcCCHQkA95BAsqf","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280377","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","NombreImagen":"Erick"}
   ,
   {"Dia":"Sabado","Hora":"06:00:00 AM","Maestro":"Eder Silvera Rivas","Curso":"Las Parabolas de Jesus","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/Gc5sHHyUoM53wc1FmTrXFw","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280379","CursoCorto":"LasParabolasdeJesus","NombreImagen":"Eder"},
   {"Dia":"Sabado","Hora":"07:00:00 AM","Maestro":"Moises Mamani Molina","Curso":"La Familia Eterna","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/CxgFWLD6c9DBGeySFd7Uns","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280380","CursoCorto":"LaFamiliaEterna","NombreImagen":"Moises"},
   {"Dia":"Sabado","Hora":"08:00:00 AM","Maestro":"Vladimir Chavez Vara","Curso":"Enseñanzas y Doctrina del Libro de Mormon","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/DAaJmaKjeExKfgNsz4Ve6p","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280451","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","NombreImagen":"Vladimir"}
   ,
   {"Dia":"Sabado","Hora":"04:00 PM","Maestro":"Brillith Aricari","Curso":"Enseñanzas y Doctrina del Libro de Mormon","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/Cphtq3A6AToDlMCc41NzeU","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1281055","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormon","NombreImagen":"Brillith"}
   ,
   {"Dia":"Sabado","Hora":"04:00 PM","Maestro":"Miguel Pinto","Curso":"Jesucristo y el Evangelio Sempiterno","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/GbVuoXeDwiCCtw5LM2VjyX","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280439","CursoCorto":"JesucristoyelEvangelioSempiterno","NombreImagen":"Miguel Pinto"},
   {"Dia":"Sabado","Hora":"05:30 PM","Maestro":"Luis Flores","Curso":"Antiguo Testamento - Ven Sigueme 2022","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/IYmT7Oi3a7zDuavR7SWxwD","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1282113","CursoCorto":"AntiguoTestamento-VenSigueme2022","NombreImagen":"Luis"},
   {"Dia":"Sabado","Hora":"07:00 PM","Maestro":"Diane Vargas","Curso":"Presidentes de la Iglesia","Tipo":"Virtual","LinkInscripcion":"https://chat.whatsapp.com/JTksG1JD1kWGpsHeIrP9i1","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280382","CursoCorto":"PresidentesdelaIglesia","NombreImagen":"Diane"},
   {"Dia":"Sabado","Hora":"07:00 PM","Maestro":"Alex y Flor Arangoitia","Curso":"La Familia Eterna","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/JbdZtPzU67uHQGvuuXxPpH","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1280454","CursoCorto":"LaFamiliaEterna","NombreImagen":"Alex"},
   {"Dia":"Sabado","Hora":"08:00 PM","Maestro":"Luis Flores Leon","Curso":"La fe no es ciega (curso nuevo)","Tipo":"Presencial","LinkInscripcion":"https://chat.whatsapp.com/HHtSvRq1SHNCEqB76O4JfT","LinkWhatsapp":"https://myinstitute.churchofjesuschrist.org/classes?add=1282687","CursoCorto":"Lafenoesciega(cursonuevo)","NombreImagen":"Luis"},
   {"Dia":"Sabado","Hora":"08:00 PM","Maestro":"Luis Flores Leon","Curso":"Escuchalo-Lecciones de vida y vida eterna","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1243658","LinkWhatsapp":"https://chat.whatsapp.com/HHtSvRq1SHNCEqB76O4JfT","CursoCorto":"Escuchalo-Leccionesdevidayvidaeterna","NombreImagen":"Luis"}
   ]   
   ;
   