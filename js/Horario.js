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
{"Curso":"Antiguo Testamento - Ven Sigueme 2022","CursoCorto":"AntiguoTestamento-VenSigueme2022","DiasTipos":"SabadoPresencial","Dias":"Sabado","Tipos":"Presencial"},
{"Curso":"Book of Mormon (clase en Ingles) 1A","CursoCorto":"BookofMormon(claseenIngles)1A","DiasTipos":"JuevesPresencial","Dias":"Jueves","Tipos":"Presencial"},
{"Curso":"Doctrina del Evangelio B","CursoCorto":"DoctrinadelEvangelioB","DiasTipos":"ViernesPresencial","Dias":"Viernes","Tipos":"Presencial"},
{"Curso":"Doctrina y Convenios 2 B","CursoCorto":"DoctrinayConvenios2B","DiasTipos":"MiercolesPresencial","Dias":"Miercoles","Tipos":"Presencial"},
{"Curso":"El Divino Don del Perdon A","CursoCorto":"ElDivinoDondelPerdonParteA","DiasTipos":"ViernesVirtual","Dias":"Viernes","Tipos":"Virtual Presencial"},
{"Curso":"El Evangelio y La Vida Productiva B","CursoCorto":"ElEvangelioyLaVidaProductivaB","DiasTipos":"SabadoPresencial JuevesPresencial","Dias":"Sabado Jueves","Tipos":"Presencial"},
{"Curso":"Enseñanzas y Doctrina del Libro de Mormon B","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormonB","DiasTipos":"ViernesPresencial","Dias":"Viernes","Tipos":"Presencial"}
,
{"Curso":"Estudio de las Escrituras A","CursoCorto":"EstudiodelasEscriturasA","DiasTipos":"SabadoPresencial","Dias":"Sabado","Tipos":"Presencial"},
{"Curso":"Fundamentos de la Restauracion B","CursoCorto":"FundamentosdelaRestauracionB","DiasTipos":"SabadoVirtual","Dias":"Sabado","Tipos":"Presencial Virtual"},
{"Curso":"Historia de los Santos 1 A","CursoCorto":"HistoriadelosSantos1A","DiasTipos":"LunesVirtual","Dias":"Lunes","Tipos":"Virtual"},
{"Curso":"Jesucristo y el Evangelio Sempiterno B","CursoCorto":"JesucristoyelEvangelioSempiternoB","DiasTipos":"MartesVirtual","Dias":"Martes","Tipos":"Presencial Virtual"},
{"Curso":"La Familia Eterna B","CursoCorto":"LaFamiliaEternaB","DiasTipos":"SabadoPresencial","Dias":"Sabado","Tipos":"Presencial Virtual"},
{"Curso":"Las Mujeres de las Escrituras B","CursoCorto":"LasMujeresdelasEscriturasB","DiasTipos":"MiercolesVirtual","Dias":"Miercoles","Tipos":"Virtual Presencial"},
{"Curso":"Las Parabolas de Jesus B","CursoCorto":"LasParabolasdeJesusB","DiasTipos":"MartesPresencial","Dias":"Martes","Tipos":"Virtual Presencial"},
{"Curso":"Libro de Mormon 1 A","CursoCorto":"LibrodeMormon1A","DiasTipos":"ViernesVirtual","Dias":"Viernes","Tipos":"Presencial Virtual"},
{"Curso":"Nuevo Testamento 1 A","CursoCorto":"NuevoTestamento1A","DiasTipos":"MiercolesVirtual","Dias":"Miercoles","Tipos":"Virtual"},
{"Curso":"Preparemonos para un Matrimonio Eterno B","CursoCorto":"PreparemonosparaunMatrimonioEternoB","DiasTipos":"JuevesPresencial","Dias":"Jueves","Tipos":"Virtual Presencial"},
{"Curso":"Presidentes de la Iglesia B","CursoCorto":"PresidentesdelaIglesiaB","DiasTipos":"MiercolesVirtual","Dias":"Miercoles","Tipos":"Virtual"},
{"Curso":"Responder mis preguntas del Evangelio A","CursoCorto":"RespondermispreguntasdelEvangelioA","DiasTipos":"SabadoPresencial","Dias":"Sabado","Tipos":"Presencial"},
{"Curso":"Responder mis preguntas del Evangelio B","CursoCorto":"RespondermispreguntasdelEvangelioB","DiasTipos":"ViernesPresencial","Dias":"Viernes","Tipos":"Virtual Presencial"} ]
   ;


