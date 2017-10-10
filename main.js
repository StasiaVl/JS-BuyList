$(function () {
    var $list = $(".bl-list");
    var ONE_ROW_HTML = $(".one-row").html();

    function addItem(title) {
        var $node = $(ONE_ROW_HTML);
        var quantity = 1;
        var $quantity_label = $node.find(".label");
        var name = $node.find(".left");
        $quantity_label.text(quantity);
        name.text(title);

        $node.find(".remove").click(function () {
            $node.remove();
        });

        name.click(function () {
            name.hide();
            $node.find(".input-text").show();
            $node.find(".input-text").val(title);
            $node.find(".input-text").focus();
        });
        $node.find(".input-text").focusout(function () {
            name.show();
            $node.find(".input-text").hide();

            if ($node.find(".input-text").val().trim()) {
                title = $node.find(".input-text").val();
                name.text(title);
            }
        });
        $node.find(".input-text").keyup(function (e) {
            if (e.which == 13) {
                name.show();

                $node.find(".input-text").hide();

                if ($node.find(".input-text").val().trim()) {
                    title = $node.find(".input-text").val();
                    name.text(title);
                }
            }
        });

        $node.find(".plus").click(function () {
            quantity += 1;
            if (quantity > 1) {
                $node.find(".minus").prop("disabled", false);
            }
            $quantity_label.text(quantity);
        });
        $node.find(".minus").click(function () {
            quantity -= 1;
            if (quantity === 1) {
                $node.find(".minus").prop("disabled", true);
            }
            $quantity_label.text(quantity);
        });

        $node.find(".buy").click(function () {
            $node.fadeOut("normal", function () {
                $node.find(".remove").hide();//css("display", "none");
                $node.find(".add-buttons").css("visibility", "hidden");
                $node.find(".unbuy").show();
                $node.find(".buy").hide();
                name.css("textDecoration", "line-through")
            });
            $node.fadeIn("normal");
        });
        $node.find(".unbuy").click(function () {
            $node.fadeOut("normal", function () {
                $node.find(".remove").show();
                $node.find(".add-buttons").css("visibility", "visible");
                $node.find(".unbuy").hide();
                $node.find(".buy").show();
                name.css("textDecoration", "none")
            });
            $node.fadeIn("normal");
        });

        $list.append($node);
    }


    var $new_input = $(".input-text");
    $(".add").click(function () {
        var new_name = $new_input.val();
        if (new_name.trim()) {
            addItem(new_name);
            $new_input.val("");
            $new_input.focus();

        }
    });
    $new_input.keyup(function (e) {
        if (e.which == 13) {
            var new_name = $new_input.val();
            if (new_name.trim()) {
                addItem(new_name);
                $new_input.val("");
                $new_input.focus();

            }
        }
    });

    addItem("Печиво");
    addItem("Молоко");
    addItem("Какао");
});