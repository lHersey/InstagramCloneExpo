import React, { Component } from "react";
import PropTypes from "prop-types";
import PostPhoto from "./postPhoto";
import IconBar from "./iconBar";
import LikesCount from "./likesCount";
import UserBar from "./userBar";
import config from "../../../config";

class post extends Component {
  state = {
    liked: false
  };

  handleLike = () => {
    this.setState(prevState => ({
      liked: !prevState.liked
    }));
  };

  render() {
    const { name, profilePhoto, postPhoto, likes } = this.props;

    const sourceHeart = this.state.liked
      ? config.icons.heartLiked
      : config.icons.heart;

    const totalLikes = this.state.liked ? likes + 1 : likes;

    return (
      <React.Fragment>
        <UserBar name={name} profilePhoto={profilePhoto} />
        <PostPhoto postPhoto={postPhoto} handleLike={this.handleLike} />
        <IconBar sourceHeart={sourceHeart} onHeartPress={this.handleLike} />
        <LikesCount likes={totalLikes} />
      </React.Fragment>
    );
  }
}
post.propTypes = {
  name: PropTypes.string.isRequired,
  profilePhoto: PropTypes.string.isRequired,
  postPhoto: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired
};

export default post;
