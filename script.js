document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botao_ind").addEventListener("click", function(event) {
        event.preventDefault();
        recebeIdadeInd();
    });

    document.getElementById("botao_casal").addEventListener("click", function(event) {
        event.preventDefault();
        recebeIdadeCasal();
    });

    document.getElementById("botao_trisal").addEventListener("click", function(event) {
        event.preventDefault();
        recebeIdadeTrisal();
    });
});

function recebeIdadeInd() {
    var idade = document.getElementById("idade_ind").value;
    var idade_mes = document.getElementById("idade_ind_mes").value;
    if(idade_mes > 6){
        idade++;
    }else if(idade < 1 && idade_mes < 1){
        document.getElementById("res_ind").innerHTML = "Informe um valor!";
        document.getElementById("res_ind").style.color = "red";
        return;
    }
    var id_min = (idade/2)+7;
    var id_max = ((idade-7)*2)+1;
    if (id_min % 2 != 0){
        id_min = Math.floor(id_min);
    }
    if(id_max % 2 != 0){
        id_max = Math.floor(id_max);
        if(id_max >= 100){
            id_max = 99;
        }
    }
    if (idade < 13){
        document.getElementById("res_ind").innerHTML = "Você é novo(a) demais para namorar!";
        document.getElementById("res_ind").style.color = "red";
    } else if (idade >= 100) {
        document.getElementById("res_ind").innerHTML = "Você é velho(a) demais para namorar! Lei: 8.112!";
        document.getElementById("res_ind").style.color = "red";
    } else {
        document.getElementById("res_ind").innerHTML = `Você só pode namorar alguém entre ${id_min} e ${id_max}`;
        document.getElementById("res_ind").style.color = "blue";
    }
}

function recebeIdadeCasal() {
    var idade1 = document.getElementById("idade_casal1").value;
    var idade2 = document.getElementById("idade_casal2").value;
    var idade1_mes = document.getElementById("idade_casal1_mes").value;
    var idade2_mes = document.getElementById("idade_casal2_mes").value;
    if(idade1_mes > 6){
        idade1++;
    }
    if(idade2_mes > 6){
        idade2++;
    }
    if((idade1 < 1 && idade1_mes < 1)  || (idade2 < 1 && idade2_mes < 1)){
        document.getElementById("res_casal").innerHTML = "Informe um valor!";
        document.getElementById("res_casal").style.color = "red";
        return;
    }
    var troca;
    if (idade1 < idade2) {
        troca = idade1;
        idade1 = idade2;
        idade2 = troca;
    }
    var id_min1 = (idade1 / 2) + 7;
    var id_max1 = ((idade1-7)*2)+1;
    var id_min2 = (idade2 / 2) + 7;
    var id_max2 = ((idade2-7)*2)+1;

    id_min1 = Math.floor(id_min1);
    id_min2 = Math.floor(id_min2);
    id_max1 = Math.floor(id_max1);
    id_max2 = Math.floor(id_max2);

    if (idade1 < 13 && idade2 < 13) {
        document.getElementById("res_casal").innerHTML = "Vocês são novos demais para namorar!<br>NÃO É UM CASAL!";
        document.getElementById("res_casal").style.color = "red";
    } else if (idade1 > 12 && idade2 < 13) {
        document.getElementById("res_casal").innerHTML = `Você com ${idade2} anos é novo(a) demais para namorar!<br>NÃO É UM CASAL!`;
        document.getElementById("res_casal").style.color = "red";
    } else if (idade1 >= 100 && idade2 >= 100) {
        document.getElementById("res_casal").innerHTML = "Vocês são velhos demais para namorar! Lei: 8.112!<br>NÃO É UM CASAL!";
        document.getElementById("res_ind").style.color = "red";
    } else if (idade1 >= 100 && idade2 < 100) {
        document.getElementById("res_casal").innerHTML = `Você com ${idade1} anos é velho(a) demais para namorar! Lei: 8.112!<br>NÃO É UM CASAL!`;
        document.getElementById("res_casal").style.color = "red";
    }else if (idade1 < 100 && idade2 >= 100) {
        document.getElementById("res_casal").innerHTML = `Você com ${idade2} anos é velho(a) demais para namorar! Lei: 8.112!<br>NÃO É UM CASAL!`;
        document.getElementById("res_casal").style.color = "red";
    } else if (idade1 <= id_max2 && idade2 < 100) {
        document.getElementById("res_casal").innerHTML = `Vocês podem namorar!<br>É UM CASAL`;
        document.getElementById("res_casal").style.color = "blue";
    } else {
        document.getElementById("res_casal").innerHTML = "Vocês não podem namorar!<br>NÃO É UM CASAL!";
        document.getElementById("res_casal").style.color = "red";
    }
}

