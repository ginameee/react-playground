import React from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const { useEffect } = React;
const SampleCounter = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {
    useEffect(() => {
        getPost(1);
        getUsers(1);
    }, [getPost, getUsers]);

    return (
        <Sample
            post={post}
            users={users} 
            loadingPost={loadingPost}
            loadingUsers={loadingUsers} 
        />
    );
};

export default connect(
    ({ sample, loading }) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: loading[sample.loading.GET_POST],
        loadingUsers: loading[sample.loading.GET_USERS],
    }),
    {
        getPost,
        getUsers
    }
)(SampleCounter);