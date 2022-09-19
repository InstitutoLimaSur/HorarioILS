/*Colores Segun Tipo de Actividad*/

var reunion = '#B81b1b'
var actividad = 'green'
var devocional = 'orange'
var fiesta = 'blue'
var ensayo = '#Ff7143'

var events = [
    {
        title: 'Reunión Comités Jas',
        start: '2022-10-09 17:00',
        description: 'Domingo 5:00pm - Reunión con los Líderes Jas de las 8 estacas que abarca el Instituto Lima Sur',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: reunion
    },
    {
        title: 'ILS Talks',
        start: '2022-09-16 19:00',
        description: '',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: actividad
    },
/*     {
        title: 'Ginkana',
        start: '2022-09-23 19:00',
        description: ' --- Ver Descripción --- ',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: actividad
    }, */
    {
        title: 'Campeonato',
        start: '2022-11-19 10:00',
        description: ' --- Próximamente más detalles --- ',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: actividad
    },
/*     {
        title: 'Fiesta de Gala',
        start: '2022-10-07 20:00',
        description: ' --- Ver Descripción --- ',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: fiesta
    }, */
    {
        title: 'Fiesta de Halloween',
        start: '2022-10-28 20:00',
        description: ' --- Próximamente más detalles --- ',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: fiesta
    },
    {
        title: 'Reunión CEIR',
        start: '2022-09-01 20:00',
        description: 'Reunión del Consejo Estudiantil.',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: reunion
    },
    {
        title: 'Reunión CEIR',
        start: '2022-09-10 13:00',
        description: 'Reunión del Consejo Estudiantil',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: reunion
    },
    {
        title: 'Reunión CEIR',
        start: '2022-09-15 20:00',
        description: 'Reunión del Consejo Estudiantil',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: reunion
    },
    {
        title: 'Reunión CEIR',
        start: '2022-09-22 20:00',
        description: 'Reunión del Consejo Estudiantil',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: reunion
    },
    {
        title: 'Reunión CEIR',
        start: '2022-09-30 20:00',
        description: 'Reunión del Consejo Estudiantil',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: reunion
    },
    {
        title: 'Ensayo Elenco ILS',
        start: '2022-09-09 20:00',
        description: 'Ensayo del Elenco de Danzas y Salsa del Instituto Lima Sur. Únete al grupo con el botón de aqui abajo.',
        link: 'https://chat.whatsapp.com/FVWEZslp4cLECrQ7cdBYn7',
        color: ensayo
    },
    {
        title: 'Ensayo Elenco ILS',
        start: '2022-09-09 20:00',
        description: 'Ensayo del Elenco de Danzas y Salsa del Instituto Lima Sur. Únete al grupo con el botón de aqui abajo.',
        link: 'https://chat.whatsapp.com/FVWEZslp4cLECrQ7cdBYn7',
        color: ensayo
    },
    {
        title: 'Ensayo Elenco ILS',
        start: '2022-09-09 20:00',
        description: 'Ensayo del Elenco de Danzas y Salsa del Instituto Lima Sur. Únete al grupo con el botón de aqui abajo.',
        link: 'https://chat.whatsapp.com/FVWEZslp4cLECrQ7cdBYn7',
        color: ensayo
    }
]


var calendarEl = document.getElementById('calendar');

var calendar = new FullCalendar.Calendar(calendarEl, {
    //initialView: 'listYear',
    initialView: 'dayGridMonth',
    events: events,
    locale:'es-en',
    eventClick: function (info) {
        console.log(info)
        var botonHtml = "<a class='btn btn-sm btn-primary' style='width: 50%;margin: 0 auto 10px auto;display: block;' href='" + info.event._def.extendedProps.link + "'>See more</a>"
        $('#event-title').text(info.event.title);
        $('#event-description').html(info.event._def.extendedProps.description);
        $('#event-link').html(botonHtml);
        $('#modal-event').modal('show')
        $('#modal-event').modal();
    }
});
calendar.render();

if (screen.width < 600) {
    document.getElementsByClassName("fc-view-harness")[0].style.height = "425px";
}



    $(document).ready(function () {
        if (screen.width < 600) {
            CambiarVistaCalendario()
        }
    });




var tipoVista = 0;
function CambiarVistaCalendario() {

    if (tipoVista == 0) {
        calendar.changeView('listYear');
        $('#botonCambiarVista').html("Cambiar a Modo Calendario");
        tipoVista = 1;
        if (screen.width < 600) {
            document.getElementsByClassName("fc-view-harness")[0].style.height = "1000px";
        }


    } else if (tipoVista == 1) {
        calendar.changeView('dayGridMonth');
        $('#botonCambiarVista').html("Cambiar a Modo Lista");
        tipoVista = 0;
        if (screen.width < 600) {
            document.getElementsByClassName("fc-view-harness")[0].style.height = "600px";
        }
    }

}