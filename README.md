# Enviroment

- Node - `v14.15.0`

# Dev start

```shell
$ npm run dev
```

# After Build Start

```shell
$ npm run start
```

# Build

## Development

```shell
$ npm run build:dev
```

## Staging

```shell
$ npm run build:stg
```

## Production

```shell
$ npm run build:prod
```

## Bundle Analyze

```shell
$ npm run build:anlz
```

# StoryBook

## Local Start

```shell
$ npm run storybook
```

## Build

```shell
$ npm run storybook:build
```

# Test

```shell
$ npm run test
```

# Lint

```shell
$ npm run lint
```

```shell
$ npm run lint:fix
```

# Pre Commit(Git commit hook)

```shell
$ npm run pre-commit
```

## nvm or volta 사용시 husky local setting

### .huskyrc 파일 생성

```shell
$ vi ~/.huskyrc
```

#### nvm

```bash
# .huskyrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

#### volta

```bash
# .huskyrc
export VOLTA_HOME=“$HOME/.volta”
export PATH=“$VOLTA_HOME/bin:$PATH”
```

# Docker

## Image Build

- BUILD_STAGE : 스테이지 인수(dev, stg, prod)

```shell
$ ./docker-build {BUILD_STAGE}
```

### Ex)

```shell
$ ./docker-build dev
```

## Container Run

- IMAGE_STAGE : 스테이지 인수(dev, stg, prod)
- PORT : 어플리케이션 맵핑 포트

```shell
$ ./docker-run {IMAGE_STAGE} {PORT}
```

### Ex)

```shell
$ ./docker-run dev 3010
```

# Example

## Todo

http://localhost:3010/todo

## Redux Persist

http://localhost:3010/persist-exam
