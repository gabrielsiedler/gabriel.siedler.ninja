const moment = require('moment');
const rp = require('request-promise');

const gatherUser = () => {
  return new Promise(resolve => {
    const output = {};
    const request = {
      uri: 'https://api.github.com/users/gabrielsiedler',
      headers: {
        'User-Agent': 'http://gabriel.siedler.ninja',
      },
      json: true,
    };

    if (process.env.GITHUB_TOKEN) {
      request.headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    return rp(request)
      .then(data => {
        output.user = {
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        };

        resolve(output);
      });
  });
};

const mapEvents = event => {
  const output = {
    createdAt: moment(event.created_at).fromNow(),
  };

  switch (event.type) {
    case 'CommitCommentEvent':
      Object.assign(output, {
        message: 'Commented in a commit.',
        url: event.payload.comment.html_url,
      });
      break;
    case 'CreateEvent':
      Object.assign(output, {
        message: `Created a ${event.payload.ref_type} (${event.repo.name}).`,
        url: `https://github.com/${event.repo.name}`,
      });
      break;
    case 'DeleteEvent':
      Object.assign(output, {
        message: `Deleted a ${event.payload.ref_type} (${event.repo.name}).`,
        url: `https://github.com/${event.repo.name}`,
      });
      break;
    case 'IssueCommentEvent':
      Object.assign(output, {
        message: 'Commented in an issue.',
        url: event.payload.issue.html_url,
      });
      break;
    case 'IssuesEvent':
      Object.assign(output, {
        message: `Created, changed or deleted an issue on ${event.repo.name}.`,
        url: event.payload.issue.html_url,
      });
      break;
    case 'PullRequestEvent':
      Object.assign(output, {
        message: `Created, changed or deleted a pull request (${event.repo.name}).`,
        url: `https://github.com/${event.repo.name}`,
      });
      break;
    case 'PushEvent':
      Object.assign(output, {
        message: `Pushed to repository ${event.repo.name}.`,
        url: `https://github.com/${event.repo.name}`,
      });
      break;
    case 'ReleaseEvent':
      Object.assign(output, {
        message: 'Published a release.',
        url: `https://github.com/${event.repo.name}`,
      });
      break;
    case 'RepositoryEvent':
      Object.assign(output, {
        message: `Created a new repository (${event.repo.name}).`,
        url: `https://github.com/${event.repo.name}`,
      });
      break;
    case 'WatchEvent':
      Object.assign(output, {
        message: `Starred the repository ${event.repo.name}`,
        url: `https://github.com/${event.repo.name}`,
      });
      break;
    default:
  }

  return output;
};

const gatherEvents = output => {
  return new Promise(resolve => {
    const request = {
      uri: 'https://api.github.com/users/gabrielsiedler/events',
      headers: {
        'User-Agent': 'http://gabriel.siedler.ninja',
      },
      json: true,
    };

    if (process.env.GITHUB_TOKEN) {
      request.headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    return rp(request)
      .then(data => {
        output.events = data.map(mapEvents).slice(0, 5);
        resolve(output);
      });
  });
};

const fetch = () => {
  return gatherUser()
    .then(gatherEvents);
};

module.exports = { fetch };
