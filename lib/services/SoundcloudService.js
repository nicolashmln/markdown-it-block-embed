// Copyright (c) Rotorz Limited and portions by original markdown-it-video authors
// Licensed under the MIT license. See LICENSE file in the project root.

"use strict";

const VideoServiceBase = require("./VideoServiceBase");


class SoundcloudService extends VideoServiceBase {

  getDefaultOptions() {
    return { width: 500, height: 281 };
  }

  extractVideoID(reference) {
    // We need the full url
    return reference;
  }

  getVideoUrl(videoID, autoplay) {
    let escapedVideoID = this.env.md.utils.escapeHtml(videoID);
    return `//w.soundcloud.com/player/?url=${escapedVideoID}?visual=1${autoplay ? '&auto_play=true' : ''}`;
  }

}


module.exports = SoundcloudService;
