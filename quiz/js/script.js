/**
 * Created by Stéphanie on 08/03/2016.
 */

var app = angular.module('app', []);


app.controller('firstCtrl', ['$scope', function($scope) {
    $scope.title = 'Vous êtes plus back-end ou Front-end en tant que developpeur ?';


    $scope.categories = [
        {
            name:'Javascript',
            description: 'Le métier de Developer  consiste à développer des application ou site internet !',
            score: 0
        },
        {
            name:'php',
            description: 'Le métier de Webdesign  consiste à développer des application ou site internet !',
            score: 0
        }
    ];

    $scope.questions = [
        {
            label:'Quel est le rapport entre Java et JavaScript ?',
            response: [{text: "C'est le même langage, mais le nom  JavaScript  est utilisé pour le code s'exécutant dans une page Web", score:0},
                        {text: 'Ce sont deux langages différents, malgré quelques points communs dans la syntaxe', score:1},
                        {text: 'Java est une version améliorée de JavaScript', score:0},
                        {text: "Java est une île, ça n'a rien à voir !", score:0}
            ],
            cat: $scope.categories[0].name,
            score: $scope.categories[0].score
        },
        {
            label:'Laquelle de ces syntaxes est correcte ?',
            response: [{text: 'if (a != 2) {}', score:1},
                        {text: 'if a != 2 {}', score:0},
                        {text: 'if (a <> 2) {}', score:0},
                        {text: 'if a <> 2 {}', score:0}

            ],
            cat: $scope.categories[0].name,
            score: $scope.categories[0].score
        },
        {
            label:"Quel attribut des noeuds de l'arbre DOM correspond à l'attribut (X)HTML class ?",
            response: [
                {text: 'class', score:1},
                {text: 'CLASS', score:0},
                {text: 'className', score:0},
                {text: 'kiwi', score:0}

            ],
            cat: $scope.categories[0].name,
            score: $scope.categories[0].score
        },
        {
            label:"Dans un fichier JavaScript externe (.js), il faut :",
            response: [
                {text: "entourer le code avec les balises <script> et </script>.", score:0},
                {text: 'préciser l’encodage du fichier avec la règle @charset.', score:0},
                {text: 'échapper les caractères spéciaux (X)HTML.', score:0},
                {text: 'Aucune des réponses précédentes.', score:1}

            ],
            cat: $scope.categories[0].name,
            score: $scope.categories[0].score
        },
        {
            label:"Lequel de ces types d'événements n'existe pas ?",
            response: [
                {text: "blur", score:0},
                {text: 'load', score:0},
                {text: 'mouseclick', score:1},
                {text: 'mouseout', score:0}

            ],
            cat: $scope.categories[0].name,
            score: $scope.categories[0].score
        },
        {
            label:"Que signifie PHP ?",
            response: [
                {text: "Page Helper Process", score:1},
                {text: 'Programming Home Pages', score:0},
                {text: 'PHP: Hypertext Preprocessor', score:0}
            ],
            cat: $scope.categories[1].name,
            score: $scope.categories[1].score
        },
        {
            label:"Quelle fonction retourne la longueur d'une chaîne de texte ?",
            response: [
                {text: "strlen", score:1},
                {text: 'strlength', score:0},
                {text: 'length', score:0},
                {text: 'substr', score:0}
            ],
            cat: $scope.categories[1].name,
            score: $scope.categories[1].score
        },
        {
            label:"Comment accède-t-on au 1er élément chaton dans le tableau suivant : $tableau = Array('chaton' , 'ornithorynque', 'dauphin'); ?",
            response: [
                {text: "$tableau[1]", score:0},
                {text: '$tableau[0]', score:1},
                {text: '$tableau{0}', score:0},
                {text: '$tableau.get(1)', score:0}
            ],
            cat: $scope.categories[1].name,
            score: $scope.categories[1].score
        },
        {
            label:"Comment vérifie-t-on l'égalité de deux variables : $a et $b ?",
            response: [
                {text: "$a = $b", score:0},
                {text: '$a == $b', score:1},
                {text: '$a != $b', score:0},
                {text: 'if($a,$b)', score:0}
            ],
            cat: $scope.categories[1].name,
            score: $scope.categories[1].score
        },
        {
            label:"Quelle est l'utilité de l'opérateur || ?",
            response: [
                {text: "Il sert à vérifier que toutes les conditions sont réalisées.", score:0},
                {text: "Il sert à vérifier qu'une, et une seule, des conditions est réalisée.", score:0},
                {text: "Il sert à vérifier qu'une, au moins, des conditions est réalisée.", score:1}
            ],
            cat: $scope.categories[1].name,
            score: $scope.categories[1].score
        }

    ];

    //Je push les checkBox cochées dans mon tableau
    $scope.checked_value = ['apple', 'pear'];

    console.log($scope.checked_value);


    //Qd je clique sur le bouton valider :
    //$scope.validate = function(value){
    //
    //
    //};


}]);




