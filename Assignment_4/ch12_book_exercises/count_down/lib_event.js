class Event {
    constructor(name, dateString) {
        this.name = name;
        this.dateString = dateString;
        this.date = new Date(dateString);
    }

    get hasName() {
        return this.name != '';
    }
    
    get hasDate() {
        return this.date != '';
    }

    get isValidDate() {
        return this.date.toString() != 'Invalid Date';
    }
}