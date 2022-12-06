import { Link } from 'react-router-dom'
import styled from 'styled-components';

import Header from './components/Header';
import PublishArea from './components/PublishArea';
import PostsArea from './components/PostsArea';
import Footer from './components/Footer';

const Feed = () => {
    return ( 
        <Container>
            <Header />
            <PublishArea />
            <PostsArea />
            <Footer />
        </Container>
     );
}
const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`
 
export default Feed;