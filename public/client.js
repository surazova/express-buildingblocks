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
                '<a href="#' data-block =" '+block+'"><img src="del.jpg"></a>;
            }
            
            $('.block-list').append(list)
        }
    
    $(function() {
        
        $('.block-list').on('click', 'a[data-block]', function(event) {
            if(!confirm('Are you sure?')) {
                return false;  //if cancel is clicked 
            }
            var target = $(event.currentTarget); //assigned to target variable 
            
            $.ajax({
                type: 'DELETE', url: '/blocks/' +target.data('block')
                
            }).done(function() {
                target.parents('li').remove(): //finds the parent li element and removes it 
                
            });
            
        });
    })
});