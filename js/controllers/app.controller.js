angular.module("angularNivel1App").controller('appCtrl', function($scope){
    
    // Objeto vazio
    var aluno = {};

    // Objeto com atributos
    var aluno2 = {
        nome: null,
        idade: null,
        sexo: null
    };


    aluno.nome = 'Yudi';
    console.log(aluno.nome);
    aluno2.telefone = '40028922';
    console.log(aluno2.telefone);

    $scope.alunos = [];
    // var alunos = new Array()

    $scope.alunos[0] = aluno2;
    $scope.alunos.push(aluno2);

    var arrayPopulado = ['em', 'pou', 'gante'];

    
    $scope.alunos = [
        {nome: 'Desnecessauro', idade: 32},
        {nome: 'inauro', idade: 22},
        {nome: 'Bolsonauro', idade: 65},
        {nome: 'armauro', idade: 44}
    ]
});