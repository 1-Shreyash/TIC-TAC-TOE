const mat = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
console.log(mat)

const mat2 = document.querySelectorAll(".cell")

const Update = () => {
    let count = 0
    mat2.forEach(
        (a, index) => {
            if(mat[Math.floor(index/3)][index%3]===1){
                a.innerHTML = "X"
            }
            else if(mat[Math.floor(index/3)][index%3]===2){
                a.innerHTML = "O"
            }
            else if(mat[Math.floor(index/3)][index%3]===3){
                a.innerHTML = "X"
                a.style.color = "red"
            }
            else if(mat[Math.floor(index/3)][index%3]===4){
                a.innerHTML = "O"
                a.style.color = "red"
            }
            else{
                a.innerHTML = ""
                a.style.color = "black"
                count++
            }
        }
    )
    return count
}
const check = () =>{
    for(let i=0; i<3; i++){
        let x = mat[i][0];
        let fl = true
        if(x != 0){
            for(let j=1; j<3; j++){
                if(mat[i][j] != mat[i][j-1]){
                    fl = false
                    break
                }
            }
            if(fl){
                if(x == 1){
                    for(let j=0; j<3; j++){
                        mat[i][j] = 3
                    }
                }
                else if(x == 2){
                    for(let j=0; j<3; j++){
                        mat[i][j] = 4
                    }
                }
                return x
            }
        }
    }
    for(let i=0; i<3; i++){
        let x = mat[0][i];
        let fl = true
        if(x != 0){
            for(let j=1; j<3; j++){
                if(mat[j][i] != mat[j-1][i]){
                    fl = false
                    break
                }
            }
            if(fl){
                if(x == 1){
                    for(let j=0; j<3; j++){
                        mat[j][i] = 3
                    }
                }
                else if(x == 2){
                    for(let j=0; j<3; j++){
                        mat[j][i] = 4
                    }
                }
                return x
            }
        }
    }
    let x = mat[1][1]
    if(x != 0){
        if((mat[0][0] === x && mat[2][2] === x)){
            if(x == 1){
                for(let j=0; j<3; j++){
                    mat[j][j] = 3
                }
            }
            else if(x == 2){
                for(let j=0; j<3; j++){
                    mat[j][j] = 4
                }
            }
            return x
        }
        else if((mat[0][2] === x && mat[2][0] === x)){
            if(x == 1){
                for(let j=0; j<3; j++){
                    mat[2-j][j] = 3
                }
            }
            else if(x == 2){
                for(let j=0; j<3; j++){
                    mat[2-j][j] = 4
                }
            }
            return x
        }
    }
    return 0
}
// Update()
const Full = () =>{
    for (let i = 0; i < 9; i++) {
        if(mat[Math.floor(i/3)][i%3] === 0) return false;
    }
    return true;
}

//driver function
let won = 0
mat2.forEach(
    (a, index) =>{
        a.addEventListener("click", function() {
                if(won == 0 && mat[Math.floor(index/3)][index%3]==0){
                    mat[Math.floor(index/3)][index%3] = 1
                    let c1 = check()
                    if(c1 == 1){
                        alert("X won")
                        won = 1
                        Update()
                    }
                    else if(Full()){
                        let c = check()
                        if(c == 1){
                            alert("X won")
                            won = 1
                        }
                        else if(c == 2){
                            alert("O won")
                            won = 1
                        }
                        else{
                            alert("Tie")
                            won = 1
                        }
                        Update()
                    }
                    else{
                        let r = Math.floor(Math.random() * 9)
                        while(mat[Math.floor(r/3)][r%3] != 0){
                            r = Math.floor(Math.random() * 9)
                        }
                        mat[Math.floor(r/3)][r%3] = 2
                        let c = check()
                        if(c == 1){
                            alert("X won")
                            won = 1
                        }
                        else if(c == 2){
                            alert("O won")
                            won = 1
                        }
                        Update()
                    }
                }
        });
    }
)

var element = document.getElementById("resetBtn");
element.onclick = function(event) {
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            mat[i][j] = 0
        }
    }
    won = 0
    Update()
}