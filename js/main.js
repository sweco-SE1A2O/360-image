const images = ['images/Holmsnäset_Pan_134.png', 'images/Storsands_camping_Pan_77.png', 'images/Storflon_Pan_162.png', 'images/Hammaren_Pan_128.png', 'images/Storsands_camping (1).jpg'];

for(let i = 0; i < images.length; i++){
    eval("panorama" + i + "= new PANOLENS.ImagePanorama( images[i] );")
    let imageContainer = document.querySelector('.image-container' + i);
    window['viewer' + i] = new PANOLENS.Viewer({
        container: imageContainer,
        controlBar: true,
    });
    window['viewer' + i].add( window['panorama' + i]);
    window['viewer' + i].OrbitControls.noZoom = true;
    }

