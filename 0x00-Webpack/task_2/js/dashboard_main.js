const $ = require( "jquery" );

const _ = require("lodash");
import "../css/main.css";

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
const $button = $('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

const debounceUpdateCounter = _.debounce(updateCounter, 1000);
$button.on('click', debounceUpdateCounter);
