const isMac = process.platform === 'darwin';

const setSubmenuStatusById = (mainMenu, submenuId, status) => {
    const submenuItem = mainMenu.getMenuItemById(submenuId);
    if (submenuItem) {
        // console.log(submenuItem);
        submenuItem.enabled = status;
    } else {
        console.log(`Couldn't fine the menu item`);
    }
};

function getBaseMenuTemplate(config) {
    const {app} = config;
    const main_qualifier_key = isMac ? 'Command' : 'Ctrl';
    const second_qualifier_key = isMac ? 'Alt' : 'Shift';

    const menuTemplate = [
        {
            label: 'File',
            id: "menu-file",
            submenu: [
                {
                    label: 'Open',
                    id: "submenu-open",
                    accelerator: `${main_qualifier_key}+O`,
                    enabled: false,
                    click() {
                        if (!config.mainWindow) {
                            config.createWindow();
                        } else {
                            config.mainWindow.show();
                        }
                        setSubmenuStatusById(config.mainMenu, "submenu-open", false);
                        setSubmenuStatusById(config.mainMenu, "submenu-close", true);
                    }
                },
                {
                    label: 'Close',
                    id: "submenu-close",
                    // role: isMac ? "close" : "quit",
                    click() {
                        if (isMac) {
                            if (config.mainWindow) {
                                config.mainWindow.hide();
                                setSubmenuStatusById(config.mainMenu, "submenu-open", true);
                                setSubmenuStatusById(config.mainMenu, "submenu-close", false);
                            }
                        } else {
                            app.quit();
                        }
                        // console.log(`config.mainWindow set to null`);
                    }
                }
            ]
        }
    ]

    if (isMac) {
        menuTemplate.unshift(  {
            label: 'TallyMate',
            submenu: [
                {
                    role: 'about'
                },
                {
                    label: 'Quit',
                    visible: isMac,
                    click() {
                        app.quit();
                        config.mainWindow = null;
                        // console.log(`config.mainWindow set to null`);
                    }
                }
            ]
        });
    }

    // Need to check if we use the following for other Operating Systems as well.
    menuTemplate.push({
        label: 'View',
        submenu: [
            { role: 'resetZoom' },
            { role: 'zoomIn' },
            { role: 'zoomOut' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    });

    menuTemplate.push({
        role: 'windowMenu'
    });


    // convention: 'production', 'development', 'staging', 'test'
    if (process.env.NODE_ENV !== 'development') {
        menuTemplate.push({
            label: 'Developer',
            id: 'developer',
            enabled: !!config.mainWindow,
            submenu: [
                {
                    id: "view-reload",
                    role: 'reload',
                },
                {
                    id: "view-dev-tools",
                    label: 'Toggle Developer Tools',
                    accelerator: `${main_qualifier_key}+${second_qualifier_key}+I`,
                    click(item, focusedWindow) {
                        focusedWindow?.toggleDevTools();
                    }
                }
            ]
        })
    }

    menuTemplate.push({
        role: 'help',
        submenu: [
            {
                label: 'Learn More',
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://electronjs.org')
                }
            }
        ]
    });

    return menuTemplate;
}

const closeWindow = (config) => {
    const {app, mainMenu} = config;
    console.log(`closeWindow`);

    if (!isMac) {
        if (app) {
            app.quit();
        }
    }

    setSubmenuStatusById(mainMenu, "submenu-open", true);
    setSubmenuStatusById(mainMenu, "submenu-close", false);
    setSubmenuStatusById(mainMenu, "view-reload", false);
    setSubmenuStatusById(mainMenu, "view-dev-tools", false);
};

const activateWindow = (config) => {
    const {mainMenu} = config;
    console.log(`activateWindow`);
    if (!config.mainWindow) {
        config.createWindow();
    } else {
        config.mainWindow.show();
    }
    setSubmenuStatusById(mainMenu, "submenu-open", false);
    setSubmenuStatusById(mainMenu, "submenu-close", true);
}

exports.closeWindow = closeWindow;
exports.getBaseMenuTemplate = getBaseMenuTemplate;
exports.setSubmenuStatusById = setSubmenuStatusById;
exports.activateWindow = activateWindow;
