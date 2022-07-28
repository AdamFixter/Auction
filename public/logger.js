const electron = require('electron');
const log = require('electron-log');

log.catchErrors({
    showDialog: false,
    onError(error) {
        electron.dialog.showMessageBox({
            title: 'An error occurred',
            message: error.message,
            detail: error.stack,
            type: 'error',
            buttons: ['Ignore', 'Exit'],
        })
        .then((result) => {        
            if (result.response === 2) {
                electron.app.quit();
            }
        });
    }
});

console.log = log.log;
console.info = log.info;
console.warn = log.warn;
console.error = log.error;
