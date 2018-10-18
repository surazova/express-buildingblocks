$(function() {
    $.get('/blocks', appendToList);
    
    function appendToList(blocks) {
        var list = [];
        for(var i in blocks){
            list.push($('<li>', { text: blocks[i] }));
        }
        $('.block-list').append(list);
    }
    
//adding a listener
 
    $('form').on('submit', function(event) {
        event.preventDefault(); //preventing the form from being immediately submitted 
        var form = $(this);
        var blockData = form.serialize();
        
        $.ajax({
            type: 'POST', url: '/blocks', data: blockData 
        }).done(function(blockName){
            appendToList([blockName]); //array with a new block as its single argument 
            form.trigger('reset'); //cleans up form tet input fields 
        });
        });
        
        functionappendToList(blocks) {
            var list = [];
            var content, block; 
            for(var i in blocks){
                block = blocks[i];
                content = '<a href = "/blocks/' +block+ '">'+block+'</a>;
                list.push($('<li>', {html: content }));
            }
            
            $('.block-list').append(list)
        }
    
});