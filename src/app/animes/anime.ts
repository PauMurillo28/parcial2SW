
export class Anime {
        "id": number;
        "name": String;
        "description": String;
        "Rating": number;
        "episode": number;
        "categorie": String;
        "studio": String;
        "img": String;

        constructor(id: number, name: String, description: String, Rating: number, episode: number, categorie: String, studio: String, img: String) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.Rating = Rating;
            this.episode = episode;
            this.categorie = categorie;
            this.studio = studio;
            this.img = img;
        }
}
