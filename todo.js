$(document).ready(function(){
	$("#add").click(function(){
		
		var newtext= $('#addlist').val();
		
		if(newtext.length >0){
			$("#u1").append("<li><input type='checkbox' id='c1'><span>"+ newtext+"&nbsp"+"</span><button id='edit'>Edit</button>"+"<button id='delete'>Delete</button></li>");
			$('#addlist').val('');

			$('#u1').on('click','#edit',function(){
				$(this).prev().attr('contenteditable','true');
                  // $('li').find('span').prop('contenteditable','true');
                            });

              $("#u1").on('click','#delete',function(){
              	            $(this).parent().remove();

                });

              $("#u1").on('click','#c1',function(){
              	$(this).parent().appendTo("#p1");
              })

              $("#p1").on('click','#c1',function(){
              	$(this).parent().appendTo("#u1");
              })
          //   $(function() {
          // $('#add').on('click');
          //      });

              $("#p1").on('click','#delete',function(){
              	            $(this).parent().remove();

                });


		         }

        
	});
});