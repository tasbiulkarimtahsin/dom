function areaFunctionTri() {
    var h = Number(document.getElementById('valueOneTri').value);
    var b = Number(document.getElementById('valueTwoTri').value);
    var ans = 0.5 * h * b;

    let list = document.getElementById('ansList');
    let li = document.createElement('li');
    li.innerText = "Triangle: " + ans;
    list.appendChild(li);

}

function areaFunctionRec() {
    var h = Number(document.getElementById('valueOneRec').value);
    var b = Number(document.getElementById('valueTwoRec').value);
    var ans = h * b;

    let list = document.getElementById('ansList');
    let li = document.createElement('li');
    li.innerText = "Rectangle: " + ans;
    list.appendChild(li);
}

function areaFunctionPar() {
    var h = Number(document.getElementById('valueOnePar').value);
    var b = Number(document.getElementById('valueTwoPar').value);
    var ans = h * b;

    let list = document.getElementById('ansList');
    let li = document.createElement('li');
    li.innerText = "Parallelogram: " + ans;
    list.appendChild(li);
}
