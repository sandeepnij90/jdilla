var myApp = angular.module('myApp',[]);
myApp.controller('quotes',function($scope){
  $scope.quotes = [
    {
      'quotee':'Quest Love',
      'quote':'"If you were to secretly ask the most praised hip-hop producers, if given a top three, who they fear the most, Dilla’s name would chart on everyone’s list, hands down."',
      'img': 'questlove.jpg'
    },
    {
      'quotee':'Black Thought',
      'quote':'"I can\'t begin to explain the influence his mind and ear has had on my band, myself, and the careers of so many other artists. The most humble, modest, worthy and gifted beatmaker I\'ve known...and definitely the best producer on a mic."',
      'img': 'blackthought.jpg'
    },
    {
      'quotee':'Pete Rock',
      'quote':'"He was one of the greatest, man. He was the greatest to ever do it, for the new cats. And for his mother to tell me that I was his favorite producer – I was like ‘Wow, that’s dope, man.’"',
      'img': 'peterock.jpg'
    }
  ];
})
