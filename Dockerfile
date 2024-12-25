FROM ruby:2.5.9
RUN mkdir /myapp
WORKDIR /myapp
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs
COPY Gemfile Gemfile.lock /myapp/
RUN /usr/local/bin/bundle
