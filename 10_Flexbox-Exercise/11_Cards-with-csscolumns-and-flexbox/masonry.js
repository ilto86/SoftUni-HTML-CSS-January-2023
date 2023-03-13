var elem = document.querySelector('.cards-layout-masonry');
var msnry = new Masonry( elem, {
  itemSelector: 'section',
  columnWidth: '.grid-sizer',
  gutter: 20,
  percentPosition: true
});
