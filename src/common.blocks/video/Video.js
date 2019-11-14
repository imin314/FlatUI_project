import bind from 'bind-decorator';

class Video {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    this.$video = $(domElement).find('.js-video__frame');

    const video = this.$video[0];
    this.aspectRatio = video.height / video.width;
    video.dataset.aspectRatio = this.aspectRatio;
    video.removeAttribute('height');
    video.removeAttribute('width');

    this._handleWindowResize();

    $(window).on('resize.video', this._handleWindowResize);
  }

  @bind
  _handleWindowResize() {
    const newWidth = document.width;
    this.$video
      .width(newWidth)
      .height(newWidth * this.aspectRatio);
  }
}

export default Video;
