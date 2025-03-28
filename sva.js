class SVAPlayer {
  constructor(svaElement) {
    this.frames = [...svaElement.getElementsByTagName("frame")];
    this.fps = parseInt(svaElement.getAttribute("fps")) || 24;
    this.currentFrame = 0;
    this.isPlaying = false;
    
    // Create a container for SVG
    this.svgContainer = document.createElement("div");
    this.svgContainer.innerHTML = this.frames[0].innerHTML;
    svaElement.replaceWith(this.svgContainer);
  }

  play() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    const interval = 1000 / this.fps;
    this.intervalId = setInterval(() => {
      this.currentFrame = (this.currentFrame + 1) % this.frames.length;
      this.svgContainer.innerHTML = this.frames[this.currentFrame].innerHTML;
    }, interval);
  }

  pause() {
    this.isPlaying = false;
    clearInterval(this.intervalId);
  }

  setFrame(frameIndex) {
    if (frameIndex >= 0 && frameIndex < this.frames.length) {
      this.currentFrame = frameIndex;
      this.svgContainer.innerHTML = this.frames[this.currentFrame].innerHTML;
    }
  }

  reverse() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    const interval = 1000 / this.fps;
    this.intervalId = setInterval(() => {
      this.currentFrame = (this.currentFrame - 1 + this.frames.length) % this.frames.length;
      this.svgContainer.innerHTML = this.frames[this.currentFrame].innerHTML;
    }, interval);
  }
}

// Auto-initialize all <sva> elements
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("sva").forEach(svaElement => {
    const player = new SVAPlayer(svaElement);
    player.play();
  });
});
