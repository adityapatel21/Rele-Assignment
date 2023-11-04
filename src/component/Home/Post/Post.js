import React from "react";
import "./Post.css";
import likeicon from "../../../Media/heart.png";
import commenticon from "../../../Media/comment.png";
import shareicon from "../../../Media/share.png";

const Post = ({ post }) => {
  return (
    <div className="feed-post">
      <div className="post-header">
        <div className="post-profile-info">
          <div className="profile-img">
            <img src={post.profileImg} alt="profile_photo" />
          </div>
          <div className="profile-information">
            <h3>{post.name}</h3>
            <p>{post.userId}</p>
          </div>
        </div>
        <div className="option-icon">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      <div className="post-caption">
        <p>
          {post.caption}{" "}
          <span>
            <a href="/#">Read more...</a>
          </span>
        </p>
      </div>
      <div className="post-image">
        <img src={post.postImg} alt="post_img" />
      </div>
      <div className="post-performance">
        <div className="post-like">
          <img src={likeicon} alt="like_icon" />
          <p>9.8k</p>
        </div>
        <div className="post-comment">
          <img src={commenticon} alt="comment_icon" />
          <p>5.4k</p>
        </div>
        <div className="post-share">
          <img src={shareicon} alt="share_icon" />
          <p>1.3k</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Post;
