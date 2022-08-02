import React from 'react'

import FirebaseAuth from '../misc/FirebaseAuth'
import Error from '../misc/Error'
import signIn from '../../../actions/user/signIn'
import createPost from '../../actions/createPost'
import PostForm from './PostForm'
import {
  Page,
} from '../../styles/layout'

const PostNew = ({ history }) => (
  <Page>
    <FirebaseAuth>
      {({ isLoading, error, auth }) => {

        if (error) {
          return <Error error={error} />
        }

        if (isLoading) {
          return <div>loading...</div>
        }

        if (!auth) {
          return <div>
            <p>You must be logged in to add posts</p>
            <button onClick={signIn}>log in</button>
          </div>
        }

        return <PostForm
          onSubmit={values => createPost(values).then(post => history.push(`/${post.slug}`))}
        />
      }}
    </FirebaseAuth>
  </Page>
)

export default PostNew
