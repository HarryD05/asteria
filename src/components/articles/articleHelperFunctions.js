import TurndownService from "turndown";

export const ArticlesMapper = Articles =>
  Articles &&
  Articles.length &&
  Articles.map(Article => ({
    Image: require(`./../../assets/articles/images/${Article.preview_image}`),
    Title: Article.title,
    Subject: Article.subject,
    Author: Article.author,
    LinkTo: Article.slug,
    Issue: Article.issue
  }));

export const ArticleDetailsMapper = (Article, includeMarkDown=true) =>
  Article &&
  Article.articles &&
  Article.articles[0] && {
    Title: Article.articles[0].title,
    Image: require(`./../../assets/articles/images/${Article.articles[0].preview_image}`),
    Subject: Article.articles[0].subject,
    Description: Article.articles[0].description,
    Author: {
      Name: `${Article.articles[0].author.first_name} ${Article.articles[0].author.surname}`,
      LinkTo: Article.articles[0].author.slug,
      Pronouns: Article.articles[0].author.pronouns,
      School: Article.articles[0].author.school,
      Image: require(`./../../assets/profiles/images/${Article.articles[0].author.profile_picture}`),
    },
    Issue: Article.articles[0].issue,
    LinkTo: Article.articles[0].slug,
    MarkDownContent: (includeMarkDown ? new TurndownService().turndown(Article.articles[0].html) : null),
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

export const AuthorName = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Author.Name;
  }
}

export const AuthorPronouns = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Author.Pronouns;
  }
}

export const AuthorSchool = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Author.School;
  }
}

export const AuthorLinkTo = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Author.LinkTo;
  }
}

export const AuthorImage = details => {
  if (details === null || details === undefined) {
    return null;
  } else {
    if (details.Image === null || details.Image === undefined || details.Image === "") {
      return null;
    } else {
      return details.Author.Image;
    }
  }
}