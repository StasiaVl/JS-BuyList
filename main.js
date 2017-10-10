$(function () {
    var $list = $(".bl-list");
    var ONE_ROW_HTML = $(".one-row").html();
    var $left_list = $(".bl-left-list");
    var $bought_list = $(".bl-bought-list");
    var ONE_ITEM_HTML = $(".one-item").html();

    function addItem(title) {
        var $node = $(ONE_ROW_HTML);
        var $nodeLeft = $(ONE_ITEM_HTML);
        var $nodeBought = $(ONE_ITEM_HTML);
        $nodeBought.find(".label").css("textDecoration", "line-through");
        $nodeBought.find(".name").css("textDecoration", "line-through");
        $nodeBought.hide();
        var quantity = 1;
        var $quantity_label = $node.find(".label");
        var $quantity_left_label = $nodeLeft.find(".count");
        var $quantity_bought_label = $nodeBought.find(".count");
        var $name = $node.find(".left");
        var $name_left = $nodeLeft.find(".name");
        var $name_bought= $nodeBought.find(".name");

        $name.text(title);
        $name_left.text(title);
        $name_bought.text(title);
        $quantity_label.text(quantity);
        $quantity_left_label.text(quantity);
        $quantity_bought_label.text(quantity);

        $node.find(".remove").click(function () {
            $node.remove();
            $nodeLeft.remove();
            $nodeBought.remove();
        });

        $name.click(function () {
            $name.hide();
            $node.find(".input-text").show();
            $node.find(".input-text").val(title);
            $node.find(".input-text").focus();
        });
        $node.find(".input-text").focusout(function () {
            $name.show();
            $node.find(".input-text").hide();

            if ($node.find(".input-text").val().trim()) {
                title = $node.find(".input-text").val();
                $name.text(title);
                $name_left.text(title);
                $name_bought.text(title);
            }
        });
        $node.find(".input-text").keyup(function (e) {
            if (e.which == 13) {
                $name.show();

                $node.find(".input-text").hide();

                if ($node.find(".input-text").val().trim()) {
                    title = $node.find(".input-text").val();
                    $name.text(title);
                    $name_left.text(title);
                    $name_bought.text(title);
                }
            }
        });

        $node.find(".plus").click(function () {
            quantity += 1;
            if (quantity > 1) {
                $node.find(".minus").prop("disabled", false);
            }
            $quantity_label.text(quantity);
            $quantity_left_label.text(quantity);
            $quantity_bought_label.text(quantity);
        });
        $node.find(".minus").click(function () {
            quantity -= 1;
            if (quantity === 1) {
                $node.find(".minus").prop("disabled", true);
            }
            $quantity_label.text(quantity);
            $quantity_left_label.text(quantity);
            $quantity_bought_label.text(quantity);
        });

        $node.find(".buy").click(function () {
            $node.fadeOut("normal", function () {
                $node.find(".remove").hide();//css("display", "none");
                $node.find(".add-buttons").css("visibility", "hidden");
                $node.find(".unbuy").show();
                $node.find(".buy").hide();
                $name.css("textDecoration", "line-through")
                $nodeLeft.hide();
                $nodeBought.show();
            });
            $node.fadeIn("normal");
        });
        $node.find(".unbuy").click(function () {
            $node.fadeOut("normal", function () {
                $node.find(".remove").show();
                $node.find(".add-buttons").css("visibility", "visible");
                $node.find(".unbuy").hide();
                $node.find(".buy").show();
                $nodeLeft.show();
                $nodeBought.hide();
                $name.css("textDecoration", "none")
            });
            $node.fadeIn("normal");
        });

        $list.append($node);
        $left_list.append($nodeLeft);
        $bought_list.append($nodeBought);
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