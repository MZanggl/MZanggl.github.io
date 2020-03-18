firebase.initializeApp({
    apiKey: "AIzaSyC8JiSSE8--Ndz-2bKIEx40Mh1GMcnu8iY",
    authDomain: "portfolio-d923d.firebaseapp.com",
    projectId: "portfolio-d923d",
})

const db = firebase.firestore()
const articles = JSON.parse(localStorage.getItem('articles')) || []

const app = new Vue({
    el: '#app',
    data: {
        description: {
            name: 'Michael Zanggl',
            location: 'Tokyo, Japan',
            skills: 'Web development, Strong understanding of Vanilla JavaScript',
            proficientIn: 'ES6+, Vue, React, TypeScript, Laravel, Adonis, SQL',
            alsoUsed: 'HapiJs, GraphQL, jQuery, Express, Bootstrap, MongoDB'
        },
        articles,
    },
    computed: {
        descriptionLength() {
            return Object.keys(this.description).length
        }
    },
})

db.collection("articles").get().then(({ docs }) => {
    const articles = docs.map(doc => doc.data()).sort((a, b) => a.sort - b.sort)
    localStorage.setItem('articles', JSON.stringify(articles))
    app.articles = articles
})