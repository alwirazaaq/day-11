// class Testimonial {
//     constructor(quote, image) {
//         this._quote = quote
//         this._image = image
//     }

//     get quote() {
//         return this._quote
//     }

//     get image() {
//         return this._image
//     }

//     get html() {
//         return `<div class="testimonial">
//             <img src="${this.image}" class="profile-testimonial" />
//             <p class="quote">"${this.quote}"</p>
//             <p class="author">- ${this.author}</p>
//         </div>`
//     }
// }

// class AuthorTestimonial extends Testimonial {
//     constructor(author, quote, image) {
//         super(quote, image)
//         this._author = author
//     }

//     get author() {
//         return this._author
//     }
// }

// class CompanyTestimonial extends Testimonial {
//     constructor(company, quote, image) {
//         super(quote, image)
//         this._company = company
//     }

//     get author() {
//         return this._company + " Company"
//     }
// }

// const testimonial1 = new AuthorTestimonial("Surya paloh", "partai jas biru", "ASSETS/IMG/rick astley.jpg")

// const testimonial2 = new AuthorTestimonial("meppo", "asa de kontll", "ASSETS/IMG/rick astley.jpg")

// const testimonial3 = new CompanyTestimonial("lalaland", "tampan dan berani", "ASSETS/IMG/rick astley.jpg")

// let testimonialData = [testimonial1, testimonial2, testimonial3]
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//     testimonialHTML += testimonialData[i].html
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML


const testimonialData = [
    {
        author: "Hoodwink",
        quote: "Drop your gold and run along then.",
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c9/Hoodwink_icon.png/revision/latest?cb=20201217205959",
        rating: 2
    },
    {
        author: "keeper of the light",
        quote: "Stand aside or be trampled!",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fclick-storm.com%2Fblogs%2F5199%2F&psig=AOvVaw1Tj93XnJJQ87ahUCobiTGs&ust=1678258769646000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDhrKGfyf0CFQAAAAAdAAAAABAF",
        rating: 4
    },
    {
        author: "templar assassin",
        quote: "The mysteries cannot protect themselves.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdota2.fandom.com%2Fwiki%2FTemplar_Assassin%2FLore&psig=AOvVaw2IQnTS5aPzHS21r2zrj0nW&ust=1678259172858000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCID62uGgyf0CFQAAAAAdAAAAABAE",
        rating: 3
    },
    {
        author: "Slark",
        quote: "It's never dark enough.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thegamer.com%2Fdota-2-slark-guide%2F&psig=AOvVaw3vPp_Fh7-rjL3y745JIVUg&ust=1678259416286000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJidvtWhyf0CFQAAAAAdAAAAABAE",
        rating: 4
    },
    {
        author: "Kunkka",
        quote: "Splay your blood across the deck!",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fredditdota2%2Fstatus%2F1261950547793494016&psig=AOvVaw07xdSi8okUvgR_DpZlgPyE&ust=1678259719134000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJidguaiyf0CFQAAAAAdAAAAABAE",
        rating: 5
    },
]


function allTestimonials() {
    let testimonialHTML = '';
    testimonialData.forEach( item => {
        testimonialHTML += `
                <div class="card">
                    <img src="${item.image}" alt="testimonial">
                    <p id="quote">"${item.quote}"</p>
                    <p id="author">- ${item.author}</p>
                    <p id="star">${item.rating} <i class="fa-solid fa-star"></i></p>
                 </div>
        `
    })
    document.getElementById('testimonial').innerHTML = testimonialHTML
}

function filterTestimonial(rating) {
    let testimonialHTML = '';
    const testimonialFiltered = testimonialData.filter(item => {
        return item.rating === rating
    })

    if(testimonialFiltered.length === 0) {
        testimonialHTML = `<h1> Data not found! </h1>`
    }else {
        testimonialFiltered.forEach(item => {
            testimonialHTML += `
                <div class="card">
                    <img src="${item.image}" alt="testimonial">
                    <p id="quote">"${item.quote}"</p>
                    <p id="author">- ${item.author}</p>
                    <p id="star">${item.rating} <i class="fa-solid fa-star"></i></p>
                </div>
            `
        })
    }

    document.getElementById('testimonial').innerHTML = testimonialHTML
}