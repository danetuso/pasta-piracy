# pasta-piracy

## Fresh installation steps
```
brew install ruby
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
gem install jekyll bundler
echo 'export PATH="/opt/homebrew/lib/ruby/gems/3.3.0/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
jekyll new . --force
bundle install
# clone your theme into this folder
# git clone ...
# cp -r .../* .
bundle install
bundle exec jekyll serve
```

### Todo:
- seo
- disqus account for comments
- gallery / photo collection at bottom of each recipe
- replace ai generated photos
- put tag line for people to submit photos, with submission email
- abuse / request for removal email / tagline / footer
- batch daily upload mechanism (git add / git commit / git push / git merge once per day, from folder of approved markdown recipe files)
- pipeline