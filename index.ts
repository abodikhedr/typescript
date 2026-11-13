
class User {
    constructor(
        private _id: number,
        private _name: string,
        private _email: string,
        private _password: string,
        private _phone: string,
        private _age: number,
        public notebooks:NoteBook[]
    ) {
        if (_age < 18 || _age > 60) {
            throw new Error("age must be between 18 and 60");
        }
    }
    get age() {
        return this._age
    }
    get id() {
        return this._id
    }
    get name() {
        return this._name
    }
    get password() {
        return this._password
    }
    get phone() {
        return this._phone
    }
    get email() {
        return this._email
    }

    set setAge(value: number) {
        if (value < 18 || value > 60) {
            throw new Error("age must be between 18 and 60");
        }
        this._age = value
    }
    set setName(value: string) {
        this._name = value
    }
    set setPassword(value: string) {
        this._password = value
    }
    set setEmail(value: string) {
        this._email = value
    }
    set setPhone(value: string) {
        this._phone = value
    }

    displayInfo(): void {
        console.log(`id:${this.id}`);
        console.log(`name:${this.name}`);
        console.log(`password:${this.password}`);
        console.log(`email:${this.email}`);
        console.log(`age:${this.age}`);
        console.log(`phone:${this.phone}`);
        this.notebooks.forEach(notebook => {
            notebook.preview()
        });
    }
    addNoteBook(notebook:NoteBook){
        this.notebooks.push(notebook)
    }

}


class Admin extends User {
    changeNoteTitle(note: Note, value: string): void {
        note.setTitle = value
    }
    changeNoteContent(note: Note, value: string): void {
        note.setContent = value
    }
}

class Note {
    constructor(private _id: number, private _title: string, private _content: string, private _user: User) {

    }
    public get id(): number {
        return this._id
    }
    public get title(): string {
        return this._title
    }
    public get content(): string {
        return this._content
    }
    public get user(): User {
        return this._user
    }

    public set setId(value: number) {
        this._id = value;
    }
    public set setTitle(value: string) {
        this._title = value;
    }
    public set setContent(value: string) {
        this._content = value;
    }
    public set setUser(value: User) {
        this._user = value;
    }
    preview() {
        console.log(`id:${this.id}`)
        console.log(`title:${this.title}`)
        console.log(`content:${this.content}`)
        console.log(`userId:${this.user.id}`)
    }
}




class NoteBook {
    constructor(public notes: Note[] = []) {

    }

    addNote(note: Note) {
        this.notes.push(note)
    }
    removeNote(id: number) {
        this.notes = this.notes.filter((note) => {
            return note.id != id
        })
    }

    preview() {
        this.notes.forEach(note => {
            note.preview()
            console.log("===========");

        });
    }
}

class storage<T>{
    constructor(public items:T[]){

    }
    addItem(value:T){
        this.items.push(value)
    }

    removeItem(value:T){
        this.items=this.items.filter((item)=>{
            return item !== value
        })
        
    }

    getAllItems(){
        this.items.forEach(item => {
            console.log(item);
        });
    }
}

const user =new User(1,"abodi","adsa","daWSAD","qafdwf",18,[])
const note = new Note(1, "haii", "i was born today", user)
const note2 = new Note(2, "hello", "i was born 100 years ago", user)
const notebook = new NoteBook()


notebook.addNote(note)
notebook.addNote(note2)

user.addNoteBook(notebook)

user.displayInfo()
