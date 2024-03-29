# Nytimes_app
Gets data from nytimes api most viewed news

#### Project Description

Create a new React project using create-react-app:

npx create-react-app nytimes-app
cd nytimes-app

Install the axios library for making API requests:

npm install axios

1.The ArticleList component fetches the most popular articles from the NY Times API using axios.
2.It stores the retrieved articles in a state variable articles.
3.It also keeps track of the currently selected article using another state variable selectedArticle.
4.The component renders a list of articles, and clicking on an article calls the handleArticleClick function, which updates the selectedArticle state.
5.If an article is selected, the component renders the ArticleDetails component, passing the selected article as a prop.
6.The ArticleDetails component simply displays the title, abstract, and a link to the article on the NY Times website.

