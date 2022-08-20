FROM ruby:2.5.1
RUN mkdir /myapp
WORKDIR /myapp
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && apt-get install -y nodejs
COPY Gemfile Gemfile.lock /myapp/
RUN /usr/local/bin/bundle
