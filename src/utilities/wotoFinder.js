import { shuffle } from 'lodash';

const wotoFinder = (genre, numberOfPhotos) => {
    let photoUrls = []
    for (let i = 1; i <= numberOfPhotos; i++) {
        photoUrls.push(`${process.env.PUBLIC_URL}/gallery/${genre}/${i}.jpg`);
    }

    return shuffle(photoUrls);
}

export default wotoFinder;
