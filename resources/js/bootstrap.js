window._ = require('lodash');

try {
    window.$ = window.jQuery = require('jquery');
    window.Popper = require('@popperjs/core');
    window.bootstrap = require('bootstrap');

} catch (e) {}

window.axios = require('axios');
window.axios.defaults.headers.common['CSRF-TOKEN'] = document.getElementById('token');
window.url = document.getElementById('base_url');
console.log('testing');
window.app_path = document.getElementById('app_path');
// window.magnificPopup = require('magnific-popup');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
