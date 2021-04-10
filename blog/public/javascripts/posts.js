

$(document).ready(function() {
    $('#new-post').submit(function (e) {
        e.preventDefault();

        var post = $(this).serializeArray();

        $.ajax({
          type: 'POST',
          url: '/posts',
          data: post,
          success: function(data) {
            window.location.href = "/posts/" + data.post.id;
            
          },
          error: function(err) {
            console.log(err)
          }
        });

    })
})