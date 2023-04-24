function showImage(e){
    let image_viewer = document.getElementById('viewer');
    let viewer = document.getElementById('view');

    let base_url = "images/";
    let image_urls = ["person-5", "person-6", "person-3", "person-4", "person-5", "person-6"];
    let extension = ".jpg";

    let image_url = base_url + image_urls[e] + extension;
    viewer.src = image_url;

    image_viewer.style.display="flex";
}
function closeImg(){
    let viewer = document.getElementById('viewer');
    viewer.style.display="none";
}