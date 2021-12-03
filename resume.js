/**
 *  Copyright (c) 2013, 2021 Claudio Procida
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

function load() {
  // Open all links in a new window
  for (var i = 0; i < document.links.length; i++) {
    document.links[i].target = '_blank';
  }
}

var onFailSoHard = function(e) {
  console.log('Reeeejected!', e);
};

/* Code from http://www.html5rocks.com/en/tutorials/getusermedia/intro/ */

/* Polyfill */
window.URL = window.URL || window.webkitURL;
navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;
function captureFromWebcam() {
  // Not showing vendor prefixes.
  navigator.getUserMedia(
    {
      video: true
    },
    function(localMediaStream) {
      var video = document.querySelector('div.pic img');
      video.src = window.URL.createObjectURL(localMediaStream);

      // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
      // See crbug.com/110938.
      video.onloadedmetadata = function(e) {
        // Ready to go. Do some stuff.
      };
    },
    onFailSoHard
  );
}
