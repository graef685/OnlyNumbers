(function($) {
    $.fn.onlyNumbers = function() {
        var selector = this;
        var keyDown = false, ctrl = 17, vKey = 86, Vkey = 118;

        $(document).keydown(function (e) {
            if (e.keyCode == ctrl) keyDown = true;
        }).keyup(function (e) {
            if (e.keyCode == ctrl) keyDown = false;
        });

        $(selector).on('keypress', function (e) {
            if (!e) var e = window.event;
            if (e.keyCode > 0 && e.which == 0) return true;
            if (e.keyCode)    code = e.keyCode;
            else if (e.which) code = e.which;
            var character = String.fromCharCode(code);
            if (character == '\b' || character == ' ' || character == '\t') return true;
            if (keyDown && (code == vKey || code == Vkey)) return (character);
            else return (/[0-9]$/.test(character));
        }).on('focusout', function (e) {
            var $this = $(this);
            $this.val($this.val().replace(/[^0-9]/g, ''));
        }).on('paste', function (e) {
            var $this = $(this);
            setTimeout(function () {
                $this.val($this.val().replace(/[^0-9]/g, ''));
            }, 5);
        });
    };
}(jQuery));
