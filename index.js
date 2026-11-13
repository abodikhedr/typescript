"use strict";
class User {
    _id;
    _name;
    _email;
    _password;
    _phone;
    _age;
    notebooks;
    constructor(_id, _name, _email, _password, _phone, _age, notebooks) {
        this._id = _id;
        this._name = _name;
        this._email = _email;
        this._password = _password;
        this._phone = _phone;
        this._age = _age;
        this.notebooks = notebooks;
        if (_age < 18 || _age > 60) {
            throw new Error("age must be between 18 and 60");
        }
    }
    get age() {
        return this._age;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get password() {
        return this._password;
    }
    get phone() {
        return this._phone;
    }
    get email() {
        return this._email;
    }
    set setAge(value) {
        if (value < 18 || value > 60) {
            throw new Error("age must be between 18 and 60");
        }
        this._age = value;
    }
    set setName(value) {
        this._name = value;
    }
    set setPassword(value) {
        this._password = value;
    }
    set setEmail(value) {
        this._email = value;
    }
    set setPhone(value) {
        this._phone = value;
    }
    displayInfo() {
        console.log(`id:${this.id}`);
        console.log(`name:${this.name}`);
        console.log(`password:${this.password}`);
        console.log(`email:${this.email}`);
        console.log(`age:${this.age}`);
        console.log(`phone:${this.phone}`);
        this.notebooks.forEach(notebook => {
            notebook.preview();
        });
    }
    addNoteBook(notebook) {
        this.notebooks.push(notebook);
    }
}
class Admin extends User {
    changeNoteTitle(note, value) {
        note.setTitle = value;
    }
    changeNoteContent(note, value) {
        note.setContent = value;
    }
}
class Note {
    _id;
    _title;
    _content;
    _user;
    constructor(_id, _title, _content, _user) {
        this._id = _id;
        this._title = _title;
        this._content = _content;
        this._user = _user;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get content() {
        return this._content;
    }
    get user() {
        return this._user;
    }
    set setId(value) {
        this._id = value;
    }
    set setTitle(value) {
        this._title = value;
    }
    set setContent(value) {
        this._content = value;
    }
    set setUser(value) {
        this._user = value;
    }
    preview() {
        console.log(`id:${this.id}`);
        console.log(`title:${this.title}`);
        console.log(`content:${this.content}`);
        console.log(`userId:${this.user.id}`);
    }
}
class NoteBook {
    notes;
    constructor(notes = []) {
        this.notes = notes;
    }
    addNote(note) {
        this.notes.push(note);
    }
    removeNote(id) {
        this.notes = this.notes.filter((note) => {
            return note.id != id;
        });
    }
    preview() {
        this.notes.forEach(note => {
            note.preview();
            console.log("===========");
        });
    }
}
class storage {
    items;
    constructor(items) {
        this.items = items;
    }
    addItem(value) {
        this.items.push(value);
    }
    removeItem(value) {
        this.items = this.items.filter((item) => {
            return item !== value;
        });
    }
    getAllItems() {
        this.items.forEach(item => {
            console.log(item);
        });
    }
}
const user = new User(1, "abodi", "adsa", "daWSAD", "qafdwf", 18, []);
const note = new Note(1, "haii", "i was born today", user);
const note2 = new Note(2, "hello", "i was born 100 years ago", user);
const notebook = new NoteBook();
notebook.addNote(note);
notebook.addNote(note2);
user.addNoteBook(notebook);
user.displayInfo();
