import client from '../../utils/functions/axios';

export const getPostsDatas = (slug) => {
  client.get(`/categories?slug=${slug}`)
      .then(cat => {
        const catId = cat.data[0].id;
        client.get(`/posts?categories=${catId}`)
          .then(res => {
            this.setState({
              contents: res.data,
              isLoading: false
            })
          })
          .catch(e => {
            console.log("postデータを取得できませんでした。");
          })
        })
      .catch(e => {
        console.log("category idが取得できませんでした");
      })
}

export const getPostData = (id) => {
  client.get(`/posts/${id}`)
    .then(res => {
      this.setState({
        content: res.data,
        isLoading: false
      })
    })
    .catch(e => {
      console.log("post情報が取得できませんでした。");
    })
}

// type size = "medium" | "large" | "thumbnail" | "medium_large" | "full"
export const getPostImg = (data, size) => {
  return data["_embedded"]["wp:featuredmedia"][0]["media_details"]["sizes"][size]["source_url"]
}

export const getParentPost = (data) => {
  return data.filter(post => {
    return post.tags.includes(17);
  });
}

export const getChildPost = (data) => {
  return data.filter(post => {
    return post.tags.includes(18);
  });
}

export const getFreePost = (data) => {
  return data.filter(post => {
    return post.tags.includes(16);
  })
}

export const getChildPostCat = (data) => {
  return data.find(cat => {
    return cat.parent !== 0;
  })
}

export const getPrevPostId = (data, currentId) => {
  const posts = getChildPost(data);
  const current = posts.findIndex(post => {return post.id === currentId});
  return current === 0 ? 0 : posts[current - 1].id;
}

export const getNextPostId = (data, currentId) => {
  const posts = getChildPost(data);
  const current = posts.findIndex(post => {return post.id === currentId});
  return current === posts.length - 1 ? 0 : posts[current + 1].id;
}