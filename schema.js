module.exports = {
  articleSnippet: function(title, contents, img){
    var tags = ["reactjs","bootstrap"];
    var cats = "tutorial";
    var articleId = "react-basic-1"
    return {
        title: title,
        contentSnippet: contents,
        articleId: articleId,
        image: img,
        createdAt: '12-05-2016 19:01:34',
        lastUpdated: '12-05-2016 22:10:55',
        postedBy: 'Toni',
        category: cats,
        tags: tags,
        likeCount: 10,
        commentCount: 12
    }
  }
}
