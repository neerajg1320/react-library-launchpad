let ipcRenderer;

function initRenderer() {
    if (ipcRenderer) {
        return;
    }

    try {
        ipcRenderer = window.require('electron').ipcRenderer;
    } catch (err) {

        const eventSender = (channel, arg) => {
            console.log(`stubEventSender: ${channel}: stub call`);
        };
        const addListener = (channel, arg) => {
            console.log(`addListener: ${channel}: stub call`);
        };
        const removeListener = (channel, arg) => {
            console.log(`removeListener: ${channel}: stub call`);
        };

        ipcRenderer = {
            on: addListener,
            once: addListener,
            send: eventSender,
            removeListener: removeListener,
            removeListeners: removeListener
        }
    }
}


export const remoteCall = (channel, command) => {
    initRenderer();

    return new Promise((resolve, reject) => {
        // console.log(`remoteCall: command=${command}`);

        try {
            ipcRenderer.send(channel, command);
            ipcRenderer.once(channel, (event, response) => {
                // if (channel ===  "tally:command:vouchers:modify") {
                //   console.log(`remoteCall: command:response ${JSON.stringify(channel, null, 2)}`);
                //   console.log(`remoteCall: command:response ${JSON.stringify(response, null, 2)}`);
                // }
                if(!response.error) {
                    resolve(response)
                } else {
                    reject(response.error)
                }
            });
        } catch (e) {
            reject(e);
        }
    })
}

export const remoteMonitorStart = (channel, callback) => {
    initRenderer();

    ipcRenderer.on(channel, callback);
}

export const remoteMonitorStop = (channel, callback) => {
    initRenderer();

    ipcRenderer.removeListener(channel, callback);
}

export const removeListeners = () => {
    initRenderer();

    console.log('Removing Listeners');
    ipcRenderer.removeAllListeners();
}