const express = require('express');
const moment = require('moment');
const rp = require('request-promise');

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  const output = {};

  gatherUser(output)
    .then(gatherEvents.bind(null, output))
    .then(_ => {
      res.send(output)
    })
    .catch(err => {
      console.log('ERROR', err);
      res.sendStatus(500);
    })

});

const gatherUser = output => {
  const request = {
    uri: 'https://api.github.com/users/gabrielsiedler',
    headers: {
      'User-Agent': 'http://gabriel.siedler.ninja'
    },
    json: true
  };

  if (process.env.GITHUB_TOKEN) {
    request.headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
  }

  return rp(request)
    .then(data => {
      output.user = {
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following
      };
    });
};

const gatherEvents = output => {
  const request = {
    uri: 'https://api.github.com/users/gabrielsiedler/events',
    headers: {
      'User-Agent': 'http://gabriel.siedler.ninja'
    },
    json: true
  };

  if (process.env.GITHUB_TOKEN) {
    request.headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
  }

  return rp(request)
    .then(data => {
      output.events = data.map(mapEvents).slice(0,5);
    });
};

const mapEvents = event => {
  const output = {
    createdAt: moment(event.created_at).fromNow()
  }

  switch (event.type) {
    case 'CommitCommentEvent': //v
      Object.assign(output, {
        message: 'Commented in a commit.',
        url: event.payload.comment.html_url
      });
      break;
    case 'CreateEvent': //v
      Object.assign(output, {
        message: `Created a ${event.payload.ref_type} (${event.repo.name}).`,
        url: `https://github.com/${event.repo.name}`
      });
      break;
    case 'DeleteEvent':
      Object.assign(output, {
        message: `Deleted a ${event.payload.ref_type} (${event.repo.name}).`
      });
      break;
    case 'IssueCommentEvent': //v
      Object.assign(output, {
        message: `Commented in an issue.`,
        url: event.payload.issue.html_url
      });
      break;
    case 'IssuesEvent':
      Object.assign(output, {
        message: `Created, changed or deleted an issue on ${event.repo.name}.`,
        url: event.payload.issue.html_url
      });
      break;
    case 'PullRequestEvent':
      Object.assign(output, {
        message: `Created, changed or deleted a pull request (${event.repo.name}).`,
        url: `https://github.com/${event.repo.name}`
      });
      break;
    case 'PushEvent':
      Object.assign(output, {
        message: `Pushed to repository ${event.repo.name}.`,
        url: `https://github.com/${event.repo.name}`
      });
      break;
    case 'ReleaseEvent':
      Object.assign(output, {
        message: `Published a release.`,
        url: `https://github.com/${event.repo.name}`
      });
      break;
    case 'RepositoryEvent':
      Object.assign(output, {
        message: `Created a new repository (${event.repo.name}).`,
        url: `https://github.com/${event.repo.name}`
      });
      break;
    case 'WatchEvent':
      Object.assign(output, {
        message: `Starred the repository ${event.repo.name}`,
        url: `https://github.com/${event.repo.name}`
      });
      break;
  }

  return output;
}
