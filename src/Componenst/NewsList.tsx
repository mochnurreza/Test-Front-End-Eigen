import React, { Component } from 'react'
import {
    Container,
    Row,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Col,
    Button
} from 'reactstrap'
import { NewsArticle } from '../model/berita.interface'

type NewsListProps = { articles: NewsArticle[]; }

export class NewsList extends Component<NewsListProps> {
    static defaultProps = {
        articles: [],
    }

    state = (key:any, status:boolean) => {
        if(status){
            console.log('article' + key)
        }
    }
  render() {
      const articles = this.props.articles;
      const showArticles = () =>{
          return articles.map((article: NewsArticle, key) => (
            <Col 
                xs="5"
                md="4" 
                lg="4" 
                xl="3"
                style={{ margin: "15px 10px 10px 70px",
                border: "1px solid black", borderRadius: "10px" }}
            >

            <Card 
                style={{ border: "1px solid white" }}
                height="100%"
                key={`article${key}`}
                id={`article${key}`}
            >
            <CardImg
                alt="Card image cap"
                src={article.urlToImage}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    {article.title}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {article.author}
                </CardSubtitle>
                <CardText>
                    {article.description}
                </CardText>
                <Button href={article.url} style={{alignItems: 'flex-end'}}>
                    Read More
                </Button>
                </CardBody>
            </Card>
          </Col>
          ))
      } 
    return (
      <div>
          <Container>
                <Row className="no-gutters" xs={4}>
                {articles.length !== 0 ? showArticles() : <h3 style={{textAlign: 'center', marginLeft: '35%', marginTop:'15%'}}>Loading...</h3>}
                </Row> 
            </Container>
      </div>
    )
  }
}
