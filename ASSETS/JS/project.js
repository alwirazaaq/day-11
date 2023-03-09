let datas = []
const data = `
<div class="card">
<img src="ASSETS/IMG/hacker.jpg" alt="post" >
<h4>Projectnya</h4>
<span>durasi : 3 bulan</span>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et consectetur debitis recusandae. Assumenda eius, eaque, expedita molestias voluptatibus, natus corrupti iure id in tenetur officiis alias illum. Sapiente, cum modi.</p>
<div class="technologyIcon">
    <img src="ASSETS/IMG/nodejs.png" alt="nodejs">
    <img src="ASSETS/IMG/golangicon.png" alt="golang">
    <img src="ASSETS/IMG/reactjs.png" alt="reactjs">
    <img src="ASSETS/IMG/sql.png" alt="sql">
</div>
<div class="action">
    <button>edit</button>
    <button>delete</button>
</div>
</div>
`
const getData = (event) => {
    event.preventDefault()

    let projectName = document.getElementById('projectName').value
    let startDate = document.getElementById('startDate').value
    let endDate = document.getElementById('endDate').value
    let description = document.getElementById('description').value
    let nodejs = document.getElementById('nodejs')
    let golang = document.getElementById('golang')
    let reactjs = document.getElementById('reactjs')
    let sql = document.getElementById('sql')
    let image = document.getElementById('image').files
    if(image.length == 0 ) return alert('Upload image is required')
    image = URL.createObjectURL(image[0])

    if(projectName == '' || projectName == null) return alert('Project name is required')
    if(startDate == '' || startDate == null) return alert('Date is required')
    if(endDate == '' || endDate == null) return alert('Date is required')
    if(description == '' || description == null) return alert(' Description is required')
    if(!nodejs.checked && !golang.checked && !reactjs.checked && !sql.checked) return alert('Technologies is required')

    let data = {
        projectName,
        startDate, 
        endDate,
        description, 
        nodejs : nodejs.checked == true ? true : false,
        golang : golang.checked == true ? true : false,
        reactjs : reactjs.checked == true ? true : false,
        sql : sql.checked == true ? true : false,
        image
    }
    datas.push(data)
    showData()
    console.log(datas.length)
}
const showData = () => {
    document.getElementById('posting').innerHTML = data
    for(let i = 0; i < datas.length; i++){
        document.getElementById('posting').innerHTML += `
            <div class="card" >
                <img src="${datas[i].image}" alt="post" >
                <h4>${datas[i].projectName}</h4>
                <span>${datas[i].startDate} | ${datas[i].endDate}</span>
                <p>${datas[i].description}</p>
                <div class="technologyIcon">
                    ${datas[i].nodejs ? '<img src="ASSETS/IMG/nodejs.png" alt="nodejs">' : ''}
                    ${datas[i].golang ? '<img src="ASSETS/IMG/golangicon.png" alt="golang">' : ''}
                    ${datas[i].reactjs ? '<img src="ASSETS/IMG/reactjs.png" alt="reactjs">' : ''}
                    ${datas[i].sql ? '<img src="ASSETS/IMG/sql.png" alt="sql">' : ''}
                </div>
                <div class="action">
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>`
    }
    // datas.map((data, index) => {
    //     document.getElementById('posting').innerHTML += `
    //             <div class="card" key=${index}>
    //                 <img src="${data.image}" alt="post" >
    //                 <h4>${data.projectName}</h4>
    //                 <span>${data.startDate} | ${data.endDate}</span>
    //                 <p>${data.description}</p>
    //                 <div class="technologyIcon">
    //                     ${data.nodejs ? '<img src="./assets/img/nodejs.svg" alt="nodejs">' : ''}
    //                     ${data.reactjs ? '<img src="./assets/img/reactjs.svg" alt="reactjs">' : ''}
    //                     ${data.typescript ? '<img src="./assets/img/nextjs.svg" alt="nextjs">' : ''}
    //                     ${data.typescript ? '<img src="./assets/img/typescript.svg" alt="typescript">' : ''}
    //                 </div>
    //                 <div class="action">
    //                     <button>edit</button>
    //                     <button>delete</button>
    //                 </div>
    //             </div> 
    //         `
    // })
}