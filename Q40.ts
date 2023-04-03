// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

// Question # 40
// ========================================================================================================
// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return an Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums. 
// Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.

function make_album(artistName:string, albumTitle:string,tracks?:string){
    const musicAlbum = {
        artistName: artistName,
        albumTitle: albumTitle,
        track:tracks,
    }
    return musicAlbum;
}
let album1 = make_album("Atif Aslam", "Jal Pari");
let album2 = make_album("Nusrat Fateh Ali Khan", "Mustt Mustt");
let album3 = make_album("Ali Zafar", "Huqa Pani","Channo");
console.log("Artist : " + album1.artistName, "   Album : " + album1.albumTitle);
console.log("Artist : " + album2.artistName,"   Album : " +album2.albumTitle);
console.log("Artist : " + album3.artistName,"   Album : " +album3.albumTitle, "   Track Song : " + album3.track);


// Atif Aslam - Album: Jal Pari, Track: Aadat
// Nusrat Fateh Ali Khan - Album: Mustt Mustt, Track: Mustt Mustt
// Ali Zafar - Album: Huqa Pani, Track: Channo
// Strings - Album: Duur, Track: Duur
// Noori - Album: Suno Ke Main Hun Jawan, Track: Tann Dolay