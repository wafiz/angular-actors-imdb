var app=angular.module("app",[]);
app.controller("myCtrl",function($scope){
	 $scope.sortType= 'name'; // set the default sort type
	$scope.actors=[
        {
            name: 'Cameron Diaz',

            link: 'http://www.imdb.com/name/nm0000139/',

            img: 'img/Cameron Diaz.jpg'},
        {

            name: 'denzel washington',

            link: 'http://www.imdb.com/name/nm0000243/?ref_=fn_al_nm_1',

            img: 'img/denzel washington.jpg'

        },

        {name: 'Elden Henson',

            link: 'http://www.imdb.com/name/nm0711805/?ref_=fn_al_nm_1',

            img: 'img/Elden Henson.jpg'},

        {

            name: 'Johanna Braddy',

            link: 'http://www.imdb.com/name/nm1715189/?ref_=fn_al_nm_1',

            img: 'img/Johanna Braddy.jpg'

        },

        {name: 'Margot Robbie',

            link: 'http://www.imdb.com/name/nm3053338/?ref_=fn_al_nm_1',

            img: 'img/Margot Robbie.jpg'},

        {

            name: 'Michael Chiklis',

            link: 'http://www.imdb.com/name/nm0004821/?ref_=fn_al_nm_1',

            img: 'img/Michael Chiklis.jpg'

        },

        {name: 'Peggy Lipton',

            link: 'http://www.imdb.com/name/nm0005152/?ref_=fn_al_nm_1',

            img: 'img/Peggy Lipton.jpg'},

        {
            name: 'Timothy Bottoms',

            link: 'http://www.imdb.com/name/nm0000961/?ref_=fn_al_nm_1',

            img: 'img/Timothy Bottoms.jpg'

        },
        {

            name: 'Angelina Jolie Pitt',

            link: 'http://www.imdb.com/name/nm0001401/?ref_=nv_sr_2',

            img: 'img/Angelina Jolie Pitt.jpg'

        },
        {

            name: 'Will Smith',

            link: 'http://www.imdb.com/name/nm0000226/?ref_=nv_sr_1',

            img: 'img/Will Smith.jpg'

        },
        {

            name: 'Nicolas Cage',

            link: 'http://www.imdb.com/name/nm0000115/?ref_=nv_sr_2',

            img: 'img/Nicolas Cage.jpg'

        },
        {
            name: 'Brad Pitt',

            link: 'http://www.imdb.com/name/nm0000093/',

            img: 'img/Brad Pitt.jpg'
        }
    ];
      $scope.sort = function(dir) {
		if(dir=='up'){
			  $scope.upDown='name';
		}else{
			   $scope.upDown='-name';
		}
      
		};
    });
 





