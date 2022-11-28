/*****************************************
        Class
*****************************************/

class User {

    #id;
    #name;
    #userName;
    #email

    constructor (id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get id(){
        return this.#id;
    }

    get name(){
        return this.#name;
    }

    get userName(){
        return this.#userName;
    }

    get email(){
        return this.#email
    }

    getInfo() {
        return `ID: ${this.id}\nName: ${this.name}\nUsername: ${this.userName}\nEmail: ${this.email} `;
    }
}

const user = new User(34369, 'Enjae Antonio', 'EnjaeAC', 'enjaeantonio@gmail.com')

class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor (id, name, userName, email, pages, groups, canMonetize) {
      super(id, name, userName, email)
      this.#pages = pages;
      this.#groups = groups;
      this.#canMonetize = canMonetize
    }

    get pages() {
        return this.#pages
    }

    get groups(){
        return this.#groups
    }

    get canMonetize() {
        return this.#canMonetize
    }

    getInfo() {
        return `User: ${super.getInfo()} Pages: ${this.pages} Groups: ${this.groups}\n Monetized: ${this.canMonetize}`;
    }
}

export { User }