export const ArticlesMapper = Articles =>
  Articles &&
  Articles.length &&
  Articles.map(Article => ({
    Image: require(`./../../assets/articles/images/${Article.preview_image}`),
    Title: Article.title,
    Subject: Article.subject,
    Authors: Article.authors,
    LinkTo: Article.slug,
    Issue: Article.issue,
  }));

export const ArticleDetailsMapper = (Article, includeMarkDown=true, includeAuthor=true) =>
  Article &&
  Article.articles &&
  Article.articles[0] && {
    Title: Article.articles[0].title,
    Image: require(`./../../assets/articles/images/${Article.articles[0].preview_image}`),
    Subject: Article.articles[0].subject,
    Description: Article.articles[0].description,
    Authors: (includeAuthor ? Article.articles[0].authors.map(author => {
      return {
        Name: `${author.first_name} ${author.surname}`,
        LinkTo: author.slug,
        Pronouns: author.pronouns,
        School: author.school,
        Image: require(`./../../assets/profiles/images/${author.profile_picture}`),
      }
    })  
    : null),
    Issue: Article.articles[0].issue,
    LinkTo: Article.articles[0].slug,
    MarkDownContent: (includeMarkDown ? Article.articles[0].html : null),
    ArticleID: (includeMarkDown ? null : Article.articles[0].articleID) 
  };

export const ArticleTitle = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Title;
  }
}

export const ArticleDescription = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Description;
  }
}

export const ArticleIssue = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Issue;
  }
}

export const ArticleSubject = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Subject;
  }
}

export const ArticleMarkdown = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.MarkDownContent;
  }
}

export const ArticleLinkTo = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.LinkTo;
  }
}

export const ArticleImage = details => {
  if (details === null || details === undefined) {
    return null;
  } else {
    if (details.Image === null || details.Image === undefined || details.Image === "") {
      return null;
    } else {
      return details.Image;
    }
  }
}

export const AuthorNames = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Authors.map(author => author.Name);
  }
}

export const AuthorPronouns = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Authors.map(author => author.Pronouns);
  }
}

export const AuthorSchools = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Authors.map(author => author.School);
  }
}

export const AuthorLinkTos = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Authors.map(author => author.LinkTo);
  }
}

export const AuthorImages = details => {
  if (details === null || details === undefined) {
    return null;
  } else {
    if (details.Image === null || details.Image === undefined || details.Image === "") {
      return null;
    } else {
      return details.Authors.map(author => author.Image);
    }
  }
}