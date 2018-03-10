$(function(){

  function Notes(){
    this.list = [{header: 'This is new header', content:"This is some content", priority:'1'}];
  }

  Notes.prototype.renderView =function(){
    var noteList = $(".note-list");
    if( this.list.length > 0  ){
      var newListHtml = '';
      for( var i = 0; i<this.list.length; i++ ){
        var priorityClass = (this.list[i].priority === '1' ) ? 'normal' : 'high' ;
        newListHtml +=
          '<li class="'+priorityClass+'">' +
          '<div class="control"><span class="delete"> Delete </span> <span class="update"> Update </span></div>'+
          '<div class="content-area"><h3 class="note-title"> '+this.list[i].header+' </h1> <p> '+this.list[i].content+' </p> </div> <span class="priority"></span></li>'
      }
    }
    noteList.html(newListHtml);
  }

  Notes.prototype.addNote = function(noteObj){
    console.log(this);
    this.list.push( noteObj );
  }




//Third party codes when you call the notes object
  var note = new Notes();
  note.renderView();
  var addBtn = $(".add_note");
  var noteList = ".note-list li";
  addBtn.on('click', function(e){
    e.preventDefault();

    var newList = {};

    var form = $(this).parents('form'); //Find most last paretns

    var header = form.find('input[name=header]').val();
    var content = form.find('textarea[name=content]').val();
    var priority = form.find('select[name=priority]').val();

    if( header === '' && content === '')
      return false;

    newList.header = header;
    newList.priority = priority;
    newList.content = content;

    note.addNote(newList);
    note.renderView();
  })


  // Show Menus
  $(document).on('click', noteList, function(e){
    $(this).toggleClass('active');
  })

})
