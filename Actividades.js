/*Colores Segun Tipo de Actividad*/

var reunion = '#B81b1b'
var actividad = 'green'
var devocional = 'orange'
var fiesta = 'blue',
var fiesta = 'yellow'

var events = [
    {
        title: 'Reunión Comités Jas',
        start: '2022-08-28 17:00',
        description: 'Domingo 8:00pm - Reunión con los Líderes Jas de las 8 estacas que abarca el Instituto Lima Sur',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: reunion
    },
    {
        title: 'ILS Talks',
        start: '2022-09-16 19:00',
        description: ' --- Ver Descripción --- ',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: actividad
    },
    {
        title: 'Ginkana',
        start: '2022-09-23 19:00',
        description: ' --- Ver Descripción --- ',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: actividad
    },
    {
        title: 'Ensayo Elenco ILS',
        start: '2022-09-09 19:30',
        description: 'Ensayo del Elenco de Danzas y Salsa del Instituto Lima Sur',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: fiesta
    },
    {
        title: 'Ensayo Elenco ILS',
        start: '2022-09-23 19:30',
        description: 'Ensayo del Elenco de Danzas y Salsa del Instituto Lima Sur',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: fiesta
    },
    {
        title: 'Ensayo Elenco ILS',
        start: '2022-09-30 19:30',
        description: 'Ensayo del Elenco de Danzas y Salsa del Instituto Lima Sur',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: fiesta
    },
    {
        title: 'Fiesta de Gala',
        start: '2022-10-07 20:00',
        description: ' --- Ver Descripción --- ',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: fiesta
    },
    {
        title: 'Reunión CEIR',
        start: '2022-09-01 20:00',
        description: 'Reunión del Consejo Estudiantil',
        link: 'https://institutolimasur.github.io/HorarioILS/',
        color: reunion
    },
    {
        title: 'Reunión CEIR',
        start: '2022-09-08 20:00',
        description: 'Reunión del Consejo Estudiantil',
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
        start: '2022-09-16 20:00',
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
    }
]




$(document).ready(function () {
    $('#calendar').fullCalendar({
        defaultView: 'month',
        events: events,
        eventClick: function (calEvent, jsEvent, view) {
            var botonHtml = "<a class='btn btn-sm btn-primary' style='width: 50%;margin: 0 auto 10px auto;display: block;' href='" + calEvent.link+"'>See more</a>"
            $('#event-title').text(calEvent.title);
            $('#event-description').html(calEvent.description);
            $('#event-link').html(botonHtml);
            $('#modal-event').modal('show')
            $('#modal-event').modal();
        }
    });
});
