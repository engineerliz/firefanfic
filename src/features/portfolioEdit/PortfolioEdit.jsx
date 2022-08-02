import React from 'react'
import { Route } from 'react-router-dom';

const PortfolioEdit = () => {
  return <div>
    <form onSubmit={this.onSubmit}>
      <FormRow>
        <FormLabel for="title">Title</FormLabel>
        <TextInput type="text" name="title" defaultValue={this.props.post ? this.props.post.title : ''} required />
      </FormRow>

      <FormRow>
        <FormLabel for="content">Content</FormLabel>
        <TextArea type="text" name="content" defaultValue={this.props.post ? this.props.post.content : ''} required />
      </FormRow>

      <button type="submit">Save post</button>
    </form>
  </div>
}

export default PortfolioEdit