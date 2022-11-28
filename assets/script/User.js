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
        return `ID: ${this.id}\nName: ${this.name}\nUsername: ${this.userName}\nEmail: ${this.email}\n`;
    }
}

class Subscriber {
    #pages;
    #groups;
    #canMonetize;

    constructor (pages, groups, canMonetize) {
      this.#pages = pages;
      this.#groups = groups;
      this.#canMonetize = canMonetize;
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
        return  `Pages: ${this.pages}\nGroups: ${this.groups}\nMonetized: ${this.canMonetize}\n`;
    }
}

export { User, Subscriber }