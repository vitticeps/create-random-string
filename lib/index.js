module.exports = function (mask) {
    sl = "abcdefghijklmnopqrstuvwxyz";     // sl - small letters
    cl = sl.toUpperCase();            // cl - capital letters
    d = "0123456789";                      // d - digits 
    s = "";                                // s - string to be appended -> returned

    if (mask == undefined) {
        for (var i = 0; i < 64; i++) {
            _append(this.sl + this.cl + this.d)
        }
        return _return();
    }

    if (typeof(mask) == "number" && mask > 0) {
        for (var i = 0; i < mask; i++) {
            _append(this.sl + this.cl + this.d)
        }
        return _return();
    }

    if (typeof(mask) == "string" && mask.length > 0) {
        var dm = mask.match(/\([A-z0-9]+\|[A-z0-9]+\)/g),
            c = true;
        if (dm && dm.length > 0) {
            for (var i = 0; i < dm.length; i++) {
                var p = dm[i].replace(/[\(\)]/g, "").split("|");
                if (p[0].match(/^[xX0]+$/) && p[1].match(/^[0-9]+$/) && parseInt(p[1]) > 0) {
                    mask = mask.replace(dm[i], _buildMask(p[0], parseInt(p[1])));
                }
                else {
                    c = !c;
                    break;
                }
            }
        }
        if (!c) return false;
        return _build(mask);
    }

    return false;

    function _build (mask) {
        for (var i = 0; i < mask.length; i++) {
            if (mask[i].match(/[x]/)) {
                _append(this.sl);
            }
            else if (mask[i].match(/[X]/)) {
                _append(this.cl);   
            }
            else if (mask[i].match(/[0]/)) {
                _append(this.d);
            }
            else if (mask[i].match(/\W/)) {
                _appendChar(mask[i]);
            }
        }
        return _return();
    }

    function _buildMask (charset, length) {
        var r = "";
        for (var i = 0; i < length; i++) {
            r += charset[Math.floor(Math.random() * charset.length)];
        }
        return r;
    }

    function _append (charset) {
        this.s += charset[Math.floor(Math.random() * charset.length)];
    }

    function _appendChar (char) {
        this.s += char;
    }

    function _return () {
        return this.s;
    }
}
