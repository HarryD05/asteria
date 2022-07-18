import TurndownService from "turndown";

export const ArticlesMapper = Articles =>
  Articles &&
  Articles.length &&
  Articles.map(Article => ({
    Image: require(`./../assets/articles/images/${Article.preview_image}`).default,
    Title: Article.title,
    Subject: Article.subject,
    Author: 'Not setup yet',
    LinkTo: Article.slug,
  }));

export const ArticleDetailsMapper = Article =>
  Article &&
  Article.articles &&
  Article.articles[0] && {
    Title: Article.articles[0].title,
    Image: require(`./../assets/articles/images/${Article.articles[0].preview_image}`),
    Subject: Article.articles[0].subject,
    Description: Article.articles[0].description,
    Author: 'Not setup yet',
    MarkDownContent: new TurndownService().turndown(Article.articles[0].html)
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

export const ArticleImage = details => {
  if (details === null || details === undefined) {
    return null;
  } else {
    if (details.Image === null || details.Image === undefined || details.Image === "") {
      return null;
    } else {
      return details.Image.default;
    }
  }
}