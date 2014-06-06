hueScenes
=========

manage scenes for philips hue api

# Definition: scene

A scene is represented as a json object like the following
```json
{
  'lights': {
    '1': {
      'on': false
    },
    '2': {
      'on': true,
      'bri': 230
    }
  },
  'groups': {
    0: {
      'effect': 'colorloop'
    }
  }
}
```

# Output

Given a scene in json format as input, this library provides the necessary API calls to activate the scene.

todo

