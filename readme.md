# umbilical

this is the discord bot for the
[connect four website](https://github.com/lonkaars/connect-4) that i'm working
on.

## features

### user features

- [ ] link your connect 4 and/or github account with the bot
- [ ] play a game of connect four in your discord server using the bot
- [ ] view leaderboards
- [ ] self-assign roles
- [ ] fetch user profiles
- [ ] report users
- [ ] automatically assign contributor / developer role based on github status
- [ ] website maintenance notifications

### moderator features

- [ ] vote to ban a user from the website
- [ ] force clear a user's avatar
- [ ] suspicous activity notifications

## how your data is saved

```
file structure:

this repository/
	users/
		[id].json
		[id].json
		[id].json
		[id].json

[id] is replaced with each user's discord id. each json file looks like this:

{
	"github": "github_user_name",
	"connect4": "connect_four_user_id"
}
```
