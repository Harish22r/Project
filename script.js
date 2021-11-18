var board = document.createElement("div")
board.style.flexDirection = "row"
board.style.width="100%"
board.style.height="800px"
board.style.border="1px solid black"
board.style.display = "flex"
board.style.flexWrap = "wrap"
board.style.backgroundColor="pink"

async function getAllData() {

    try {
        var data = await fetch("https://api.nationalize.io?name=michael")
        var dataObj=await data.json();
        console.log(dataObj)

        // dataObj.forEach(function(element){

            var table=document.createElement("div")
            table.style.width="100%"
            table.style.height="500px"
            board.appendChild(table)

            var input=document.createElement("input")
            input.innerText="name"
            input.style.padding="10px"
            input.style.marginTop="10%"
            input.style.marginLeft="40%"
            // input.addEventListener(function(){
                
            // })
            table.appendChild(input);

            var button=document.createElement("button")
            button.innerText="search"
            button.style.padding="10px"
            button.addEventListener('click',function(){
                button.appendChild(answer)
            })
            table.appendChild(button)

            var answer=document.createElement("div")
            answer.style.width="300px"
            answer.style.height="400px"
            answer.style.border="1px solid black"
            answer.innerText=element.Object.country

            
            

        // })
        

    
    }
    catch (error) {
        console.log(error);
    }

}
getAllData();
document.body.appendChild(board);