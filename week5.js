/*Create a playlist of songs*/

class Song {
    constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    }
    
    /*Console.log song title by artist*/
    describe() {
    return `${this.title} by ${this.artist}`;
    }
    }
    class Playlist {
    constructor(title) {
    this.title = title;
    this.songs = [];
    }
    
    /*Add a song to the playlist*/
    addSong(song) {
    if (song instanceof Song) {
    this.songs.push(song);
    } else {
    throw new Error(`You can only add an a Song. 
    argument is not a song: ${song}`);
    }
    }
    
    /*Console.log playlist*/
    describe() {
    return `${this.title} contains these ${this.songs} songs :`;
    }
    }
    
    /*Put menu option together*/
    
    class Menu {
    constructor() {
    this.playlists = [];
    this.selectedPlaylist = null; 
    }
    
    
    /*Main Menu Options*/ 

    start() {
    let selection = this.menuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createPlaylist();
    break;
    case '2' :
    this.viewPlaylist();
    break;
    case '3' :
    this.deletePlaylist();
    break;
    case '4' :
    this.displayPlaylists();
    break;
    default:
    selection = 0;
    }
    selection = this.menuOptions();
    }
    
    }
    
    menuOptions() {
    return prompt(`
    0) exit
    1) create a new playlist
    2) view a playlist
    3) delete a playlist
    4) display all playlists
    `);
    }
    
    /*Playlist menu option*/
    playlistOptions(songInfo) {
    return prompt(`
    0) back
    1) add a new song
    2) delete a song

    ${songInfo}
    `);
    }
    
    /*code for menu options*/
    displayPlaylists() {
    let playlistString = '';
    for (let i = 0; i < this.playlists.length; i++) {
    playlistString += i+ ') ' + this.playlists[i].title + '\n';
    }
    alert(playlistString);
    }
    
    createPlaylist() {
    let title = prompt('Enter title for new playlist: ');
    this.playlists.push(new Playlist(title));
    }
    
    
    viewPlaylist() {
    let index = prompt("Enter the index of the playlist that you want to view:");
    if (index > -1 && index < this.playlists.length) {
    this.selectedPlaylist = this.playlists[index];
    let description = 'Title: ' + this.selectedPlaylist.title + '\n';
    description += ' ' + this.selectedPlaylist.describe() + '\n ';
    for (let i = 0; i < this.selectedPlaylist.songs.length; i++) {
    description += i + ') ' + this.selectedPlaylist.songs[i].describe() + '\n';
    }

    let selection1 = this.playlistOptions(description);
    switch (selection1) {
    case '1' :
    this.createSong();
    break;
    case '2' :
    this.deleteSong();
    }
    } 
    }
    
    deletePlaylist() {
    let index = prompt('Enter the index of the Playlist that you wish to delete: ');
    if (index > -1 && index < this.playlists.length) {
    this.playlists.splice(index,1);
    }
    }
    
    createSong() {
    let title = prompt('Enter title for new song: ');
    let artist = prompt('Enter artist for new song: ');
    this.selectedPlaylist.addSong(new Song(title,artist));
    }
    
    deleteSong() {
    let index = prompt('Enter the index of the song that you wish to delete: ');
    if (index > -1 && index < this.selectedPlaylist.songs.length) { this.selectedPlaylist.songs.splice(index,1);
    }
    }
    }
    
    let menu = new Menu();
    menu.start();
    
    
    
    