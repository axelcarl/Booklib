document.addEventListener('DOMContentLoaded', function () {
  const rootStyles = window.getComputedStyle(document.documentElement)
  if (rootStyles.getPropertyValue('--book-cover-width-large') != null && rootStyles.getPropertyValue('--book-cover-width-large') != '') {
    ready()
  } else {
    document.getElementById('main-css').addEventListener('load', ready)
  }

  function ready() {
    const coverWidth = parseFloat(rootStyles.getPropertyValue('--book-cover-width-large'))
    const coverAspect = parseFloat(rootStyles.getPropertyValue('--book-cover-aspect-ratio'))
    const coverHeight = coverWidth / coverAspect;
    FilePond.registerPlugin(FilePondPluginImagePreview);
    FilePond.registerPlugin(FilePondPluginImageResize);
    FilePond.registerPlugin(FilePondPluginFileEncode);
    FilePond.setOptions({
      stylePanelAspectRatio: 1 / coverAspect,
      imageResizeTargetHeight: coverHeight,
      imageResizeTargetWidth: coverWidth,
    })
    const inputElement = document.querySelector('input[type="file"]');
    const pond = FilePond.create(inputElement);
    FilePond.parse(document.body);
  }
});  