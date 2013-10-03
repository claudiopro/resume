/**
 * This work is licensed under the Creative Commons Attribution 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by/3.0/
 * or send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View,
 * California, 94041, USA.
 */

function load() {
	// Open all links in a new window
	for (var i = 0; i < document.links.length; i++) {
		document.links[i].target = "_blank";
	}
}

var onFailSoHard = function(e) {
		console.log('Reeeejected!', e);
	};

/* Code from http://www.html5rocks.com/en/tutorials/getusermedia/intro/ */

/* Polyfill */
window.URL = window.URL || window.webkitURL;
navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia || navigator.msGetUserMedia;
function captureFromWebcam() {
	// Not showing vendor prefixes.
	navigator.getUserMedia({
		video: true
	}, function(localMediaStream) {
		var video = document.querySelector('div.pic img');
		video.src = window.URL.createObjectURL(localMediaStream);

		// Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
		// See crbug.com/110938.
		video.onloadedmetadata = function(e) {
			// Ready to go. Do some stuff.
		};
	}, onFailSoHard);
}
