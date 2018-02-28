  this.randomNo = function(type, length) {
        try {
            var oresult = undefined;
            switch (type.toUpperCase()) {
                case 'STRING':
                    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    for (var i = 0; i < length; i++) {
                        oresult = oresult + str.charAt(Math.floor(Math.random() * str.length));
                    }
                    break;
                case 'NUMBER':
                    var oresult = Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
                    break;
                default:
                    oresult = undefined;
                    break;
            }
        } catch (err) {
            return false;
        }
        return oresult;
    };
