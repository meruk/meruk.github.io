const {ipcRenderer} = require('electron')

ipcRenderer.on('saySomething', (event, args) => {
alert(args)
  var synth = window.speechSynthesis;
  var voice = synth.getVoices()[0]
  var utterThis = new SpeechSynthesisUtterance(args);
  utterThis.voice = voice
  utterThis.pitch = 1
  utterThis.rate = 1
  synth.speak(utterThis)
})


