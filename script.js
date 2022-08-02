$(document).ready(function(){

    let a = "";
    let b = "";
    let c = "";
    let sign = "";

    $('.number').on('click',function(){
        $("input[name='textview']").val($("input[name='textview']").val() + $(this).text());
        b = $("input[name='textview']").val();
    });

    $('.sign').on('click',function(){
        a = $("input[name='textview']").val();
        $("input[name='textview']").val($(this).attr('name'));
        if ($("input[name='textview']").val() == "+")
            sign = "+";
        else if ($("input[name='textview']").val() == "-")
            sign = "-";
        else if ($("input[name='textview']").val() == "*")
            sign = "*";
        else if ($("input[name='textview']").val() == "/")
            sign = "/";
        else if ($("input[name='textview']").val() == "%")
            sign = "%";
        else if ($("input[name='textview']").val() == "x")
            sign = "x";
        $("input[name='textview']").val("");
    });

    $('.equal').on('click',function(){
        a = Number(a);
        b = Number(b);
        if (sign == "+")
            c = a + b;
        else if (sign == "-")
            c = a - b;
        else if (sign == "*")
            c = a * b;
        else if (sign == "%")
            c = a % b;
        else if (sign == "/")
            c = a / b;
        else if (sign == "x")
            c = Math.pow(a,b);
        $("input[name='textview']").val(c);
    });

    $('.del').on('click',function(){
        var exp = $("input[name='textview']").val();
        $("input[name='textview']").val(exp.substring(0, exp.length - 1));
    });

    $('.math').on('click',function(){
        b = $("input[name='textview']").val();
        c =  Math.sqrt(b);
        $("input[name='textview']").val(c);
    });
});