const subApps = [];

function makeTestApp(id, name) {
    return {
        "id": id,
        "type": "appType",
        "source": "remote | local",
        "mode": "test | demo | real",

        "appInfo": {
            "appShortName": name,
            "appFullName": "Example App Schema",
            "author": "Otter-Co",
            "description": "Otter-Co's Example App, For Exampling!",
            "quickDescription": "Otter-Co's Example App",
            "icon": "http://example.com/image.png"
        },

        "panels": [
            {
                "name": "Example Panel",
                "toolTip": "",
                "type": "basic",
                "interfaces": [

                ]
            }
        ]
    };
}

for (let i = 0; i < 10; i++)
    subApps.push(makeTestApp("com.example.test" + i, "Test App " + i));

export default subApps;