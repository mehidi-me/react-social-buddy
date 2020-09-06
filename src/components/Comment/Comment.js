import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostComment from '../PostComment/PostComment';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 'auto',
        margin: '20px',
    },
    media: {
        height: '250px',
    },
});

const Comment = () => {


    const classes = useStyles();

    const { id } = useParams();

    // console.log('clicked post id', id); 
    // random user api id
    const [comments, setComments] = useState([]);

    // console.log('clicked post comments', comments);

    const [post, setPosts] = useState({});

    console.log('clicked post details', post);

    const { title, body } = post;

    useEffect(() => {
        const cmt_url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;

        fetch(cmt_url)
            .then(res => res.json())
            .then(data => setComments(data))

    }, [])

    useEffect(() => {
        const post_url = `https://jsonplaceholder.typicode.com/posts/${id}`;

        fetch(post_url)
            .then(res => res.json())
            .then(data => setPosts(data))

    }, [])


    return (

        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://miro.medium.com/max/700/1*dLaDL-lSN0iprzmOpmM7zQ.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <h1>{title}</h1>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quasi rerum et voluptas iusto perspiciatis dolorem incidunt totam velit ad ullam maxime ut sed, aut, exercitationem mollitia debitis numquam nemo!</p>
                        <p>Olor sit amet, consectetur adipisicing elit. Dolorum, quasi rerum et voluptas iusto perspiciatis dolorem incidunt totam velit ad ullam maxime ut sed, aut, exercitationem mollitia debitis numquam nemo!</p>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => alert('Share feature Comming Soon !!!')}>
                    Share
                    </Button>
            </CardActions>
            <h2>Post Comments</h2>
            <hr />
            {
                comments.map(comment => <PostComment comment={comment}></PostComment>)
            }
        </Card>
    );
};

export default Comment;