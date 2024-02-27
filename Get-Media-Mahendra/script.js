// For Image Search
function searchImage() {
    let userInput = document.querySelector('.search-input').value;
    if(userInput != '' && userInput != ' ' && userInput != /^\s*$/){
    let API_KEY = '42958150-a6e21ef659c967cfa7da11cd0';
    let URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(userInput);
    console.log(URL)
    fetch(URL)
        .then(response => {
            console.log(response)
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            console.log(data)
            const imagesContainer = document.querySelector('.image-container');
            imagesContainer.innerHTML = '';
            if (parseInt(data.totalHits) > 0) {
                data.hits.forEach(hit => {
                    console.log(hit)
                    const imageItem = document.createElement('div')
                    imageItem.classList.add('image-item');
                    const image = document.createElement('img')
                    image.src = `${hit.previewURL}`;
                    image.alt = `${hit.tags}`;
                    image.id = `previewImg`;
                    let splitTitle = hit.tags;
                    let afterSplit = splitTitle.split(',')[0].trim();
                    const details = document.createElement('div')
                    details.classList.add('details')
                    details.innerHTML = `
                                        <h3 id="title">${'Showing Result of: '+ afterSplit}</h3>
                                        <p id="size">Size: ${hit.imageWidth}x${hit.imageHeight}</p>
                                        <p id="type">Type: ${hit.type.toUpperCase()}</p>
                                        <a href="${hit.largeImageURL}" class="download-btn" Download = "Get-Media">Download</a>
      
                    `;
                    imageItem.appendChild(image);
                    imageItem.appendChild(details);
                    imagesContainer.appendChild(imageItem);
                });
            } else {
                console.log('No hits');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }else{
        document.querySelector('.image-container').innerHTML = '';
        let span = document.createElement('span')
        span.textContent = `plaese input first`;
        document.querySelector('.image-container').appendChild(span)
    }
}

// For Video
function searchVideo() {
    let userInput = document.querySelector('.search-input').value;
    if (userInput != '' && userInput != ' ' && userInput != /^\s*$/) {
        let API_KEY = '42958150-a6e21ef659c967cfa7da11cd0';
        let URL = "https://pixabay.com/api/videos/?key=" + API_KEY + "&q=" + encodeURIComponent(userInput);
        console.log(URL)
        fetch(URL)
            .then(response => {
                console.log(response)
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                console.log(data)
                const videosContainer = document.querySelector('.video-container');
                videosContainer.innerHTML = '';
                if (parseInt(data.totalHits) > 0) {
                    data.hits.forEach(hit => {
                        console.log(hit)
                        const videoItem = document.createElement('div')
                        videoItem.classList.add('video-item');

                        const video = document.createElement('video');
                        video.src = hit.videos.medium.url;
                        video.controls = true;
                        let splitTitle = hit.tags;
                        let afterSplit = splitTitle.split(',')[0].trim();
                        const details = document.createElement('div')
                        details.classList.add('details')
                        details.innerHTML = `
                            <h3 id="title">${'Showing Result of: ' +afterSplit}</h3>
                            <p>Duration: ${hit.duration}s</p>
                            <p>Views: ${hit.views}</p>
                            <p>Likes: ${hit.likes}</p>
                            <a href="${hit.pageURL}" target="_blank">View on Pixabay</a>
                        `;

                        videoItem.appendChild(video);
                        videoItem.appendChild(details);
                        videosContainer.appendChild(videoItem);
                    });
                } else {
                    console.log('No hits');
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    } else {
        document.querySelector('.video-container').innerHTML = '';
        let span = document.createElement('span');
        span.textContent = `Please input a search query first`;
        document.querySelector('.video-container').appendChild(span);
    }
}

//redirect

function visitPixabay(){
        var url = "https://www.pixabay.com";
        window.open(url, '_blank');
}