const btnActivity = document.querySelector('#btn-activity');

const activityList = document.querySelector('.activity-list');

const activityResult = document.querySelector('.activity-result');

const getRandomActivity = async () => {
    const res = await fetch('https://www.boredapi.com/api/activity');
    //getting json response
    const jsonResponse = await res.json();
    //set the activityResult
    activityResult.innerHTML = generateActivity(jsonResponse);
    //store activity in localstorage.
    storeActivityInLocalStorage(jsonResponse);
    loadActivitiesFromLocalStorage();
}

const storeActivityInLocalStorage = (activity) => {
    const currentActivityList = localStorage.getItem('activityList');

    if(!currentActivityList){
        //stringify to JSON an array with an element inside 
        localStorage.setItem('activityList',JSON.stringify([activity]));
    } else {
        //convert the textual JSON array into JS object array
        const arrCurrentActivityList = JSON.parse(currentActivityList);
        //now we can use the array 
        arrCurrentActivityList.push(activity);
        //convert the array back into a JSON string to store in localstorage.
        localStorage.setItem('activityList', JSON.stringify(arrCurrentActivityList));

    }
}

const generateActivity = (activityResult) => {
    return `<h3>${activityResult.activity}</h3>
            <h4>${activityResult.type}</h4>
        `;
}

const loadActivitiesFromLocalStorage = () => {
    //getting JSON string from localstorage
    const currentActivityList = localStorage.getItem('activityList');
    //converting JSON into javascript object
    const arrCurrentActivityList = JSON.parse(currentActivityList);
    //set innerHtml empty
    activityList.innerHTML = "";
    //add the activities (stored in localstorage) to the innerhtml
    arrCurrentActivityList.forEach(element => {
        activityList.innerHTML += generateActivity(element);
    });
}

btnActivity.addEventListener('click', ()=> {
    //load the random activity 
    getRandomActivity();
});

loadActivitiesFromLocalStorage();