var Horarios =[
   {"Dia":"Lunes","Hora":"06:00:00 AM","Maestro":"Veronica Bardales Velasquez","Curso":"Historia de los Santos 1 A","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334594","LinkWhatsapp":"https://chat.whatsapp.com/EyUTgEoteak5PLCrMWgbNZ","CursoCorto":"HistoriadelosSantos1A","NombreImagen":"Veronica"},
   {"Dia":"Martes","Hora":"04:00:00 PM","Maestro":"Elizabeth Blanca Cuadros Loayza","Curso":"Nuevo Testamento 1 A","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334595","LinkWhatsapp":"https://chat.whatsapp.com/Dikoquo1Bh7FFq1JmCcyzN","CursoCorto":"NuevoTestamento1A","NombreImagen":"Elizabeth"},
   {"Dia":"Martes","Hora":"06:00:00 PM","Maestro":"Angelo Oscar Mauricio Cribillero","Curso":"Las Parabolas de Jesus B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334629","LinkWhatsapp":"https://chat.whatsapp.com/CwC8yKmjRE2GcBq6SSin71","CursoCorto":"LasParabolasdeJesusB","NombreImagen":"Angelo"},
   {"Dia":"Martes","Hora":"06:30:00 PM","Maestro":"Sandra Tacza Lume","Curso":"Preparemonos para un Matrimonio Eterno B","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334613","LinkWhatsapp":"https://chat.whatsapp.com/LPC1F576W3CFRMPD8ewksL","CursoCorto":"PreparemonosparaunMatrimonioEternoB","NombreImagen":"Sandra Tacza Lume"},
   {"Dia":"Martes","Hora":"07:00:00 PM","Maestro":"Nancy Julca Urbina","Curso":"Preparemonos para un Matrimonio Eterno B","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334597","LinkWhatsapp":"https://chat.whatsapp.com/F28BA5f5yamBSllzv6PrS4","CursoCorto":"PreparemonosparaunMatrimonioEternoB","NombreImagen":"Nancy"},
   {"Dia":"Martes","Hora":"07:30:00 PM","Maestro":"Angelo Oscar Mauricio Cribillero","Curso":"El Divino Don del Perdon A","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334630","LinkWhatsapp":"https://chat.whatsapp.com/CSADuFWF2qz5kaMirTbcKJ","CursoCorto":"ElDivinoDondelPerdonParteA","NombreImagen":"Angelo"},
   {"Dia":"Martes","Hora":"08:00:00 PM","Maestro":"Victor Calderon","Curso":"Antiguo Testamento - Ven Sigueme 2022","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334666","LinkWhatsapp":"https://chat.whatsapp.com/FbKvjj8mEIM1mZKgFpLmE5","CursoCorto":"AntiguoTestamento-VenSigueme2022","NombreImagen":"Victor"},
   {"Dia":"Martes","Hora":"08:00:00 PM","Maestro":"Valeria Duerto","Curso":"Jesucristo y el Evangelio Sempiterno B","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334598","LinkWhatsapp":"https://chat.whatsapp.com/Hg6uoLX3AJH8QIiPwM2Y46","CursoCorto":"JesucristoyelEvangelioSempiternoB","NombreImagen":"Valeria"},
   {"Dia":"Martes","Hora":"08:00:00 PM","Maestro":"Eder Silvera Rivas","Curso":"Las Mujeres de las Escrituras B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334668","LinkWhatsapp":"https://chat.whatsapp.com/CahZYTAyH64JgXZUL6l4pB","CursoCorto":"LasMujeresdelasEscriturasB","NombreImagen":"Eder"},
   {"Dia":"Miercoles","Hora":"06:00:00 AM","Maestro":"Marly Julieth Rojas Zapata","Curso":"Las Mujeres de las Escrituras B","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334599","LinkWhatsapp":"https://chat.whatsapp.com/IFvcHVU3PQ2BF67n2DPagr","CursoCorto":"LasMujeresdelasEscriturasB","NombreImagen":"Marly"},
   {"Dia":"Miercoles","Hora":"06:30:00 PM","Maestro":"Jair Mariscal","Curso":"Doctrina y Convenios 2 B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334633","LinkWhatsapp":"https://chat.whatsapp.com/F4mM1aQHvcV25e5uIFcIKw","CursoCorto":"DoctrinayConvenios2B","NombreImagen":"Jair"},
   {"Dia":"Miercoles","Hora":"07:00:00 PM","Maestro":"Linda Gamboa Medina","Curso":"Las Mujeres de las Escrituras B","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334600","LinkWhatsapp":"https://chat.whatsapp.com/Kk7wHSctqPAC2XY0I9kOAb","CursoCorto":"LasMujeresdelasEscriturasB","NombreImagen":"Linda"},
   {"Dia":"Miercoles","Hora":"07:00:00 PM","Maestro":"Anthony Travi","Curso":"Libro de Mormon 1 A","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1335081","LinkWhatsapp":"https://chat.whatsapp.com/J8kDBFi8CPzKPXuEpNcUlh","CursoCorto":"LibrodeMormon1A","NombreImagen":"Anthony"},
   {"Dia":"Miercoles","Hora":"08:00:00 PM","Maestro":"Luis Flores Leon","Curso":"Antiguo Testamento - Ven Sigueme 2022","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334670","LinkWhatsapp":"https://chat.whatsapp.com/LMcKEXDF0EZL6TahrerMj3","CursoCorto":"AntiguoTestamento-VenSigueme2022","NombreImagen":"Luis"},
   {"Dia":"Miercoles","Hora":"08:00:00 PM","Maestro":"Francklin Gutierrez","Curso":"Fundamentos de la Restauracion B","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1335085","LinkWhatsapp":"https://chat.whatsapp.com/DXDbtu7TioHHV5AVs1aTgs","CursoCorto":"FundamentosdelaRestauracionB","NombreImagen":"Francklin"},
   {"Dia":"Miercoles","Hora":"08:00:00 PM","Maestro":"Sahara Jara Casazola","Curso":"Nuevo Testamento 1 A","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334602","LinkWhatsapp":"https://chat.whatsapp.com/C2qNat2VhzM4QWUaPm2htn","CursoCorto":"NuevoTestamento1A","NombreImagen":"Sahara"},
   {"Dia":"Miercoles","Hora":"08:00:00 PM","Maestro":"Rudy Serna Cajaleon","Curso":"Presidentes de la Iglesia B","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334603","LinkWhatsapp":"https://chat.whatsapp.com/FpCouiPcJHPGCn88VlvsSl","CursoCorto":"PresidentesdelaIglesiaB","NombreImagen":"Rudy"},
   {"Dia":"Jueves","Hora":"04:00:00 PM","Maestro":"Elizabeth Blanca Cuadros Loayza","Curso":"Las Parabolas de Jesus B","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334605","LinkWhatsapp":"https://chat.whatsapp.com/GhOoF4hMogpI9IlFRo5Ahl","CursoCorto":"LasParabolasdeJesusB","NombreImagen":"Elizabeth"},
   {"Dia":"Jueves","Hora":"07:00:00 PM","Maestro":"Jesus Romero","Curso":"Jesucristo y el Evangelio Sempiterno B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334636","LinkWhatsapp":"https://chat.whatsapp.com/CMZHM8r0D9m62z5EpA3umI","CursoCorto":"JesucristoyelEvangelioSempiternoB","NombreImagen":"Jesus"},
   {"Dia":"Jueves","Hora":"07:00:00 PM","Maestro":"Roberto Polanco","Curso":"La Familia Eterna B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334634","LinkWhatsapp":"https://chat.whatsapp.com/ENIVncU6fv96X0GSkDGs6d","CursoCorto":"LaFamiliaEternaB","NombreImagen":"Roberto"},
   {"Dia":"Jueves","Hora":"07:30:00 PM","Maestro":"Carlos Rojas Baltazar","Curso":"Book of Mormon (clase en Ingles) 1A","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334643","LinkWhatsapp":"https://chat.whatsapp.com/J31MLGTVLBf0IzdlQL5yHL","CursoCorto":"BookofMormon(claseenIngles)1A","NombreImagen":"Carlos"},
   {"Dia":"Jueves","Hora":"07:30:00 PM","Maestro":"Donato Condori","Curso":"Fundamentos de la Restauracion B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334641","LinkWhatsapp":"https://chat.whatsapp.com/ByOTCNbw3cqFMNm93cUour","CursoCorto":"FundamentosdelaRestauracionB","NombreImagen":"Donato"},
   {"Dia":"Jueves","Hora":"08:00:00 PM","Maestro":"Joseph Balta benavides","Curso":"El Evangelio y La Vida Productiva B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334646","LinkWhatsapp":"https://chat.whatsapp.com/FxB7WGNinZiBGSS93eLZIv","CursoCorto":"ElEvangelioyLaVidaProductivaB","NombreImagen":"Joseph"},
   {"Dia":"Jueves","Hora":"08:00:00 PM","Maestro":"Joana Muriell Oscorima Celis","Curso":"Las Mujeres de las Escrituras B","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334606","LinkWhatsapp":"https://chat.whatsapp.com/D8t7oGYZEBiHcVGMO3c0LG","CursoCorto":"LasMujeresdelasEscriturasB","NombreImagen":"Joana"},
   {"Dia":"Jueves","Hora":"08:00:00 PM","Maestro":"Fernando y Jennifer Mostacero","Curso":"Preparemonos para un Matrimonio Eterno B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334645","LinkWhatsapp":"https://chat.whatsapp.com/INeE6WOQ4Vu0qRu0YsnR5j","CursoCorto":"PreparemonosparaunMatrimonioEternoB","NombreImagen":"Fernando"},
   {"Dia":"Jueves","Hora":"08:30:00 PM","Maestro":"Anyd Santillan","Curso":"Enseñanzas y la Doctrina del Libro de Mormon B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334647","LinkWhatsapp":"https://chat.whatsapp.com/LFE0GKCYbj20zxdE3GiRNm","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormonB","NombreImagen":"Anyd"}
   ,
   {"Dia":"Jueves","Hora":"09:00:00 PM","Maestro":"David Gamboa","Curso":"El Divino Don del Perdon A","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334607","LinkWhatsapp":"https://chat.whatsapp.com/CTbwNhYHYSN53Q8rwRCCNO","CursoCorto":"ElDivinoDondelPerdonParteA","NombreImagen":"David"},
   {"Dia":"Jueves","Hora":"09:00:00 PM","Maestro":"Luis Flores Leon","Curso":"La Familia Eterna B","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334610","LinkWhatsapp":"https://chat.whatsapp.com/GJvXa3pXkQM4QDNFRSTkCl","CursoCorto":"LaFamiliaEternaB","NombreImagen":"Luis"},
   {"Dia":"Viernes","Hora":"06:00:00 PM","Maestro":"Gabriel Romero","Curso":"Enseñanzas y la Doctrina del Libro de Mormon B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334652","LinkWhatsapp":"https://chat.whatsapp.com/HmDiZGHNg71GexQ7dJwvzF","CursoCorto":"EnseñanzasyDoctrinadelLibrodeMormonB","NombreImagen":"Gabriel"}
   ,
   {"Dia":"Viernes","Hora":"07:00:00 PM","Maestro":"Antonio Vera","Curso":"Doctrina del Evangelio B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334657","LinkWhatsapp":"https://chat.whatsapp.com/B8989MIQlVo648TBvde4A0","CursoCorto":"DoctrinadelEvangelioB","NombreImagen":"Antonio"},
   {"Dia":"Viernes","Hora":"07:30:00 PM","Maestro":"Carmen Lazo","Curso":"Libro de Mormon 1 A","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334611","LinkWhatsapp":"https://chat.whatsapp.com/HwDu6C8PbkyJIJKGRHkhwT","CursoCorto":"LibrodeMormon1A","NombreImagen":"Carmen"},
   {"Dia":"Viernes","Hora":"08:00:00 PM","Maestro":"Walter Salazar Marcelo","Curso":"Responder mis preguntas del Evangelio B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1335080","LinkWhatsapp":"https://chat.whatsapp.com/IJjRI1B0UDJB2otb0MBwnq","CursoCorto":"RespondermispreguntasdelEvangelioB","NombreImagen":"Walter"},
   {"Dia":"Viernes","Hora":"09:30:00 PM","Maestro":"Sandra Paola Pino Huaman","Curso":"El Divino Don del Perdon A","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334612","LinkWhatsapp":"https://chat.whatsapp.com/JAk3O8STtfe3Wk6AM7KC2c","CursoCorto":"ElDivinoDondelPerdonParteA","NombreImagen":"Sandra Paola Pino Huaman"},
   {"Dia":"Sabado","Hora":"04:00:00 PM","Maestro":"Lesseps Gonzales","Curso":"La Familia Eterna B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334673","LinkWhatsapp":"https://chat.whatsapp.com/H558I7CElPCBH9odz4YnAD","CursoCorto":"LaFamiliaEternaB","NombreImagen":"Lesseps"},
   {"Dia":"Sabado","Hora":"05:00:00 PM","Maestro":"Scarlet Andreina Tineo Grillet","Curso":"Fundamentos de la Restauracion B","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334615","LinkWhatsapp":"https://chat.whatsapp.com/I6ueiZvvNbw369Sx7EGXYj","CursoCorto":"FundamentosdelaRestauracionB","NombreImagen":"Scarlet"},
   {"Dia":"Sabado","Hora":"05:00:00 PM","Maestro":"Kenny Quispitupac","Curso":"Responder mis preguntas del Evangelio A","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334654","LinkWhatsapp":"https://chat.whatsapp.com/H0Cou3F8KUoIkMKrg9oSra","CursoCorto":"RespondermispreguntasdelEvangelioA","NombreImagen":"Kenny"},
   {"Dia":"Sabado","Hora":"05:00:00 PM","Maestro":"Luis Alberto Martinez","Curso":"Responder mis preguntas del Evangelio B","Tipo":"Virtual","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334616","LinkWhatsapp":"https://chat.whatsapp.com/LfArmkrhPMX5zWkOJgABe1","CursoCorto":"RespondermispreguntasdelEvangelioB","NombreImagen":"Luis Alberto Martinez"},
   {"Dia":"Sabado","Hora":"05:30:00 PM","Maestro":"Luis Flores Leon","Curso":"Antiguo Testamento - Ven Sigueme 2022","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334675","LinkWhatsapp":"https://chat.whatsapp.com/IYmT7Oi3a7zDuavR7SWxwD","CursoCorto":"AntiguoTestamento-VenSigueme2022","NombreImagen":"Luis"},
   {"Dia":"Sabado","Hora":"06:00:00 PM","Maestro":"Felix Scott Balta Benavides","Curso":"Estudio de las Escrituras A","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334655","LinkWhatsapp":"https://chat.whatsapp.com/GqhPMVaGfpm4K9NNhKs6l8","CursoCorto":"EstudiodelasEscriturasA","NombreImagen":"Scott"},
   {"Dia":"Sabado","Hora":"07:00:00 PM","Maestro":"Alex y Flor Arangoitia","Curso":"El Evangelio y la Vida Productiva B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1335126","LinkWhatsapp":"https://chat.whatsapp.com/JA7U4mWRoKQCxPQ2JqeFMS","CursoCorto":"ElEvangelioyLaVidaProductivaB","NombreImagen":"Alex"},
   {"Dia":"Sabado","Hora":"07:00:00 PM","Maestro":"Joshua Andre Hidalgo Esquivel","Curso":"Fundamentos de la Restauracion B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334659","LinkWhatsapp":"https://chat.whatsapp.com/BhVvgM98VQo2OwfHFU4QaC","CursoCorto":"FundamentosdelaRestauracionB","NombreImagen":"Joshua"},
   {"Dia":"Sabado","Hora":"07:00:00 PM","Maestro":"Marvin Huertas","Curso":"Responder mis preguntas del Evangelio A","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334658","LinkWhatsapp":"https://chat.whatsapp.com/ETF1uFRyYnE59DHKudbofJ","CursoCorto":"RespondermispreguntasdelEvangelioA","NombreImagen":"Marvin"},
   {"Dia":"Sabado","Hora":"08:00:00 PM","Maestro":"Luis Flores Leon","Curso":"La Familia Eterna B","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334677","LinkWhatsapp":"https://chat.whatsapp.com/HHtSvRq1SHNCEqB76O4JfT","CursoCorto":"LaFamiliaEternaB","NombreImagen":"Luis"},
   {"Dia":"Sabado","Hora":"08:00:00 PM","Maestro":"Said Amed Montalvo Segovia","Curso":"Responder mis preguntas del Evangelio A","Tipo":"Presencial","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1334676","LinkWhatsapp":"https://chat.whatsapp.com/Iyi4LU66vvV4AjblCfJHoX","CursoCorto":"RespondermispreguntasdelEvangelioA","NombreImagen":"Said"}
   ]   
   ;
   