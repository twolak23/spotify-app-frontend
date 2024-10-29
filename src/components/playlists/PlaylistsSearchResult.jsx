import { memo } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styled from 'styled-components';

const ResultCard = styled(Card)`
 :hover{
    background-color: gray;
 }
`
const PlaylistsSearchResult = ({ items }) => {
    return (<Container>
        <Row style={{ padding: '1em'}}>
            {items.map(el => (<Col xs={1} sm={2} md={3} lg={4} key={el.id} style={{padding: '2em 1em'}}>
                <ResultCard>
                    <a href={el.spotify_url} style={{
                        color: 'black',
                        textDecoration: 'none'
                    }} >
                        <Card.Img variant="top" src={el.image_url} />
                        <Card.Body>
                            <Card.Title>{el.name}</Card.Title>
                            <Card.Text>
                                {el.description}
                            </Card.Text>
                        </Card.Body>
                    </a>
                </ResultCard>
            </Col>))
            }
        </Row>
    </Container>);
}

export default memo(PlaylistsSearchResult);