/**
 * Created by bcuser on 4/18/17.
 */

const getData = (url) => {
    switch (url) {
        case '/api/foo':
            return {
                foo: 'bar',
                file: 'api.js'
            };

        case '/api/user':
            return {
                error: {},
                response: {},
                body: JSON.stringify({
                    login: "kajayr",
                    id: "17889728",
                    avatar_url: "https://avatars0.githubusercontent.com/u/17889728?v=3",
                    gravatar_id: "",
                    url: "https://api.github.com/users/kajayr",
                    html_url: "https://github.com/kajayr",
                    followers_url: "https://api.github.com/users/kajayr/followers",
                    following_url: "https://api.github.com/users/kajayr/following{/other_user}"

                })
            };

        case '/api/gist-test':
            return {
                error: {},
                response: {},
                result: { url: 'https://api.github.com/gists/bd1b0b9c88d25fd21fffcc4f1b7d5ce5',
                    forks_url: 'https://api.github.com/gists/bd1b0b9c88d25fd21fffcc4f1b7d5ce5/forks',
                    commits_url: 'https://api.github.com/gists/bd1b0b9c88d25fd21fffcc4f1b7d5ce5/commits',
                    id: 'bd1b0b9c88d25fd21fffcc4f1b7d5ce5',
                    git_pull_url: 'https://gist.github.com/bd1b0b9c88d25fd21fffcc4f1b7d5ce5.git',
                    git_push_url: 'https://gist.github.com/bd1b0b9c88d25fd21fffcc4f1b7d5ce5.git',
                    html_url: 'https://gist.github.com/bd1b0b9c88d25fd21fffcc4f1b7d5ce5',
                    files:
                        { 'file1.txt':
                            { filename: 'file1.txt',
                                type: 'text/plain',
                                language: 'Text',
                                raw_url: 'https://gist.githubusercontent.com/kajayr/bd1b0b9c88d25fd21fffcc4f1b7d5ce5/raw/d8560fa2eb2f0a36fc977544e86d3098191ada37/file1.txt',
                                size: 18,
                                truncated: false,
                                content: 'Arent gists great!' } },
                    public: true,
                    created_at: '2017-05-12T05:20:45Z',
                    updated_at: '2017-05-12T05:20:45Z',
                    description: 'My first gist',
                    comments: 0,
                    user: null,
                    comments_url: 'https://api.github.com/gists/bd1b0b9c88d25fd21fffcc4f1b7d5ce5/comments',
                    owner:
                        { login: 'kajayr',
                            id: 3301051,
                            avatar_url: 'https://avatars0.githubusercontent.com/u/17889728?v=3',
                            gravatar_id: '',
                            url: 'https://api.github.com/users/kajayr',
                            html_url: 'https://github.com/kajayr',
                            followers_url: 'https://api.github.com/users/kajayr/followers',
                            following_url: 'https://api.github.com/users/kajayr/following{/other_user}',
                            gists_url: 'https://api.github.com/users/kajayr/gists{/gist_id}',
                            starred_url: 'https://api.github.com/users/kajayr/starred{/owner}{/repo}',
                            subscriptions_url: 'https://api.github.com/users/kajayr/subscriptions',
                            organizations_url: 'https://api.github.com/users/kajayr/orgs',
                            repos_url: 'https://api.github.com/users/kajayr/repos',
                            events_url: 'https://api.github.com/users/kajayr/events{/privacy}',
                            received_events_url: 'https://api.github.com/users/kajayr/received_events',
                            type: 'User',
                            site_admin: false },
                    forks: [],
                    history:
                        [ { user: [Object],
                            version: 'a77f3b5bd33e6c7e93036f2e80a2eaf5320144bc',
                            committed_at: '2017-05-12T05:20:44Z',
                            change_status: [Object],
                            url: 'https://api.github.com/gists/bd1b0b9c88d25fd21fffcc4f1b7d5ce5/a77f3b5bd33e6c7e93036f2e80a2eaf5320144bc' } ],
                    truncated: false
                }

            };

        default:
            return {}
    }
};

export default getData;