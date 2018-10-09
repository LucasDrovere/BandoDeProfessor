function Aluno() {
    this.nome;
    this.sobrenome;
}

function Professor() {
    this.nome;
    this.materia;
    this.alunos = [];
}

function cadastrar() {
    var vnome = document.getElementById("nomeProf").value;
    var vmateria = document.getElementById("cboMateria").value;

    if (vnome != null && vmateria != null) {
        var p = new Professor();
        p.nome = vnome;
        p.materia = vmateria;
        console.log(p);      
    }
}

function inserirAluno() {

    var nome = getValorDo('nome');
    var sobrenome = getValorDo('sobrenome');

    var corpoTabela = getElementoPorId('corpo-tabela');
    
    var tr = document.createElement('tr');
    tr.insertCell(0).innerHTML = nome; //primeiro td
    tr.insertCell(1).innerHTML = sobrenome; //segundo td

    tr.setAttribute('data-nome', nome);
    tr.setAttribute('data-sobrenome', sobrenome);

    var btnExcluir = document.createElement('button');
    btnExcluir.innerHTML = 'E';
    //passando a função como parametro
    btnExcluir.addEventListener('click', function() {
        excluirAluno(tr);
        //equivalente
        //this.parentElement.parentElement.remove();
    });
    tr.insertCell(2).appendChild(btnExcluir);

    corpoTabela.appendChild(tr);
};

function excluirAluno(tr) {
    tr.remove();
}

function salvar() {

    var professor = new Professor();
    professor.nome = '//TODO';
    professor.materia = '//TODO';

    var corpoTabela = getElementoPorId('corpo-tabela');
    var linhas = corpoTabela.getElementsByTagName('tr');

    for (var iLinha = 0; iLinha < linhas.length; iLinha++) {
        var linha = linhas.item(iLinha);
        var nome = linha.dataset.nome;
        var sobrenome = linha.dataset.sobrenome;

        var aluno = new Aluno();
        aluno.nome = nome;
        aluno.sobrenome = sobrenome;

        professor.alunos.push(aluno);
    }

    console.log(professor);
};


function getElementoPorId(id) {
    return document.getElementById(id);
};

function getValorDo(id) {
    return getElementoPorId(id).value;
};

var combo = document.getElementById("cboMateria");

var materias = ["Portugues", "Historia", "Matematica Computacional", "Fisica", "Arte"];

for (var i = 0; i < materias.length; i++) {
    var option = document.createElement("option");

    option.text = materias[i];

    combo.add(option);
}