function recebeIdadeTrisal() {
    var idade = [];
    idade[0] = document.getElementById("idade_trisal1").value;
    idade[1] = document.getElementById("idade_trisal2").value;
    idade[2] = document.getElementById("idade_trisal3").value;
    var idade1t_mes = document.getElementById("idade_trisal1_mes").value;
    var idade2t_mes = document.getElementById("idade_trisal2_mes").value;
    var idade3t_mes = document.getElementById("idade_trisal3_mes").value;
    if(idade1t_mes > 6){
        idade[0]++;
    }
    if(idade2t_mes > 6){
        idade[1]++;
    }
    if(idade3t_mes > 6){
        idade[2]++;
    }
    if((idade[0] < 1 && idade1t_mes < 1) || (idade[1] < 1 && idade2t_mes < 1) || (idade[2] < 1  && idade3t_mes < 1)){
        document.getElementById("res_trisal").innerHTML = "Informe um valor!";
        document.getElementById("res_trisal").style.color = "red";
        return;
    }
    idade.sort((a, b) => b - a);

    var id_1 = idade[0], id_2 = idade[1], id_3 = idade[2];

    var id_min1 = (id_1 / 2) + 7;
    var id_max1 = ((id_1-7)*2)+1;
    var id_min2 = (id_2 / 2) + 7;
    var id_max2 = ((id_2-7)*2)+1;
    var id_min3 = (id_3 / 2) + 7;
    var id_max3 = ((id_3-7)*2)+1;

    id_min1 = Math.floor(id_min1);
    id_min2 = Math.floor(id_min2);
    id_min3 = Math.floor(id_min3);
    id_max1 = Math.floor(id_max1);
    id_max2 = Math.floor(id_max2);
    id_max3 = Math.floor(id_max3);

    if (id_1 < 13 && id_2 < 13 && id_3 < 13) {
        document.getElementById("res_trisal").innerHTML = "Vocês são novos demais para namorar!<br>NÃO É UM TRISAL!";
        document.getElementById("res_trisal").style.color = "red";
    } else if (id_1 < 13 || id_2 < 13 || id_3 < 13) {
        if (id_1 < 13) {
            document.getElementById("res_trisal").innerHTML = `Os(As) três chupadores(as) de bicos não podem namorar ainda!<br>NÃO É UM TRISAL!`;
            document.getElementById("res_trisal").style.color = "red";
        } else if (id_2 < 13) {
            document.getElementById("res_trisal").innerHTML = `Os(As) dois(duas) chupadores(as) de bicos com ${id_2} anos<br>e com ${id_3} anos não podem namorar ainda!<br>NÃO É UM TRISAL!`;
            document.getElementById("res_trisal").style.color = "red";
        } else if (id_3 < 13) {
            document.getElementById("res_trisal").innerHTML = `O(A) chupador(a) de bico com ${id_3} anos não pode namorar ainda!<br>Mas quem tem ${id_1} anos pode namorar com quem tem ${id_2} anos!<br>NÃO É UM TRISAL!`;
            document.getElementById("res_trisal").style.color = "red";
        }
    } else if (id_1 >= 100 || id_2 >= 100 || id_3 >= 100) {
        if (id_3 >= 100) {
            document.getElementById("res_trisal").innerHTML = `As três pessoas não podem namorar, Lei: 8.112!<br>NÃO É UM TRISAL!`;
            document.getElementById("res_trisal").style.color = "red";
        } else if (id_2 >= 100) {
            document.getElementById("res_trisal").innerHTML = `As pessoas com ${id_1} anos e com ${id_2} anos não podem namorar a outra, Lei: 8.112!<br>NÃO É UM TRISAL!`;
            document.getElementById("res_trisal").style.color = "red";
        } else if (id_1 >= 100) {
            document.getElementById("res_trisal").innerHTML = `A pessoa com ${id_1} anos não pode namorar as outras duas,<br>Lei: 8.112!<br>Mas quem tem ${id_2} anos pode namorar com a pessoa com ${id_3} anos!<br>NÃO É UM TRISAL!`;
            document.getElementById("res_trisal").style.color = "red";
        }
    } else if (id_1 <= id_max2 || id_1 <= id_max3 || id_2 <= id_max3) {
        if (id_1 <= id_max2 && id_1 <= id_max3) {
            document.getElementById("res_trisal").innerHTML = "As três pessoas podem namorar entre elas!<br>É UM TRISAL!";
            document.getElementById("res_trisal").style.color = "blue";
        } else if (id_1 <= id_max2 && id_1 > id_max3) {
            document.getElementById("res_trisal").innerHTML = `A pessoa com ${id_1} anos, pode namorar a pessoa com ${id_2} anos,<br>mas não pode namorar com a pessoa com ${id_3} anos!<br>NÃO É UM TRISAL!`;
            document.getElementById("res_trisal").style.color = "red";
        } else if (id_1 > id_max2 && id_2 <= id_max3) {
            document.getElementById("res_trisal").innerHTML = `A pessoa com ${id_2} anos pode namorar a pessoa com ${id_3} anos,<br>mas não pode namorar com a pessoa com ${id_1} anos!<br>NÃO É UM TRISAL!`;
            document.getElementById("res_trisal").style.color = "red";
        } else {
            document.getElementById("res_trisal").innerHTML = "Vocês não podem namorar!<br>NÃO É UM TRISAL!";
            document.getElementById("res_trisal").style.color = "red";
        }
    }
}
