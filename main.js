function search() {
    var val = $('.searchinput').val();

    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + val + '&format=json&callback=?';
    $.getJSON(url, function(wiki) {
        console.log(wiki);
        $('.output').empty();
        for (let i = 0; i < wiki[1].length; i++) {
            $('.output').append(
                `<div class=" item item${i}" style='display:none;'><h3> ${wiki[1][i]} </h3> <p> ${wiki[2][i]} </p></div>`
            );

            console.log($('.item').length);
            $(`.item${i}`).click(function() {
                window.location.href = `${wiki[3][i]}`;
            })
            $(`.item${i}`).mouseover(function() {
                    $(`.item${i}`).css({
                        borderLeft: '10px solid grey',
                        transform: 'scale(1.3)'
                    })
                })
                .mouseout(function() {
                    $(`.item${i}`).css({
                        borderLeft: '10px solid #ccc',
                        transform: 'scale(1)'
                    })
                })
            $(`.item${i}`).fadeIn(300 * i);
        }
        // alert($('.item').length);
        if ($('.item').length <= 0) {
            $('.output').append(`<div class="item itemx"><h2>没有该结果</h2> <p>换一个搜一搜 - . -</p></div>`);
        }
    })
}
$('.searchbutton').click(function() {
    search();
})
$('.searchinput').keydown(function() {
        if (event.keyCode == '13') {
            search();
            if ($('.searchinput').val() === "") {

                $('.searchbox').css({
                    marginTop: '300px'
                })
            } else {
                $('.searchbox').css({
                    marginTop: '30px'
                })

            }

        }
    })
    // $('.searchinput').focus(function(){
    // 	$('.searchinput').css({
    // 		width: '400px',
    // 		backgroundColor: '#fff'
    // 	})
    // }).blur(function(){
    // 	if($('.searchinput').val().length <=0){
    // 		$('.searchinput').css({
    // 		width: '30px',
    // 		backgroundColor: '#092B40',
    // 		// padding: '20px'
    // 		})
    // 	 }
    // })