console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished) {  
  let object1 = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(object1);
    return object1;
}

function showCollection (array) {
  console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].title, 'by', array[i].artist, 'published in', array[i].yearPublished);
  }
}

// If the artist inputted when the function is called matches any artists in my 6 albums, add those albums to the array.
// I NEED TO RETURN EVERY ALBUM WITH THE MATCHING ARTIST, NOT THE ARTIST
function findByArtist(artist) {
  albumsFound = [];
      for (album of collection) {
         if (artist === album.artist) {
            albumsFound.push(album) }
      }
      return console.log('Albums found:',albumsFound)
  }   





console.log(addToCollection ('Palaces', 'Flume', '2022'));
console.log(addToCollection ('Hi this is Flume', 'Flume', '2019'));
console.log(addToCollection ('Flume', 'Flume', '2012'));
console.log(addToCollection ('Once twice melody', 'Beach house', '2022'));
console.log(addToCollection ('ALL-AMERIKKKAN BADA$$', 'Joey Bada$$', '2017'));
console.log(addToCollection ('good kid, m.A.A.d city', 'Kendrick Lamar', '2012'));
console.log(collection);

showCollection(collection);

findByArtist('Flume');
findByArtist('Kendrick Lamar');
findByArtist('Joey Bada$$')
findByArtist('AJ');
findByArtist('Guy');
findByArtist('Beach house')


