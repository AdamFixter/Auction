const { ipcRenderer, contextBridge } = require('electron');
const { CHANNELS } = require("./shared/constants");
const APP = {
    on: (channel, func) => ipcRenderer.on(channel, (event, args) => { console.log(channel); func(args) }),
    frame: {
        minimize: () => ipcRenderer.send("app/minimize"),
        maximize: () => ipcRenderer.send("app/maximize"),
        close: () => ipcRenderer.send("app/close")
    },
    users: {
        getAll: () => ipcRenderer.invoke("send", CHANNELS.USER_GET_ALL),
        login: (user) => ipcRenderer.invoke("send", CHANNELS.USER_LOGIN, user, true),
        logout: (user) => ipcRenderer.invoke("send", CHANNELS.USER_LOGOUT, user, true),
    },
    auctions: {
        getAll: () => ipcRenderer.invoke("send", CHANNELS.AUCTION_GET_ALL),
        get: (id) => ipcRenderer.invoke("send", CHANNELS.AUCTION_GET, id),
        bid: (id, bid) => ipcRenderer.invoke("send", CHANNELS.AUCTION_BID, {
            id: id,
            bid: bid
        }, true),
    },
    channels: CHANNELS
}

contextBridge.exposeInMainWorld('app', APP)
