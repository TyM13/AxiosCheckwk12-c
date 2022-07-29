// function successlink(response){
// document.body.insertAdjacentHTML(`afterbegin`, `
// <h1>success!</h1>
// <h1>${response[`data`][`meals`][0][`strMeal`]}</h1>
// <p>${response[`data`][`meals`][0][`strArea`]}</p>
// <p>${response[`data`][`meals`][0][`strInstructions`]}</p>

// `)

// }


// function failurelink (error){
//     document.body.insertAdjacentHTML(`afterbegin`, `
//     <h1>sorry try again</h1>
//     `
//     )
// }


// axios.request({
//   url: `https://www.themealdb.com/api/json/v1/1/random.php`
// }).then(successlink).catch(failurelink);









// function successlinktwo(response){
// for (let i = 0; i < response[`data`][`meals`].length; i++){
//     document.body.insertAdjacentHTML(`afterbegin`, `
//     <h1>success!</h1>
// <section>
// <h1>${response[`data`][`meals`][i][`strMeal`]}</h1>
// <img src="${response[`data`][`meals`][i][`strMealThumb`]}">
// </section>

//     `)
//     }
//     }



//     function failurelinktwo (error){
//         document.body.insertAdjacentHTML(`afterbegin`, `
//         <h1>sorry try again</h1>
//         `
//         )
//     }


//     axios.request({
//       url: `https://www.themealdb.com/api/json/v1/1/filter.php`,
//       params: {
//         c: `Chicken`
//       }
//     }).then(successlinktwo).catch(failurelinktwo);









function successone(response) {



}



function failureone(error) {
    document.body.insertAdjacentHTML(`afterbegin`, `
                <h1>sorry try again</h1>
                `
    )
}




let post_title =    document.getElementById(`post_title`);
let title_value = post_title[`value`];


let post_body = document.getElementById(`post_body`);
let body_value = post_body[`value`];

let user_id = document.getElementById(`user_id`);
let id_value = user_id[`value`];

    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `POST`,
        data: {

            title: title_value,
            body: body_value,
            userId: id_value

        }
    }).then(successone).catch(failureone);
