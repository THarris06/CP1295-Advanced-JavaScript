const validation = {

    isNumeric(value) {
        if (!isNaN(value)) {
            return true;
        }
        else { return false; }
    },

    isInRange(value, min, max) {
        if (this.isNumeric(value)) {
             if (value >= min && value <= max) {
                return true;
            }
            else { return false; }
        }
        else { return false; }
    }
}