let msurls = ["http://example.org"]
let request = require ("request-promise-native")

async function doRequests () {
    return await (Promise.all (
        msurls.map (async msurl => await request (msurl)))
    )
}

exports.printMsg = function() {
    doRequests (). then (msresult => console.log (msresult))
}