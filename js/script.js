$(function(){

  /* metoda nr 1 na wybranie nieparzystych elementów:
  var span = $("span");
  span.each(function(index, element){
    if(index % 2 == 0) {
      $(element).css('color', 'red');
    };
  });
*/

// metoda nr 2 na wybranie nieprzystych elementów
  var span = $('span');
  span.each(function(index, element){
      $('span:even').css('color', 'red');
  });
 
  var paragraphs = $('p');
    paragraphs.each(function(index, element){
      var button = ' <button class="btn" data-tmp=" ' + index + ' ">Click here</button> ' //atrybut data-tmp równy indeksowi przycisku
      $(element).append(button);
    });

  $('button').click(function(){
    alert($(this).attr('data-tmp')); //wyświetli w alercie wartość atrybutu
  });

});






//$("p") ---> wybór wszystkich elementów p za pomocą jQuery

/* 1.
$(document).ready(function(){
  console.log('DOM loaded - you can have fun');
}); ---> wybór dokumentu całej struktury DOM, a dopiero gdy się załaduje to wykonaj funkcję
*/

/* 2.
$(function(){
  console.log('DOM loaded - you can have fun');
}); ---> alias do funkcji $(document).ready to $(function)
*/


/* 3.
$(function(){
  $('p').css('color', 'green');
});  ---> na tablicy elementów p stworzonych za pomocą selektora $ stosujemy przekształcenie- zmianę koloru tekstu, za pomocą metody css
*/

/* 4.
$(function(){
  var paragraphs = $('p').css('color', 'red'); //przypisanie do zmiennej żey mieć dostęp do tablicy
  console.log(paragraphs[0]); //odwołanie przez indeks tablicy Javascript
  console.log(paragraphs.eq(0)); //odwołanie za pomocą metody jQUery
});
*/

/* 5.
$(function(){
  var paragraphs = $('p').css('color', 'red');
  var rawFirstParagraph = paragraphs[0];
  console.log(rawFirstParagraph);
  var jqFirstParagraph = paragraphs.eq(0)
  console.log(jqFirstParagraph);
  jqFirstParagraph.css('color', 'blue');
}); // metods Js pobiera surowy element bez opakowania jQuery
*/

/* 6.
$(function(){
  var p = $( '<p></p>' ),
      pWithText = $( '<p>Hi!</p>' ),
      pWithClass = $( '<p class="greeting">Hi!</p>' ); 
  console.log(p);
  console.log(pWithText);
  console.log(pWithClass);
  
  $("body").append(pWithText);
  $("body").append(pWithClass);
  
});
*/

/* 7.
$(function(){
  $('p').each(function( index, elem ) {
    $( elem ).text('paragraf ' + index);
  }).css('color', 'red');
});
*/

/* 8.
$(function(){
  var li = $('nav').find('li').last(); //wybieramy element rozp. trawersowanie
  li.css("color", "red");
});
*/

/* 9.
$(function(){
  var li = $('nav').find('li').last().css('color', 'blue');
  console.log(li);
});
*/

/* 10.
$(function(){
  
  $("ul").append("<li>New element</li>") //dodaje element do nawigacji
  
  var firstItem = $('nav').find('li').first(); //znajduje pierwszy element
 
  console.log(firstItem.text()); //pobiera tekst
  
  firstItem.css("color", "red")
});
*/





/* metody:

$('p').css('właściwość', 'wartość'); --> style na elementach

console.log(paragraphs.eq(0)); --> odwołanie do elementu tablicy

$( '<p>Hi!</p>' ); ---> tworzenie nowego elementu w drzewie DOM

$( '<p class="greeting">Hi!</p>' ); --> tworzenie nowego elementu z classą

$("body").append(pWithText); ---> dodaje stworzony elemnt do body
$("ul").append("<li>New element</li>") --> dodaje do listy kolejny element

$('p').each(function( index, elem ) { ---> pętla each
  $( elem ).text('paragraph ' + index);--> ustawia tekst wewnątrz: paragraph+nr
}).css('color', 'red'); ---> zmiana koloru na czerwony

$('p').each().css().click().css()... --> łańcuchowanie

var li = $('nav').find('li').last(); --> znajduje i wybiera ostatni element z listy

console.log(firstItem.text()); --> pobiera tekst pierwszego elementu



find
last
first
siblings
next
parent
children
parents
closest


$('span:even') --> wybiera nieparzyste elementy

attr('data-tmp') --> zwraac wartość atrybutu data-tmp

$('button').click(function() ---> przypisuje metodę click do przycisków, czyli funkcję która będzie uruchamiana po kliknięciu

alert($(this).attr('data-tmp')); --> metoda attr wyświetli w alercie wartość atrybutu

*/