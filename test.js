$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$('#exampleModal').on('show.bs.modal', function (event) {
  let button = $(event.relatedTarget) // Кнопка яка викликаэ модальне выкно
  let recipient = button.data('whatever') // Витягуэ ынфу з атрибута data
  
  
  let modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})


let cars = [{
    brandName: 'audi',
    models: [{
        name: 'A3',
        price: 100000,
        color: 'red',
        speed: 200
    }, {
        name: 'A8',
        price: 100000,
        color: 'red',
        speed: 250
    }]

}, {
    brandName: 'zhiuli',
    models: [{
        name: 6,
        price: 10000,
        color: 'red',
        speed: 30
    }, {
        name: 7,
        price: 20000,
        color: 'white',
        speed: 40
    }]
}, {
    brandName: 'bmv',
    models: [{
        name: 'X3',
        price: 300000,
        color: 'black',
        speed: 260
    }, {
        name: 'X5',
        price: 250000,
        color: 'green',
        speed: 150
    }]
}];




// Пример из инета
/*
<img data-image-id='ID_IMAGE'>

	
	$('.image').on('click', function() {
    var $thisImage = $(this);
    $.ajax({
        url:'****',
        method:'***',
        data:{
            imageId:$thisImage.attr('data-image-id')
        }
        dataType:'JSON'
    }).then(function(res) {
        // в переменной res Должен быть JSON массив с данными картинками
        $('#modal').bindParams({
            imageSrc:res.src,
            imageId:res.id,
            imageName:res.name
        }).show();
    });
});
*/


// АБО -------------*****
/*
$('.imagesClassName').on('click', function() {
   var imageSrc = $(this).attr('src'); // путь до нажатой картинки
   $('#modal img').attr('src', imageSrc);
   $('#modal').show();
});
*/