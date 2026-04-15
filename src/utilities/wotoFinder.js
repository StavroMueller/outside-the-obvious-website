const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const wotoFinder = (genre, numberOfPhotos) => {
    let photoUrls = []
    for (let i = 1; i <= numberOfPhotos; i++) {
        photoUrls.push(`${process.env.PUBLIC_URL}/gallery/${genre}/${i}.jpg`);
    }

    return shuffle(photoUrls);
}

export default wotoFinder;
