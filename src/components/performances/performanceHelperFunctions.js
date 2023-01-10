export const PerformancesMapper = Performances =>
  Performances &&
  Performances.length &&
  Performances.map(Performance => ({
    Image: require(`./../../assets/performances/images/${Performance.preview_image}`),
    Title: Performance.title,
    Authors: Performance.authors,
    LinkTo: Performance.slug,
    Issue: Performance.issue,
  }));

export const PerformanceDetailsMapper = (Performance, includeMarkDown=true, includeAuthor=true) =>
  Performance &&
  Performance.performances &&
  Performance.performances[0] && {
    Title: Performance.performances[0].title,
    Image: require(`./../../assets/performances/images/${Performance.performances[0].preview_image}`),
    Description: Performance.performances[0].description,
    Authors: (includeAuthor ? Performance.performances[0].authors.map(author => {
      return {
        Name: `${author.first_name} ${author.surname}`,
        LinkTo: author.slug,
        Pronouns: author.pronouns,
        School: author.school,
        Image: require(`./../../assets/profiles/images/${author.profile_picture}`),
      }
    })  
    : null),
    Issue: Performance.performances[0].issue,
    LinkTo: Performance.performances[0].slug,
    MarkDownContent: (includeMarkDown ? Performance.performances[0].html : null),
    PerformanceID: (includeMarkDown ? null : Performance.performances[0].performanceID) 
  };

export const PerformanceTitle = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Title;
  }
}

export const PerformanceDescription = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Description;
  }
}

export const PerformanceIssue = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Issue;
  }
}

export const PerformanceMarkdown = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.MarkDownContent;
  }
}

export const PerformanceLinkTo = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.LinkTo;
  }
}

export const PerformanceImage = details => {
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