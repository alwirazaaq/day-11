const testimonyData = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET',' https://api.npoint.io/adff32d333620e2b0e7d',true)
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve(JSON.parse(xhr.response))
        }else{
            reject("error loading data!")
        }
    }
    xhr.onerror = () => {
        reject('Networking error!')
    }
    xhr.send()
})
async function getAllTestimonialsData() {
    try {
        const response = await testimonyData
        let testimonialDataHTML = '';
        response.forEach(item => {
            testimonialDataHTML += `
                     <div class="card">
                        <img src="${item.image}" alt="testimonial">
                         <p id="quote">"${item.quote}"</p>
                         <p id="author">- ${item.author}</p>
                         <p id="star">${item.rating} <i class="fa-solid fa-star"></i></p>
                     </div>
            `
        });
        document.getElementById('testimonial').innerHTML = testimonialDataHTML
    } catch (error) {       
        console.log(error)
    }
}
getAllTestimonialsData()

async function getFilteredTestimonial(rating) {
    const responseFiltered = await testimonyData
    let testimonialsDataHTML = ''
    const testimonialFiltered = responseFiltered.filter((item) => {
        return item.rating === rating;
    });
    if(testimonialFiltered.length === 0){
        testimonialsDataHTML += `<h1> Data not Found </h1>`;
    }else{
        testimonialFiltered.forEach(item => {
            testimonialsDataHTML += `
                <div class="card">
                    <img src="${item.image}" alt="testimonial">
                    <p id="quote">"${item.quote}"</p>
                    <p id="author">- ${item.author}</p>
                    <p id="star">${item.rating} <i class="fa-solid fa-star"></i></p>
                </div>
            `
        })
    }
    document.getElementById('testimonial').innerHTML = testimonialsDataHTML
}