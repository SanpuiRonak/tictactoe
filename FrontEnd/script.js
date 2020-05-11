window.onload = function () {
    this.main()
}


function main(){
    const table = document.getElementById('tb')

    table.addEventListener('click', (e) => {
        console.log(`clicked:${e.target.id}`)
    })
}

