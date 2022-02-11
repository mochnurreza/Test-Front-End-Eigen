import React, { Component } from 'react'
import axios from 'axios'
import { API_KEY, API_URL } from '../api'
import { NewsArticle } from '../model/berita.interface'
import {Container} from 'reactstrap'
import {NewsList} from '../Componenst/NewsList'


type NewsState = {articles: NewsArticle[];}

export class News extends Component<{}, NewsState> {

  state ={
    articles: []
  }
  getArticles = async(topic='bitcoin') => {
    const response = await axios.get(`${API_URL}q=${topic}&apiKey=${API_KEY}`)
    this.setState({articles: response.data.articles})
    return response
  }
  componentDidMount(){
    this.getArticles()
  }

  render() {
    return (
      <>
        <Container fluid>
          <NewsList articles={this.state.articles}/>
        </Container>
      </>
    )
  }
}
