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