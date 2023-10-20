const panorama = new PANOLENS.ImagePanorama( 'images/Holmsnäset_Pan_134.png' );
let imageContainer = document.querySelector('.image-container');

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: true,
});

viewer.add( panorama);

