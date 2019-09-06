// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsData =
 axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        response.data.topics.forEach((topic) => {
            if (topic === "node.js") {Tab(topic.substring(0, 4))}
            else {Tab(topic)}
        });
    })

    .catch(error => {
        console.log(error);
    });


function Tab(data) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.innerText = data;
    topics = document.querySelector('.tabs .topics')
    tabs = Array.from(document.querySelectorAll('.tab'))
    tab.addEventListener("click", (event) =>{
        tabs.forEach((tab) => tab.classList.remove('active-tab'));
        event.target.classList.toggle('active-tab');
        const cards = Array.from(document.querySelectorAll('.card'));
        cards.forEach((card) => card.style.display = "none");
        cards.forEach((card) => card.classList.contains(event.target.innerHTML) ? card.style.display = "block" : display = "none")
    });
    const cards = Array.from(document.querySelectorAll('.card'));
    cards.forEach((card) => card.style.display = "none");

    topics.appendChild(tab);
}

