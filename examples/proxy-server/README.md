# Go Proxy

[![Discord](https://img.shields.io/discord/1135330207960678410?style=flat&color=5865F2)](https://discord.gg/scalar)

The Readyapi Proxy redirects requests to another server to avoid CORS issues. It’s made to work well with the Readyapi API Client.

## Usage

### Requirements

- [Go](https://go.dev/)

### Run

```bash
go run main.go
```

```
2024/05/08 10:49:59 🥤 Proxy Server listening on http://localhost:1337
```

### Example

```
curl --request GET \
     --url 'localhost:1337?scalar_url=https%3A%2F%2Fgalaxy.readyapi.khulnasoft.com%2Fplanets'
```

```json
{
  "data": [
    {
      "id": 1,
      "name": "Mars",
      "description": "The red planet",
      "image": "https://cdn.scalar.com/photos/mars.jpg",
      "creator": {
        "id": 1,
        "name": "Marc",
        "email": "marc@khulnasoft.com"
      }
    }
  ],
  "meta": {
    "limit": 10,
    "offset": 0,
    "total": 100,
    "next": "/planets?limit=10&offset=10"
  }
}
```

> Yo, there’s no mod file.

You’re so right! We’re using the standard libraries. Isn’t that why we all love Go? Anyway, we just don’t need a mod file. :)

## License

The source code in this repository is licensed under [MIT](https://github.com/khulnasoft/readyapi.js/blob/main/LICENSE).
