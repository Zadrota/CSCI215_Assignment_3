

$( window ).load( function(){
    $('a img').each( function(){
        var $this = $( this );
        $this.parent().wrap( '<div class="pop-out" style="display: inline-block; text-align: center;"></div>' );
        var imgHeight = $this.height();
        var imgWidth = $this.width();
        $this.parents( 'div.pop-out' )
            .css({ 'height' : imgHeight,
                'width' : imgWidth
            });
        $this.css({ 'height' : '94%',
            'width' : 'auto',
            'margin' : '3% 0'
        });});
    $( 'body' ).append( '<style>img.pop-out-hover{ margin-top: 0 !important; margin-bottom: 0 !important; height: 100% !important; }</style>' );
    $( 'a img' ).hover(
        function() {
            $( this ).addClass( 'pop-out-hover' );
        }, function() {
            $( this ).removeClass( 'pop-out-hover' );
        }
    );
});

var modal = document.getElementById('pop');
var img = document.getElementById('pup');
var modalImg = document.getElementById("img0");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

var span = document.getElementsByClassName("exit")[0];

span.onclick = function() {
    modal.style.display = "none";
}