hueScenes
=========

manage scenes for philips hue api.

# Definition: scene

A scene is represented by a json object like the following
```json
{
  "lights": {
    "1": {
      "on": false
    },
    "2": {
      "on": true,
      "bri": 230
    }
  },
  "groups": {
    "0": {
      "effect": "colorloop"
    }
  }
}
```
The object after the light ID oder group ID is a light state object, see API specifications.
There are some default scenes in the _scenes_ directory.

# Define your own scenes

So let's say you want to create a scene named _relax_.
Simply put a file named `relax.json` with the scene specification in the folder `~/.hueScenes` in your home directory.
