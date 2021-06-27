"use strict";var _http = require('./http');
require('./websocket/socket');


//rodar server
_http.server.listen(3333, () => {
    console.log("Rodando na 3333");
});

module.exports = _http.server
