const wotoFinder = (genre, numberOfPhotos) => {
    let photoUrls = []
    for (let i = 1; i <= numberOfPhotos; i++) {
        //Don't feel like writing a script to rename the files just yet, so lazy it is...
        photoUrls.push(`%PUBLIC_URL%/gallery/${genre}/woto%20(${i}).jpg`);
    }

    return photoUrls;
}

export default wotoFinder;