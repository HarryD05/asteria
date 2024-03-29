export const ProfilesMapper = Profiles =>
  Profiles &&
  Profiles.length &&
  Profiles.map(Profile => ({
    Image: require(`./../../assets/profiles/images/${Profile.profile_picture}`),
    Name: `${Profile.first_name} ${Profile.surname}`,
    Role: Profile.role,
    LinkTo: Profile.slug,
  }));

export const ProfileDetailsMapper = Profile =>
  Profile &&
  Profile.profiles &&
  Profile.profiles[0] && {
    Name: `${Profile.profiles[0].first_name} ${Profile.profiles[0].surname}`,
    Image: require(`./../../assets/profiles/images/${Profile.profiles[0].profile_picture}`),
    Role: Profile.profiles[0].role,
    School: Profile.profiles[0].school,
    Pronouns: Profile.profiles[0].pronouns,
    SchoolImage: require(`./../../assets/profiles/images/${Profile.profiles[0].school}.png`),
    MarkDownContent: Profile.profiles[0].html
  };

export const ProfileName = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Name;
  }
}

export const ProfilePronouns = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Pronouns;
  }
}

export const ProfileRole = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.Role;
  }
}

export const ProfileSchool = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.School;
  }
}

export const ProfileMarkdown = details => {
  if (details === null || details === undefined) {
    return '';
  } else {
    return details.MarkDownContent;
  }
}

export const ProfileImage = details => {
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

export const SchoolImage = details => {
  if (details === null || details === undefined) {
    return null;
  } else {
    if (details.SchoolImage === null || details.SchoolImage === undefined || details.SchoolImage === "") {
      return null;
    } else {
      return details.SchoolImage;
    }
  }
}