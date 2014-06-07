var fs = require('fs');
var path = require('path');

function HueScenes() {
  var home = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
  this.scenesFolder = path.join(home, '.hueScenes');
  if (!fs.existsSync(this.scenesFolder)) {
    fs.mkdirSync(this.scenesFolder);
  }
}

HueScenes.prototype.load = function(scene) {
  var sceneFilename = scene.concat('.json');
  var scenePath = path.join(this.scenesFolder, sceneFilename);
  var sceneJson;
  if (!fs.existsSync(scenePath)) {
    try {
      scenePath = path.join(__dirname, 'scenes', sceneFilename);
      if (!fs.existsSync(scenePath)) {
        console.error(scenePath);
      }
      sceneJson = require(scenePath);
    }
    catch(err) {
      console.error('could not load scene: ' + scenePath);
      console.error(err);
    }
  } else {
    try {
      var data = fs.readFileSync(scenePath);
      sceneJson = JSON.parse(data);
    } catch (err) {
      console.error('There has been an error parsing your scene.');
      console.error(err);
    }
  }
  return sceneJson;
};

HueScenes.prototype.save = function(scene, state, overwriteExisting) {
  var sceneFilename = scene.concat('.json');
  var scenePath = path.join(this.scenesFolder, sceneFilename);
  if (overwriteExisting || !fs.existsSync(scenePath)) {
    try {
      var sceneJson = JSON.stringify(state);
      fs.writeFileSync(scenePath, sceneJson);
      return true;
    }
    catch(err) {
      console.error('could not save scene to ' + scenePath);
      console.error(err);
      throw err;
    }
  } else console.error('scene already exists. overwrite by providing true as third argument.');
};

module.exports = new HueScenes();
